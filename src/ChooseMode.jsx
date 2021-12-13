import React from "react";
import { Link } from "react-router-dom";
import {ABCClockPaperIcon, ABCPaperIcon} from "./Icons";
import {useHistory} from "react-router-dom";

import mobile_arrow_ from './photos/mobile_arrow.svg'

const ChooseMode = () => {
    const history = useHistory();
    return ( 
        <>

        <div className="mobile_bar_itself shadow-xl">
        <img src={mobile_arrow_}></img>
        <div className="flex flex-col px-2 my-8 ml-0 mx-6">
        <p className="text-blue-500">Inżynieryjna drogowa </p>
        <h1 className="font-bold"
        style={{ fontSize: '12px' }}
        >Projektowe i wykonawcze w ograniczonym zakresie</h1>
        </div>
        </div>

        <div className="h-full w-full rounded-3xl bg-white flex flex-col">
            <div className="flex flex-col mx-auto px-2 my-8 sm:mx-8 Mobile_hide">
                <p className="text-blue-500">Inżynieryjna drogowa </p>
                <h1 className="font-bold text-2xl">Projektowe i wykonawcze w ograniczonym zakresie</h1>
            </div>

            <div className="flex flex-col xl:flex-row justify-center mt-6 mb-10 md:mb-40">
                <div className="mx-4 bg-blue-500 rounded-2xl flex flex-col hover:shadow-lg cursor-pointer dark-mode-color_widget" onClick={() => history.push('/learn/questions')}>
                    <div className="mx-auto xl:mx-16 mt-12 mb-6 h-60 w-60 dark-mode-color_widget"><ABCPaperIcon/></div>
                    <p className="mb-5 text-center text-white text-3xl font-medium">Nauka testów</p>
                </div>
                <div className="mx-4 mt-4 xl:mt-0 bg-blue-500 rounded-2xl flex flex-col hover:shadow-lg cursor-pointer dark-mode-color_widget" onClick={() => history.push('/exam/questions')}>
                    <div className="mx-auto xl:mx-16 mt-12 mb-6 h-60 w-60 dark-mode-color_widget"><ABCClockPaperIcon/></div>
                    <p className="mb-5 text-center text-white text-3xl font-medium">Egzamin pisemny</p>
                </div>

                <div className="d-flex Desktop_hide" style={{ width: '95.5%', justifyContent: 'center' }}>
                <Link to="/" style={{ display: 'block' }}
                className="mx-2 mt-6 mb-2 w-full rounded-2xl border bg-gray-500 text-white font-medium text-center text-lg py-2 px-4 flex-grow ">
                Wróć do menu głównego
                </Link >
                </div>
            </div>
        </div>
        </>
    )
}

export default ChooseMode;