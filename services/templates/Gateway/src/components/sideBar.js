import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import HomeIcon from '@material-ui/icons/Home';
import BuildIcon from '@material-ui/icons/Build';
import ExitIcon from '@material-ui/icons/ExitToApp';
import { Redirect, Route, Switch, Link } from 'react-router-dom';




// import { Container } from './styles';

export default class SideBar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {

        return (
            <div>
                <SideNav
                    onSelect={(selected) => {
                        if (selected === 'create-event') {
                            this.props.creatEvent()
                        }
                        if (selected === 'create-guests') {
                            this.props.createUser()
                        }
                        if (selected === 'list-events') {
                            this.props.listEvent()
                        }
                        if (selected === 'list-guests') {
                            this.props.listUser()
                        }
                        console.log('aaaaa', selected)
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">
                            <NavIcon>
                                <HomeIcon className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts">
                            <NavIcon>
                                <BuildIcon className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Painel
                            </NavText>
                            <NavItem eventKey="create-event">
                                <NavText>
                                    Adicinar evento
                            </NavText>
                            </NavItem>
                            <NavItem eventKey="create-guests">
                                <NavText>
                                    Adicionar convidado
                            </NavText>
                            </NavItem>
                            <NavItem eventKey="list-events">
                                <NavText>
                                    Listar eventos
                            </NavText>
                            </NavItem>
                            <NavItem eventKey="list-guests">
                                <NavText>
                                    Listar convidados
                            </NavText>
                            </NavItem>
                        </NavItem>
                        <NavItem eventKey="exit">
                            <NavIcon>
                                <Link style={{ textDecoration: 'none' }} to={{ pathname:'/' }}>

                                    <ExitIcon className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                                </Link>
                            </NavIcon>
                            <NavText>
                                Logout
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>


            </div>
        )
    }
}
