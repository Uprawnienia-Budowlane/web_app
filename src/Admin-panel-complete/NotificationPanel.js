import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
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

    useEffect(() => {
        const getNotify = async () => {
          const data = await getDocs(notifyCollectionRef);
          setNotification(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getNotify();
      }, []);

return (
        <>
<div className="admin_panel_itself">
<div className="container_for_all_widgets">

<h1 className="font-bold text-black text-2xl my-8">Zarządzaj powiadomieniami</h1>

<div className="container_for_add_license_panel">
<p className="font-bold text-black text-2xl my-8">Dodaj powiadomienie</p>
<div className="license_panel_itself">
<label>Nazwa Powiadomienia</label>
<input onChange={(event) => {setNotificationTitle(event.target.value)}} className="rounded-2xl border outline-none h-12 p-4" type="text" />
<label>Treść powiadomienia</label>
<textarea onChange={(event) => {setNotificationMess(event.target.value)}} style={{height: '150px' ,margin: '0px 30px' }} className="rounded-2xl border outline-none h-12 p-4" />
<button onClick={createNotification} className='rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-12 hover:bg-blue-50 transition-colors duration-200'>Dodaj powiadomienie</button>
</div>
</div>
<p className="font-bold text-black text-2xl my-8">Lista powiadomień</p>
<div className="main-container_on_panel_site">
{notification.map((notify_one) => { return <div className="user-panel-with-infos" style={{ margin: '10px', justifyContent: 'space-around' }}>
<p className="text-500">{notify_one.tytul__}</p>
<p className="text-500">{notify_one.wiadomosc__}</p>
<button style={{ display: 'flex', color: '#3B82F6', textAlign: 'center', justifyContent: 'center', alignSelf: 'center', margin: '10px',height: '53px', width:'53px'}} className="rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-14 w-14 hover:bg-blue-50 transition-colors duration-200 delete-user-btn"></button>
</div>
})}
</div>
<div style={{ height: '70px', width: '100%' }}>
</div>
</div>
</div>

        </>
    )
}

export default NotificationPanel