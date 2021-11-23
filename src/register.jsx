import React, { useRef, useState, useEffect } from "react";
import HeroImage from "./components/HeroImage";
import {Link} from "react-router-dom";
import firebase from "./firebase";
import { useAuth } from './context/AuthContext' 
import { AddAlertRounded } from "@material-ui/icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function Register() {

        const emailRef = useRef()
        const passwordRef = useRef()
        const tokenRef = useRef()
        const passwordConfirmRef = useRef()

        const { signup, token } = useAuth()

        const [error, setError] = useState('')
        const [loading, setLoading] = useState(false)
      
        const [newName, setNewName] = useState("")
        const [newUsername, setNewUsername] = useState("")
        const [newEmailAddress, setnewEmailAddress] = useState("")
        const [newPassword, setnewPassword] = useState("")

        const [data, setdata] = useState([])
        const [loader, setloader] = useState(true)

        const createUser = async () => {
            
          await firebase.db.add({Imię: newName, Nazwisko: newUsername, email: newEmailAddress, haslo: newPassword})

        }

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

    useEffect(() => {

        getData()

    }, [])

        async function handleSubmit(e) {
            e.preventDefault()

            if(passwordRef.current.value !== passwordConfirmRef.current.value) {
                return setError('Hasło jest nie prawidłowe')
            }

            if(tokenRef.current.value == '') {
                return setError('Proszę wprowadzić token')
            }

            try {
                setError('')
                setLoading(true)
                await signup(emailRef.current.value, passwordRef.current.value)

            } catch {
                setError('Wystąpił błąd przy tworzeniu konta')
            }
            setLoading(false)
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
                    <form onSubmit={handleSubmit} className="mx-2 sm:mx-8 md:mx-16 my-10 flex flex-col">
                        <div className="w-full flex flex-col md:flex-row">
                            <div className="w-full">
                                <p className="text-blue-500 text-sm mb-2">Imię:</p>
                                <input type='text' onChange={(event) => {
                                    setNewName(event.target.value)
                                }}
                                    className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-full p-4"
                                    placeholder=""/>
                            </div>
                            <div className="sm:w-10"/>
                            <div className="w-full">
                                <p className="text-blue-500 mt-6 md:mt-0 text-sm mb-2">Nazwisko:</p>
                                <input type='text' onChange={(event) => {
                                    setNewUsername(event.target.value)
                                }}
                                    className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-full p-4"
                                    placeholder=""/>
                            </div>
                        </div>
                        <div className="w-full flex flex-col-reverse md:flex-row mt-6">
                            <div className="w-full">
                                <p className="text-blue-500 mt-6 md:mt-0 text-sm mb-2">Hasło:</p>
                                <input  onChange={(event) => {
                                    setnewPassword(event.target.value)
                                }} ref={emailRef} ref={passwordRef}
                                    className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-full p-4"
                                    type="password" placeholder=""/>
                                <div className="mt-1 flex flex-row">
                                    <div
                                        className="my-auto border h-3 w-full bg-gradient-to-r from-white to-green-500 rounded-2xl"/>
                                    <p className="text-green-500 font-medium text-sm ml-2">Silne</p>
                                </div>
                            </div>
                            <div className="md:w-10"/>
                            <div className="w-full">
                                <p className="text-blue-500 my-auto text-sm mb-2">Adres e-mail:</p>
                                <input type='email' onChange={(event) => {
                                    setnewEmailAddress(event.target.value)
                                }} ref={emailRef}
                                    className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-full p-4"
                                    type="email" placeholder=""/>
                            </div>
                        </div>
                        <div className="w-full flex flex-col md:flex-row mt-4">
                            <div className="w-full">
                                <p className="text-blue-500 mt-6 md:mt-0 text-sm mb-2">Powtórz hasło:</p>
                                <input ref={passwordConfirmRef}
                                    className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-full p-4"
                                    type="password" placeholder=""/>
                            </div>
                            <div className="md:w-10"/>
                            <div className="w-full">
                                <p className="text-blue-500 mt-6 md:mt-0 text-sm mb-2">Klucz:</p>
                                <input ref={tokenRef}
                                    className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-full p-4"
                                    placeholder=""/>
                            </div>
                        </div>
                        <button onClick={createUser} disabled={loading}
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
