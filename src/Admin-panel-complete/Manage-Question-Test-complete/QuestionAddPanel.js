import React, {useState, useEffect, useRef} from 'react'
import firebase from "../../firebase";
import { useAuth } from '../../context/AuthContext'
import {ArrowXIcon} from '../../Icons' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUserMinus } from '@fortawesome/free-solid-svg-icons'
import { collection, getDocs, addDoc } from 'firebase/firestore'

const QuestionAddPanel = () => {

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

<h1 className="font-bold text-black text-2xl my-8">Dodaj pytanie</h1>

<div className="main-container_on_panel_site">

<div className="container_for_add_question_first">

<div className="add_question_panel-itself">

</div>

</div>
<div className="container_for_add_question_last">

</div>

</div>

</div>
        </>
    )
}

export default QuestionAddPanel