import json

from flask import Flask, jsonify
from functions import generate_item_ID
from flask import request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
cors = CORS(app)

app.config['CORS_HEADERS'] = 'Content-Type'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///item.db'
app.config['SQLALCHEMY_BINDS'] = {'order': 'sqlite:///order.db'}
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class Item(db.Model):
    __tablename__ = 'clothes'
    
    id = db.Column(db.Integer, primary_key=True)
    itemID = db.Column(db.Integer, nullable=False)
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
    
class Order(db.Model):
    __bind_key__ = 'order'
    __tablename__ = 'order'
    
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.String(15), nullable=False)
    user_name = db.Column(db.String(110), nullable=False)
    lastname = db.Column(db.String(70), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    messenger = db.Column(db.String(15), nullable=False)
    phone_or_nickname = db.Column(db.String(100), nullable=False)
    country = db.Column(db.String(200), nullable=False)
    city = db.Column(db.String(200), nullable=False)
    address = db.Column(db.String(75), nullable=False)
    post_office_details = db.Column(db.String(200), nullable=False)
    post_index = db.Column(db.Integer, nullable=False)
    additional_comment = db.Column(db.String(1000))
    order_title = db.Column(db.String(10000), nullable=False)
    hidden_total__usd = db.Column(db.String(7), nullable=False)
    hidden_total__uah = db.Column(db.String(7), nullable=False)
    
    def __init__(self, order_id, user_name, lastname, email, messenger, phone_or_nickname, country, city, address, post_office_details, post_index, additional_comment, order_title, hidden_total__usd, hidden_total__uah):
        self.order_id = order_id
        self.user_name = user_name
        self.lastname = lastname
        self.email = email
        self.messenger = messenger
        self.phone_or_nickname = phone_or_nickname
        self.country = country
        self.city = city
        self.address = address
        self.post_office_details = post_office_details
        self.post_index = post_index
        self.additional_comment = additional_comment
        self.order_title = order_title
        self.hidden_total__usd = hidden_total__usd
        self.hidden_total__uah = hidden_total__uah


@app.route('/api/data', methods=['POST', 'OPTIONS', 'GET'])
def data():
    if request.method == 'OPTIONS':
        # Handle CORS preflight request
        response = jsonify({'message': 'CORS preflight request successful'})
        print(response)
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response

    if request.method == 'POST':
        data = request.get_json()
        print(data)
        
        string_sizes = ""
        for size in data['sizes']:
            string_sizes += size
            string_sizes += ", "
            
        string_images = ""
        for image in data['images']:
            string_images += image
            string_images += ", "
            
        item = Item(data['label'],
                    generate_item_ID(),
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
            return '0'
        
        except Exception as e:
            return str(e)


# @app.route('/api/data', methods=['POST', 'OPTIONS'])
# def get_data():
#     if request.method == 'OPTIONS':
#         response = jsonify({'message': 'CORS preflight request successful'})
#         response.headers.add('Access-Control-Allow-Methods', 'POST')
#         response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
#         return response

#     if request.method == 'POST':
#         data = json.loads(request.get_json())
#         print(data)
        
#         string_sizes = ""
#         for i in data['sizes']:
#             string_sizes += data['sizes'][i]
#             string_sizes += ", "
            
#         string_images = ""
#         for i in data['images']:
#             string_images += data['images'][i]
#             string_images += ", "
            
#         item = Item(data['label'],
#                     generate_item_ID(),
#                     json.loads(data['price'])['usd'],
#                     json.loads(data['price'])['uah'],
#                     data['description_UA'],
#                     data['description_EN'],
#                     data['slug'],
#                     string_sizes,
#                     string_images)
        
#         try:
#             db.session.add(item)
#             db.session.commit()
        
#         except Exception as e:
#             return str(e)