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

import { auth, createUserDocument } from "../../firebase";
import {ArrowXIcon} from '../../Icons' 
import { useHistory } from "react-router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserMinus, faUserEdit ,faImage } from '@fortawesome/free-solid-svg-icons'

const Payments = () => {

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

<h1 className="font-bold text-black text-2xl my-8">Płatności</h1>

<input type="text" placeholder='Wyszukaj specyficznej płatności' className="main_transaction-searcher"></input>

<div className="main-container_on_panel_site">

<div className="container-for-label-user-etc">
    <label>Imię</label>
    <label>Numer transakcji</label>
    <label>Data transakcji</label>
    <label>Opis transakcji</label>
</div>

{users.map((user) => ( 
<div className="user-panel-with-infos normalver">
<img src={PFP} alt="ProfilePhoto" className="w-20 h-20 img-mobile" />
<div className='user-info-column'>
<p className="text-500">{user.Imię}</p>
<p className="text-500">{user.Nazwisko}</p>
</div>
<p className="text-500 score__individual__user">{user.zdawalnosc}%</p>
<p className="text-500 date__individual__user">{user.dzien_rejestracji}/{user.miesiac_rejestracji}/{user.rok_rejestracji}</p>
<p className="text-red-500 is_active__individual__user">{user.status_licencji}</p>
<div style={{ position: 'relative', display: 'flex', alignSelf: 'center' }}>
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

export default Payments
