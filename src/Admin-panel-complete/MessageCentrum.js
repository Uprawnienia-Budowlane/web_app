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

const MessageCentrum = () => {

    const [usersMessages, setUsersMessages] = useState([])

    const db = getFirestore()

    const UsersMessagesCollectionRef = collection(db, "wiadomosci_od_uzytkownikow");

    useEffect(
      () => 
      onSnapshot(collection(db, "wiadomosci_od_uzytkownikow"), (snapshot) => 
      setUsersMessages(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
      []
    )

    const history = useHistory()

return (
<>
<div className="admin_panel_itself">

<h1 className="font-bold text-black text-2xl my-8">Centrum wiadomości</h1>

<div className="container_for_all_options_base">
<div className="container_for_all_nav_iself">
<div className="container_for_btns__ messages_centrum_desktop">
<button className="nav_base_option active_btn"><a>Wszystkie</a></button>
<button className="nav_base_option active_btn"><a>Formularz kontaktowy</a></button>
<button className="nav_base_option active_btn"><a>Zgłoszenia nowych pytań</a></button>
<button className="nav_base_option active_btn"><a>Zgłoszenia błędów</a></button>
<button className="nav_base_option active_btn"><a>Inne</a></button>
<button className="nav_base_option active_btn"><a>Usunięte</a></button>
</div>
<input style={{ margin: '0 15px' }} type="search" className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-100 p-4 search_input_base"
placeholder="wiadomości"/>
</div>
</div>

<div className="main-container_on_panel_site">

<div className="database_questions-option-panel">

{usersMessages.map((usersMessages) => { return <div className="question-panel-with-infos" style={{ justifyContent: 'space-around' }}>
<p className="text-500" style={{ alignSelf: 'center' }}>{usersMessages.mail_uzytkownika}</p>
<p className="text-500" style={{ alignSelf: 'center' }}>{usersMessages.wiadomosc}</p> 
<div className="button-container-base-option">
<button style={{color: '#fff' }} className="database-fn-btn"><img src={download_line}></img></button>
<button style={{color: '#fff' }} className="database-fn-btn"><img src={pencil_line}></img></button>
</div>
</div>
})}

</div>

</div>
<div style={{ height: '70px', width: '100%' }}>
</div>
</div>
</>
    )
}

export default MessageCentrum
