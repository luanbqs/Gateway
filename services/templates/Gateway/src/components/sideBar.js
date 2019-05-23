import React, { Component } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

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
                        if(selected === 'create-event'){
                            this.props.creatEvent()
                        }
                        if(selected === 'create-guests'){
                            this.props.createUser()
                        }
                        if(selected === 'list-events'){
                            this.props.listEvent()
                        }
                        if(selected === 'list-guests'){
                            this.props.listUser()
                        }
                        console.log('aaaaa', selected)
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="charts">
                            <NavIcon>
                                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
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
                    </SideNav.Nav>
                </SideNav>


            </div>
        )
    }
}
