import os 
from main import app, db

PORT = int(os.environ.get('PORT', 8080))
if __name__ == "__main__":
    with app.app_context():         
        db.create_all()
    app.run(host='0.0.0.0', port=PORT, debug=False) #Изменить с true на false когда закончим