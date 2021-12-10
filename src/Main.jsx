import React, {useState, useEffect} from "react";
import {
    Chart2Icon,
    ChildWithBookIcon,
    DocumentsIcon,
    DocumentWithHeartIcon,
    HandWithGearIcon,
    SaleIcon,
    TestIcon
} from "./Icons";
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import MainCharts from "./MainCharts";
import MainCard from "./components/MainCard";
import {useHistory} from "react-router-dom";
import Dropdown from "./components/Dropdown";
import firebase from "./firebase";
import { collection, getDocs } from "@firebase/firestore";
import { db } from "./firebase";

const Main = () => {

    const [username, setUsername] = useState([])
    const [loader, setloader] = useState(true)
    
    const [category, setCategory] = useState(0);
    const [interval, setInterval] = useState(0);
    const [bar, setBar] = useState(false);
    const history = useHistory();

    return (
        <div className="h-full w-full rounded-3xl bg-white flex flex-row justify-between md:flex-nowrap">
            <div className="flex flex-col mx-auto px-2 my-8 sm:mx-8 w-1/2 dashboard-css-fix">
                <p className="text-blue-500">Uprawnienia budowlane</p>
                    <h1 className="font-bold text-2xl">
                        Witaj, użytkowniku
                    </h1>
                <div className=" mt-6 shadow-md rounded-3xl bg-blue-500 flex flex-row justify-between cursor-pointer headbox-dashboard-css-fix dark-mode-color_widget"
                     onClick={() => history.push('/speciality')}>
                    <h1 className="text-2xl 2xl:text-3xl text-white font-bold mx-2 sm:mx-10 my-auto">Wybierz swoją
                        specjalność</h1>
                    <div className="mr-4 sm:mr-16 my-4">
                        <HandWithGearIcon/>
                    </div>
                </div>

                <div className="mt-6 mb-3 mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
                    <MainCard icon={TestIcon} title={"Egzamin pisemny"} link={"/written"}/>
                    <MainCard icon={ChildWithBookIcon} title={"Egzamin ustny"} link={"/oral"}/>
                    <MainCard icon={DocumentsIcon} title={"Akty prawne"} link={"/acts"}/>
                    <MainCard icon={Chart2Icon} title={"Statystyki"} link={"/stats"}/>
                    <MainCard icon={DocumentWithHeartIcon} title={"Ulubione pytania"} link={"/favorite"}/>
                    <MainCard icon={SaleIcon} title={"Pakiety promocyjne"} link={"/shop"}/>
                </div>
            </div>

            <div className="my-6 mx-2 md:mr-8 shadow-md rounded-3xl bg-blue-500 flex-col w-1/2 stats-mobile-fix-css dark-mode-color_widget">
                <div className="flex-col mx-6 my-8 dark-mode-color_widget">
                    <p className="text-white">Podgląd</p>
                    <h1 className="font-bold text-white text-2xl">Twoich Statystyk</h1>

                    <div className="mt-8 py-4 rounded-3xl bg-white flex-col dark-mode-color_widget">
                        <div className="mx-4 flex flex-col md:flex-row justify-between">
                            <button
                                onClick={() => setCategory(0)}
                                className={"md:mr-1 rounded-2xl border border-blue-500 font-medium text-center text-lg py-3 px-4 w-full md:w-72 " + (category === 0 ? 'bg-blue-500 text-white' : 'text-blue-500')}>Nauka
                            </button>
                            <button
                                onClick={() => setCategory(1)}
                                className={"mt-4 md:mt-0 md:ml-1 rounded-2xl border border-blue-500 font-medium text-center text-lg py-3 px-4 w-full md:w-72 " + (category === 1 ? 'bg-blue-500 text-white' : 'text-blue-500')}>Egzamin
                            </button>
                        </div>
                        <div className="mx-4 mt-4 md:mt-2">
                            <Dropdown name={'Wybierz specjalność'} options={[{
                                name: 'Architektoniczna',
                                name: 'Konstrukcyjno-Budowlana',
                                name: 'Instalacjna sanitarna',
                                name: 'Instalacjna elektryczna',
                            }]}/>
                        </div>

                        <div className="flex flex-col mt-4">
                            <div className="flex flex-row justify-between mx-4">
                                <p className="my-auto">Wyniki</p>
                                <div className="flex flex-row space-x-1 cursor-pointer">
                                    <div onClick={() => setInterval(0)}
                                         className={interval === 0 ? "rounded-lg bg-blue-500 text-white" : "rounded-lg"}>
                                        <p className="mx-4 my-1 text-sm">Dzień</p>
                                    </div>
                                    <div onClick={() => setInterval(1)}
                                         className={interval === 1 ? "rounded-lg bg-blue-500 text-white" : "rounded-lg"}>
                                        <p className="mx-4 my-1 text-sm">Tydzień</p>
                                    </div>
                                    <div onClick={() => setInterval(2)}
                                         className={interval === 2 ? "rounded-lg bg-blue-500 text-white" : "rounded-lg"}>
                                        <p className="mx-4 my-1 text-sm">Miesiąc</p>
                                    </div>
                                </div>
                            </div>
                            <MainCharts period={interval} bar={bar}/>
                            <div className="flex flex-row justify-center gap-4">
                                <div
                                    className={"rounded-lg border border-blue-500 cursor-pointer mobile-stat-button-fix " + (!bar ? "bg-blue-500 text-white" : "text-blue-500")}
                                    onClick={() => setBar(false)}>
                                    <p className="mx-4 my-1 text-sm">LINIOWY</p>
                                </div>
                                <div
                                    className={"rounded-lg border border-blue-500 cursor-pointer mobile-stat-button-fix " + (bar ? "bg-blue-500 text-white" : "text-blue-500")}
                                    onClick={() => setBar(true)}>
                                    <p className="mx-4 my-1 text-sm">SŁUPKOWY</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}

export default Main;