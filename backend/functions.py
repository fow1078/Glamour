import random

def generate_ID():
    symbols = "1234567890" + "abcdefghijklmnopqrstuvwxyz" + "abcdefghijklmnopqrstuvwxyz".upper()
    id = ""
    while len(id) < 12:
        id += symbols[random.randint(0, len(symbols) - 1)]
    return id