from backend.config import db

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
    in_stock = db.Column(db.Boolean, nullable=False)
    image = db.Column(db.String(100000))
    
    def __init__(self, itemID, name, price_USD, price_UAH, description, description_en, slug, sizes, in_stock, image):
        self.itemID = itemID
        self.name = name
        self.price_USD = price_USD
        self.price_UAH = price_UAH
        self.description = description
        self.description_en = description_en
        self.slug = slug
        self.sizes = sizes
        self.in_stock = in_stock
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
            'in_stock': self.in_stock,
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
    date = db.Column(db.String(100), nullable=False)
    isChecked = db.Column(db.Boolean, nullable=True)
    isChecked_count = db.Column(db.Integer, nullable=False)
    
    def __init__(self, order_id, email, country, first_name, last_name, address, address_details, city, postal_code, phone_number, price_UAH, price_USD, items, date):
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
        self.date = date
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
            'date': self.date,
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
    date = db.Column(db.String(100), nullable=False)
    isChecked = db.Column(db.Boolean, nullable=True)
    isChecked_count = db.Column(db.Integer, nullable=False)
    
    def __init__(self, full_name, email, phone_number, comment, date):
        self.full_name = full_name
        self.email = email
        self.phone_number = phone_number
        self.comment = comment
        self.date = date
        self.isChecked = True
        self.isChecked_count = 0
        
    def toJSON(self):
        return {
            'full_name': self.full_name,
            'email': self.email,
            'phone_number': self.phone_number,
            'comment': self.comment,
            'date': self.date,
            'isChecked': self.isChecked,
            'isChecked_count': self.isChecked_count
        }