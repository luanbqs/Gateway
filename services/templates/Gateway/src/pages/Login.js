import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import './Login.css'
import service from '../services/service'


export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoginOpen: true,
            isRegisterOpen: false,
            isHomeOpen: true,
            isAbouUsOpen: false,
            isContactOpen: false,
            pageAdress: '/home'

        }
    }
    changePageAdress = () => {
        this.props.history.push(this.state.pageAdress)
    }
    

    showRegisterBox = () => {
        this.setState({ isRegisterOpen: true, isLoginOpen: false })

    }
    showLoginBox = () => {
        this.setState({ isLoginOpen: true, isRegisterOpen: false })
    }
    showHomePage = () => {
        this.setState({ isHomeOpen: true, isAbouUsOpen: false, isContactOpen: false })
    }
    showAboutUsPage = () => {
        this.props.history.push('/AboutUs')
        this.setState({ isHomeOpen: false, isAbouUsOpen: true, isContactOpen: false })
    }
    showContactPage() {
        this.setState({ isHomeOpen: false, isAbouUsOpen: false, isContactOpen: true })
    }
    render() {
        return (
            <div>


                <div class="container">
                    <div class="row justify-content-md-center">
                        <div class="col col-sm-2">
                            <div className={"controller " + (this.state.isHomeOpen ? "selected-controller" : "")} onClick={this.showHomePage.bind(this)}>
                                Home
                            </div>
                        </div>
                        <div class="col col-sm-2">
                            <div className={"controller " + (this.state.isAbouUsOpen ? "selected-controller" : "")} onClick={this.showAboutUsPage.bind(this)}>
                                Quem somos
                            </div >
                        </div>
                        <div class="col col-sm-2">
                            <div className={"controller " + (this.state.isContactOpen ? "selected-controller" : "")} onClick={this.showContactPage.bind(this)}>
                                Contato
                            </div>
                        </div>
                    </div>
                </div>


                <div className="root-container">

                    <div className="box-controller">

                        <div className={"controller " + (this.state.isLoginOpen ? "selected-controller" : "")} onClick={this.showLoginBox.bind(this)}>
                            Login

                        </div>
                        <div className={"controller " + (this.state.isRegisterOpen ? "selected-controller" : "")} onClick={this.showRegisterBox.bind(this)}>
                            Registrar

                        </div>
                    </div>

                    <div className="box-container">
                        {this.state.isLoginOpen && <LoginBox triggerChangePageAdress={this.changePageAdress} />}
                        {this.state.isRegisterOpen && <RegisterBox />}
                    </div>
                </div>
            </div>

        )
    }
}

class LoginBox extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    submitLogin = () => {
        this.props.history.push('/AboutUs')
    }

    render() {
        return (
            <div className="inner-container">
                <div className="header">Login</div>
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="username">Usuário</label>
                        <input className="login-input" type="text" name="username" placeholder="Usuário" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Senha</label>
                        <input className="login-input" type="password" name="password" placeholder="Senha" />
                    </div>
                    <form>
                        <label>
                            Salvar senha
                        <input type="checkbox" name="savePswd" />
                        </label>
                    </form>
                    <button type="buttom" className="login-btn" onClick={this.props.triggerChangePageAdress}>Login</button>

                </div>
            </div>
        )
    }
}

class RegisterBox extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    submitRegister(e) {

    }

    render() {
        return (
            <div className="inner-container">
                <div className="header">Registrar

                </div>
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input className="login-input" type="text" name="username" placeholder="Usuario" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="username">Email</label>
                        <input className="login-input" type="text" name="username" placeholder="Usuario" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Senha</label>
                        <input className="login-input" type="password" name="password" placeholder="Senha" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirmar senha</label>
                        <input className="login-input" type="password" name="password" placeholder="Senha" />
                    </div>

                    <select className="login-input" name="cores">
                        <option>Usuario</option>
                        <option>Administrador</option>
                    </select>

                    <button type="buttom" className="login-btn" onClick={this.submitRegister.bind(this)}>Registrar</button>

                </div>
            </div>
        )
    }


}