import boto3

from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

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

session = boto3.Session(
    aws_access_key_id='AKIAREGFUMRXNWNVM35E',
    aws_secret_access_key='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',
)

S3 = session.client('s3')
BUCKET_NAME = 'glamourbacket'

KEYS = {
    "KEY_ITEM": "item.db",
    "KEY_ORDER": "order.db",
    "KEY_SUPPORT": "support.db"
}

LOCAL_PATH = './backend'

import backend.db
import backend.api