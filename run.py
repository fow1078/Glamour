import os 
import threading
import importlib
from backend.config import app, KEYS
from backend.functions import get_data_from_storage

PORT = int(os.environ.get('PORT', 8080))

def run_flask():
    app.run(port=PORT, debug=False)
    for key in KEYS:
        get_data_from_storage(KEYS[key])
    
def run_telebot():
    importlib.import_module('backend.bot')

if __name__ == "__main__":        
    flask_thread = threading.Thread(target=run_flask)
    telebot_thread = threading.Thread(target=run_telebot)

    flask_thread.start()
    telebot_thread.start()

    flask_thread.join()
    telebot_thread.join()