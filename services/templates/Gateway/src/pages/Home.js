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
            eventName: '',
            eventLocal: '',
            eventDate: '',
            page: 'Criar Evento'

        }
    }
    componentDidUpdate() {
        console.log('---->state', this.state)
    }
    // =============== UPDATE EVENT PROPS ===============

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
    // =============== UPDATE USER PROPS ===============

    updateUserName = (event) => {
        this.setState({
            eventName: event.target.value
        })
    }
    updateUserEmail = event => {
        this.setState({
            eventLocal: event.target.value
        })
    }
    updateUserEventName = event => {
        this.setState({
            eventDate: event.target.value
        })
    }
    // =============== Page navigation ===============

    listUser = () => {
        this.setState({
            page: 'Listar Usuarios'

        })
    }
    listEvent = () => {
        this.setState({
            page: 'Listar Eventos'
        })
    }
    creatEvent = () => {
        this.setState({
            page: 'Criar Evento'
        })
    }
    creatUser = () => {
        this.setState({
            page: 'Adicionar Convidados'

        })
    }

    render() {

        return (
            <div >
                <SideBar createUser={this.creatUser} creatEvent={this.creatEvent} listEvent={this.listEvent} listUser={this.listUser} />
                <div className="inner-container">
                    <div className="header" style={{ marginTop: '10px' }}>{this.state.page}</div>

                    <div style={{ marginLeft: '20%', display: 'flex', justifyContent: 'flex-start', flexDirection: 'row' }}>
                        {
                            this.state.page === 'Criar Evento' &&
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
                        }
                        {
                            this.state.page === 'Adicionar Convidados' &&
                            <div className="input-group-panel" style={{ alignItems: 'center' }} >
                                <div style={{ marginTop: '30px' }} className="input-group-panel">
                                    <label htmlFor="username">Nome do convidado:</label>
                                    <input value={this.state.username} onChange={event => this.updateUserName(event)} className="login-input" type="text" name="username" placeholder="Usuário" />
                                </div>
                                <div style={{ marginTop: '30px' }} className="input-group-panel">
                                    <label htmlFor="username">Email:</label>
                                    <input value={this.state.username} onChange={event => this.updateUserEmail(event)} className="login-input" type="text" name="username" placeholder="Usuário" />
                                </div>
                                <div style={{ marginTop: '30px' }} className="input-group-panel">
                                    <label>Nome do evento</label>
                                    <select value={this.state.type} onChange={evt => this.updateUserEventName(evt)} className="login-input" name="cores">
                                        <option > </option>
                                        <option>Usuario</option>
                                        <option>Administrador</option>
                                    </select>
                                </div>
                                <button type="buttom" className="login-btn" onClick={this.submitLogin}>Cadastrar</button>
                            </div>

                        }

                    </div>
                </div>




            </div>
        )
    }
}