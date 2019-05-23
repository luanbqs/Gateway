import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import service from '../services/service'
import SideBar from '../components/sideBar'
import './Login.css'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderA: 'A',
            renderB: 'B',
            setAB: 'A',
            eventName:'',
            eventLocal:'',
            eventDate:''



        }
    }

    componentDidUpdate() {
        console.log('---->state',this.state)

    }

    updateEventName = (event) => {
        this.setState({
            eventName: event.target.value
        })
    }

    updateEventLocal = event => {
        this.setState({
            eventLocal: event.target.value
        })
    }

    updateEventDate = event => {
        this.setState({
            eventDate: event.target.value
        })
    }

    render() {

        return (
            <div >
                <SideBar />
                <div className="inner-container">
                    <div className="header" style={{marginTop:'10px'}}>Cadastrar evento</div>

                    <div style={{ marginLeft: '20%', display: 'flex', justifyContent: 'flex-start', flexDirection: 'row' }}>
                        {
                            this.state.setAB == 'A' ?
                                <div className="input-group-panel" style={{ alignItems: 'center' }} >
                                    <div style={{ marginTop: '30px' }} className="input-group-panel">
                                        <label htmlFor="username">Nome do evento:</label>
                                        <input value={this.state.username} onChange={event => this.updateEventName(event)} className="login-input" type="text" name="username" placeholder="Usuário" />
                                    </div>
                                    <div style={{ marginTop: '30px' }} className="input-group-panel">
                                        <label htmlFor="username">Local do evento:</label>
                                        <input value={this.state.username} onChange={event => this.updateEventLocal(event)} className="login-input" type="text" name="username" placeholder="Usuário" />
                                    </div>
                                    <div style={{ marginTop: '30px' }} className="input-group-panel">
                                        <label htmlFor="username">Data do evento:</label>
                                        <input value={this.state.username} onChange={event => this.updateEventDate(event)} className="login-input" type="text" name="username" placeholder="Usuário" />
                                    </div>
                                    <button type="buttom" className="login-btn" onClick={this.submitLogin}>Cadastrar</button>

                                </div>

                                :
                                <div>
                                    {this.state.renderB}
                                </div>
                        }
                    </div>
                </div>




            </div>
        )
    }
}