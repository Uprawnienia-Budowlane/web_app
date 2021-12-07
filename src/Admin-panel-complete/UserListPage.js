import React, {useState, useEffect, useRef} from 'react'
import PFP from '.././photos/ProfilePhoto.png';
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
import {
createUserWithEmailAndPassword,
onAuthStateChanged,
} from "firebase/auth";

import { auth, createUserDocument } from "../firebase";
import {ArrowXIcon} from '../Icons' 
import { useHistory } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserMinus, faImage } from '@fortawesome/free-solid-svg-icons'

const UserListPage = () => {

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
<div className="admin_panel_itself">

<h1 className="font-bold text-black text-2xl my-8">Lista użytkowników</h1>

<div className="container_for_user_options">
<img src={PFP} alt="ProfilePhoto" className="w-20 h-20" style={{alignSelf: 'center'}}/>
<input required onChange={(event) => {setNewName(event.target.value)}} style={{alignSelf: 'center', margin: '5px'}} className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 p-4" placeholder="Imię" type="text" />
<input required onChange={(event) => {setNewUsername(event.target.value)}} style={{alignSelf: 'center', margin: '5px'}} className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 p-4" placeholder="Nazwisko" type="text" />
<input required onChange={(event) => {setRegisterEmail(event.target.value)}} style={{alignSelf: 'center', margin: '5px'}} className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 p-4" placeholder="Adres E-mail" type="text" />
<input required onChange={(event) => {setRegisterPassword(event.target.value)}} style={{alignSelf: 'center', margin: '5px'}} className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 p-4" placeholder="Hasło" type="password" />
<button onClick={RegisterBtnFn} disabled={loading} style={{display: 'flex', justifyContent: 'center', color: '#3B82F6', width:'220px', alignSelf: 'center' }} className="rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-12 w-14 hover:bg-blue-50 transition-colors duration-200 add-user-btn"><FontAwesomeIcon icon={faPlus} /><a style={{alignSelf: 'center'}}>Dodaj użytkownika</a></button>
</div>

<div className="main-container_on_panel_site">

<div className="container-for-label-user-etc">
    <label>Zdjęcie</label>
    <label>Nazwa użytkownika</label>
    <label>Zdawalność</label>
    <label>Data Rejestracji</label>
    <label>Status Licencji</label>
    <label>Usuń użytkownika</label>
</div>

{users.map((user) => ( 
<div className="user-panel-with-infos normalver">
<img src={PFP} alt="ProfilePhoto" className="w-20 h-20 img-mobile" />
<p className="text-500 nameusername__individual__user">{user.Imię} {user.Nazwisko}</p>
<p className="text-500 score__individual__user">{user.zdawalnosc}%</p>
<p className="text-500 date__individual__user">{user.dzien_rejestracji}/{user.miesiac_rejestracji}/{user.rok_rejestracji}</p>
<p className="text-red-500 is_active__individual__user">{user.status_licencji}</p>
<button onClick={() => {deleteUser(user.id, toast.info(<MsgDelUser />))}} style={{ display: 'flex', color: '#3B82F6', textAlign: 'center', justifyContent: 'center', alignSelf: 'center', margin: '10px', width:'220px'}} className="rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-14 w-14 hover:bg-blue-50 transition-colors duration-200 delete-user-btn"><FontAwesomeIcon icon={faUserMinus} /><a style={{ alignSelf: 'center' }}>Usuń użytkownika</a></button>
</div>
))}

</div>
<div style={{ height: '70px', width: '100%' }}>
</div>
</div>
</>
    )
}

export default UserListPage
