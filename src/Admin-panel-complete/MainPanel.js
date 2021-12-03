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

/* shortcode */

import NewsIcon from './Images/article-line 2.svg'
import FileList from './Images/file-list-2-line 2.svg'
import NotificationList from './Images/notification-2-line 2.svg'
import LightBuble from './Images/lightbulb-line 1.svg'
import ShieldLIst from './Images/shield-keyhole-fill 3.svg'

/* */

/* calendar */

import PenIconC from './Images/pen-icon.svg'

/* */

import { useHistory } from "react-router";

import '../Admin-panel-complete/scss/admin-panel.css'

const MainPanel = () => {

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

        <div className="admin_panel_itself">

        <h1 className="font-bold text-black text-2xl my-8">Dashboard</h1>
        
        <div className="container-for-components">
        <div className="stat_panel_itself">
        <div className="stat_panel_desc_p">
        <h1 className="font-bold text-black text-2xl m-2">Statystyki Zdawalności</h1>
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
        <img className="img-fix" src={LicenseLogo} style={{ alignSelf: 'center', margin: '30px' }}></img>
        <h1 className="font-bold text-black text-2xl m-2">Aktywne Licencje</h1>
        <p className="mx-4 my-1 text-sm" style={{ textAlign: 'center' }}>Ilość aktywnych licencji</p>
        <div className="container_for_text_and_icon" style={{ display: 'flex', justifyContent: 'center' }}>
        <span className="arrow_second_comp"></span>
        <span className="text-2xl 2xl:text-3xl font-bold mx-2 my-1" style={{ color: '#00C48C' }}>+3,49%</span>
        </div>
        </div>
        


        </div>

        <div className="google_play_panel_itself">
        <div className="google_play_panel_desc_p">
        <h1 className="font-bold text-black text-2xl m-2" >Satysfakcja z aplikacji</h1>
        <p className="mx-4 my-1 text-sm" style={{ textAlign: 'left' }}>Bazowane na pozytywnych ocenach z GooglePlay</p>
        <div className="container_for_meter" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        
        <meter class="google_play_meter" style={{ marginTop: '45px', color: 'blue' }} max="1.0" min=".0" value=".9" high=".75" low=".25" optimum=".5"></meter> 

        <HeartIcon/>

        <h1 className="font-bold text-black text-xl m-2" style={{ textAlign: 'center'}}>90%</h1>

        </div>
        </div>
        


        </div>

        <div className="shortcode_panel_itself">
        <h1 className="font-bold text-black text-2xl m-2" style={{ margin: '15px' }}>Panel skrótów</h1>
        <div className="shortcode_panel_desc_content">
        <ul className="shortcode-list">
            <li> <img src={NewsIcon} ></img>Dodaj wpis na blogu</li><hr></hr>
            <li> <img src={NotificationList} ></img> Wyślij powiadomienie do użytkowników</li><hr></hr>
            <li> <img src={LightBuble} ></img> Baza opracowań</li><hr></hr>
            <li> <img src={ShieldLIst} ></img> Licencje</li><hr></hr>
            <li> <img src={FileList} ></img> Baza pytań</li>
        </ul>
        </div>
        </div>

        </div>

        <div className="container-for-components-bottom">

        <div className="calendar_panel_itself">
        <div className="calendar_panel_container">
        <h1 className="font-bold text-black text-2xl m-2">Kalendarz</h1>
         
         <div className="calendar_container">

         </div>

         </div>

         <div className="notes_container">

        <h1 className="font-bold text-black text-2xl m-2" style={{ margin: '15px' }}>Czwartek 12 czerwca</h1>
        <ul className="notification-list">
            <li>
                <h1 className="font-bold post-title">Nowy post</h1>
                <h2 className="font-bold post-title">Uprawnienia Budowlane 2021</h2>
                <button className="edit-post-btn"><img style={{alignSelf: 'center'}} src={PenIconC}></img></button>
            </li>
            <li>
                <h1 className="font-bold post-title">Nowy post</h1>
                <h2 className="font-bold post-title">Uprawnienia Budowlane 2021</h2>
                <button className="edit-post-btn"><img style={{alignSelf: 'center'}} src={PenIconC}></img></button>
            </li>
            <li>
                <h1 className="font-bold post-title">Nowy post</h1>
                <h2 className="font-bold post-title">Uprawnienia Budowlane 2021</h2>
                <button className="edit-post-btn"><img style={{alignSelf: 'center'}} src={PenIconC}></img></button>
            </li>
        </ul>

        </div>

        </div>

        <div className="container-for-two-last-items">

        <div className="others_notes_panel_itself">
        <div className="title-and-button-panel">
        <h1 className="font-bold text-black text-2xl m-2">Moje notatki</h1>
        <button className="submit-note-btn">Dodaj notatkę</button>
        </div>
        <div className="notes_panel_all">
            
        <ul className="notes-all-list">
        <h1 className="font-bold text-black text-xl m-2">Lista notatek</h1>
            <li>
            <ul><li className="tile-note">Notatka o dupie maryni i jeżozwierzu.</li><li style={{ margin: '10px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li></ul>
            </li>
            <hr>
            </hr>
        </ul>

        </div>
        </div>

        </div>

        </div>

        <div className="container-for-last-item">

        <div className="user_stats_panel_itself">
        <h1 className="font-bold text-black text-2xl m-2">Użytkownicy online</h1>
       
        <div className="stats-users-online-container"></div>
        
        <div className="information-users-online-container">
        <h1 className="font-bold text-black text-xl mx-2" style={{textAlign: 'end'}} >Wizytatorzy</h1> 
        <h1 className="font-bold text-3xl mx-2" style={{ color: '#3B82F6', textAlign: 'end'}}>20.345</h1>
        <span className="my-1 text-sm mx-2" style={{display: 'flex', textAlign: 'end', alignSelf: 'center'}}>
            <p style={{alignSelf: 'center', color: 'gray', margin: '2px'}}>Views</p>
            <p style={{alignSelf: 'center', color: '#00C48C', margin: '2px'}}>53%</p>
            <div className="arrow-for-last-component"></div>
        </span> 
        </div>

        </div>

        </div>
        <div style={{ height: '70px', width: '100%' }}>
        </div>
        </div>
        
        </div>
        </>
        );
}

export default MainPanel;