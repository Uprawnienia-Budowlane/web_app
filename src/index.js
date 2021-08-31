import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import {BrowserRouter} from "react-router-dom";
import {getProvider} from "@rest-api/react-models";

window.config = {
    settings: {
        pageLayout: 0,
    }
};

const ReactModelsProvider = getProvider();

ReactDOM.render(
    <BrowserRouter>
        <ReactModelsProvider>
            <App/>
        </ReactModelsProvider>
    </BrowserRouter>,
    document.getElementById('root')
);