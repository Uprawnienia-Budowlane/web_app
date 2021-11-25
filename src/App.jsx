import React from "react";
import Desktop from './desktop'
import {Switch, Route} from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import { useState } from "react";
import Login from "./login";
import Register from "./register";
import ResetPassword from "./ResetPassword";
import { AuthProvider } from "../src/context/AuthContext"
import PrivateRoute from "./PrivateRoute";
import { lightTheme, darkTheme, GlobalStyles } from './theme'
import { ThemeProvider } from "styled-components";

import './scss/app.css'

const App = () => {

    const [theme, setTheme] = useState('light')

    const ThemeToggler = () => {

        theme === 'light' ? setTheme('dark') : setTheme('light') 

    }

    return (   <div className="App min-h-screen w-full flex bg-blueGray-100">
        <div className="h-full w-full flex justify-center items-center">
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles/>
            <AuthProvider>
            <input className="change-mode-btn mobile-fix-btn" onClick={() => ThemeToggler()} type="checkbox"/>
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
            </ThemeProvider>
        </div>
    </div>
    )
}
export default App;