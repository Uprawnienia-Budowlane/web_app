import React, {useState, useEffect, useRef} from 'react'
import PFP from '../../photos/ProfilePhoto.png';
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
updateDoc,
query, 
doc,
DocumentReference } from "@firebase/firestore";
import {
createUserWithEmailAndPassword,
onAuthStateChanged,
} from "firebase/auth";


/* icon's */

import eye_icon from '../Images/eye_icon.svg'
import download_more_important_info from '../Images/download_more_important_info.svg'
import folder_evidence_download_icon from '../Images/folder_evidence_download_icon.svg'

/* */

import { auth, createUserDocument } from "../../firebase";
import {ArrowXIcon} from '../../Icons' 
import { useHistory } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserMinus, faUserEdit ,faImage } from '@fortawesome/free-solid-svg-icons'

const Bookkeeping = () => {

    const [users, setUsers] = useState([])

    const db = getFirestore()

    const usersCollectionRef = collection(db, "użytkownicy");

    const [data, setdata] = useState([])
    const [loader, setloader] = useState(true)

    const [newName, setNewName] = useState("")
    const [newUsername, setNewUsername] = useState("")
    const [newEmailAddress, setnewEmailAddress] = useState("")
    const [newPassword, setnewPassword] = useState("")

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const [registerEmail, setRegisterEmail] = useState("")
    const [registerPassword, setRegisterPassword] = useState("")

    const register = async () => {
        try {
        const user = await createUserWithEmailAndPassword(auth, 
        registerEmail, 
        registerPassword
        )
        
        } catch (error) {
            console.log(error.message)
        }

    }

    /* year/month/day set*/

    const Year = new Date()
    let fullyear = Year.getFullYear()

    const Month = new Date()
    let month = Month.getUTCMonth()

    const Day = new Date()
    let day = Day.getDay()

    /* */

    const createUser = async () => {
        await addDoc(usersCollectionRef, { 
            Imię: newName, 
            Nazwisko: newUsername, 
            haslo: newPassword, 
            zdawalnosc: 0, 
            rok_rejestracji: fullyear, 
            miesiac_rejestracji: month, 
            dzien_rejestracji: day,
            status_licencji: "Brak zakupionej licencji"
        });
    }

    const updateUser = async (id, Imię, Nazwisko) => {
        const userDoc = doc(db, "użytkownicy", id);

        const newFieldsName = { 
            Imię: newName,         
        };

        const newFieldsNameUsername = { 
            Nazwisko: newUsername,         
        };

        const newFieldsPasswd = { 
            haslo: newPassword,         
        };

        await updateDoc(userDoc, newFieldsName, newFieldsNameUsername, newFieldsPasswd);
      };
    

    const deleteUser = async (id) => {
        const userDoc = doc(db, "użytkownicy", id);
        await deleteDoc(userDoc);
      };

      useEffect(
        () => 
        onSnapshot(collection(db, "użytkownicy"), (snapshot) => 
        setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
        []
      )

      /* database info mess */

    const MsgAdduser = () => (
        <div style={{ margin: '10px' }}>
        <h1>Użytkownik został dodany</h1>
        </div>
      )

    const MsgDelUser = () => (
        <div style={{ margin: '10px' }}>
        <h1>Użytkownik został usunięty z bazy danych</h1>
        </div>
      )

    const displayMsgAddUser = () => {
        toast.info(<MsgAdduser />, {
        draggable:true
        }
        ) 

    }

    /* */

    const RegisterBtnFn = (e) => {
        e.preventDefault()
        register()
        createUser()
        displayMsgAddUser()
    }

    /* */

return (
<>
<ToastContainer 
draggable={false}
transition={Zoom}
autoClose={8000}
/>
<div className="admin_panel_itself analtyic_panel_width_fix">

<h1 className="font-bold text-black text-2xl my-8">Centrum księgowości</h1>

<div className="container_for_all_options_base" style={{ justifyContent: 'space-evenly' }}>
<div className="container_for_all_nav_iself" style={{ justifyContent: 'space-between' }}>


<div className="container_for_btns__" style={{ width: '500px' }}>
<button className="nav_base_option active_btn"
style={{
height:'34px',
width: '153px',
borderRadius: '8px',
justifyContent: 'center'
}}
><a style={{fontSize: '14px', alignSelf: 'center', margin: '0' }}>Ewidencja</a></button>
<button className="nav_base_option"
style={{
height:'34px',
width: '153px',
color: 'white',
background: '#428DFF',
borderRadius: '8px',
justifyContent: 'center'
}}
><a style={{fontSize: '14px', alignSelf: 'center', margin: '0' }}>Zestawienia okresowe</a></button>
<button className="nav_base_option"
style={{
height:'34px',
width: '153px',
color: 'white',
background: '#428DFF',
borderRadius: '8px',
justifyContent: 'center'
}}
><a style={{fontSize: '14px', alignSelf: 'center', margin: '0' }}>Wzór Faktury/Paragonu</a></button>
</div>

<div className="container_for_btns__" style={{alignSelf: 'flex-end', width: '500px' }}>

<button style={{ margin: '5px' }} className="database-fn-btn"><img src={folder_evidence_download_icon}></img></button>
<input className='rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-12 hover:bg-blue-50 transition-colors duration-200' 
type="text" style={{
margin: '10px',
alignSelf: 'center',
height: '51px', 
width: '325px',
borderRadius: '15px'
}} />


</div>

</div>
</div>

<div className="main-container_on_panel_site">

<div className="container-for-label-user-etc">
    <label>Numer</label>
    <label>Rodzaj dokumentu</label>
    <label>Data dokumentu</label>
    <label>Produkty</label>
    <label>Cena netto</label>
    <label>Cena brutto</label>
</div>

{users.map((user) => ( 
<div className="user-panel-with-infos normalver">
<div className='user-info-column'>
<p className="text-500">{user.Imię}</p>
<p className="text-500">{user.Nazwisko}</p>
</div>
<p className="text-500 score__individual__user">{user.zdawalnosc}%</p>
<p className="text-500 date__individual__user">{user.dzien_rejestracji}/{user.miesiac_rejestracji}/{user.rok_rejestracji}</p>
<p className="text-red-500 is_active__individual__user">{user.status_licencji}</p>
<div style={{ position: 'relative', display: 'flex', alignSelf: 'center' }}>
<button style={{ margin: '5px' }} className="database-fn-btn"><img src={eye_icon}></img></button>
<button style={{ margin: '10px' }} className="database-fn-btn"><img src={download_more_important_info}></img></button>
</div>
</div>
))}

</div>
<div style={{ height: '70px', width: '100%' }}>
</div>
</div>
</>
    )
}

export default Bookkeeping
