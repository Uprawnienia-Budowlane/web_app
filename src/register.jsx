import React, {Component, useRef, useState, useEffect } from "react";
import HeroImage from "./components/HeroImage";
import { ToastContainer, toast, Zoom, Bounce } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import {Link} from "react-router-dom";
import { AddAlertRounded } from "@material-ui/icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";



export default class register extends Component {

    
        /* Password meter 

         const [registerEmail, setRegisterEmail] = useState("")
        const [registerPassword, setRegisterPassword] = useState("")

        const history = useHistory()

        const Year = new Date()
        let fullyear = Year.getFullYear()

        const Month = new Date()
        let month = Month.getUTCMonth()

        const Day = new Date()
        let day = Day.getDay()

        const passwd_meter = document.getElementById('passwd_meter')

        const passwd_input = document.getElementById('passwd_input')

        if(passwd_input.innerHTML == "") {
            passwd_meter.ariaValueNow = 50
        }

        const RegisterErr = () => {
            toast.error('Wystąpił błąd podczas tworzenia konta')
        }

        const MsgConfirmationRegister = () => (
            <div style={{ margin: '10px' }}>
            <h1>Pomyślnie zarejestrowano!</h1>
            </div>
          )

        */


        /*if(passwordRef.current.value !== passwordConfirmRef.current.value) {
        return setError('Hasło jest nie prawidłowe')error.message
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

            const RegisterBtnFn = (e) => {
            e.preventDefault()
            register()
            createUser()
        }

        }*/

        

        render() {
            return (
            <div className="h-full w-full flex flex-row max-w-screen-2xl">
                <ToastContainer 
                draggable={false}
                transition={Zoom}
                autoClose={8000}
                />
                <div className="flex flex-col rounded-3xl bg-white mx-4 sm:ml-16 sm:mr-10 my-20 h-full w-full">
                    <div className="mt-14 font-black text-center text-3xl sm:text-4xl">UprawieniaBudowlane.eu
                    </div>
                    <p className="mt-6 px-1 sm:mt-14 font-light text-center">Już dziś zacznij zdobywać wiedzę potrzebną do egzaminu zawodowego na uprawnienia budowlane.</p>
                    <p className="mt-3 px-1 font-light text-center">Rozwiązuj testy oraz ucz się najczęściej pojawiających się pytań na egzaminach.</p>
                    <p className="mt-3 px-1 font-light text-center">Zdaj z nami już dziś!</p>
                    <form className="mx-2 sm:mx-8 md:mx-16 my-10 flex flex-col">
                        <div className="w-full flex flex-col md:flex-row">
                            <div className="w-full">
                                <p className="text-blue-500 text-sm mb-2">Imię:</p>
                                <input type='text' onChange=""
                                    className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-full p-4"
                                    placeholder=""/>
                            </div>
                            <div className="sm:w-10"/>
                            <div className="w-full">
                                <p className="text-blue-500 mt-6 md:mt-0 text-sm mb-2">Nazwisko:</p>
                                <input type='text' onChange=""
                                    className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-full p-4"
                                    placeholder=""/>
                            </div>
                        </div>
                        <div className="w-full flex flex-col-reverse md:flex-row mt-6">
                            <div className="w-full">
                                <p className="text-blue-500 mt-6 md:mt-0 text-sm mb-2">Hasło:</p>
                                <input id="passwd_input" onChange=""
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
                                    className="my-auto border h-3 w-full rounded-2xl"/>
                                    <p className="text-green-500 font-medium text-sm ml-2"></p>
                                </div>
                            </div>
                            <div className="md:w-10"/>
                            <div className="w-full">
                                <p className="text-blue-500 my-auto text-sm mb-2">Adres e-mail:</p>
                                <input type='email' onChange=""
                                className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-full p-4"
                                type="email" placeholder=""/>
                            </div>
                        </div>
                        <div className="w-full flex flex-col md:flex-row mt-4">
                            <div className="w-full">
                                <p className="text-blue-500 mt-6 md:mt-0 text-sm mb-2">Powtórz hasło:</p>
                                <input onChange=""
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
                                    className="my-auto border h-3 w-full rounded-2xl"/>
                                    <p className="text-green-500 font-medium text-sm ml-2"></p>
                                </div>
                            </div>
                            <div className="md:w-10"/>
                            <div className="w-full">
                                <p className="text-blue-500 mt-6 md:mt-0 text-sm mb-2">Klucz:</p>
                                <input
                                    className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-full p-4"
                                    placeholder=""/>
                            </div>
                        </div>
                        <button
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
}
