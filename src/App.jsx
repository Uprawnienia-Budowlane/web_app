import React from "react";
import Desktop from './desktop'
import {Switch, Route} from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import Login from "./login";
import Register from "./register";
import ResetPassword from "./ResetPassword";
import { AuthProvider } from "../src/context/AuthContext"
import PrivateRoute from "./PrivateRoute";

const App = () =>
    <div className="App min-h-screen w-full flex bg-blueGray-100">
        <div className="h-full w-full flex justify-center items-center">
            <Router>
            <AuthProvider>
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
                <PrivateRoute>
                    <Desktop/>
                </PrivateRoute>
            </Switch>
            </AuthProvider>
            </Router>
        </div>
    </div>;

export default App;