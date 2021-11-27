import React, {useState, useEffect, useRef} from 'react'
import PFP from '.././photos/ProfilePhoto.png';
import firebase from "../firebase";
import { useAuth } from '../context/AuthContext' 
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

    useEffect(() => {

        getData()

    }, [])

    console.log(data)    

return (
        <>
<div className="admin_panel_itself" style={{position: 'absolute', margin: '5%'}}>

<h1 className="font-bold text-black text-2xl my-8">Lista użytkowników</h1>

<div className="main-container_on_panel_site">


<div className="container_for_user_options">
<input onChange={(event) => {setNewName(event.target.value)}} style={{alignSelf: 'center', margin: '5px'}} className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 p-4" placeholder="Imię" type="text" />
<input onChange={(event) => {setNewUsername(event.target.value)}} style={{alignSelf: 'center', margin: '5px'}} className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 p-4" placeholder="Nazwisko" type="text" />
<input onChange={(event) => {setnewEmailAddress(event.target.value)}} ref={emailRef} style={{alignSelf: 'center', margin: '5px'}} className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 p-4" placeholder="Adres E-mail" type="text" />
<input onChange={(event) => {setnewPassword(event.target.value)}} ref={emailRef} style={{alignSelf: 'center', margin: '5px'}} className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 p-4" placeholder="Hasło" type="password" />
</div>
<div className="container_for_user_options">
<img style={{marginRight: '20px'}} src={PFP} alt="ProfilePhoto" className="w-34 h-34"/>
<button onClick={createUser} disabled={loading} style={{ display: 'flex', flexDirection: 'column', color: '#fff', justifyContent: 'center', alignSelf: 'center', fontSize: '12px', width: '30%'}} className="add-user-btn">Dodaj użytkownika</button>
<button style={{ display: 'flex', flexDirection: 'column', color: '#fff', justifyContent: 'center', alignSelf: 'center', fontSize: '12px', width: '30%'}} className="delete-user-btn">Usuń użytkownika</button>
</div>

<div className="container-for-label-user-etc">
    <label>Nazwa użytkownika</label>
    <label>Zdawalność</label>
    <label>Data Rejestracji</label>
    <label>Status Licencji</label>
</div>

{loader === false && (data.map((ActualUser) => (
<div className="user-panel-with-infos">
<img src={PFP} alt="ProfilePhoto" className="w-34 h-34"/>
<p className="text-500" style={{ marginTop: '0px', marginRight: '100px', marginLeft: '-5px'}}>{ActualUser.Imię} {ActualUser.Nazwisko}</p>
<p className="text-500" style={{ marginTop: '0px', marginRight: '120px', marginLeft: '65px'}}>{ActualUser.zdawalnosc}%</p>
<p className="text-500" style={{ marginTop: '0px', marginRight: '100px', marginLeft: '85px'}}>05/03/2021</p>
<p className="text-green-500" style={{ margin: '15px'}}>Aktywna do Września 2021</p>
</div>
)))}

</div>

</div>
        </>
    )
}

export default UserListPage
