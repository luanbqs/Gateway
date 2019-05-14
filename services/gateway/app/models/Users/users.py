from app import db

class User(db.Model): 
    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique = True)
    password = db.Column(db.String)
    type = db.Column(db.Integer)
    name = db.Column(db.String)
    email = db.Column(db.String, unique = True)


    def __init__ (self, username, type, password, name, email):
        self.username = username
        self.password = password
        self.type = type
        self.name = name
        self.email = email

    def __repr__(self):
        return "<User %r>" %self.username