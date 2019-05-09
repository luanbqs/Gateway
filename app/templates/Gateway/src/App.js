import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path = '/' exact component = {Login} />
          <Route path = '/Painel' exact component = {Home} />
          <Route path = '/AboutUs' exact component = {AboutUs} />
          <Route path = '/Contact' exact component = {Contact} />
          <Route path = '/Home' exact component = {Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
