from app import db

class Guest(db.Model): 
    __tablename__ = "guests"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    email = db.Column(db.String, unique = True)
    event_id = db.Column(db.Integer, db.ForeignKey('events.id'))


    def __init__ (self, name, email, event_id):
        self.name = name
        self.email = email
        self.event_id = event_id

    def __repr__(self):
        return "<Post %r>" %self.name