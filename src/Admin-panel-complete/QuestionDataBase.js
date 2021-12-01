import React, {useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import firebase from "../firebase";
import { useAuth } from '../context/AuthContext'
import {ArrowXIcon} from '../Icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'
import { collection, getDocs, addDoc } from 'firebase/firestore'

const QuestionDataBase = () => {

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

<h1 className="font-bold text-black text-2xl my-8">Baza pytań</h1>

<div className="main-container_on_panel_site">

<div className="container_for_all_options_base">
<div className="container_for_all_nav_iself">
<button className="nav_base_option active_btn"><a>Tryb nauki</a></button>
<button className="nav_base_option"><a>Tryb egzaminu pisemnego</a></button>
<input type="search" className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-100 p-4 search_input_base"
placeholder="Szukaj strony"/>
<button className="nav_base_option add_something_btn_base"><Link to="/panel-administratora/baza-pytan/dodaj-pytanie">Dodaj pytanie</Link></button>
<button className="nav_base_option others_base"><a>Baza opracowań</a></button>
</div>
</div>

<div className="database_questions-option-panel">

<div className="question-panel-with-infos">

<p className="text-500 number_question" style={{ alignSelf: 'center' }}>1</p>
<p className="text-500" style={{ alignSelf: 'center' }}>Lorem ipsum</p> 
<div className="button-container-base-option">
<button onClick={createUser} disabled={loading} style={{color: '#fff' }} className="add-user-btn"><FontAwesomeIcon icon={faPlus} /></button>
<button onClick={createUser} disabled={loading} style={{color: '#fff' }} className="add-user-btn"><FontAwesomeIcon icon={faPlus} /></button>
<button onClick={createUser} disabled={loading} style={{color: '#fff' }} className="add-user-btn"><FontAwesomeIcon icon={faPlus} /></button>
<button onClick={createUser} disabled={loading} style={{color: '#fff' }} className="add-user-btn"><FontAwesomeIcon icon={faPlus} /></button>
<button onClick={createUser} disabled={loading} style={{color: '#fff' }} className="add-user-btn"><FontAwesomeIcon icon={faPlus} /></button>
</div>
</div>

</div>

</div>

</div>
        </>
    )
}

export default QuestionDataBase
