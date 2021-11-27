import React, {useState, useRef, useEffect} from "react";
import {Router, Route, Switch, useLocation, Link } from 'react-router-dom'
import licenseModel from '../models/License';
import { useAuth } from '../context/AuthContext' 
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from '@google-cloud/firestore';
import firebase from "../firebase";
import MenuItem from "../components/MenuItem";
import PFP from '../photos/ProfilePhoto.png';
import { ShareIcon, 
QuestionMarkInCirceIcon, 
BlueImgIcon, 
ClockIcon, 
BookIcon, 
ChartIcon, 
HeartIcon, 
HomeIcon, 
ListIcon, 
MessageIcon, 
PenIcon, 
ShoppingCartIcon,
SettingsIcon

} from "../Icons";
import LicenseLogo from './Images/logo_component.svg'
import Logo from './components/Logo'
import { useHistory } from "react-router";

import '../Admin-panel-complete/scss/admin-panel.css'

const AdminPanel = () => {

    let [loc, setLoc] = useState('/');
    let location = useLocation();

    React.useEffect(() => {
        setLoc(location.pathname);
    }, [location]);

    const { loading, error, ...result } = licenseModel.useGetPopulated();
    if(!loading ) console.log(result);

    return (
        <>
        <div className="h-full w-full flex flex-col">
        <div className="hidden md:flex mdd:flex-col w-28 admin-bar" style={{ zIndex: '2' }}>
        <Logo />
        </div>
        <div className="admin_panel_itself">

        <div className="stat_panel_itself">
        <div className="stat_panel_desc_p">
        <h1 className="font-bold text-black text-2xl m-1">Statystyki Zdawalności</h1>
        <p className="mx-4 my-1 text-sm">Bazowane na procentach wykonanych testów i nauki</p>
        </div>
        <div className="container_for_items">
            <div className="stats_container">
                <div className="stat__text">
                <div className="stat_component_ico"><span className="stat_ico"></span><h2>Tryb nauki</h2></div>
                <h3>85%</h3>
                </div>
                <div className="stat__itself">
                </div>
            </div>
            <div className="stats_container">
                <div className="stat__text">
                <div className="stat_component_ico"><span className="stat_ico learn-c"></span><h2>Tryb egzaminu pisemnego</h2></div>
                <h3>85%</h3>
                </div>
                <div className="stat__itself learn-c">
                </div>
            </div>
        </div>
        </div>
        
        <div className="licenses_panel_itself">
        <div className="licenses_panel_desc_p">
        <img src={LicenseLogo} style={{ alignSelf: 'center', height: '50px', width: '50px', margin: '30px' }}></img>
        <h1 className="font-bold text-black text-2xl m-2">Aktywne Licencje</h1>
        <p className="mx-4 my-1 text-sm">Ilość aktywnych licencji</p>
        <div className="container_for_text_and_icon" style={{ display: 'flex', justifyContent: 'center' }}>
        <span className="arrow_second_comp"></span>
        <span className="text-2xl 2xl:text-3xl font-bold mx-2 my-1" style={{ color: '#00C48C' }}>+3,49%</span>
        </div>
        </div>
        


        </div>

        </div>
        </div>
        </>
        );
}

export default AdminPanel;