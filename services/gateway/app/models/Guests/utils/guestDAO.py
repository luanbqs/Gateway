from app import db
from app.models.categoria.Categoria import * 
from app.models.guests.guests import *

import sqlalchemy

class eventDAO:
    
    def __init__(self):
        pass

    def create(self, name, email, event_id):

        guest = Guest(name ,email, event_id)
        db.session.add(event)
        db.session.commit()

        return {"nome":guest.name, "email": guest.email}

    def delete(self, id):

        guest = Guest.query.get(id)
        c = db.session.delete(guest)
        db.session.commit()

        return c
    
