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
    changePageAdress = async () => {
        this.props.history.push(this.state.pageAdress)
    }
    loadLogin = () => {
        console.log('chamou a funcao')
        this.setState({
            isLoginOpen: true,
            isRegisterOpen: false
        })
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


                <div className="info-container">

                    <div className={"controller " + (this.state.isHomeOpen ? "selected-controller" : "")} onClick={this.showHomePage.bind(this)}>
                        Home
                    </div>
                    <div className={"controller " + (this.state.isAbouUsOpen ? "selected-controller" : "")} onClick={this.showAboutUsPage.bind(this)}>
                        Quem somos
                    </div >
                    <div className={"controller " + (this.state.isContactOpen ? "selected-controller" : "")} onClick={this.showContactPage.bind(this)}>
                        Contato
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
                        {this.state.isRegisterOpen && <RegisterBox triggerBackToLogin={this.loadLogin} />}
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
            username: '',
            password: '',

        }
    }

    submitLogin = async () => {
        const {data} = await service.post('/search-user',{password:this.state.password, username: this.state.username})
        if(data.status === true){
            this.props.triggerChangePageAdress()
        }else{
            alert('Usuario ou senha incorreto!')
        }

    }
    updateName = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    updatePassword = event => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (
            <div className="inner-container">
                <div className="header">Login</div>
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="username">Usuário</label>
                        <input value={this.state.username} onChange={event => this.updateName(event)} className="login-input" type="text" name="username" placeholder="Usuário" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Senha</label>
                        <input value={this.state.password} onChange={event => this.updatePassword(event)} className="login-input" type="password" name="password" placeholder="Senha" />
                    </div>
                    <form>
                        <label>
                            Salvar senha
                        <input type="checkbox" name="savePswd" />
                        </label>
                    </form>
                    <button type="buttom" className="login-btn" onClick={this.submitLogin}>Login</button>

                </div>
            </div>
        )
    }
}

class RegisterBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            username: '',
            password: '',
            checkPassword: '',
            type: '',
            selectedType: ''


        }
    }
    submitRegister = async () => {

        if (this.state.password == '' || this.state.name == '' || this.state.checkPassword == '' || this.state.username == '' || this.state.type == '' || this.state.email == '') {
            alert('Preencha todos os campos')
            return;
        }
        if (this.state.password !== this.state.checkPassword) {
            alert('Senhas não coincidem')
            return;
        }
        const { data } = await service.post('/create-user', { username: this.state.username, name: this.state.name, type: this.state.selectedType, password: this.state.password, email: this.state.email })
        console.log(data)
        if (data.status == true) {
            alert('Usuario cadastrada com sucesso')
            this.props.triggerBackToLogin()
        }
        else {
            if (data.payload[0].includes('duplicate key')) {
                alert('Email ja cadastrado')
                return;
            }
        }

    }
    updateName(evt) {
        this.setState({
            name: evt.target.value
        });
    }
    updateEmail(evt) {
        this.setState({
            email: evt.target.value
        });
        console.log('----->email', this.state.email)

    }
    updateUsername(evt) {
        this.setState({
            username: evt.target.value
        });
    }
    updatePassword(evt) {
        this.setState({
            password: evt.target.value
        });
    }
    updateCheckPassword(evt) {
        this.setState({
            checkPassword: evt.target.value
        });
    }
    updateType(evt) {
        if (evt.target.value == 'Administrador') {
            this.setState({
                type: evt.target.value,
                selectedType: 1
            });
        } else {
            this.setState({
                type: evt.target.value,
                selectedType: 2
            });
        }
        console.log('-------->type', this.state.selectedType)

    }

    render() {
        return (
            <div className="inner-container">
                <div className="header">Registrar

                </div>
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="username">Name</label>
                        <input value={this.state.name} onChange={evt => this.updateName(evt)} className="login-input" type="text" name="name" placeholder="Nome" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={this.state.email} onChange={evt => this.updateEmail(evt)} className="login-input" type="text" name="username" placeholder="Usuario" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input value={this.state.username} onChange={evt => this.updateUsername(evt)} className="login-input" type="text" name="username" placeholder="Usuario" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Senha</label>
                        <input value={this.state.password} onChange={evt => this.updatePassword(evt)} className="login-input" type="password" name="password" placeholder="Senha" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirmar senha</label>
                        <input value={this.state.checkPassword} onChange={evt => this.updateCheckPassword(evt)} className="login-input" type="password" name="password" placeholder="Senha" />
                    </div>
                    <br />
                    <select value={this.state.type} onChange={evt => this.updateType(evt)} className="login-input" name="cores">
                        <option > </option>
                        <option>Usuario</option>
                        <option>Administrador</option>
                    </select>

                    <button type="buttom" className="login-btn" onClick={this.submitRegister.bind(this)}>Registrar</button>

                </div>
            </div>
        )
    }


}