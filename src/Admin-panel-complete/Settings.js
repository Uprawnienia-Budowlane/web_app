import React, {useState} from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import {LightbulbIcon, View1, View2} from "../Icons";
import KeyShortcuts from "../modals/KeyShortcuts";
/*import { lightTheme, darkTheme, GlobalStyles } from './theme'
import { ThemeProvider } from "styled-components";*/
import SettingsFirst from "./SettingsFirst";
import SettingsSecond from "./SettingsSecond"

const btn_change = document.getElementsByClassName('nav_base_option')

const Settings = () => {

    const [settings, setSettings] = useState(0);

    const SettingPageSelector = (props) => <button
        className={"nav_base_option" + (props.selected ? ' nav_base_option' : ' active_btn')} onClick={() => props.onClick()}>

    </button>

    return (
        <div className="admin_panel_itself">
        <h1 className="font-bold text-black text-2xl my-8">Ustawienia</h1>
        <div className="container_for_all_options_base" style={{ left: '-1pc' }}>
        <div className="container_for_all_nav_iself" style={{ justifyContent: 'flex-start'}}>
        <button className="nav_base_option active_btn"><Link to="/panel-administratora/ustawienia-ogólne">Ustawienia ogólne</Link></button>
        <button className="nav_base_option"><Link to="/panel-administratora/ustawienia-dyskusji">Ustawienia dyskusji</Link></button>
        </div>
        </div>
        <Switch>
        <Route exact path="/panel-administratora/ustawienia-ogólne" component={SettingsFirst} />
        <Route exact path="/panel-administratora/ustawienia-dyskusji" component={SettingsSecond} />
        </Switch>
        <div style={{ height: '70px', width: '100%' }}>
        </div>
        </div>
    );
}

export default Settings;