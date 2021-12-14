
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
        <div  className="h-full w-full rounded-3xl bg-white flex flex-col">
          <div className="flex flex-col px-2 my-8 sm:mx-8">
            <p className="text-blue-500">Egzamin pisemny</p>
            <h1 className="font-bold text-2xl">Kierowanie robotami bez ograniczeń</h1>
            </div>
            <div className="w-full bg-white flex flex-col">
            <div className="flex justify-content-between">
            <h1 className="font-bold text-xl text-center">CAŁKOWITA LICZBA PYTAŃ</h1>
            <span className='mx-2 align-self-center'>0</span>
            </div>
            <div className="flex justify-content-between">
            <h1 className="font-bold text-xl text-center">PRÓG ZDAWALNOŚCI</h1>
            <span className='mx-2 align-self-center'>0</span>
            </div>
            <div className="flex justify-content-between">
            <h1 className="font-bold text-xl text-center">CAŁKOWITY CZAS EGZAMINU</h1>
            <span className='mx-2 align-self-center'>0</span>
            </div>
            <div className="flex justify-content-between">
            <h1 className="font-bold text-xl text-center">POZOSTAŁY CZAS EGZAMINU</h1>
            <span className='mx-2 align-self-center'>0</span>
            </div>
            </div>
            <img style={{ height: '195px', width: '177px', alignSelf: 'center', margin: '50px 0px 0px' }} src={PhotoMaybeExam}></img>
		        <Link className="mx-4 my-6 rounded-2xl bg-gray-500 text-white font-medium text-center text-sm py-3 px-2" to="/exam/questions">Przerwij egzamin i wróć do menu głównego</Link>
        </div>
    )
}

export default Settings
