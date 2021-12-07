import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
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
import firebase from "../firebase";
import {ArrowXIcon} from '../Icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'

/* icon's */

import download_line from './Images/download_line.svg'
import eye_icon from './Images/eye_icon.svg'
import image_line from './Images/image_line.svg'
import pencil_line from './Images/pencil_line.svg'
import upload_line from './Images/upload_line.svg'
import bin_icon from './Images/delete-bin.svg' 

/* */

const NotificationPanel = () => {

    const [notification, setNotification] = useState([])

    const [notificationTitle, setNotificationTitle] = useState("")

    const [notificationMess, setNotificationMess] = useState("")

    const db = getFirestore()

    const notifyCollectionRef = collection(db, "powiadomienia");

    const history = useHistory()

    const createNotification = async () => {
        await addDoc(notifyCollectionRef, { 
            tytul__: notificationTitle, 
            wiadomosc__:notificationMess,
        });
    }

    const deleteNotification = async (id) => {
        const NotificationDoc = doc(db, "powiadomienia", id);
        await deleteDoc(NotificationDoc);
      };

      useEffect(
        () => 
        onSnapshot(collection(db, "powiadomienia"), (snapshot) => 
        setNotification(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
        []
      )

    /* database info mess */

    const MsgAddNotify = () => (
        <div style={{ margin: '10px' }}>
        <h1>Powiadomienie zostało dodane do bazy danych</h1>
        </div>
      )

    const MsgDelNotify = () => (
        <div style={{ margin: '10px' }}>
        <h1>Powiadomienie został usuniętę z bazy danych</h1>
        </div>
      )

    const displayMsgAddNotify = () => {
        toast.info(<MsgAddNotify />, {
        draggable:true
        }
        ) 

    }

    const HandleCreateNotifyFn = (e) => {
        e.preventDefault();
        createNotification()
        displayMsgAddNotify()
    }

    /* */

return (
<>
<ToastContainer 
draggable={false}
transition={Zoom}
autoClose={8000}
/>
<div className="admin_panel_itself">
<div className="container_for_all_widgets">
<h1 className="font-bold text-black text-2xl my-8">Zarządzaj powiadomieniami</h1>
<div className="container-for_subwigets">

<div className="container_for_add_license_panel">
<p className="font-bold text-black text-2xl">Dodaj powiadomienie</p>
<div className="license_panel_itself">
<label>Nazwa Powiadomienia</label>
<input onChange={(event) => {setNotificationTitle(event.target.value)}} className="rounded-2xl border outline-none h-12 p-4" type="text" />
<label>Treść powiadomienia</label>
<textarea onChange={(event) => {setNotificationMess(event.target.value)}} style={{height: '150px' ,margin: '0px 30px' }} className="rounded-2xl border outline-none h-12 p-4" />
<button onClick={HandleCreateNotifyFn} className='rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-12 hover:bg-blue-50 transition-colors duration-200'>Dodaj powiadomienie</button>
</div>
</div>
<div className="container_for_options_addSomehing">
<p className="font-bold text-black text-xl my-3">Lista powiadomień</p>
<div className="main-container_on_panel_site medium overflow-x-scroll flex-nowrap">
{notification.map((notify_one) => ( 
<div className="user-panel-with-infos" style={{ 
margin: '15px 5px 0px', 
justifyContent: 'space-around' 
}}>
<p className="font-bold text-blue text-xl" 
style={{ 
color: '#3B82F6',
fontSize: '18px',
margin: '5px'
}}>{notify_one.tytul__}</p>
<p className="text-500"
style={{ 
color: '#3B82F6',
fontSize: '12px',
margin: '5px'
}}
>{notify_one.wiadomosc__}</p>
<button style={{ 
display: 'flex', 
color: '#3B82F6', 
background: '#DEEAFF',
textAlign: 'center', 
justifyContent: 'center', 
alignSelf: 'center',
margin: '5px',
height: '42px', 
width:'42px'}} 
className="rounded-xl border text-blue-500 transition-colors duration-200"
onClick={() => {deleteNotification(notify_one.id, toast.info(<MsgDelNotify />))}}
>
<img style={{ alignSelf: 'center' }} src={bin_icon}></img>
</button>
</div>
))}
</div>
</div>
</div>
<div style={{ height: '70px', width: '100%' }}>
</div>
</div>
</div>

        </>
    )
}

export default NotificationPanel