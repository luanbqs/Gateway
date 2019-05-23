from app import db
from app.models.users.users import *

import sqlalchemy

class userDAO:
    
    def __init__(self):
        pass

    def create(self, username, type, password,name,email):

        user = User(username,type,password,name,email)
        db.session.add(user)
        db.session.commit()

        return {"nome":user.name, "username": user.username}

    def delete(self, id):

        user = User.query.get(id)
        c = db.session.delete(user)
        db.session.commit()

        return c
    