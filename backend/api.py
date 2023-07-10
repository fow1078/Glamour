import json

from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from flask.helpers import send_from_directory
from flask_sqlalchemy import SQLAlchemy
from backend.functions import generate_ID

app = Flask(__name__, static_folder="../dist", static_url_path="")
cors = CORS(app)

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
    items = db.Column(db.String(1000), nullable=False)
    isChecked = db.Column(db.Boolean, nullable=True)
    isChecked_count = db.Column(db.Integer, nullable=False)
    
    def __init__(self, order_id, email, country, first_name, last_name, address, address_details, city, postal_code, phone_number, price_UAH, price_USD, items):
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
        self.items = items
        self.isChecked = True
        self.isChecked_count = 0
        
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
            'price_USD': self.price_USD,
            'items': self.items,
            'isChecked': self.isChecked,
            'isChecked_count': self.isChecked_count
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
    isChecked_count = db.Column(db.Integer, nullable=False)
    
    def __init__(self, full_name, email, phone_number, comment):
        self.full_name = full_name
        self.email = email
        self.phone_number = phone_number
        self.comment = comment
        self.isChecked = True
        self.isChecked_count = 0
        
    def toJSON(self):
        return {
            'full_name': self.full_name,
            'email': self.email,
            'phone_number': self.phone_number,
            'comment': self.comment,
            'isChecked': self.isChecked,
            'isChecked_count': self.isChecked_count
        }


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
                    string_images)
        
        try:
            db.session.add(item)
            db.session.commit()
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
                    data['price']['usd'],
                    items)
        
        try:
            db.session.add(order)
            db.session.commit()
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
        item.image = string_new_images
        
        db.session.commit()
    return '200'
        
        
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
@app.route('/checkout/final')
@cross_origin()
def routes(): 
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/z8d6Ta3H49iJb3S9AR6XtTpb/edit/<id>')
@app.route('/catalog/<id>')
@cross_origin()
def routes_id(id): 
    return send_from_directory(app.static_folder, 'index.html')