import React, { Component, useState } from "react";
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import Desktop from './desktop'
import Login from "./login";
import Register from "./register";
import AdminPanel from './Admin-panel-complete/AdminPanel'
import ResetPassword from "./ResetPassword";
import PrivateRoute from "./PrivateRoute";
import './scss/app.css'

export default class App extends Component {

    constructor(props) {

        super(props);
    
        this.state = {
    
            isLogged: false,
        };
    
    }

    /*componentDidMount() {
        AuthService.isLogged().then(isLogged => this.setState({

            ...this.state,
            isLogged: isLogged
        }));
    }*/

    render() {

        const {isLogged} = this.state;

        return (
            <div className="App min-h-screen w-full flex bg-blueGray-100 Mobile-bgc">
        <div className="h-full w-full flex justify-center items-center">
            <Switch>
                <Route path="/login">
                <Login/>
                </Route>
                <Route path="/register">
                <Register/>
                </Route>
                <Route path="/reset">
                <ResetPassword/>
                </Route>
                <Route path="/panel-administratora" >
                <AdminPanel/>
                </Route>
                <Route>
                <Desktop/>
                </Route>
            </Switch>
        </div>
    </div>
        )
    }
}
