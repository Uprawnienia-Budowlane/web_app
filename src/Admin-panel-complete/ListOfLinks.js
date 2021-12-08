import React, {useState} from "react";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

/* icon's */

import pencil_line from './Images/pencil_line.svg'
import eye_icon from './Images/eye_icon.svg'
import discuss_line_1 from './Images/discuss_line_1.svg'
import share_line_3 from './Images/share_line_3.svg'
import bin_icon from './Images/delete-bin.svg' 

/* */

const ListOfLinks = () => {

    const [settings, setSettings] = useState(0);

    const SettingPageSelector = (props) => <button
        className={"nav_base_option" + (props.selected ? ' nav_base_option' : ' active_btn')} onClick={() => props.onClick()}>

    </button>

    return (
        <div className="admin_panel_itself">
        <h1 className="font-bold text-black text-2xl my-8">Zarządzanie nawigacją</h1>
        <div className="container_for_all_options_base" style={{background: 'none', justifyContent: 'center' }}>
        <div className="container_for_all_nav_iself" style={{justifyContent: 'flex-start' }}>
        <div className="container_for_btns__" style={{ width: '140px' }}>
        <button className="nav_base_option active_btn"
        style={{
        height:'34px',
        width: '153px',
        fontSize: '12px',
        borderRadius: '8px',
        }}
        ><a style={{ alignSelf: 'center'}}>Dodaj nowy link</a></button>
        </div>
        </div>
        </div>
        
        <div style={{ display:'flex', justifyContent: 'space-around', margin: '20px 0' }}>
        <label>ID</label>
        <label>Nazwa linku</label>
        <label>Podlinki</label>
        <label>Status</label>
        <label>Widoczność</label>
        <label>Akcje</label>
        </div>

        <div className="rounded-3xl bg-white flex flex-row justify-center flex-wrap" style={{ maxWidth: '92.5pc' }}>
            <div className="flex flex-row border-b border-opacity-50 w-full panel-site-change" style={{ justifyContent: 'space-between' }}>
            <h1 style={{margin: '0 25px', alignSelf: 'center' }}>1</h1>
            <h1 style={{ alignSelf: 'center' }}>Strona Główna</h1>
            <h1 style={{ alignSelf: 'center' }}>0</h1>
            <h1 style={{ alignSelf: 'center' }}>Opublikowany</h1>
            <h1 style={{ alignSelf: 'center' }}>Publiczny</h1>
            <div style={{ display:'flex', margin: '10px' }}>
            <button style={{ margin: '5px' }} className="database-fn-btn"><img src={pencil_line}></img></button>
            <button style={{ margin: '5px' }} className="database-fn-btn"><img src={eye_icon}></img></button>
            <button style={{ margin: '5px' }} className="database-fn-btn"><img src={discuss_line_1}></img></button>
            <button style={{ margin: '5px' }} className="database-fn-btn"><img src={share_line_3}></img></button>
            <button style={{ margin: '5px' }} className="database-fn-btn"><img src={bin_icon}></img></button>
            </div>
            </div>
            
            <div className="flex flex-row border-b border-opacity-50 w-full panel-site-change" style={{ justifyContent: 'space-between' }}>
            <h1 style={{margin: '0 25px', alignSelf: 'center' }}>1</h1>
            <h1 style={{ alignSelf: 'center' }}>Strona Główna</h1>
            <h1 style={{ alignSelf: 'center' }}>0</h1>
            <h1 style={{ alignSelf: 'center' }}>Opublikowany</h1>
            <h1 style={{ alignSelf: 'center' }}>Publiczny</h1>
            <div style={{ display:'flex', margin: '10px' }}>
            <button style={{ margin: '5px' }} className="database-fn-btn"><img src={pencil_line}></img></button>
            <button style={{ margin: '5px' }} className="database-fn-btn"><img src={eye_icon}></img></button>
            <button style={{ margin: '5px' }} className="database-fn-btn"><img src={discuss_line_1}></img></button>
            <button style={{ margin: '5px' }} className="database-fn-btn"><img src={share_line_3}></img></button>
            <button style={{ margin: '5px' }} className="database-fn-btn"><img src={bin_icon}></img></button>
            </div>
            </div>

            <div className="flex flex-row border-b border-opacity-50 w-full panel-site-change" style={{ justifyContent: 'space-between' }}>
            <h1 style={{margin: '0 25px', alignSelf: 'center' }}>1</h1>
            <h1 style={{ alignSelf: 'center' }}>Strona Główna</h1>
            <h1 style={{ alignSelf: 'center' }}>0</h1>
            <h1 style={{ alignSelf: 'center' }}>Opublikowany</h1>
            <h1 style={{ alignSelf: 'center' }}>Publiczny</h1>
            <div style={{ display:'flex', margin: '10px' }}>
            <button style={{ margin: '5px' }} className="database-fn-btn"><img src={pencil_line}></img></button>
            <button style={{ margin: '5px' }} className="database-fn-btn"><img src={eye_icon}></img></button>
            <button style={{ margin: '5px' }} className="database-fn-btn"><img src={discuss_line_1}></img></button>
            <button style={{ margin: '5px' }} className="database-fn-btn"><img src={share_line_3}></img></button>
            <button style={{ margin: '5px' }} className="database-fn-btn"><img src={bin_icon}></img></button>
            </div>
            </div>
        </div>

        <div style={{ height: '70px', width: '100%' }}>
        </div>
        </div>
    );
}

export default ListOfLinks;