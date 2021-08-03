import React from "react";
import HeroImage from "./components/HeroImage";
import {Link} from "react-router-dom";

class Login extends React.Component {
    render(props) {
        return (
            <div className="h-full w-full flex flex-row max-w-screen-2xl">
                <div className="flex flex-col rounded-3xl bg-white mx-4 sm:ml-16 sm:mr-10 my-20 h-full w-full">
                    <div className="mt-14 font-black text-center text-3xl sm:text-4xl">UprawieniaBudowlane.eu</div>
                    <p className="mt-6 px-1 sm:mt-14 font-light text-center">Już dziś zacznij zdobywać wiedzę
                        potrzebną do egzaminu
                        zawodowego na uprawnienia budowlane.</p>
                    <p className="mt-1 px-1 font-light text-center">Rozwiązuj testy oraz ucz się najczęściej
                        pojawiających się
                        pytań na egzaminach.</p>
                    <p className="mt-1 px-1 font-light text-center">Zdaj z nami już dziś!</p>

                    <p className="mt-4 px-1 font-light text-center">Jeśli chciałbys przetestowc wersję
                        demonstracyjną zaloguj się podając:</p>
                    <p className="mt-1 font-light text-center mr-1">Adres email: <span
                        className="font-medium">demo@demo.pl</span></p>
                    <p className="mt-1 font-light text-center mr-1">Hasło: <span
                        className="font-medium">demo</span></p>

                    <div className="mx-2 sm:mx-8 md:mx-16 my-10 flex flex-col">
                        <div className="mx-auto w-96 flex flex-col">
                            <div className="w-full">
                                <p className="text-blue-500 text-sm mb-2">Adres e-mail:</p>
                                <input
                                    className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-full p-4"
                                    placeholder=""/>
                            </div>
                            <div className="mt-6 w-full">
                                <p className="text-blue-500 text-sm mb-2 mt-6 md:mt-0">Hasło:</p>
                                <input
                                    className="border-blue-500 bg-blue-50 rounded-2xl border outline-none h-12 w-full p-4"
                                    type="password" placeholder=""/>
                            </div>
                        </div>
                        <button
                            className="bg-blue-500 mt-12 mx-auto h-12 w-72 rounded-2xl text-white font-medium px-10 focus:outline-none">Zaloguj
                        </button>
                        <Link className="mt-12 font-light text-center" to="/reset">Nie pamiętasz hasła?</Link>
                        <Link className="mt-2 font-light text-center" to="#">Sprawdź jak odzyskać dostęp</Link>
                    </div>

                </div>
                <HeroImage />
            </div>
        )
    }
}

export default Login;