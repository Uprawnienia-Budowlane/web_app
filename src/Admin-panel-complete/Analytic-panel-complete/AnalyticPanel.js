import React, {useState, useRef, useEffect} from "react";
import {Router, Route, Switch, useLocation, Link } from 'react-router-dom'
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
  } from '@google-cloud/firestore';
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
} from "../../Icons";
import LicenseLogo from '../Images/logo_component.svg'
import Logo from '../components/Logo'

/* shortcode */

import NewsIcon from '../Images/article-line 2.svg'
import FileList from '../Images/file-list-2-line 2.svg'
import NotificationList from '../Images/notification-2-line 2.svg'
import LightBuble from '../Images/lightbulb-line 1.svg'
import ShieldLIst from '../Images/shield-keyhole-fill 3.svg'

/* */

/* calendar */

/* calendar & stats*/

import PenIconC from '../Images/pen-icon.svg'
import StatGraphSmall from '../Images/stats_graph.svg'
import CalendarGraphMedium from '../Images/calendar_graph_itself.svg'
import StatsFirstGraph from '../Images/stats_graph__first.svg'

/* */

/* */

import { useHistory } from "react-router";

import '../Analytic-panel-complete/scss/analytic-panel.css'

const AnalyticPanel = () => {

    return (
        <>
        <div className="h-full w-full flex flex-col">

        <div className="admin_panel_itself analtyic_panel_width_fix">

        <h1 className="font-bold text-black text-2xl my-8">Statystyki</h1>
        
        <div className="container-for-components">
        <div className="stat_panel_itself" style={{ justifyContent: 'space-evenly'}}>
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
            <div className="stats_container" style={{ margin: '0px 0px 20px' }}>
                <div className="stat__text">
                <div className="stat_component_ico"><span className="stat_ico learn-c"></span><h2>Tryb egzaminu pisemnego</h2></div>
                <h3>85%</h3>
                </div>
                <div className="stat__itself learn-c">
                </div>
            </div>
        </div>
        </div>

        <div className="stat_panel_itself" style={{ height: '354px', justifyContent: 'space-around'}}>
        <div className="stat_panel_desc_p" style={{ alignSelf: 'center' }}>
        <h1 className="font-bold text-black text-2xl m-2">Wejścia na stronę</h1>
        <p style={{ fontSize: '13px', alignSelf: 'center' }} >Pokaż dane:</p><span style={{ fontSize: '13px', color: '#0066FF', alignSelf: 'center' }}>Ten tydzień</span>
        </div>
        <div className="container_for_items">
        <div style={{ position: 'relative', height: '160px', width: '250px', margin: '0px 0px 20px' }}>
        <img src={StatsFirstGraph}></img>
        </div>
        </div>
        </div>

        <div className="calendar_panel_itself">
        <div className="calendar_panel_container">
        <h1 className="font-bold text-black text-2xl m-2">Kalendarz</h1>
         
         <div className="calendar_container">
         <img style={{ margin: '15px 0px' }} src={CalendarGraphMedium}></img>
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

        </div>

        <div className="container-for-components-bottom second---">

        <div className="second---same--widget">
        <h1 className="font-bold text-black text-2xl m-4" style={{ textAlign: 'center' }}>Użytkownicy online</h1>
       
        <div className="stats-users-online-container">
        <img src={StatGraphSmall}></img>
        </div>
        
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

export default AnalyticPanel;