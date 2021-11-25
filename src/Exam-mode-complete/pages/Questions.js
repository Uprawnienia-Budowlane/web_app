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
    TimerIcon,
    

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
    
    const Timer = () => {
        const [time, setTime] = useState(60 * 90);
    
        useEffect(() => {
            const interval = setInterval(() => setTime(time - 1), 1000);
            return () => clearInterval(interval);
        });
    
        const parseTime = e => {
            const h = Math.floor(e / 3600).toString().padStart(2, '0'),
                m = Math.floor(e % 3600 / 60).toString().padStart(2, '0'),
                s = Math.floor(e % 60).toString().padStart(2, '0');
    
                if(h == '00' && m == '00' && s == '01') {
                    history.push("/exam/score")
                }

            if (h === '00')
                return `${m}:${s}`;
            else
                return `${h}:${m}:${s}`;

        };
    
        return [<div className="my-auto h-8 w-8">
            <TimerIcon/>
        </div>,
            <p className="my-auto ml-1.5 text-3xl font-bold text-blue-500">{parseTime(time)}</p>
        ];
    }

    return (
        <>
        <div className="h-full w-full rounded-3xl bg-white flex flex-col overflow-hidden">
            <div className="border-b border-opacity-50 flex flex-col xl:flex-row justify-between">
                <div className="flex flex-col px-2 ml-2 xl:ml-8 my-5">
                    <p className="text-blue-500">Tryb egzaminu pisemnego</p>
                    <h1 className="font-bold ">Inżynieria hydrotechniczna - Projektowanie oraz kierowanie
                        robotami w
                        ograniczonym zakresie</h1>
                </div>

                <div className="flex flex-col md:flex-row mx-4 mb-2 md:mb-0 md:mr-8 justify-between">
                    <p className="mb-8 mt-auto font-medium" style={{ margin: '10px' }}>WYMAGANY WYNIK: 45/90</p>
                    <p className="mb-8 mt-auto md:ml-4 mr-5 font-medium" style={{ margin: '10px' }}>Czas: 90 minut</p>
                    <div className="my-auto ml-auto cursor-pointer"
                         onClick={() => history.push('/exam/')}><SettingsIcon/></div>
                </div>
            </div>

            <div className="border-b border-opacity-50 bg-warmGray-100 flex flex-row justify-center h-16 relative">
                <div className="flex flex-row my-auto" style={{ margin: '20px' }}>
                    <p className="mr-6 font-bold text-blue-500">Pytanie</p>
                    <p className="font-bold" >{score}/{questionIndex + 1}</p>
                </div>
                <div className="absolute right-0 flex flex-row py-3.5 px-8">
                    <Timer/>
                </div>
            </div>

            <div className="rounded-2xl border bg-200"><img src="" style={{ height: '100%', width: '100%' }}/></div>

            <div className="bg-blue-200">
                <p className="px-8 py-10 text-sm">Organ administracji architektoniczno-budowlanej zamieszcza w
                    Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o
                    doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych,
                    których
                    obszar oddziaływania mieści się w całości na działce lub działkach, których zostały
                    zaprojektowane w terminie: </p>
            </div>

            {options.map((data, id) => (
                        <Button style={{ margin: '10px' }} variant="contained"
                        onClick={handleClickAnswer}
                        >{decode(data)}
                        </Button>
                        ))}

            <div className="flex flex-row mt-12 mb-8 mx-8 justify-between">
                <button
                    className="rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-14 w-14 hover:bg-blue-50 transition-colors duration-200">
                    <ArrowXIcon/></button>
                <button
                    onClick={() => history.push('/exam/score')}
                    className="rounded-2xl border border-blue-500 px-2 py-3 md:px-14 text-lg h-full text-blue-500 hover:bg-blue-50 transition-colors duration-200">
                    Zakończ Egzamin
                </button>
                <button
                    className="transform rotate-180 rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-14 w-14 hover:bg-blue-50 transition-colors duration-200">
                    <ArrowXIcon/></button>
            </div>
        </div>

        </>
    )
}

export default Questions
