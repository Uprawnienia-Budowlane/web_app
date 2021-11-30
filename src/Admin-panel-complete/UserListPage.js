import React, {useState, useEffect, useRef} from 'react'
import PFP from '.././photos/ProfilePhoto.png';
import firebase from "../firebase";
import { useAuth } from '../context/AuthContext'
import {ArrowXIcon} from '../Icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'
import { collection, getDocs, addDoc } from 'firebase/firestore'

const UserListPage = () => {

    const [data, setdata] = useState([])
    const [loader, setloader] = useState(true)

    function getData() {
        firebase.db.onSnapshot((querySnapshot) => {
            const items = []
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setdata(items)
            setloader(false)
        })
    }

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const [newName, setNewName] = useState("")
    const [newUsername, setNewUsername] = useState("")
    const [newEmailAddress, setnewEmailAddress] = useState("")
    const [newPassword, setnewPassword] = useState("")

    const { signup } = useAuth()

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const createUser = async () => {
            
        await firebase.db.add({Imię: newName, Nazwisko: newUsername, email: newEmailAddress, haslo: newPassword})

      }

    /*const deleteUser = async () => {
            
        await firebase.db.doc('').delete({Imię: newName, Nazwisko: newUsername, email: newEmailAddress, haslo: newPassword})

      }*/

    useEffect(() => {

        getData()

    }, [])

    console.log(data)    

return (
        <>
<div className="admin_panel_itself">

<h1 className="font-bold text-black text-2xl my-8">Lista użytkowników</h1>

<div className="main-container_on_panel_site">


<div className="container_for_user_options">
<img style={{marginRight: '20px'}} src={PFP} alt="ProfilePhoto" className="w-20 h-20"/>
<input required onChange={(event) => {setNewName(event.target.value)}} style={{alignSelf: 'center', margin: '5px'}} className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 p-4" placeholder="Imię" type="text" />
<input required onChange={(event) => {setNewUsername(event.target.value)}} style={{alignSelf: 'center', margin: '5px'}} className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 p-4" placeholder="Nazwisko" type="text" />
<input required onChange={(event) => {setnewEmailAddress(event.target.value)}} ref={emailRef} style={{alignSelf: 'center', margin: '5px'}} className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 p-4" placeholder="Adres E-mail" type="text" />
<input required onChange={(event) => {setnewPassword(event.target.value)}} ref={emailRef} style={{alignSelf: 'center', margin: '5px'}} className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 p-4" placeholder="Hasło" type="password" />
<button onClick={createUser} disabled={loading} style={{color: '#fff' }} className="add-user-btn"><FontAwesomeIcon icon={faPlus} /></button>
</div>

<div className="container-for-label-user-etc">
    <label>Nazwa użytkownika</label>
    <label>Zdawalność</label>
    <label>Data Rejestracji</label>
    <label>Status Licencji</label>
</div>

{loader === false && (data.map((ActualUser) => (
<div className="user-panel-with-infos">
<img src={PFP} alt="ProfilePhoto" className="w-20 h-20"/>
<p className="text-500" style={{ marginTop: '0px', marginRight: '100px', marginLeft: '-5px'}}>{ActualUser.Imię} {ActualUser.Nazwisko}</p>
<p className="text-500" style={{ marginTop: '0px', marginRight: '120px', marginLeft: '65px'}}>{ActualUser.zdawalnosc}%</p>
<p className="text-500" style={{ marginTop: '0px', marginRight: '100px', marginLeft: '85px'}}>05/03/2021</p>
<p className="text-green-500" style={{ margin: '15px'}}>Aktywna do Września 2021</p>
<button style={{ display: 'flex', flexDirection: 'column', color: '#fff', textAlign: 'center', justifyContent: 'center', alignSelf: 'center'}} className="delete-user-btn"><FontAwesomeIcon icon={faUserMinus} /></button>
</div>
)))}

</div>

</div>
        </>
    )
}

export default UserListPage
