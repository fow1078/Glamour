# Other libraries imports
import datetime as dt
import pytz
import json 

# Flask imports
from flask import request, jsonify
from flask_cors import cross_origin
from flask.helpers import send_from_directory

# Directories imports
from backend.config import app, KEYS
from backend.db import db, Item, Order, Support
from backend.functions import generate_ID, upload_data_to_storage

# Fondy
from cloudipsp import Api, Checkout


@app.route('/api/data', methods=['POST', 'OPTIONS', 'GET'])
@cross_origin()
def data():
    if request.method == 'OPTIONS':
        response = jsonify({'message': 'CORS preflight request successful'})
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response

    if request.method == 'POST':
        data = request.get_json()
        
        string_sizes = ""
        for size in data['sizes']:
            string_sizes += size
            string_sizes += ", "
            
        string_images = ""
        for image in data['images']:
            string_images += image
            string_images += ", "
            
        item = Item(generate_ID(),
                    data['label'],
                    data['price']['usd'],
                    data['price']['uah'],
                    data['description_UA'],
                    data['description_EN'],
                    data['slug'],
                    string_sizes,
                    data['in_stock'],
                    string_images)
        
        try:
            db.session.add(item)
            db.session.commit()
            upload_data_to_storage(key=KEYS["KEY_ITEM"])
            return '200'
        
        except Exception as e:
            return str(e)
        

@app.route("/api/send_data", methods=['POST', 'OPTIONS', 'GET'])
@cross_origin()
def send_data():
    all_data = []
    data = Item.query.all()
    for el in data:
        all_data.append(json.dumps(el.toJSON()))
    return all_data


@app.route('/api/order_data', methods=['POST', 'OPTIONS', 'GET'])
@cross_origin()
def order_data():
    if request.method == 'OPTIONS':
        response = jsonify({'message': 'CORS preflight request successful'})
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response

    if request.method == 'POST':
        data = request.get_json()
        
        items = ""
        for i in data['cart_items']:
            items += i['name'] + ", " + i['size'] + ", " + str(i['amount']) + "; "

        dt_now = dt.datetime.now()
        kiev_timezone = pytz.timezone('Europe/Kiev')
        localized_time = kiev_timezone.localize(dt_now)
        formatted_time = localized_time.strftime("%Y-%m-%d %H:%M:%S")
            
        order = Order(data['order_id'],
                    data['email'],
                    data['country'],
                    data['first_name'],
                    data['last_name'],
                    data['address'],
                    data['address_details'],
                    data['city'],
                    data['postal_code'],
                    data['phone_number'],
                    data['price']['uah'],
                    data['price']['usd'],
                    items,
                    formatted_time)
        
        try:
            db.session.add(order)
            db.session.commit()
            upload_data_to_storage(KEYS["KEY_ORDER"])
            return '200'
        
        except Exception as e:
            return str(e)
        
        
@app.route("/api/send_order_data", methods=['POST', 'OPTIONS', 'GET'])
@cross_origin()
def send_order_data():
    all_data = []
    data = Order.query.all()
    for el in data:
        all_data.append(json.dumps(el.toJSON()))
    return all_data


@app.route("/api/send_telegram_order_data", methods=['POST', 'OPTIONS', 'GET'])
@cross_origin()
def send_telegram_order_data():
    all_data = []
    data = Order.query.all()
    for el in data:
        if (el.isChecked == True and el.isChecked_count == 0) or el.isChecked == False:
            el.isChecked = not el.isChecked
            el.isChecked_count += 1
        all_data.append(json.dumps(el.toJSON()))
    db.session.commit()
    upload_data_to_storage(KEYS["KEY_ORDER"])
    return all_data


@app.route('/api/support_data', methods=['POST', 'OPTIONS', 'GET'])
@cross_origin()
def support_data():
    if request.method == 'OPTIONS':
        response = jsonify({'message': 'CORS preflight request successful'})
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response

    if request.method == 'POST':
        data = request.get_json()

        dt_now = dt.datetime.now()
        kiev_timezone = pytz.timezone('Europe/Kiev')
        localized_time = kiev_timezone.localize(dt_now)
        formatted_time = localized_time.strftime("%Y-%m-%d %H:%M:%S")
            
        support = Support(data['full_name'],
                    data['email'],
                    data['phone_number'],
                    data['comment'],
                    formatted_time)
        
        try:
            db.session.add(support)
            db.session.commit()
            upload_data_to_storage(KEYS["KEY_SUPPORT"])
            return '200'
        
        except Exception as e:
            return str(e)
        
        
@app.route("/api/send_support_data", methods=['POST', 'OPTIONS', 'GET'])
@cross_origin()
def send_support_data():
    all_data = []
    data = Support.query.all()
    for el in data:
        all_data.append(json.dumps(el.toJSON()))
    return all_data


@app.route("/api/send_telegram_support_data", methods=['POST', 'OPTIONS', 'GET'])
@cross_origin()
def send_telegram_support_data():
    all_data = []
    data = Support.query.all()
    for el in data:
        if (el.isChecked == True and el.isChecked_count == 0) or el.isChecked == False:
            el.isChecked = not el.isChecked
            el.isChecked_count += 1
        all_data.append(json.dumps(el.toJSON()))
    db.session.commit()
    upload_data_to_storage(KEYS["KEY_SUPPORT"])
    return all_data


