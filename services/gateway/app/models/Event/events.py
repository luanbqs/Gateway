from app import db

class Event(db.Model): 
    __tablename__ = "events"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    local = db.Column(db.String)
    date = db.Column(db.String)


    def __init__ (self, name, local, date):
        self.name = name
        self.local = local
        self.date = date

    def __repr__(self):
        return "<Post %r>" %self.name