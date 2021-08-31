import React, {useState} from "react";

import PFP from './photos/ProfilePhoto.png';
import {BlueImgIcon, ClockIcon, QuestionMarkInCirceIcon, ShareIcon} from "./Icons";


const GenderSelector = (props) => <button
        className={"mt-2 rounded-2xl border border-blue-500 flex flex-row justify-between text-sm py-3 px-4 focus:outline-none" + (props.selected ? ' text-blue-500' : ' text-black')} onClick={() => props.onClick()}>
        <p>{props.gender}</p>
        <div className={"w-4 h-4 bg-blue-500 my-auto rounded-full ml-2" + (props.selected ? '' : ' opacity-0')}/>
    </button>
;

const Profile = () => {
    const [gender, setGender] = useState(0);
    return (
        <div className="h-full w-full rounded-3xl bg-white flex flex-col xl:flex-row">
            <div className="xl:border-r border-gray-300">
                <div className="m-8 flex flex-col">
                    <div className="w-80">
                        <div className="flex flex-row">
                            <img src={PFP} alt="ProfilePhoto" className="w-28 h-28"/>
                            <div className="ml-4 mt-7 flex flex-col">
                                <h1 className="font-medium text-2xl">Adam Kowalski</h1>
                                <p className="text-blue-500">Edytuj profil</p>
                            </div>
                        </div>

                        <div className="bg-blue-200 h-full">
                            <p className="font-medium text-blue-500 px-6 py-5">Personalne Statystyki</p>
                        </div>

                        <div className="flex flex-row justify-between border-b border-opacity-50 text-sm">
                            <p className="pl-6 my-5 text-gray-500">Stopień zdawalności
                                egzaminów</p>
                            <p className=" my-auto pr-6 text-green-600 font-bold">80%</p>
                        </div>
                        <div className="flex flex-row justify-between border-b border-opacity-50 text-sm">
                            <p className="pl-6 my-5 text-gray-500">Stopień zdawalności z nauki</p>
                            <p className=" my-auto pr-6 text-green-600 font-bold">80%</p>
                        </div>
                        <div className="flex flex-row justify-between">
                            <div className="my-5 flex flex-row ml-6 text-sm">
                                <div className="flex-shrink-0"><ClockIcon/></div>
                                <p className="pl-4 my-auto text-gray-500">Czas spędzony w
                                    aplikacji:</p>
                            </div>
                            <p className="my-auto pr-6 text-blue-500 text-sm">34h</p>
                        </div>

                        <div className="bg-blue-200 h-full mt-1">
                            <p className="font-medium text-blue-500 px-6 py-5">Różne opcje</p>
                        </div>
                        <div className="flex flex-row justify-between border-b border-opacity-50">
                            <div className="my-5 flex flex-row ml-6">
                                <ShareIcon/>
                                <p className="pl-5 my-auto text-gray-500 text-sm">Zaproś znajomego</p>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between border-b border-opacity-50">
                            <div className="my-5 flex flex-row ml-6">
                                <QuestionMarkInCirceIcon/>
                                <p className="pl-5 my-auto text-gray-500 text-sm">Pomoc</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="m-8 flex flex-col flex-grow">
                <p className="font-medium text-blue-500">Edycja profilu</p>
                <div className="mt-12 flex flex-col md:flex-row">
                    <div className="flex flex-shrink-0">
                        <img src={PFP} alt="ProfilePhoto" className="w-28 h-28"/>
                        <div className="ml-16 mt-3 absolute"><BlueImgIcon/></div>
                    </div>

                    <div className="mx-auto md:ml-8 w-full md:mr-24">

                        <div className="flex flex-col md:flex-row md:space-x-8 my-6">
                            <div className="w-full">
                                <p className="ml-2 mb-1 text-sm">Imię:</p>
                                <input
                                    className="border-blue-500 rounded-2xl border outline-none h-12 w-full p-4"
                                    placeholder=""/>
                            </div>
                            <div className="w-full">
                                <p className="mt-6 md:mt-0 ml-2 mb-1 text-sm">Nazwisko:</p>
                                <input
                                    className="border-blue-500 rounded-2xl border outline-none h-12 w-full p-4"
                                    placeholder=""/>
                            </div>
                        </div>

                        <div className="flex flex-col my-6">
                            <p className="ml-2 mb-1 text-sm">Płeć:</p>
                            <div className="flex flex-col md:flex-row md:space-x-4">
                                <GenderSelector gender={'Mężczyzna'} selected={gender === 0} onClick={() => setGender(0)}/>
                                <GenderSelector gender={'Kobieta'} selected={gender === 1} onClick={() => setGender(1)}/>
                                <GenderSelector gender={'Śmigłowiec szturmowy AH-64 Apache'} selected={gender === 2} onClick={() => setGender(2)}/>

                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:space-x-8 my-6">
                            <div className="w-full">
                                <p className="ml-2 mb-1 text-sm">Nowe hasło:</p>
                                <input
                                    className="border-blue-500 rounded-2xl border outline-none h-12 w-full p-4"
                                    placeholder=""/>
                            </div>
                            <div className="w-full">
                                <p className="mt-6 md:mt-0 ml-2 mb-1 text-sm">Potwierdź nowe hasło:</p>
                                <input
                                    className="border-blue-500 rounded-2xl border outline-none h-12 w-full p-4"
                                    placeholder=""/>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-8 my-6">
                            <div className="w-full">
                                <p className="ml-2 mb-1 text-sm">Zmień e-mail:</p>
                                <input
                                    className="border-blue-500 rounded-2xl border outline-none h-12 w-full p-4"
                                    placeholder=""/>

                            </div>
                            <div className="w-full">
                                <p className="mt-6 md:mt-0 ml-2 mb-1 text-sm">Potwierdź nowy e-mail:</p>
                                <input
                                    className="border-blue-500 rounded-2xl border outline-none h-12 w-full p-4"
                                    placeholder=""/>
                            </div>
                        </div>
                        <div className="mr-8 flex flex-row justify-start">
                            <button
                                className="mt-20 bg-blue-500 h-12 w-full md:w-1/2 rounded-2xl text-white font-medium px-10 focus:outline-none">Zapisz
                                dane
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>);
}

export default Profile;