import telebot
import requests
from backend.api import db, bot, TOKEN, Order, Support

with open('backend/Pictures/bot_pict.jpeg', 'rb') as photo:
    response = requests.post(
        url=f'https://api.telegram.org/bot{TOKEN}/setMyProfilePhoto',
        files={'photo': photo}
    )
    
    if response.status_code == 200:
        print('Profile picture set successfully!')
    else:
        print('Failed to set profile picture:', response.text)


@bot.message_handler(commands=['start'])
def message(message):
    bot.send_message(message.chat.id, f"ChatID: {message.chat.id}\n\n Щоб подивитись всі команди, введіть \'/help\'")
    

@bot.message_handler(commands=['help'])
def message(message):
    bot.send_message(message.chat.id, "КОМАНДИ\n\n\'/help\' - передивитися всі команди\n\'/clear\' - очистити чат\n\'/orderAll\' - передивитися всі замовлення\n\'/orderOld\' - передивитися старі замовлення\n\'/orderNew\' - передивитися нові замовлення\n\'/supportAll\' - передивитися всі відгуки та коментарі\n\'/supportOld\' - передивитися старі відгуки та коментарі\n\'/supportNew\' - передивитися нові відгуки та коментарі\n")
    

@bot.message_handler(commands=['clear'])
def message(message):
    for i in range(message.message_id):
        try:
            bot.delete_message(message.chat.id, i)
        except telebot.apihelper.ApiException:
            pass
    
    
@bot.message_handler(commands=['orderAll'])
def message(message):
    messages = Order.query.order_by(Order.id).all()
    for msg in messages:
        if msg.isChecked == False:
            bot.send_message(message.chat.id, f"НОВЕ ЗАМОВЛЕННЯ №{msg.order_id}\n\nКому: {msg.first_name} {msg.last_name}\nE-mail: {msg.email}\nНомер телефону: {msg.phone_number}\nАдреса: {msg.address}, {msg.address_details}, {msg.city}, {msg.country}, {msg.postal_code}\n\nЦіна: {msg.price_UAH}₴ / {msg.price_USD}$\nЗамовлення: {msg.items[:-2]} ")
            db.session.query(Order).filter_by(id=msg.id).first().isChecked = True
            db.session.commit()
        else:
            bot.send_message(message.chat.id, f"СТАРЕ ЗАМОВЛЕННЯ №{msg.order_id}\n\nКому: {msg.first_name} {msg.last_name}\nE-mail: {msg.email}\nНомер телефону: {msg.phone_number}\nАдреса: {msg.address}, {msg.address_details}, {msg.city}, {msg.country}, {msg.postal_code}\n\nЦіна: {msg.price_UAH}₴ / {msg.price_USD}$\nЗамовлення: {msg.items[:-2]}")


@bot.message_handler(commands=['orderOld'])
def message(message):
    messages = Order.query.order_by(Order.id).all()
    for msg in messages:
        if msg.isChecked == True:
            bot.send_message(message.chat.id, f"СТАРЕ ЗАМОВЛЕННЯ №{msg.order_id}\n\nКому: {msg.first_name} {msg.last_name}\nE-mail: {msg.email}\nНомер телефону: {msg.phone_number}\nАдреса: {msg.address}, {msg.address_details}, {msg.city}, {msg.country}, {msg.postal_code}\n\nЦіна: {msg.price_UAH}₴ / {msg.price_USD}$\nЗамовлення: {msg.items[:-2]}")


@bot.message_handler(commands=['orderNew'])
def message(message):
    messages = Order.query.order_by(Order.id).all()
    for msg in messages:
        if msg.isChecked == False:
            bot.send_message(message.chat.id, f"НОВЕ ЗАМОВЛЕННЯ №{msg.order_id}\n\nКому: {msg.first_name} {msg.last_name}\nE-mail: {msg.email}\nНомер телефону: {msg.phone_number}\nАдреса: {msg.address}, {msg.address_details}, {msg.city}, {msg.country}, {msg.postal_code}\n\nЦіна: {msg.price_UAH}₴ / {msg.price_USD}$\nЗамовлення: {msg.items[:-2]}")
            db.session.query(Order).filter_by(id=msg.id).first().isChecked = True
            db.session.commit()
        

@bot.message_handler(commands=['supportAll'])
def message(message):
    messages = Support.query.order_by(Support.id).all()
    for msg in messages:
        if msg.isChecked == False:
            bot.send_message(message.chat.id, f"НОВЕ ПОВІДОМЛЕННЯ\n\nВід: {msg.full_name}\nE-mail: {msg.email}\nНомер телефону: {msg.phone_number}\n\nКоментар: {msg.comment}")
            db.session.query(Support).filter_by(id=msg.id).first().isChecked = True
            db.session.commit()
        else:
            bot.send_message(message.chat.id, f"СТАРЕ ПОВІДОМЛЕННЯ\n\nВід: {msg.full_name}\nE-mail: {msg.email}\nНомер телефону: {msg.phone_number}\n\nКоментар: {msg.comment}")


@bot.message_handler(commands=['supportOld'])
def message(message):
    messages = Support.query.order_by(Support.id).all()
    for msg in messages:
        if msg.isChecked == True:
            bot.send_message(message.chat.id, f"СТАРЕ ПОВІДОМЛЕННЯ\n\nВід: {msg.full_name}\nE-mail: {msg.email}\nНомер телефону: {msg.phone_number}\n\nКоментар: {msg.comment}")


@bot.message_handler(commands=['supportNew'])
def message(message):
    messages = Support.query.order_by(Support.id).all()
    for msg in messages:
        if msg.isChecked == False:
            bot.send_message(message.chat.id, f"НОВЕ ПОВІДОМЛЕННЯ\n\nВід: {msg.full_name}\nE-mail: {msg.email}\nНомер телефону: {msg.phone_number}\n\nКоментар: {msg.comment}")
            db.session.query(Support).filter_by(id=msg.id).first().isChecked = True
            db.session.commit()
            
            
bot.infinity_polling()