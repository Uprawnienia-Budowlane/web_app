import React, {useState, useEffect, useRef} from 'react'
import PFP from '.././photos/ProfilePhoto.png';
import { onSnapshot, 
getFirestore, 
collection, 
CollectionReference,
addDoc,
getDoc, 
getDocs, 
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
import { faPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'

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

    const createUser = async () => {
        await addDoc(usersCollectionRef, { Imię: newName, Nazwisko: newUsername, haslo: newPassword});
    }

    const RegisterBtnFn = (e) => {
        e.preventDefault()
        register()
        createUser()
    }

    useEffect(() => {
        const getUsers = async () => {
          const data = await getDocs(usersCollectionRef);
          setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
    
        getUsers();
      }, []);

return (
<>
<div className="admin_panel_itself">

<h1 className="font-bold text-black text-2xl my-8">Lista użytkowników</h1>

<div className="main-container_on_panel_site">


<div className="container_for_user_options">
<img src={PFP} alt="ProfilePhoto" className="w-20 h-20"/>
<input required onChange={(event) => {setNewName(event.target.value)}} style={{alignSelf: 'center', margin: '5px'}} className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 p-4" placeholder="Imię" type="text" />
<input required onChange={(event) => {setNewUsername(event.target.value)}} style={{alignSelf: 'center', margin: '5px'}} className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 p-4" placeholder="Nazwisko" type="text" />
<input required onChange={(event) => {setRegisterEmail(event.target.value)}} style={{alignSelf: 'center', margin: '5px'}} className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 p-4" placeholder="Adres E-mail" type="text" />
<input required onChange={(event) => {setRegisterPassword(event.target.value)}} style={{alignSelf: 'center', margin: '5px'}} className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 p-4" placeholder="Hasło" type="password" />
<button onClick={RegisterBtnFn} disabled={loading} style={{color: '#fff' }} className="add-user-btn"><FontAwesomeIcon icon={faPlus} /></button>
</div>

<div className="container-for-label-user-etc">
    <label>Nazwa użytkownika</label>
    <label>Zdawalność</label>
    <label>Data Rejestracji</label>
    <label>Status Licencji</label>
</div>

{users.map((user) => { return <div className="user-panel-with-infos">
<img src={PFP} alt="ProfilePhoto" className="w-20 h-20"/>
<p className="text-500 nameusername__individual__user" style={{ marginTop: '0px', marginRight: '100px', marginLeft: '-5px'}}>{user.Imię} {user.Nazwisko}</p>
<p className="text-500 score__individual__user" style={{ marginTop: '0px', marginRight: '120px', marginLeft: '65px'}}>{user.zdawalnosc} %</p>
<p className="text-500 date__individual__user" style={{ marginTop: '0px', marginRight: '100px', marginLeft: '85px'}}>05/03/2021</p>
<p className="text-green-500 is_active__individual__user" style={{ margin: '15px'}}>Aktywna do Września 2021</p>
<button style={{ display: 'flex', flexDirection: 'column', color: '#fff', textAlign: 'center', justifyContent: 'center', alignSelf: 'center'}} className="delete-user-btn"><FontAwesomeIcon icon={faUserMinus} /></button>
</div>
})}

</div>

</div>
</>
    )
}

export default UserListPage
