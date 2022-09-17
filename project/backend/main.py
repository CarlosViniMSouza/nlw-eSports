import os


import os
from flask import Flask
from dotenv import load_dotenv

# for application
app = Flask(__name__)

# for enviroment venv
load_dotenv()
name = os.getenv("FLASK_NAME")
env = os.getenv("FLASK_ENV")


@app.route("/")
def root():
    return "<p> Server Flask operating </p>"


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5555, debug=True)
