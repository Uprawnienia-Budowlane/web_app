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
import MainPanel from "./MainPanel";
import AdminNavbar from "./components/AdminNavbar";
import UserListPage from './UserListPage'
import QuestionDataBase from './QuestionDataBase'
import QuestionAddPanel from './Manage-Question-Test-complete/QuestionAddPanel' 
import LearnExamAddPanel from './Manage-Question-Test-complete/LearnExamAddPanel'

import ManageLicensePanel from './Manage-License-complete/ManageLicensePanel'

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

const AdminPanel = () => {

    return (
        <>
        <div className="h-full w-full flex flex-col">
        <div className="hidden md:flex mdd:flex-col w-28 admin-bar" style={{ zIndex: '2' }}>
        <Logo />
        <AdminNavbar />
        </div>
        <Switch>
            <Route exact path="/panel-administratora/" component={MainPanel} />
            <Route exact path="/panel-administratora/zarzadzanie-uzytkownikami" component={UserListPage}/>
            <Route exact path="/panel-administratora/baza-pytan" component={QuestionDataBase}/>
            <Route exact path="/panel-administratora/baza-pytan/dodaj-pytanie" component={QuestionAddPanel}/>
            <Route exact path="/panel-administratora/baza-pytan/dodaj-egzamin-probny" component={LearnExamAddPanel}/>
            <Route exact path="/panel-administratora/baza-pytan/dodaj-egzamin-probny" component={LearnExamAddPanel}/>
            
            <Route exact path="/panel-administratora/wszystkie-licencje/" component={ManageLicensePanel}/>
        </Switch>
        </div>
        </>
        );
}

export default AdminPanel;