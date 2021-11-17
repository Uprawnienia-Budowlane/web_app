import React from "react";
import Desktop from './desktop'
import {Switch, Route} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import ResetPassword from "./ResetPassword";

const App = () =>
    <div className="App min-h-screen w-full flex bg-blueGray-100">
        <div className="h-full w-full flex justify-center items-center">
            <Switch>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/register">
                    <Register/>
                </Route>
                <Route exact path="/reset">
                    <ResetPassword/>
                </Route>
                <Route>
                    <Desktop/>
                </Route>
            </Switch>
        </div>
    </div>;

export default App;