import random

def generate_item_ID():
    numbers = "1234567890"
    letters_lower_case = "abcdefghijklmnopqrstuvwxyz"
    letters_upper_case = letters_lower_case.upper()
    
    all_symbols = numbers + letters_lower_case + letters_upper_case
    item_ID = ""
    
    for i in range(12):
        item_ID += all_symbols[random.randint(0, len(all_symbols) - 1)]
    
    return item_ID