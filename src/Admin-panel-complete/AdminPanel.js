import React, {useState, useRef, useEffect} from "react";
import {Router, Route, Switch } from 'react-router-dom'
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
import PFP from '../photos/ProfilePhoto.png';
import {BlueImgIcon, ClockIcon, QuestionMarkInCirceIcon, ShareIcon} from "../Icons";
import { useHistory } from "react-router";

function AdminPanel() {

    

    return (

        <div className="h-full w-full mx-4 md:pl-5 md:mr-12 desktop-css-fix">
        
        <div className="h-full w-full mx-4 md:pl-5 md:mr-12 desktop-css-fix">
            <div>
                    <Switch>
                        <Route exact path="/kokpit">
                            <h1>dashobard</h1>
                        </Route>
                        <Route exact path="/uzytkownicy">
                            <h1>uzytkownicy</h1>
                        </Route>
                    </Switch>
            </div>
                </div>
                
        </div>

        );
}

export default AdminPanel;