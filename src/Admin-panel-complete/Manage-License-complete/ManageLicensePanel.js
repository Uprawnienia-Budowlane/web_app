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

    useEffect(() => {
        const getLicenseKey = async () => {
          const data = await getDocs(notifyCollectionRef);
          setLicenseKey(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getLicenseKey();
      }, []);


return (
        <>
<div className="admin_panel_itself">
<div className="container_for_all_widgets">

<h1 className="font-bold text-black text-2xl my-8">Licencje</h1>

<div className="container_for_add_license_panel">
<p className="font-bold text-black text-2xl my-8">Dodaj licencje</p>
<div className="license_panel_itself">
<label>Nazwa licencji</label>
<input onChange={(event) => {setLicenseKeyTitle(event.target.value)}} className="rounded-2xl border outline-none h-12 p-4" type="text" />
<label>Kod rabatowy</label>
<input onChange={(event) => {setLicenseRabatCode(event.target.value)}} className="rounded-2xl border outline-none h-12 p-4" type="text" />
<label>Kod licencji</label>
<input onChange={(event) => {setLicenseCodeLicense(event.target.value)}} className="rounded-2xl border outline-none h-12 p-4" type="text" />
<button onClick={createLicense} className='rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-12 hover:bg-blue-50 transition-colors duration-200'>Dodaj licencje</button>
</div>
</div>
<p className="font-bold text-black text-2xl my-8">Dostęne licencje</p>
<div className="main-container_on_panel_site">
{licenseKey.map((license_one) => { return <div className="user-panel-with-infos" style={{ margin: '10px', justifyContent: 'space-around' }}>
<p className="text-500">{license_one.nazwa_licencji}</p>
<p className="text-500">{license_one.kod_rabatowy}</p>
<p className="text-500">{license_one.kod_licencji}</p>
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

export default ManageLicensePanel
