import React, { Component } from 'react'
import ReactDOM from 'react-dom';

export default class Home extends Component {
    constructor() {
        super()
        this.state = {
        }

    }
    render() {
        const mostrarVariavel = 'Mostrando variavel na tela';
        return (
            <div >
                <head>
                    <title>
                        Teste
                    </title>
                </head>
                <h1>{mostrarVariavel}</h1>

          
                <img src="https://pbs.twimg.com/media/Dn83uJYWsAA5S0u.jpg" alt="vemprofut" width="200" height="200"></img>

            </div>
        )
    }
}