import random
import json

def generate_ID():
    numbers = "1234567890"
    letters_lower_case = "abcdefghijklmnopqrstuvwxyz"
    letters_upper_case = letters_lower_case.upper()
    
    all_symbols = numbers + letters_lower_case + letters_upper_case
    id = ""
    
    for i in range(12):
        id += all_symbols[random.randint(0, len(all_symbols) - 1)]
    
    return id

def return_telegram_db_data(DB, data_base):
    all_data = []
    data = DB.query.all()
    for el in data:
        if (el.isChecked == True and el.isChecked_count == 0) or el.isChecked == False:
            el.isChecked = not el.isChecked
            el.isChecked_count += 1
        all_data.append(json.dumps(el.toJSON()))
    data_base.session.commit()
    return all_data

def return_db_data(DB):
    all_data = []
    data = DB.query.order_by(DB.id).all()
    for i in data:
        all_data.append(json.dumps(i.toJSON()))
    return all_data