from app import *

from flask import jsonify, request


@app.endpoint('/create-guest')
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
        return jsonify({
            "mensagem":"Tchau"
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
        
        