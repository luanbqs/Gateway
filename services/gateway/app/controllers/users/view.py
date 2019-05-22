from app import *

from flask import jsonify, request


@app.endpoint('/create-user')
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

@app.endpoint('/search-user')
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
        
@app.endpoint('/delet-user')
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

@app.endpoint('/update-user')
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
        