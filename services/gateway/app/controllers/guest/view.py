from app import *
from app.models.guests.utils.guestDAO import *
from flask import jsonify, request


@app.endpoint('/create-guest')
def index():
    try:
        content = request.get_json(silent=True)

        gDAO = guestDAO()
        response = gDAO.create(content['name'],content['email'],content['event_id'])
        return jsonify({
            "status": True,
            "mensagem": "convidado criado",
            "payload": response
        })

    except Exception as error:
        return jsonify({
            "status":False,
            "payload":error.args
        })

@app.endpoint('/search-guest')
def index():
    try:
        return jsonify({
            "mensagem":"Tchau"
        })
    except Exception as error:
        return jsonify({
            "status":False,
            "payload":error.args
        })
        
@app.endpoint('/delet-guest')
def index():
    try:
        content = request.get_json(silent=True)
        gDAO = guestDAO()
        response = gDAO.delete(content['id'])

        return jsonify({
            "status": True,
            "mensagem": "convidado deletado",
            "payload": response
        })
    except Exception as error:
        return jsonify({
            "status":False,
            "payload":error.args
        })

@app.endpoint('/update-guest')
def index():
    try:
        return jsonify({
            "mensagem":"Tchau"
        })
    except Exception as error:
        return jsonify({
            "status":False,
            "payload":error.args
        })
        
        