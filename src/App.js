import React, { Component } from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route} from "react-router-dom";
import Login from './components/login.component';
import AppNavbar from './components/navbar.component';
import Register from './components/register.component';
import Home from './components/home.component';

class App extends Component {
  render() {
    return (
      <BrowserRouter className = "container">
        <AppNavbar/>
        <Route path = "/" exact component = {Home}></Route>
        <Route path = "/login" component = {Login}></Route>
        <Route path = "/register" component = {Register}></Route>
      </BrowserRouter>
    );
  }
}

export default App;
