from backend.config import S3, BUCKET_NAME, LOCAL_PATH
import random


def generate_ID():
    symbols = "1234567890" + "abcdefghijklmnopqrstuvwxyz" + "abcdefghijklmnopqrstuvwxyz".upper()
    id = ""
    while len(id) < 12:
        id += symbols[random.randint(0, len(symbols) - 1)]
    return id


def get_data_from_storage(key):
    response = S3.get_object(Bucket=BUCKET_NAME, Key=key)
    print(response)
    S3.download_file(BUCKET_NAME, key, key)
    return {"response": 200}


def upload_data_to_storage(key):
    print(f'./{key}')
    S3.upload_file(f'./{key}', BUCKET_NAME)
    return '200'