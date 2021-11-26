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
    QuestionmarkIcon,
    HeartFill2Icon,
    LightbulbIcon,
    SettingsIcon,
    ArrowXIcon, 
    EyeIcon,
    

} from "../../Icons";

import { Link } from 'react-router-dom'

import { CircularProgress } from "@material-ui/core";

import { Button } from '@material-ui/core'

import React from 'react'
import useAxios from '../../Learn-mode-complete/components/hooks/useAxios'
import { useDispatch } from "react-redux";
import { handleScoreChange } from "../redux/actions";

import { useHistory } from "react-router";

import { useSelector } from "react-redux";

import { decode } from "html-entities";

import { useState, useEffect } from "react";

import '../scss/questions.css'

/* graph's */

/* */

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

const Questions = () => {
    const history = useHistory();
    const {
        question_category,
        question_difficulty,
        question_type,
        amount_of_question,
        score
    } = useSelector(state => state)
    console.log(amount_of_question)
    let apiUrl = `/api.php?amount=30&category=18&difficulty=medium`
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

    const dispatch = useDispatch();

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
                <CircularProgress />
            </div>
        )
    }

    const handleClickAnswer = (e) => {
        const question = response.results[questionIndex];
        if (e.target.textContent === question.correct_answer) {
          dispatch(handleScoreChange(score + 1));
        }

        if (questionIndex + 1 < response.results.length) {
            setQuestionIndex(questionIndex + 1);
          }

    }

    /* images */



    /* */

    return (
        <>
        <div className="h-full w-full rounded-3xl bg-white flex flex-col overflow-hidden">
        <div className="h-full w-full flex flex-col xl:flex-row">
            <div className="rounded-3xl bg-white flex flex-col overflow-hidden">

                <div className="border-b border-opacity-50 flex flex-col xl:flex-row justify-between">
                    <div className="flex flex-col px-2 ml-2 xl:ml-8 my-5">
                        <p className="text-blue-500">Tryb egzaminu pisemnego</p>
                        <h1 className="font-bold ">Inżynieria hydrotechniczna - Projektowanie oraz kierowanie
                            robotami w
                            ograniczonym zakresie</h1>
                    </div>

                    <div className="flex flex-col md:flex-row mx-4 md:mr-8 justify-end">
                        <div className="my-auto flex flex-row">
                            <div className="my-auto ml-auto md:ml-8 cursor-pointer"><LightbulbIcon/></div>
                            <div className="my-auto ml-8 cursor-pointer" onClick={() => history.push('/learn')}>
                                <SettingsIcon/></div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-opacity-50 flex">
                    <h1 className="font-bold p-5 md:px-8">Rozporządzenie Ministra Rozwoju, Pracy i Technologii
                        z dnia 27.10.2020 r. w sprawie ewidencji nabytych, zużytych, przechowywanych i zbytych
                        materiałów wybuchowych przeznaczonych do użytku cywilnego oraz materiałów wybuchowych
                        znalezionych i zniszczonych podczas wykonywania działalności gospodarczej w zakresie
                        oczyszczania terenów.</h1>
                </div>

                <div
                    className="border-b border-opacity-50 bg-warmGray-100 flex flex-col md:flex-row justify-center md:space-x-16">
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
                        <p className="font-bold text-red-500">4</p>
                    </div>
                    <div className="flex flex-row mx-auto md:mx-0 my-2 md:my-5">
                        <p className="mr-6 font-bold text-blue-500">Wynik</p>
                        <p className="font-bold">%</p>
                    </div>
                </div>

                <div className="rounded-2xl border bg-200"><img src="" style={{ height: '100%', width: '100%' }}/></div>

                <div className="bg-blue-200">
                    <p className="p-8 text-sm">{decode(response.results[questionIndex].question)}</p>
                </div>                

                <div className="flex flex-row my-4 mx-8 justify-center">
                   
                {options.map((data, id) => (
                        <Button style={{ margin: '10px' }} variant="contained"
                        onClick={handleClickAnswer}
                        >{decode(data)}
                        </Button>
                        ))}

                </div>

                <div className="flex flex-row my-4 mx-8 justify-between">
                    <div className="my-auto text-blue-500">
                        <div
                            className="rounded-2xl border border-blue-500 p-0.5 h-14 w-14 hover:bg-blue-50 transition-colors duration-200">
                            <ArrowXIcon/></div>
                    </div>
                    <div className="flex flex-row space-x-1 md:space-x-8">
                        <div className="my-auto ">
                            <div
                                className="rounded-2xl border border-blue-500 p-3 h-14 w-14 hover:bg-blue-50 transition-colors duration-200">
                                <HeartFill2Icon/></div>
                        </div>
                        <div className="my-auto">
                            <div
                                className="rounded-2xl border border-blue-500 p-3 h-14 w-14 hover:bg-blue-50 transition-colors duration-200">
                                <QuestionmarkIcon/></div>
                        </div>
                        <div className="my-auto">
                            <div
                                className="rounded-2xl border border-blue-500 p-2.5 h-14 w-14 hover:bg-blue-50 transition-colors duration-200">
                                <EyeIcon/></div>
                        </div>
                    </div>
                    <div className="transform rotate-180 my-auto text-blue-500">
                        <div
                            className="rounded-2xl border border-blue-500 p-0.5 h-14 w-14 hover:bg-blue-50 transition-colors duration-200">
                            <Link to="/learn/score"><ArrowXIcon/></Link>
                            </div>
                    </div>
                </div>

            </div>

            </div>
            </div>
        </>
    )
}

export default Questions
