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

    const [licenseKey, setLicenseKey] = useState([])

    const db = getFirestore()

    const usersCollectionRef = collection(db, "użytkownicy");

    const history = useHistory()

return (
        <>
<div className="admin_panel_itself">
<div className="container_for_all_widgets">

<h1 className="font-bold text-black text-2xl my-8">Zarządzaj powiadomieniami</h1>

<div className="container_for_add_license_panel">
<p className="font-bold text-black text-2xl my-8">Dodaj powiadomienie</p>
<div className="license_panel_itself">
<label>Nazwa licencji</label>
<input className="rounded-2xl border outline-none h-12 p-4" type="text" />
<label>Treść powiadomienia</label>
<textarea style={{height: '150px' ,margin: '0px 30px' }} className="rounded-2xl border outline-none h-12 p-4" />
<button className='rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-12 hover:bg-blue-50 transition-colors duration-200'>Dodaj powiadomienie</button>
</div>
</div>
<p className="font-bold text-black text-2xl my-8">Lista powiadomień</p>
<div className="main-container_on_panel_site">
<div className="container_for_all_options_base">

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