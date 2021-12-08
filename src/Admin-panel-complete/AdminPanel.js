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
SettingsIcon,
} from "../Icons";

import LicenseLogo from './Images/logo_component.svg'
import Logo from './components/Logo'
import MainPanel from "./MainPanel";
import AdminNavbar from "./components/AdminNavbar";
import UserListPage from './UserListPage'
import AnalyticPanel from './Analytic-panel-complete/AnalyticPanel'
import QuestionDataBase from './QuestionDataBase'
import QuestionWrittenDataBase from './QuestionWrittenDataBase'
import ActWrittenDataBase from './ActWrittenDataBase'
import QuestionAddPanel from './Manage-Question-Test-complete/QuestionAddPanel' 
import LearnExamAddPanel from './Manage-Question-Test-complete/LearnExamAddPanel'
import ManageLicensePanel from './Manage-License-complete/ManageLicensePanel'
import NotificationPanel from "./NotificationPanel";
import Settings from './Settings'
import OtherSites from './OtherSites'
import MessageCentrum from './MessageCentrum'
import Blog from './Blog-complete/Blog'
import BlogAnalityc from './Blog-complete/Blog-analityc'
import NewsManagment from './NewsManagment'
import SiteArticleManagment from './SiteArticleManagment'
import AddAnotherWebsite from './AddAnotherWebiste'
import AddAnotherLink from './AddAnotherLink'
import ListOfLinks from './ListOfLinks'

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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'

const AdminPanel = () => {
    return (
        <>
        <div className="h-full w-full flex flex-col">
        <div className="hidden md:flex mdd:flex-col w-28 admin-bar" style={{ zIndex: '2' }}>
        <Logo />
        <AdminNavbar />
        </div>
        <div className="flex flex-row overflow-x-scroll max-w-full hidden-scrollbar admin-mobile-bar">
            <li><Link to={"/panel-administratora/"} ><div className="ico_menu home__"></div></Link></li>
            <li><Link to={"/panel-administratora/zarzadzanie-uzytkownikami"} ><div className="ico_menu users__"></div></Link></li>
            <li><Link to={"/panel-administratora/statystyki"} ><div className="ico_menu stats__"></div></Link></li>
            <li className="submenu_li"><Link to={"/panel-administratora/podstrony"} ><div className="ico_menu faq__"></div></Link></li>
            <li className="submenu_li"><Link to={"/panel-administratora/panel-administratora/zarządzanie-stroną"} ><div className="ico_menu faq__"></div></Link></li>
            <li className="submenu_li"><Link to={"/panel-administratora/zarządzanie-aktualnościami"} ><div className="ico_menu faq__"></div></Link></li>
            <li className="submenu_li"><a href="https://dashboard.chec.io/"><div className="ico_menu shop__"></div></a></li>
            <li className="submenu_li"><a href="https://dashboard.stripe.com/test/dashboard/"><div className="ico_menu card__"></div></a></li>
            <li className="submenu_li"><Link to={"/panel-administratora/baza-pytan"} ><div className="ico_menu faq__"></div></Link></li>
            <li><Link to={"/panel-administratora/wszystkie-licencje/"} ><div className="ico_menu license__"></div></Link></li>
            <li><Link to={"/panel-administratora/dodaj-powiadomienie/"} ><div className="ico_menu message__"></div></Link></li>
            <li><Link to={"/panel-administratora/ustawienia-ogólne"} ><div className="ico_menu setting__"></div></Link></li>
        </div>
        <Switch>
            <Route exact path="/panel-administratora/" component={MainPanel} />
            <Route exact path="/panel-administratora/zarzadzanie-uzytkownikami" component={UserListPage}/>
            <Route exact path="/panel-administratora/statystyki" component={AnalyticPanel}/>
            <Route exact path="/panel-administratora/zarządzanie-aktualnościami" component={NewsManagment}/>
            <Route exact path="/panel-administratora/blog" component={Blog}/>
            <Route exact path="/panel-administratora/blog-statystyki" component={BlogAnalityc}/>
            <Route exact path="/panel-administratora/podstrony" component={OtherSites}/>
            <Route exact path="/panel-administratora/nawigacja" component={AddAnotherLink}/>
            <Route exact path="/panel-administratora/wszystkie-podstrony" component={ListOfLinks}/>
            <Route exact path="/panel-administratora/dodaj-podstrone" component={AddAnotherWebsite}/>
            <Route exact path="/panel-administratora/dodaj-wpis" component={SiteArticleManagment}/>
            <Route exact path="/panel-administratora/baza-pytan" component={QuestionDataBase}/>
            <Route exact path="/panel-administratora/baza-opracowan-ustnych" component={QuestionWrittenDataBase}/>
            <Route exact path="/panel-administratora/baza-aktów-prawnych-do-czytania" component={ActWrittenDataBase}/>
            <Route exact path="/panel-administratora/baza-pytan/dodaj-pytanie" component={QuestionAddPanel}/>
            <Route exact path="/panel-administratora/baza-pytan/dodaj-egzamin-probny" component={LearnExamAddPanel}/>
            <Route exact path="/panel-administratora/wszystkie-licencje/" component={ManageLicensePanel}/>
            <Route exact path="/panel-administratora/dodaj-powiadomienie" component={NotificationPanel}/>
            <Route exact path={["/panel-administratora/centrum-wiadomosci"]} component={MessageCentrum}/>
            <Route exact path={["/panel-administratora/ustawienia", "/panel-administratora/ustawienia-ogólne", "/panel-administratora/ustawienia-dyskusji"]} component={Settings}/>
        </Switch>
        </div>
        </>
        );
}

export default AdminPanel;