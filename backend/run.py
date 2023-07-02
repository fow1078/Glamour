import os 
import threading
from api import app, db

PORT = int(os.environ.get('PORT', 8080))

def run_flask():
    app.run(port=PORT, debug=False) #Изменить с true на false когда закончим
    
def run_telebot():
    os.system('python backend/bot.py')

if __name__ == "__main__":
    with app.app_context():         
        db.create_all()
        
    flask_thread = threading.Thread(target=run_flask)
    telebot_thread = threading.Thread(target=run_telebot)

    flask_thread.start()
    telebot_thread.start()

    flask_thread.join()
    telebot_thread.join()