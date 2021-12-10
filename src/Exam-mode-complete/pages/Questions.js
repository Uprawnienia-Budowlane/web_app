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
    TimerIcon,
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

import ExamEnd from '../../modals/ExamEnd'

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
            answerOptions: [
				{Nr: 'A', answerText: 'Głębokość specjalna', isCorrect: false },
				{Nr: 'B', answerText: 'Głębokość minimalna', isCorrect: false },
				{Nr: 'C', answerText: 'Głębokość podstawowa', isCorrect: true },
			],
		},

		{
			questionText: 'Czy usytuowanie budowli telekomunikacyjnej w odległości podstawowej od innego obiektu budowlanego:',
            questionImage: 'https://www.grupapsb.com.pl/files/LeadFoto/b8i6t0g0cfdio3/bezpieczna-budowa-domu-kto-odpowiada-za-bezpieczenstwo-na-budowie-2.jpg',
			answerOptions: [
				{Nr: 'A', answerText: 'Nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego', isCorrect: true },
				{Nr: 'B', answerText: 'Wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego', isCorrect: false },
				{Nr: 'C', answerText: 'Wymaga się stosowania zabezpieczenia szczególnego', isCorrect: false },
			],
		},

		{
			questionText: 'Czym jest antenowa konstrukcja wsporcza, bez odciągów?',
            questionImage: 'https://www.grupapsb.com.pl/files/LeadFoto/b8i6t0g0cfdio3/bezpieczna-budowa-domu-kto-odpowiada-za-bezpieczenstwo-na-budowie-2.jpg',
			answerOptions: [
				{Nr: 'A', answerText: 'Wieżą antenową', isCorrect: true },
				{Nr: 'B', answerText: 'Masztem antenowym', isCorrect: false },
				{Nr: 'C', answerText: 'Wspornikiem', isCorrect: false },
			],
		},
		{
			questionText: 'Czym jest antenowa konstrukcja wsporcza z odciągami?',
            questionImage: 'https://www.grupapsb.com.pl/files/LeadFoto/b8i6t0g0cfdio3/bezpieczna-budowa-domu-kto-odpowiada-za-bezpieczenstwo-na-budowie-2.jpg',
			answerOptions: [
				{Nr: 'A', answerText: 'Wieżą antenową', isCorrect: false },
				{Nr: 'B', answerText: 'Wspornikiem', isCorrect: false },
				{Nr: 'C', answerText: 'Masztem antenowym', isCorrect: true },
			],
		},
        {
			questionText: 'Najmniejsza głębokość usytuowania w ziemi telekomunikacyjnego obiektu budowlanego, dla którego nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego to:',
            questionImage: 'https://www.grupapsb.com.pl/files/LeadFoto/b8i6t0g0cfdio3/bezpieczna-budowa-domu-kto-odpowiada-za-bezpieczenstwo-na-budowie-2.jpg',
			answerOptions: [
				{Nr: 'A', answerText: 'Głębokość specjalna', isCorrect: false },
				{Nr: 'B', answerText: 'Głębokość minimalna', isCorrect: false },
				{Nr: 'C', answerText: 'Głębokość podstawowa', isCorrect: true },
			],
		},
        {
			questionText: 'Najmniejsza głębokość usytuowania w ziemi telekomunikacyjnego obiektu budowlanego, dla którego nie wymaga się stosowania zabezpieczenia specjalnego bądź szczególnego to:',
            questionImage: 'https://www.grupapsb.com.pl/files/LeadFoto/b8i6t0g0cfdio3/bezpieczna-budowa-domu-kto-odpowiada-za-bezpieczenstwo-na-budowie-2.jpg',
			answerOptions: [
				{Nr: 'A', answerText: 'Głębokość specjalna', isCorrect: false },
				{Nr: 'B', answerText: 'Głębokość minimalna', isCorrect: false },
				{Nr: 'C', answerText: 'Głębokość podstawowa', isCorrect: true },
			],
		},
	]

    const [BgcBtn_true, setBgcBtn_true] = ("green")
    const [BgcBtn_false, setBgcBtn_false] = ("red")

    const SetBgcOption = (BgcBtn_true, BgcBtn_false) => {
        setBgcBtn_true(BgcBtn_true)
        setBgcBtn_false(BgcBtn_false)
    }

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

    const [modal, setModal] = useState(false);
    const [nextLocation, setNextLocation] = useState('');
    const [shouldBlockNavigation, setShouldBlockNavigation] = useState(true);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
	}

    const NextPageQuestion = () => {
        const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
    }

    const HandleBackToOldQuestion = () => {
		const earlQuestion = currentQuestion - 1;
		if (earlQuestion < questions.length) {
			setCurrentQuestion(earlQuestion);
		}
	}

    const Summary = () => {
        setShowScore(true);
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
                    setShowScore(true)
                }

            if (h === '00')
                return `${m}:${s}`;
            else
                return `${h}:${m}:${s}`;

        };
    
        return [<div className="my-auto h-8 w-8 justify-center">
            <TimerIcon/>
        </div>,
            <p className="my-auto ml-1.5 text-3xl font-bold text-blue-500">{parseTime(time)}</p>
        ];
    }

    /* popup hint */

    const handleBlockedNavigation = (next) => {
      if (!shouldBlockNavigation) return true;
      setModal(true);
      setNextLocation(next);
      return false;
    }

    /* */

    /* */

    const Backtomenu = () => {
        
        history.push('/')

    }

    /* */

    return (
        <>
			{showScore ? (
				<div className='h-full w-full flex flex-col'>
					<h1 style={{textAlign: 'center'}}>Twój wynik egzaminu wynosi: {score} na {questions.length} wszystkich pytań.</h1>
                    <button onClick={Backtomenu} className="mx-4 my-6 rounded-2xl border border-blue-500 bg-blue-500 text-white font-medium text-center text-lg py-2 px-4">Powrót</button>
				</div>
			) : (

        <div className="h-full w-full rounded-3xl bg-white flex flex-col overflow-hidden">
        <div className="h-full w-full flex flex-col xl:flex-row">
            <div className="rounded-3xl w-full bg-white flex flex-col overflow-hidden">

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
                    <p className="font-bold" >{score}/{currentQuestion + 1}</p>
                </div>
                <div className="absolute right-0 flex flex-row py-3.5 px-8">
                    <Timer/>
                </div>
                </div>

                

                <div className="bg-blue-200">
                    <p className="p-8 text-sm">{questions[currentQuestion].questionText}</p>
                </div>                

                <div className="flex flex-col my-4 mx-8 justify-center">
                {questions[currentQuestion].answerOptions.map((answerOption) => (
                        <div style={{display: 'flex', justifyContent: 'start', height: '118px', cursor: 'pointer' }} 
                        className="border border-grey-500 p-1.5 hover:bg-blue-50 transition-colors duration-200"
                        id={answerOption.isCorrect}
                        onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                        ><h1 style={{alignSelf: 'center', margin: '40px', textAlign: 'center', fontWeight: 'bold', fontSize: '23px' }} >{answerOption.Nr}</h1>
                        <p style={{alignSelf: 'center', margin: '20px', textAlign: 'center' }}>{answerOption.answerText}</p>
                        </div>
                        ))}
                </div>

                <div className="flex flex-row mt-12 mb-8 mx-8 justify-around">
                <button onClick={HandleBackToOldQuestion}
                    className="rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-14 w-14 hover:bg-blue-50 transition-colors duration-200">
                    <ArrowXIcon/></button>
                <button style={{ alignSelf: 'center' }}
                    onClick={Summary}
                    className="rounded-2xl border border-blue-500 px-2 py-3 md:px-14 text-lg h-full text-blue-500 hover:bg-blue-50 transition-colors duration-200 night-mode-btn">
                    Zakończ Egzamin
                </button>
                <button onClick={NextPageQuestion}
                    className="transform rotate-180 rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-14 w-14 hover:bg-blue-50 transition-colors duration-200">
                    <ArrowXIcon/></button>
                
            </div>

            </div>

            </div>
            </div>
            )}

            

        </>
        
    )
}

export default Questions
