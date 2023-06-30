from flask import Flask
from flask import jsonify
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/api/data')
def get_data():
    data = {'message': 'This is the data from the backend'}
    return jsonify(data)


if __name__ == '__main__':
    app.run(port=8080)