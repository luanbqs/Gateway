from app import db
from app.models.event.events import *

import sqlalchemy

class eventDAO:
    
    def __init__(self):
        pass

    def create(self, name, local, date):

        event = Event(name, local, date)
        db.session.add(event)
        db.session.commit()

        return {"nome":event.name, "local": event.local}

    def delete(self, id):

        event = Event.query.get(id)
        c = db.session.delete(event)
        db.session.commit()

        return c
    
