from app import *
from app.models.users.utils.userDAO import *
from flask import jsonify, request
from app import db
from sqlalchemy import text, update
import sqlalchemy, copy


@app.endpoint('/create-user')
def index():
    try:
        content = request.get_json(silent=True)

        uDAO = userDAO()
        response = uDAO.create(content['username'], content['type'],
                               content['password'], content['name'], content['email'])

        print('---------->', response)

        return jsonify({
            "status": True,
            "mensagem": "usuario criado",
            "payload": response
        })
    except Exception as error:
        print('ENTROU NO ERRO')
        return jsonify({
            "status": False,
            "payload": error.args
        })


@app.endpoint('/search-user')
def index():
    try:
        content = request.get_json(silent=True)
        username = content['username']
        password = content['password']
        conn = db.engine.connect()
        query = "select id from users where username =:username and password =:password "
        db_result = conn.execute(sqlalchemy.text(query),username=username ,password=password).fetchone()
        print('db_result',db_result)
        if db_result != None:
            print('entrou no sucesso')

            return jsonify({
                "status":True,
                "mensagem": "Usuario Logado com sucesso"
            })
        else:
            print('entrou no erro')
            return jsonify({
                "status":False,
                "mensagem": "Usuario ou senha incorretos"
            })

    except Exception as error:
        print('entrou no excption',error)
        
        return jsonify({
            "status": False,
            "payload": error.args
        })


@app.endpoint('/delet-user')
def index():
    try:
        content = request.get_json(silent=True)
        uDAO = userDAO()
        response = uDAO.delete(content['id'])

        return jsonify({
            "mensagem": "Tchau"
        })
    except Exception as error:
        return jsonify({
            "status": False,
            "payload": error.args
        })


@app.endpoint('/update-user')
def index():
    try:
        return jsonify({
            "mensagem": "Tchau"
        })
    except Exception as error:
        return jsonify({
            "status": False,
            "payload": error.args
        })
