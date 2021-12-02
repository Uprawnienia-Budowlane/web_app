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
import { handleScoreChange } from "../../Learn-mode-complete/redux/actions";

import PhotoHint1  from '../../Admin-panel-complete/Manage-Question-Test-complete/QuestionImg/exam-trial-hint-graph-1.svg'


import { useHistory } from "react-router";

import { useSelector } from "react-redux";

import { decode } from "html-entities";

import { useState, useEffect } from "react";

import '../scss/questions.css'

/* graph's */

/* */

const Questions = () => {

    const history = useHistory();
    
    const questions = [
		{
			questionText: 'Najmniejsza głębokość usytuowania w ziemi telekomunikacyjnego obiektu budowlanego, dla którego nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego to:',
			questionImage: 'https://www.grupapsb.com.pl/files/LeadFoto/b8i6t0g0cfdio3/bezpieczna-budowa-domu-kto-odpowiada-za-bezpieczenstwo-na-budowie-2.jpg',
            questionHint: '§ 3. Określenia użyte w rozporządzeniu oznaczają: (...) 3) głębokość podstawowa — najmniejszą głębokość usytuowania w ziemi telekomunikacyjnego obiektu budowlanego, dla którego nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego;',
            answerOptions: [
				{ answerText: 'Głębokość specjalna', isCorrect: false },
				{ answerText: 'Głębokość minimalna', isCorrect: false },
				{ answerText: 'Głębokość podstawowa', isCorrect: true },
			],
		},

		{
			questionText: 'Who is CEO of Tesla?',
            questionImage: 'https://www.grupapsb.com.pl/files/LeadFoto/b8i6t0g0cfdio3/bezpieczna-budowa-domu-kto-odpowiada-za-bezpieczenstwo-na-budowie-2.jpg',
            questionHint: '§ 3. Określenia użyte w rozporządzeniu oznaczają: (...) 3) głębokość podstawowa — najmniejszą głębokość usytuowania w ziemi telekomunikacyjnego obiektu budowlanego, dla którego nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego;',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},

		{
			questionText: 'The iPhone was created by which company?',
            questionImage: 'https://www.grupapsb.com.pl/files/LeadFoto/b8i6t0g0cfdio3/bezpieczna-budowa-domu-kto-odpowiada-za-bezpieczenstwo-na-budowie-2.jpg',
            questionHint: '§ 3. Określenia użyte w rozporządzeniu oznaczają: (...) 3) głębokość podstawowa — najmniejszą głębokość usytuowania w ziemi telekomunikacyjnego obiektu budowlanego, dla którego nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego;',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
            questionImage: 'https://www.grupapsb.com.pl/files/LeadFoto/b8i6t0g0cfdio3/bezpieczna-budowa-domu-kto-odpowiada-za-bezpieczenstwo-na-budowie-2.jpg',
            questionHint: '§ 3. Określenia użyte w rozporządzeniu oznaczają: (...) 3) głębokość podstawowa — najmniejszą głębokość usytuowania w ziemi telekomunikacyjnego obiektu budowlanego, dla którego nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego;',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
        {
			questionText: 'Najmniejsza głębokość usytuowania w ziemi telekomunikacyjnego obiektu budowlanego, dla którego nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego to:',
            questionImage: 'https://www.grupapsb.com.pl/files/LeadFoto/b8i6t0g0cfdio3/bezpieczna-budowa-domu-kto-odpowiada-za-bezpieczenstwo-na-budowie-2.jpg',
            questionHint: '§ 3. Określenia użyte w rozporządzeniu oznaczają: (...) 3) głębokość podstawowa — najmniejszą głębokość usytuowania w ziemi telekomunikacyjnego obiektu budowlanego, dla którego nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego;',
			answerOptions: [
				{ answerText: 'Głębokość specjalna', isCorrect: false },
				{ answerText: 'Głębokość minimalna', isCorrect: false },
				{ answerText: 'Głębokość podstawowa', isCorrect: true },
			],
		},
        {
			questionText: 'Najmniejsza głębokość usytuowania w ziemi telekomunikacyjnego obiektu budowlanego, dla którego nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego to:',
            questionImage: 'https://www.grupapsb.com.pl/files/LeadFoto/b8i6t0g0cfdio3/bezpieczna-budowa-domu-kto-odpowiada-za-bezpieczenstwo-na-budowie-2.jpg',
            questionHint: '§ 3. Określenia użyte w rozporządzeniu oznaczają: (...) 3) głębokość podstawowa — najmniejszą głębokość usytuowania w ziemi telekomunikacyjnego obiektu budowlanego, dla którego nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego;',
			answerOptions: [
				{ answerText: 'Głębokość specjalna', isCorrect: false },
				{ answerText: 'Głębokość minimalna', isCorrect: false },
				{ answerText: 'Głębokość podstawowa', isCorrect: true },
			],
		},
	]

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	}

    /* popup hint */



    /* */

    return (
        <>
			{showScore ? (
				<div className='h-full w-full flex flex-col'>
					<h1 style={{textAlign: 'center'}}>Twój wynik egzaminu próbnego wynosi: {score} na {questions.length} wszystkich pytań.</h1>
                    <Link style={{alignSelf: 'center', margin: '20px'}} to="/learn/"><button className="mx-4 my-6 rounded-2xl border border-blue-500 bg-blue-500 text-white font-medium text-center text-lg py-2 px-4">Powrót</button></Link>
				</div>
			) : (

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
                    <h1 className="font-bold p-5 md:px-8">{questions[currentQuestion].questionHint}</h1>
                </div>

                <div
                    className="rounded-2xl border-b border-opacity-50 bg-warmGray-100 flex flex-col md:flex-row justify-center md:space-x-16">
                    <div className="flex flex-row mx-auto md:mx-0 my-2 md:my-5">
                        <p className="mr-6 font-bold text-blue-500">Pytanie</p>
                        <p className="font-bold">{currentQuestion + 1}</p>
                    </div>
                    <div className="flex flex-row mx-auto md:mx-0 my-2 md:my-5">
                        <p className="mr-6 font-bold text-blue-500">Poprawne</p>
                        <p className="font-bold text-green-500">{score}</p>
                    </div>
                    <div className="flex flex-row mx-auto md:mx-0 my-2 md:my-5">
                        <p className="mr-6 font-bold text-blue-500">Błędne</p>
                        <p className="font-bold text-red-500">0</p>
                    </div>
                    <div className="flex flex-row mx-auto md:mx-0 my-2 md:my-5">
                        <p className="mr-6 font-bold text-blue-500">Wynik</p>
                        <p className="font-bold">%</p>
                    </div>
                </div>

                <div className="rounded-2xl border bg-200" style={{display: 'flex', overflow: 'hidden', height: '500px' }}>
            <img style={{alignSelf: 'center'}} src={questions[currentQuestion].questionImage}></img>    
            </div>
                

                <div className="bg-blue-200 rounded-2xl">
                    <p className="p-8 text-sm">{questions[currentQuestion].questionText}</p>
                </div>                

                <div className="flex flex-col my-4 mx-8 justify-center xl:flex-row">
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                        <button style={{ margin: '10px 2.5px', width: '100%' }} 
                        className="rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-14 w-14 hover:bg-blue-50 transition-colors duration-200"
                        onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                        >{answerOption.answerText}
                        </button>
                        ))}
                </div>

                <div className="flex flex-row my-4 mx-8 justify-center">
                    <div className="my-auto text-blue-500" style={{display: 'none'}}>
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
                    <div className="transform rotate-180 my-auto text-blue-500" style={{display: 'none'}}>
                        <div
                            className="rounded-2xl border border-blue-500 p-0.5 h-14 w-14 hover:bg-blue-50 transition-colors duration-200">
                            <Link to="/learn/score"><ArrowXIcon/></Link>
                            </div>
                    </div>
                </div>

            </div>

            </div>
            </div>
            )}
        </>
        
    )
}

export default Questions
