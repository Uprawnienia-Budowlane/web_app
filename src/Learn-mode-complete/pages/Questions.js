import {
    ArchitectureIcon,
    BridgeIcon,
    CraneIcon,
    DamIcon,
    DemolitionIcon,
    MultimeterIcon,
    RoadIcon,
    SanitaryIcon,
    TeletechnicalIcon,
    TrainStationIcon,
    TrainSwitchIcon,
    LightbulbIcon,
    SettingsIcon,
    ArrowXIcon, 
    EyeIcon,

} from "../../Icons";

import React from 'react'
import useAxios from '../../Learn-mode-complete/components/hooks/useAxios'

import { useSelector } from "react-redux";

import { useState, useEffect } from "react";

import '../scss/questions.css'

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

const Questions = () => {
    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_question,
        score
    } = useSelector(state => state)
    console.log(amount_of_question)
    let apiUrl = `/api.php?amount=${amount_of_question}`
    if(question_category) {
        apiUrl = apiUrl.concat(`&category=${question_category}`)
    }
    if(question_difficulty) {
        apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`)
    }
    if(question_type) {
        apiUrl = apiUrl.concat(`&category=${question_type}`)
    }

    const { response, loading } = useAxios({ url:apiUrl })
    console.log(
        response
    )

    const [questionIndex, setQuestionIndex] = useState(0);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        if(response?.results.length) {
            const question = response.results[questionIndex]
            let answers = [...question.incorrect_answers]
            answers.splice(
                getRandomInt(...question.incorrect_answers),
                0,
                question.correct_answer
            )
            setOptions(answers)
        }
    }, [response,questionIndex])

    if(loading) {
        return (
            <div>
                <h1>ładowanie</h1>
            </div>
        )
    }

    const handleClickAnswer = () => {
        if(questionIndex + 1 < response.results.lenght) {
            setQuestionIndex(questionIndex + 1)
        }
    }

    return (
        <div className="question-page">

            <div className="flex flex-col px-2 ml-2 xl:ml-8 my-5">
                        <p className="text-blue-500">Tryb egzaminu pisemnego</p>
                        <h1 className="font-bold "> {response.results[questionIndex].question}</h1>
                        
                    </div>
                    <div id="question-paragraph" className="border-b border-opacity-50 flex">
                    <h1 className="font-bold p-5 md:px-8">Rozporządzenie Ministra Rozwoju, Pracy i Technologii
                        z dnia 27.10.2020 r. w sprawie ewidencji nabytych, zużytych, przechowywanych i zbytych
                        materiałów wybuchowych przeznaczonych do użytku cywilnego oraz materiałów wybuchowych
                        znalezionych i zniszczonych podczas wykonywania działalności gospodarczej w zakresie
                        oczyszczania terenów.</h1>
                </div>
                    <div
                    className="border-b border-opacity-50 bg-warmGray-100 flex flex-col md:flex-row justify-center md:space-x-16 question-form__">
                    <div className="flex flex-row mx-auto md:mx-0 my-2 md:my-5">
                        <p className="mr-6 font-bold text-blue-500">Pytanie</p>
                        <p className="font-bold">{questionIndex + 1}</p>
                    </div>
                    <div className="flex flex-row mx-auto md:mx-0 my-2 md:my-5">
                        <p className="mr-6 font-bold text-blue-500">Poprawne</p>
                        <p className="font-bold text-green-500">{score} {response.results.lenght}</p>
                    </div>
                    <div className="flex flex-row mx-auto md:mx-0 my-2 md:my-5">
                        <p className="mr-6 font-bold text-blue-500">Błędne</p>
                        <p className="font-bold text-red-500"></p>
                    </div>
                    <div className="flex flex-column mx-auto md:mx-0 my-2 md:my-5">
                        <p className="mr-6 font-bold text-blue-500">Wynik</p>
                        
                        {options.map((data, id) => (
                        <button 
                        Style="margin: 10px; background: red; height: 50px;"
                        onClick={handleClickAnswer}
                        >{data}
                        </button>
                        ))}

                        <div className="test"
                     style={{height: "calc(100vh - 20rem)"}}>
                    <div className="flex flex-row px-6 border-b pb-2">
                        <div className="h-6 w-6 cursor-pointer hover:text-gray-600">
                            <ArrowXIcon/>
                        </div>
                        <div className="flex-1"/>
                        
                        
                        <div className="flex-1"/>
                        <div className="h-6 w-6 transform rotate-180 cursor-pointer hover:text-gray-600">
                            <ArrowXIcon/>
                        </div>
                    </div>
                    </div>


                    </div>
                </div>
        </div>
    )
}

export default Questions
