import json
import telebot

from flask import Flask, jsonify
from functions import generate_ID
from flask import request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

TOKEN = '5862336139:AAGIhDXjNIOwzr-usk1VNOQgCbEJZ4mmJxM'
chat_id = 0

app = Flask(__name__)
cors = CORS(app)
bot = telebot.TeleBot(TOKEN)

app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///item.db'
app.config['SQLALCHEMY_BINDS'] = {
    'order': 'sqlite:///order.db',
    'support': 'sqlite:///support.db'
    }
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

class Item(db.Model):
    __tablename__ = 'clothes'
    
    id = db.Column(db.Integer, primary_key=True)
    itemID = db.Column(db.String(100), nullable=False)
    name = db.Column(db.String(100), nullable=False)
    price_USD = db.Column(db.Integer, nullable=False)
    price_UAH = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(1000), nullable=False)
    description_en = db.Column(db.String(1000), nullable=False)
    slug = db.Column(db.String(100), index=True)
    sizes = db.Column(db.String(30))
    image = db.Column(db.String(100000))
    
    def __init__(self, itemID, name, price_USD, price_UAH, description, description_en, slug, sizes, image):
        self.itemID = itemID
        self.name = name
        self.price_USD = price_USD
        self.price_UAH = price_UAH
        self.description = description
        self.description_en = description_en
        self.slug = slug
        self.sizes = sizes
        self.image = image
    
    def toJSON(self):
        return {
            'id': self.id,
            'itemID': self.itemID,
            'name': self.name,
            'price_USD': self.price_USD,
            'price_UAH': self.price_UAH,
            'description': self.description,
            'description_en': self.description_en,
            'slug': self.slug,
            'sizes': self.sizes,
            'image': self.image
        }
    
class Order(db.Model):
    __bind_key__ = 'order'
    __tablename__ = 'order'
    
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.String(15), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    country = db.Column(db.String(200), nullable=False)
    first_name = db.Column(db.String(110), nullable=False)
    last_name = db.Column(db.String(70), nullable=False)
    address = db.Column(db.String(75), nullable=False)
    address_details = db.Column(db.String(200), nullable=False)
    city = db.Column(db.String(200), nullable=False)
    postal_code = db.Column(db.Integer, nullable=False)
    phone_number = db.Column(db.String(100), nullable=False)
    price_UAH = db.Column(db.Integer, nullable=False)
    price_USD = db.Column(db.Integer, nullable=False)
    isChecked = db.Column(db.Boolean, nullable=True)
    
    def __init__(self, order_id, email, country, first_name, last_name, address, address_details, city, postal_code, phone_number, price_UAH, price_USD):
        self.order_id = order_id
        self.email = email
        self.country = country
        self.first_name = first_name
        self.last_name = last_name
        self.address = address
        self.address_details = address_details
        self.city = city
        self.postal_code = postal_code
        self.phone_number = phone_number
        self.price_UAH = price_UAH
        self.price_USD = price_USD
        self.isChecked = False
        
    def toJSON(self):
        return {
            'id': self.id,
            'order_id': self.order_id,
            'email': self.email,
            'country': self.country,
            'first_name': self.first_name,
            'last_name': self.last_name,
            'address': self.address,
            'address_details': self.address_details,
            'city': self.city,
            'postal_code': self.postal_code,
            'phone_number': self.phone_number,
            'price_UAH': self.price_UAH,
            'price_USD': self.price_UAH,
            'isChecked': self.isChecked
        }

class Support(db.Model):
    __bind_key__ = 'support'
    __tablename__ = 'support'
    
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(200), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    phone_number = db.Column(db.String(100), nullable=False)
    comment = db.Column(db.String(100000), nullable=False)
    isChecked = db.Column(db.Boolean, nullable=True)
    
    def __init__(self, full_name, email, phone_number, comment):
        self.full_name = full_name
        self.email = email
        self.phone_number = phone_number
        self.comment = comment
        self.isChecked = False
        
    def toJSON(self):
        return {
            'full_name': self.full_name,
            'email': self.email,
            'phone_number': self.phone_number,
            'comment': self.comment,
            'isChecked': self.isChecked
        }


@app.route('/api/data', methods=['POST', 'OPTIONS', 'GET'])
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
                    string_images)
        
        try:
            db.session.add(item)
            db.session.commit()
            return '200'
        
        except Exception as e:
            return str(e)
        

@app.route("/api/send_data", methods=['POST', 'OPTIONS', 'GET'])
def send_data():
    all_data = []
    data = Item.query.order_by(Item.id).all()
    for i in data:
        all_data.append(json.dumps(i.toJSON()))
    return all_data


@app.route('/api/order_data', methods=['POST', 'OPTIONS', 'GET'])
def order_data():
    if request.method == 'OPTIONS':
        response = jsonify({'message': 'CORS preflight request successful'})
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response

    if request.method == 'POST':
        data = request.get_json()
            
        order = Order(generate_ID(),
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
                    data['price']['usd'])
        
        try:
            db.session.add(order)
            db.session.commit()
            return '200'
        
        except Exception as e:
            return str(e)
        
        
@app.route("/api/send_order_data", methods=['POST', 'OPTIONS', 'GET'])
def send_order_data():
    all_data = []
    data = Order.query.order_by(Order.id).all()
    for i in data:
        all_data.append(json.dumps(i.toJSON()))
    return all_data


@app.route('/api/support_data', methods=['POST', 'OPTIONS', 'GET'])
def support_data():
    if request.method == 'OPTIONS':
        response = jsonify({'message': 'CORS preflight request successful'})
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response

    if request.method == 'POST':
        data = request.get_json()
            
        support = Support(data['full_name'],
                    data['email'],
                    data['phone_number'],
                    data['comment'])
        
        try:
            db.session.add(support)
            db.session.commit()
            return '200'
        
        except Exception as e:
            return str(e)
        
        
@app.route("/api/send_support_data", methods=['POST', 'OPTIONS', 'GET'])
def send_support_data():
    all_data = []
    data = Support.query.order_by(Support.id).all()
    for i in data:
        all_data.append(json.dumps(i.toJSON()))
    return all_data