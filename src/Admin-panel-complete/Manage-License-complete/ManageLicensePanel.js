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
import firebase from "../../firebase";
import {ArrowXIcon} from '../../Icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'

/* icon's */

import download_line from '../Images/download_line.svg'
import eye_icon from '../Images/eye_icon.svg'
import image_line from '../Images/image_line.svg'
import pencil_line from '../Images/pencil_line.svg'
import upload_line from '../Images/upload_line.svg'
import bin_icon from '../Images/delete-bin.svg' 

/* */

const ManageLicensePanel = () => {

    const [licenseKey, setLicenseKey] = useState([])

    const [licenseKeyTitle, setLicenseKeyTitle] = useState("")

    const [licenseKeyRabatCode, setLicenseRabatCode] = useState("")

    const [licenseKeyCodeLicense, setLicenseCodeLicense] = useState("")

    const db = getFirestore()

    const notifyCollectionRef = collection(db, "licencje");

    const history = useHistory()

    const createLicense = async () => {
        await addDoc(notifyCollectionRef, {
            nazwa_licencji:licenseKeyTitle, 
            kod_rabatowy:licenseKeyRabatCode,
            kod_licencji: licenseKeyCodeLicense, 
        });
    }

    const deleteLicense = async (id) => {
        const LicenseDoc = doc(db, "licencje", id);
        await deleteDoc(LicenseDoc);
      };

    useEffect(
        () => 
        onSnapshot(collection(db, "licencje"), (snapshot) => 
        setLicenseKey(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
        []
      )

    /* database info mess */

    const MsgAddLicense = () => (
        <div style={{ margin: '10px' }}>
        <h1>Licencja została dodana do bazy danych</h1>
        </div>
      )

    const MsgDelLicense = () => (
        <div style={{ margin: '10px' }}>
        <h1>Licencja została usunięta z bazy danych</h1>
        </div>
      )

    const displayMsgAddLicense = () => {
        toast.info(<MsgAddLicense />, {
        draggable:true
        }
        ) 
    }

    const HandleCreateLicenseFn = (e) => {
        e.preventDefault();
        createLicense()
        displayMsgAddLicense()
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

<h1 className="font-bold text-black text-2xl my-8">Licencje</h1>
<div className="container-for_subwigets">

<div className="container_for_add_license_panel">

<p className="font-bold text-black text-2xl">Dodaj licencje</p>
<div className="license_panel_itself">
<label>Nazwa licencji</label>
<input onChange={(event) => {setLicenseKeyTitle(event.target.value)}} className="rounded-2xl border outline-none h-12 p-4" type="text" />
<label>Kod rabatowy</label>
<input onChange={(event) => {setLicenseRabatCode(event.target.value)}} className="rounded-2xl border outline-none h-12 p-4" type="text" />
<label>Kod licencji</label>
<input onChange={(event) => {setLicenseCodeLicense(event.target.value)}} className="rounded-2xl border outline-none h-12 p-4" type="text" />
<button onClick={HandleCreateLicenseFn} className='rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-12 hover:bg-blue-50 transition-colors duration-200'>Dodaj licencje</button>
</div>
</div>

<div className="container_for_options_addSomehing">
<p className="font-bold text-black text-xl my-3">Dostęne licencje</p>
<div className="main-container_on_panel_site medium overflow-x-scroll flex-nowrap">
{licenseKey.map((license_one) => { return <div className="user-panel-with-infos" style={{ 
margin: '15px 5px 0px', 
justifyContent: 'space-around' }}>
<p className="font-bold text-blue text-xl"
style={{ 
color: '#3B82F6',
fontSize: '18px',
margin: '5px'
}}>{license_one.nazwa_licencji}</p>
<p className="text-500" 
style={{ 
color: '#3B82F6',
fontSize: '12px',
margin: '5px'
}}
>{license_one.kod_rabatowy}</p>
<p
style={{ 
color: '#3B82F6',
fontSize: '12px',
margin: '5px'
}}
className="text-500">{license_one.kod_licencji}</p>
<button style={{ 
display: 'flex', 
color: '#3B82F6', 
background: '#DEEAFF',
textAlign: 'center', 
justifyContent: 'center', 
alignSelf: 'center',
height: '42px', 
width:'42px'}} 
className="rounded-xl border text-blue-500 transition-colors duration-200"
onClick={() => {deleteLicense(license_one.id)}}
>
    <img src={bin_icon} style={{ alignSelf:'center' }}></img>
</button>
</div>
})}
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

export default ManageLicensePanel
