import React, { useRef, useState, useEffect } from "react";
import HeroImage from "./components/HeroImage";
import {Link} from "react-router-dom";
import {
createUserWithEmailAndPassword,
onAuthStateChanged,
} from "firebase/auth";
import { doc } from 'firebase/firestore'
import { initializeApp } from "@firebase/app";
import { onSnapshot, 
    getFirestore, 
    collection, 
    CollectionReference,
    addDoc,
    getDoc, 
    getDocs, 
    query, 
    DocumentReference } from "@firebase/firestore";
import { auth, createUserDocument } from "./firebase";
import { AddAlertRounded } from "@material-ui/icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";
import { firebaseConfig } from './firebase'
import firestore from 'firebase/firestore'
import { app } from "firebase-admin";

export default function Register() {

        const passwordRef = useRef()
        const passwordConfirmRef = useRef()

        const db = getFirestore()

        const usersCollectionRef = collection(db, "użytkownicy");

        const [error, setError] = useState('')
      
        const [newName, setNewName] = useState("")

        const [users, setUsers] = useState("")

        useEffect(() => {
            const getUsers = async () => {
              const data = await getDocs(usersCollectionRef);
              setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            }; getUsers();
        }, [])

        const createUser = async () => {

        await addDoc(usersCollectionRef, {Imię: newName, 
        Nazwisko: newUsername,  
        plec: 'nie_ustawiono',
        zdawalnosc: 0, 
        rok_rejestracji: fullyear, 
        miesiac_rejestracji: month, 
        dzien_rejestracji: day});
                
        }
        
        const [newUsername, setNewUsername] = useState("")
        const [newEmailAddress, setnewEmailAddress] = useState("")
        const [newPassword, setnewPassword] = useState("")

        const [actualUser, setActualUser] = useState({})
        

        onAuthStateChanged(auth, (actualUser) => {
            setActualUser(actualUser)
        })

        /* */

        const [registerEmail, setRegisterEmail] = useState("")
        const [registerPassword, setRegisterPassword] = useState("")

        const history = useHistory()

        /* year/month/day set*/

        const Year = new Date()
        let fullyear = Year.getFullYear()

        const Month = new Date()
        let month = Month.getUTCMonth()

        const Day = new Date()
        let day = Day.getDay()

        /* */

        /* Password meter 

        const passwd_meter = document.getElementById('passwd_meter')

        const passwd_input = document.getElementById('passwd_input')

        if(passwd_input.innerHTML == "") {
            passwd_meter.ariaValueNow = 50
        }

        */

        const register = async () => {
            try {
            const user = await createUserWithEmailAndPassword(auth, 
            registerEmail, 
            registerPassword
            )

            history.push('/login')
            
            } catch (error) {
                setError(error.message)
            }

        }

        /*if(passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError('Hasło jest nie prawidłowe')
        } */

            /* if(passwordRef.current.value !== passwordConfirmRef.current.value) {
                return setError('Hasło jest nie prawidłowe')
            }

            if(tokenRef.current.value == '') {
                return setError('Proszę wprowadzić token')
            }8/

            }

        }
        */

        /*
            try {
                setError('')
                setLoading(true)
                await signup(emailRef.current.value, passwordRef.current.value)

            } catch {
                setError('Wystąpił błąd przy tworzeniu konta')
            }
            setLoading(false)
            // {actualUser?.email}
        }*/

        const RegisterBtnFn = (e) => {
            e.preventDefault()
            register()
            createUser()
        }

        return (
            <div className="h-full w-full flex flex-row max-w-screen-2xl">
                <div className="flex flex-col rounded-3xl bg-white mx-4 sm:ml-16 sm:mr-10 my-20 h-full w-full">
                    <div className="mt-14 font-black text-center text-3xl sm:text-4xl">UprawieniaBudowlane.eu
                    </div>
                    <p className="mt-6 px-1 sm:mt-14 font-light text-center">Już dziś zacznij zdobywać wiedzę potrzebną do egzaminu zawodowego na uprawnienia budowlane.</p>
                    <p className="mt-3 px-1 font-light text-center">Rozwiązuj testy oraz ucz się najczęściej pojawiających się pytań na egzaminach.</p>
                    <p className="mt-3 px-1 font-light text-center">Zdaj z nami już dziś!</p>
                    {error && <h1 className="text-red-500 mt-6 md:mt-0 text-sm mb-2" style={{ marginTop: '10px', textAlign: 'center' }}>{error}</h1>}
                    <form className="mx-2 sm:mx-8 md:mx-16 my-10 flex flex-col">
                        <div className="w-full flex flex-col md:flex-row">
                            <div className="w-full">
                                <p className="text-blue-500 text-sm mb-2">Imię:</p>
                                <input type='text' onChange={(event) => {setNewName(event.target.value)}}
                                    className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-full p-4"
                                    placeholder=""/>
                            </div>
                            <div className="sm:w-10"/>
                            <div className="w-full">
                                <p className="text-blue-500 mt-6 md:mt-0 text-sm mb-2">Nazwisko:</p>
                                <input type='text' onChange={(event) => {setNewUsername(event.target.value)}}
                                    className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-full p-4"
                                    placeholder=""/>
                            </div>
                        </div>
                        <div className="w-full flex flex-col-reverse md:flex-row mt-6">
                            <div className="w-full">
                                <p className="text-blue-500 mt-6 md:mt-0 text-sm mb-2">Hasło:</p>
                                <input id="passwd_input" ref={passwordRef} onChange={(event) => {setRegisterPassword(event.target.value)}}
                                    className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-full p-4"
                                    type="password" placeholder=""/>
                                <div className="mt-1 flex flex-row">
                                    <meter id="passwd_meter"
                                     min="0" 
                                     max="100"
                                     low="33" 
                                     high="66" 
                                     optimum="80"
                                     value="0"
                                    className="my-auto border h-3 w-full rounded-2xl" style={{margin: '15px 0px'}}/>
                                    <p className="text-green-500 font-medium text-sm ml-2"></p>
                                </div>
                            </div>
                            <div className="md:w-10"/>
                            <div className="w-full">
                                <p className="text-blue-500 my-auto text-sm mb-2">Adres e-mail:</p>
                                <input type='email' onChange={(event) => {setRegisterEmail(event.target.value)}} 
                                className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-full p-4"
                                type="email" placeholder=""/>
                            </div>
                        </div>
                        <div className="w-full flex flex-col md:flex-row mt-4">
                            <div className="w-full" style={{display: 'none'}}>
                                <p className="text-blue-500 mt-6 md:mt-0 text-sm mb-2">Powtórz hasło:</p>
                                <input ref={passwordConfirmRef} onChange={(event) => {setRegisterPassword(event.target.value)}}
                                    className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-full p-4"
                                    type="password" placeholder=""/>
                            </div>
                            <div className="md:w-10"/>
                            <div className="w-full" style={{display: 'none'}}>
                                <p className="text-blue-500 mt-6 md:mt-0 text-sm mb-2">Klucz:</p>
                                <input
                                    className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-full p-4"
                                    placeholder=""/>
                            </div>
                        </div>
                        <button onClick={RegisterBtnFn} 
                            className="bg-blue-500 mt-8 mx-auto h-12 rounded-2xl text-white font-medium px-10 focus:outline-none">Rejestruj
                            konto i aktywuj klucz
                        </button>
                        <div className="mt-5 flex flex-row mx-auto">
                            <Link className="font-light text-center mr-1" to="/login">Jeśli
                                posiadasz już konto przejdz do <span className="font-medium">logowania</span></Link>
                        </div>
                        <div className="mt-2 flex flex-row mx-auto">
                            <p className="font-light text-center mr-1">Nie posiadasz jeszcze licencji? <Link className="font-medium" to="#">Kup klucz licencyjny</Link></p>
                        </div>
                    </form>
                </div>
                <HeroImage />
            </div>
        )
    
}