@app.route("/api/statistic_delete", methods=['POST', 'OPTIONS', 'GET'])
@cross_origin()
def statistic_delete():
    if request.method == 'OPTIONS':
        response = jsonify({'message': 'CORS preflight request successful'})
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response
    
    if request.method == 'POST':
        id = request.get_json()
        order = Order.query.filter_by(id=int(id['id'])).first()
        db.session.delete(order)
        i = 0
        order_edit = Order.query.all()
        for el in order_edit:
            i += 1
            el.id = i
        db.session.commit()
        upload_data_to_storage(KEYS["KEY_ORDER"])
        
    return '200'


@app.route("/api/reset_orders", methods=['POST', 'OPTIONS', 'GET'])
@cross_origin()
def reset_orders():
    if request.method == 'OPTIONS':
        response = jsonify({'message': 'CORS preflight request successful'})
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response
    
    if request.method == 'POST':
        order = Order.query.all()
        for el in order:
            db.session.delete(el)
        db.session.commit()
        upload_data_to_storage(KEYS["KEY_ORDER"])
    return '200'


@app.route("/api/reset_support", methods=['POST', 'OPTIONS', 'GET'])
@cross_origin()
def reset_supports():
    if request.method == 'OPTIONS':
        response = jsonify({'message': 'CORS preflight request successful'})
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response
    
    if request.method == 'POST':
        support = Support.query.all()
        for el in support:
            db.session.delete(el)
        db.session.commit()
        upload_data_to_storage(KEYS["KEY_SUPPORT"])
    return '200'


@app.route("/api/edit_delete", methods=['POST', 'OPTIONS', 'GET'])
@cross_origin()
def edit_delete():
    if request.method == 'OPTIONS':
        response = jsonify({'message': 'CORS preflight request successful'})
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response
    
    if request.method == 'POST':
        id = request.get_json()
        item = Item.query.filter_by(id=int(id['id'])).first()
        db.session.delete(item)
        i = 0
        item_edit = Item.query.all()
        for el in item_edit:
            i += 1
            el.id = i
        db.session.commit()
        upload_data_to_storage(KEYS["KEY_ITEM"])
    return '200'


@app.route("/api/edit_items", methods=['POST', 'OPTIONS', 'GET'])
@cross_origin()
def edit_items():
    if request.method == 'OPTIONS':
        response = jsonify({'message': 'CORS preflight request successful'})
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response
    
    if request.method == 'POST':
        item_data = request.get_json()
        item = Item.query.filter_by(id=item_data['id']).first()
        
        string_new_sizes = ""
        for size in item_data['sizes']:
            string_new_sizes += size
            string_new_sizes += ", "
                
        string_new_images = ""
        for image in item_data['images']:
            string_new_images += image
            string_new_images += ", "
        
        item.name = item_data['label']
        item.price_USD = item_data['price']['usd']
        item.price_UAH = item_data['price']['uah']
        item.description = item_data['description_UA']
        item.description_en = item_data['description_EN']
        item.slug = item_data['slug']
        item.sizes = string_new_sizes
        item.in_stock = item_data['in_stock']
        item.image = string_new_images
        
        db.session.commit()
        upload_data_to_storage(KEYS["KEY_ITEM"])
    
    return '200'


@app.route("/api/payment", methods=['POST', 'OPTIONS', 'GET'])
@cross_origin()
def payment():
    if request.method == 'OPTIONS':
        response = jsonify({'message': 'CORS preflight request successful'})
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response
    
    if request.method == 'POST':
        item_data = request.get_json()
        currency = item_data['currency']
        total_amount = item_data['total_amount']
        lang = item_data['lang']
        order_id = item_data['order_id']

        api = Api(merchant_id=1396424, secret_key='test')
        checkout = Checkout(api=api)
        data = {
            "order_id": order_id,
            "currency": f"{currency}",
            "amount": total_amount + "00",
            "response_url": "https://glamour-42ebc6e636b8.herokuapp.com/checkout/final",
            "lang": lang
        }
        url = checkout.url(data).get('checkout_url')
        return {"url": url}

        
@app.route('/')
@app.route('/catalog')
@app.route('/contact')
@app.route('/payment')
@app.route('/exchange')
@app.route('/privacy-policy')
@app.route('/z8d6Ta3H49iJb3S9AR6XtTpb/add-new')
@app.route('/z8d6Ta3H49iJb3S9AR6XtTpb/stats')
@app.route('/z8d6Ta3H49iJb3S9AR6XtTpb/edit')
@app.route('/checkout')
@cross_origin()
def routes(): 
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/z8d6Ta3H49iJb3S9AR6XtTpb/edit/<id>')
@app.route('/catalog/<id>')
@cross_origin()
def routes_id(id): 
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/checkout/final')
def route(): 
    return send_from_directory(app.static_folder, 'index.html')