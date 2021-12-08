import React, {useState} from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

import stats_blog_analytic from '../Images/stats_blog_analytic.svg'
import Frame_test from '../Images/Frame_test.svg'

const Settings = () => {

    const [settings, setSettings] = useState(0);

    const SettingPageSelector = (props) => <button
        className={"nav_base_option" + (props.selected ? ' nav_base_option' : ' active_btn')} onClick={() => props.onClick()}>

    </button>

    return (
        <div className="admin_panel_itself">
        <h1 className="font-bold text-black text-2xl my-8">Zarządzaj blogiem</h1>
        <div className="container_for_all_options_base" style={{ left: '-1pc',height: '58px', width: '1500px', justifyContent: 'center' }}>
        <div className="container_for_all_nav_iself" style={{ justifyContent: 'flex-start' }}>
        <button style={{ alignSelf: 'center' }} className="nav_base_option active_btn"><Link to="/panel-administratora/ustawienia-ogólne">Wpisy na blogu</Link></button>
        <button style={{ alignSelf: 'center' }} className="nav_base_option active_btn"><Link to="/panel-administratora/ustawienia-dyskusji">Statystyki bloga</Link></button>
        <button style={{ alignSelf: 'center' }} className="nav_base_option active_btn"><Link to="/panel-administratora/ustawienia-dyskusji">Dodaj wpis</Link></button>
        <button style={{ alignSelf: 'center' }} className="nav_base_option active_btn"><Link to="/panel-administratora/ustawienia-dyskusji">Ustawienia bloga</Link></button>
        <button style={{ alignSelf: 'center' }} className="nav_base_option active_btn"><Link to="/panel-administratora/ustawienia-dyskusji">Kategorie wpisów</Link></button>
        </div>
        </div>
        
        <div className="analytic_blog_panel_itself">
        


        <div className="analytic_panel_iself">

        <div className="analytic_panel_stats_legend">
        <input type="checkbox" style={{
        appearance: 'none',
        height: '21px',
        width: '22px',
        borderRadius: '6px',
        background: '#fff',
        border: '1px solid #3B82F6'
        }} className="normal-checkbox"/><label>Odwiedzający</label>
        <input type="checkbox" style={{
        appearance: 'none',
        height: '21px',
        width: '22px',
        borderRadius: '6px',
        background: '#fff',
        border: '1px solid #3B82F6'

        }} className="normal-checkbox"/><label>Wyświetlenia</label>
        </div>

        <img src={stats_blog_analytic}></img>
        </div>
        
    
        

        </div>
        
        <div className="user_activity_panel_itself">

        <div className="user_activity_iself">
        <img src={Frame_test}></img>
        </div>

        </div>

        <div style={{ height: '70px', width: '100%' }}>
        </div>
        </div>
    );
}

export default Settings;