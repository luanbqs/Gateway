from app import db

class Guest(db.Model): 
    __tablename__ = "guests"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String, unique = True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    host = db.relationship('User', foreign_keys = user_id)


    def __init__ (self, name, email, user_id):
        self.name = name
        self.email = emails
        self.user_id = user_id

    def __repr__(self):
        return "<Post %r>" %self.name

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