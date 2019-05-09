from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:itegra@localhost/Gateway'
db = SQLAlchemy(app)

from app.controllers import default

