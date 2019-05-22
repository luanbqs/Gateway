import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import service from '../services/service'




export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mensagem: 'oi'
        }

    }

    teste = async () => {
        const { data } = await service.post("/teste");
        console.log('data', data)
    }


    componentDidMount() {
        this.teste()
    }
    
    render() {
        return (
            <div >
                {this.state.mensagem}
            </div>
        )
    }
}