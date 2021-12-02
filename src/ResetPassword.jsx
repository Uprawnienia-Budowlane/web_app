import React, {useState, useRef} from "react";
import HeroImage from "./components/HeroImage";
import {Link} from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { 
onSnapshot, 
getFirestore, 
collection, 
CollectionReference,
addDoc,
getDoc, 
getDocs, 
query, 
DocumentReference } from "@firebase/firestore";
import {
getAuth,
createUserWithEmailAndPassword,
onAuthStateChanged,
sendPasswordResetEmail,
} from "firebase/auth";
import { auth, createUserDocument } from "./firebase";

export default function ResetPassword() {

    const emailRef = useRef()

    const [Error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    /*async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await sendPasswordResetEmail(emailRef.current.value)
            setMessage('Sprawdź swoją skrzynkę pocztową, żeby zobaczeć instrukcje resetowania hasła')
        } catch {
            setError('Wystąpił błąd przy próbie zresetowania hasła')
        }
        setLoading(false)

        onSubmit={handleSubmit}
    }*/
    
        return (
            <div className="h-full w-full flex flex-row max-w-screen-2xl">
                <div className="flex flex-col rounded-3xl bg-white mx-4 sm:ml-16 sm:mr-10 my-20 h-full w-full">
                    <div className="mt-14 font-black text-center text-3xl sm:text-4xl">UprawieniaBudowlane.eu</div>
                    <p className="mt-6 px-1 sm:mt-14 font-medium text-center">Nie pamiętasz hasła?</p>
                    <p className="mt-.5 px-1 font-medium text-center">Tutaj możesz je odzyskać</p>
                    <p className="mt-3 px-1 font-light text-center">Wpisz adres e-mail na który rejestrowałeś konto i do którego chcesz odzyskać dostęp</p>
                    {message && <p className="text-blue-500 text-sm mb-2">{message}</p>}
                    <form className="mx-2 sm:mx-8 md:mx-16 mt-24 flex flex-col text-center">
                        <div className="mx-auto w-80 max-w-full flex flex-col">
                            <div className="w-full">
                                <p className="text-blue-500 text-sm mb-2">Adres e-mail:</p>
                                <input ref={emailRef}
                                    className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-full p-4"
                                    placeholder=""/>
                            </div>
                        </div>
                        <button onClick=""
                            className="bg-blue-500 mt-3 mx-auto h-12 w-80 max-w-full rounded-2xl text-white font-medium px-10 focus:outline-none">Zresetuj hasło
                        </button>
                        <Link to='/login' className="mt-36 mb-14 font-light text-center">Powróć do logowania</Link>
                    </form>
                </div>
                <HeroImage />
            </div>
        )
    }

