from app import *
from app.models.event.utils.eventDAO import *
from app import db
from sqlalchemy import text, update
import sqlalchemy
import copy


from flask import jsonify, request


@app.endpoint('/create-event')
def index():
    try:
        content = request.get_json(silent=True)
        print('----------->', content)
        eDAO = eventDAO()

        response = eDAO.create(
            content['name'], content['local'], content['date'])

        return jsonify({
            "status": True,
            "mensagem": "Evento criado",
            "payload": response
        })

    except Exception as error:
        return jsonify({
            "status": False,
            "mensagem": "Problema ao criar evento",
            "payload": error.args
        })


@app.endpoint('/search-event')
def index():
    try:
        content = request.get_json(silent=True)
        conn = db.engine.connect()
        query = "select * from events "
        
        db_result = conn.execute(sqlalchemy.text(query)).fetchall()
        events = []

        for event in db_result:
            events.append({
                'name' :  event['name'],
                'local':  event['local'],
                'date' :  event['date'],
                'id'   :  event['id']
            })

        return jsonify({
            "status": True,
            "mensagem": "Evento criado",
            "payload": events
        })

    except Exception as error:
        return jsonify({
            "status": False,
            "mensagem": "Problema ao procurar evento",
            "payload": error.args
        })


@app.endpoint('/delet-event')
def index():
    try:
        content = request.get_json(silent=True)
        eDAO = eventDAO()

        response = eDAO.delete(content['id'])

        return jsonify({
            "status": True,
            "mensagem": "Evento criado",
            "payload": response
        })
    except Exception as error:
        return jsonify({
            "status": False,
            "mensagem": "Problema ao deletar evento",
            "payload": error.args
        })


@app.endpoint('/update-event')
def index():
    try:
        content = request.get_json(silent=True)
        eDAO = eventDAO()

        response = eDAO.create(
            content['name'], content['local'], content['date'])

        return jsonify({
            "status": True,
            "mensagem": "Evento criado",
            "payload": response
        })
    except Exception as error:
        return jsonify({
            "status": False,
            "mensagem": "Problema ao atualizar evento",
            "payload": error.args
        })
