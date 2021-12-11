import {DownArrowIcon, MenuIcon, NotificationIcon} from "../Icons";
import React, {useEffect, useRef, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { signOut } from 'firebase/auth'
import { auth } from "../firebase";
import { onSnapshot, 
    getFirestore, 
    collection, 
    CollectionReference,
    addDoc,
    getDoc, 
    getDocs, 
    deleteDoc,
    query, 
    doc,
    DocumentReference } from "@firebase/firestore";
import Logo from './Logo'
import { ProfilePic } from "./ProfilePic";

const useOutsideAlerter = (ref, props) => {

    useEffect(() => {
        const handleClickOutside = event => {
            if (ref.current && !ref.current.contains(event.target) && props.visible) props.onClose();
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [ref, props]);
}

function DropDown(props) {

    const logout = async () => {
        try {
            await signOut(auth);
            history.push('/login')
        } catch {
            
        }
    }

    const history = useHistory()
    
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, props);

    return (<div
        className={"absolute bg-white rounded-2xl shadow-xl w-64 right-0 mt-4 z-50" + (props.visible ? '' : ' hidden')}
        ref={wrapperRef}>
        <Link to={'/profile'} className="block py-3 px-4 border-b font-light hover:bg-gray-50">Edytuj profil</Link>
        <Link to={'/settings'} className="block py-3 px-4 border-b font-light hover:bg-gray-50">Ustawienia</Link>
        <Link to={'/licenses'} className="block py-3 px-4 border-b font-light hover:bg-gray-50">Twoje licencje</Link>
        <Link onClick={logout} className="block py-3 px-4 font-light hover:bg-gray-50">Wyloguj</Link>
    </div>);
}

const Notifications = (props) => {

    const [notification, setNotification] = useState([])

    const db = getFirestore()

    const notifyCollectionRef = collection(db, "powiadomienia");

    useEffect(() => {
        const getNotify = async () => {
          const data = await getDocs(notifyCollectionRef);
          setNotification(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getNotify();
      }, []);

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, props);

    return (
        <>
        <div
        className={"absolute bg-white rounded-2xl shadow-xl w-96 right-0 mt-4 z-50" + (props.visible ? '' : ' hidden')} ref={wrapperRef}>
        {notification.map((notify_one) => { return <Link className="block py-4 px-4 border-b font-light hover:bg-gray-50 text-sm">
        <p className="font-medium mb-2">{notify_one.tytul__}</p>
        <p>{notify_one.wiadomosc__}</p>
        </Link>
        })}
        <Link to={'/licenses'} className="block py-4 px-4 font-light hover:bg-gray-50 text-sm">
        <p>idź do licencji</p>
        </Link>
    </div> 
    </> 
      )
}

const NavBar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [notificationsDropdown, setNotificationsDropdown] = useState(false);

    /* 

    <div className="mt-10 mr-6 md:hidden" style={{position: 'fixed', right: '0'}}>
        <MenuIcon/>
        </div>

    /* */

    return (
        <>
        <Logo/>
        <div className="flex flex-row justify-between night-mode-navbar" style={{ position: 'absolute', top: '0px', left:'0px', width: '100%', zIndex: '99' }}>
        <div className="hidden md:flex md:flex-row" style={{ position: 'absolute', top: '30px', right:'0px', zIndex: '99' }}>
            <div className="my-auto mr-6 relative cursor-pointer" onClick={() => setNotificationsDropdown(true)}>
            <NotificationIcon/>
            <Notifications visible={notificationsDropdown} onClose={() => setNotificationsDropdown(false)}/>
            </div>
            <ProfilePic/>
            <div className="my-auto mr-12 relative cursor-pointer" onClick={() => setDropdown(true)}>
            <DownArrowIcon/>
            <DropDown visible={dropdown} onClose={() => setDropdown(false)}/>
            </div>
        </div>
    </div>
    </>
    );
}

export default NavBar;