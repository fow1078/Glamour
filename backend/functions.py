from backend.config import S3, BUCKET_NAME, LOCAL_PATH
import random


def generate_ID():
    symbols = "1234567890" + "abcdefghijklmnopqrstuvwxyz" + "abcdefghijklmnopqrstuvwxyz".upper()
    id = ""
    while len(id) < 12:
        id += symbols[random.randint(0, len(symbols) - 1)]
    return id


def get_data_from_storage(key):
    S3.download_file(BUCKET_NAME, key, f'{LOCAL_PATH}/{key}')
    return {"response": 200}


def upload_data_to_storage(key):
    print(f'{key}')
    S3.upload_file(f'{LOCAL_PATH}/{key}', BUCKET_NAME, key)
    return '200'