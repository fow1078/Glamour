import telebot
import requests
import json


TOKEN = '5862336139:AAGIhDXjNIOwzr-usk1VNOQgCbEJZ4mmJxM'
bot = telebot.TeleBot(TOKEN)


@bot.message_handler(commands=['start'])
def message(message):
    bot.send_message(message.chat.id, f"ChatID: {message.chat.id}\nЩоб подивитись всі команди, введіть \'/help\'")
    

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
    messages = requests.get('https://glamour-42ebc6e636b8.herokuapp.com/api/send_telegram_order_data').json()
    for msg in messages:
        msg = json.loads(msg)
        if msg['isChecked'] == False:
            bot.send_message(message.chat.id, f"НОВЕ ЗАМОВЛЕННЯ №{msg['order_id']}\n\nКому: {msg['first_name']} {msg['last_name']}\nE-mail: {msg['email']}\nНомер телефону: {msg['phone_number']}\nАдреса: {msg['address']}, {msg['address_details']}, {msg['city']}, {msg['country']}, {msg['postal_code']}\n\nЦіна: {msg['price_UAH']}₴ / {msg['price_USD']}$\nЗамовлення: {msg['items'][:-2]}")
        else:
            bot.send_message(message.chat.id, f"СТАРЕ ЗАМОВЛЕННЯ №{msg['order_id']}\n\nКому: {msg['first_name']} {msg['last_name']}\nE-mail: {msg['email']}\nНомер телефону: {msg['phone_number']}\nАдреса: {msg['address']}, {msg['address_details']}, {msg['city']}, {msg['country']}, {msg['postal_code']}\n\nЦіна: {msg['price_UAH']}₴ / {msg['price_USD']}$\nЗамовлення: {msg['items'][:-2]}")


@bot.message_handler(commands=['orderOld'])
def message(message):
    messages = requests.get('https://glamour-42ebc6e636b8.herokuapp.com/api/send_telegram_order_data').json()
    for msg in messages:
        msg = json.loads(msg)
        if msg['isChecked'] == True:
            bot.send_message(message.chat.id, f"СТАРЕ ЗАМОВЛЕННЯ №{msg['order_id']}\n\nКому: {msg['first_name']} {msg['last_name']}\nE-mail: {msg['email']}\nНомер телефону: {msg['phone_number']}\nАдреса: {msg['address']}, {msg['address_details']}, {msg['city']}, {msg['country']}, {msg['postal_code']}\n\nЦіна: {msg['price_UAH']}₴ / {msg['price_USD']}$\nЗамовлення: {msg['items'][:-2]}")


@bot.message_handler(commands=['orderNew'])
def message(message):
    messages = requests.get('https://glamour-42ebc6e636b8.herokuapp.com/api/send_telegram_order_data').json()
    for msg in messages:
        msg = json.loads(msg)
        if msg['isChecked'] == False:
            bot.send_message(message.chat.id, f"НОВЕ ЗАМОВЛЕННЯ №{msg['order_id']}\n\nКому: {msg['first_name']} {msg['last_name']}\nE-mail: {msg['email']}\nНомер телефону: {msg['phone_number']}\nАдреса: {msg['address']}, {msg['address_details']}, {msg['city']}, {msg['country']}, {msg['postal_code']}\n\nЦіна: {msg['price_UAH']}₴ / {msg['price_USD']}$\nЗамовлення: {msg['items'][:-2]}")
        

@bot.message_handler(commands=['supportAll'])
def message(message):
    messages = requests.get('https://glamour-42ebc6e636b8.herokuapp.com/api/send_telegram_support_data').json()
    for msg in messages:
        msg = json.loads(msg)
        if msg['isChecked'] == False:
            bot.send_message(message.chat.id, f"НОВЕ ПОВІДОМЛЕННЯ\n\nВід: {msg['full_name']}\nE-mail: {msg['email']}\nНомер телефону: {msg['phone_number']}\n\nКоментар: {msg['comment'].strip()}")
        else:
            bot.send_message(message.chat.id, f"СТАРЕ ПОВІДОМЛЕННЯ\n\nВід: {msg['full_name']}\nE-mail: {msg['email']}\nНомер телефону: {msg['phone_number']}\n\nКоментар: {msg['comment'].strip()}")


@bot.message_handler(commands=['supportOld'])
def message(message):
    messages = requests.get('https://glamour-42ebc6e636b8.herokuapp.com/api/send_telegram_support_data').json()
    for msg in messages:
        msg = json.loads(msg)
        if msg['isChecked'] == True:
            bot.send_message(message.chat.id, f"СТАРЕ ПОВІДОМЛЕННЯ\n\nВід: {msg['full_name']}\nE-mail: {msg['email']}\nНомер телефону: {msg['phone_number']}\n\nКоментар: {msg['comment'].strip()}")


@bot.message_handler(commands=['supportNew'])
def message(message):
    messages = requests.get('https://glamour-42ebc6e636b8.herokuapp.com/api/send_telegram_support_data').json()
    for msg in messages:
        msg = json.loads(msg)
        if msg['isChecked'] == False:
            bot.send_message(message.chat.id, f"НОВЕ ПОВІДОМЛЕННЯ\n\nВід: {msg['full_name']}\nE-mail: {msg['email']}\nНомер телефону: {msg['phone_number']}\n\nКоментар: {msg['comment'].strip()}")  
            
bot.infinity_polling()