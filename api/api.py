import json

from flask import jsonify
from main import app, db
from db import Item, Order
from functions import generate_item_ID
from flask import request

@app.route('/api/get_data', methods=['POST', 'OPTIONS'])
def get_data():
    if request.method == 'OPTIONS':
        response = jsonify({'message': 'CORS preflight request successful'})
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response

    if request.method == 'POST':
        data = json.loads(request.get_json())
        
        string_sizes = ""
        for i in data['sizes']:
            string_sizes += data['sizes'][i]
            string_sizes += ", "
            
        string_images = ""
        for i in data['images']:
            string_images += data['images'][i]
            string_images += ", "
            
        item = Item(data['label'],
                    generate_item_ID(),
                    json.loads(data['price'])['usd'],
                    json.loads(data['price'])['uah'],
                    data['description_UA'],
                    data['description_EN'],
                    data['slug'],
                    string_sizes,
                    string_images)
        
        try:
            db.session.add(item)
            db.session.commit()
        
        except Exception as e:
            return str(e)