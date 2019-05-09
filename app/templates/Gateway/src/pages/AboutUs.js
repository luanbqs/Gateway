import React, { Component } from 'react';
import './Login.css'


export default class AboutUs extends Component {

    state = {
        isHomeOpen: false,
        isAbouUsOpen: true,
        isContactOpen: false,
    }

    showHomePage = () => {
        this.setState({ isHomeOpen: true, isAbouUsOpen: false, isContactOpen: false })
        this.props.history.push('/')
    }
    showAboutUsPage = () => {
        this.setState({ isHomeOpen: false, isAbouUsOpen: true, isContactOpen: false })

    }
    showContactPage = () => {
        this.setState({ isHomeOpen: false, isAbouUsOpen: false, isContactOpen: true })
        this.props.history.push('/Contact')

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
                <h1 >Quem somos</h1>

            </div>


        );
    }
}
