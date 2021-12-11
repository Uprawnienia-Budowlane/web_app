
import React, {useState, useEffect} from 'react'
import SelectField from '../../Learn-mode-complete/components/SelectField'
import TextFieldComponent from '../../Learn-mode-complete/components/TextFieldComponent'
import useAxios from '../../Learn-mode-complete/components/hooks/useAxios'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { FormControl } from '@material-ui/core'
import { CircularProgress } from '@material-ui/core'

import PhotoMaybeExam from "../../photos/Exammaybe.svg"

const Settings = () => {

    return (
        <div className="h-full w-full rounded-3xl bg-white flex flex-col">
          <div className="flex flex-col px-2 my-8 sm:mx-8">
                <p className="text-blue-500">Obecnie uczysz się specjalności:</p>
                <h1 className="font-bold text-2xl">Architektoniczna</h1>
                <h2 className="font-bold text-xl"> Projektowanie oraz kierowanie robotami bez ograniczeń</h2>
            </div>
            <div className="h-full bg-white flex flex-col">
            <button className="d-flex bg-blue-500 mt-4 mx-auto xl:mx-4 h-12 rounded-2xl w-full text-white font-medium focus:outline-none"><a>Pytanie losowe / Pytanie po kolei</a></button>
            <button className=" d-flex bg-white-500 border border-blue-500 mt-2 mx-auto xl:mx-4 h-12 rounded-2xl w-full text-black font-medium focus:outline-none"><a>Pytania z ulubionych</a></button>
            <button className=" d-flex bg-white-500 border border-blue-500 mt-2 mx-auto xl:mx-4 h-12 rounded-2xl w-full text-black font-medium focus:outline-none"><a>Pytanie do skutku</a></button>
            <button className=" d-flex bg-white-500 border border-blue-500 mt-2 mx-auto xl:mx-4 h-12 rounded-2xl w-full text-black font-medium focus:outline-none"><a>Przejdź do pytania:</a></button>
            <button className=" d-flex bg-white-500 border border-blue-500 mt-2 mx-auto xl:mx-4 h-12 rounded-2xl w-full text-black font-medium focus:outline-none"><a>Zmień specjalność</a></button>
            <button className=" d-flex bg-white-500 border border-blue-500 mt-2 mx-auto xl:mx-4 h-12 rounded-2xl w-full text-black font-medium focus:outline-none"><a>Zmień zestaw pytań</a></button>
            <button className=" d-flex bg-white-500 border border-blue-500 mt-2 mx-auto xl:mx-4 h-12 rounded-2xl w-full text-black font-medium focus:outline-none"><a>Zgłoś błąd w opracowanym pytaniu</a></button>
            </div>
		        <Link style={{alignSelf: 'center', margin: '20px'}} to="/learn/questions"><button style={{ fontSize: '16px' }} className="mx-4 my-6 rounded-2xl border bg-gray-500 text-white font-medium text-center text-lg py-2 px-4">Wróć do menu głównego</button></Link>
        </div>
    )
}

export default Settings
