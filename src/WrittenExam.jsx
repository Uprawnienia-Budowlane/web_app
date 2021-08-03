import React, {useEffect, useState} from "react";
import {ArrowXIcon, SettingsIcon, TimerIcon} from "./Icons";
import {Prompt, useHistory} from "react-router-dom";
import ExamEnd from "./modals/ExamEnd";

const Answer = (props) => <div className="flex flex-col md:flex-row border-b border-opacity-50 h-28">
    <p className="text-2xl my-auto py-1 md:py-5 mx-10 md:mx-12 font-medium">{props.name}</p>
    <p className="pr-12 pl-8 pb-2 md:pb-0 md:pl-0 my-auto text-sm">{props.text}</p>
</div>

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

const WrittenExam = () => {
    const history = useHistory();
    const questions = 500;
    const [question, setQuestion] = useState(1);
    const [modal, setModal] = useState(false);
    const [nextLocation, setNextLocation] = useState('');
    const [shouldBlockNavigation, setShouldBlockNavigation] = useState(true);

    const handleBlockedNavigation = (next) => {
        if (!shouldBlockNavigation) return true;
        setModal(true);
        setNextLocation(next);
        return false;
    }

    return (
        <div className="h-full w-full rounded-3xl bg-white flex flex-col overflow-hidden">
            <Prompt
                when={true}
                message={handleBlockedNavigation}
            />
            <div className="border-b border-opacity-50 flex flex-col xl:flex-row justify-between">
                <div className="flex flex-col px-2 ml-2 xl:ml-8 my-5">
                    <p className="text-blue-500">Tryb egzaminu pisemnego</p>
                    <h1 className="font-bold ">Inżynieria hydrotechniczna - Projektowanie oraz kierowanie
                        robotami w
                        ograniczonym zakresie</h1>
                </div>

                <div className="flex flex-col md:flex-row mx-4 mb-2 md:mb-0 md:mr-8 justify-between">
                    <p className="mb-8 mt-auto font-medium">WYMAGANY WYNIK: 45/90</p>
                    <p className="mb-8 mt-auto md:ml-4 mr-5 font-medium">Czas: 90 minut</p>
                    <div className="my-auto ml-auto cursor-pointer"
                         onClick={() => history.push('/settings')}><SettingsIcon/></div>
                </div>
            </div>

            <div className="border-b border-opacity-50 bg-warmGray-100 flex flex-row justify-center h-16 relative">
                <div className="flex flex-row my-auto">
                    <p className="mr-6 font-bold text-blue-500">Pytanie</p>
                    <p className="font-bold">{question}/{questions}</p>
                </div>
                <div className="absolute right-0 flex flex-row py-3.5 px-8">
                    <Timer/>
                </div>
            </div>

            <div className="bg-blue-200">
                <p className="px-8 py-10 text-sm">Organ administracji architektoniczno-budowlanej zamieszcza w
                    Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o
                    doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych,
                    których
                    obszar oddziaływania mieści się w całości na działce lub działkach, których zostały
                    zaprojektowane w terminie: </p>
            </div>

            <Answer name={'A'}
                    text={'Wiat o powierzchni zabudowy do 50 m2, sytuowanych na działce, na której znajduje się budynek mieszkalny, lub przeznaczonej pod budownictwo mieszkaniowe, przy czym łączna liczba tych wiat na działce nie może przekraczać dwóch na każde 1000 m2 powierzchni działki '}/>
            <Answer name={'B'}
                    text={'Wiat o powierzchni zabudowy do 50 m2, sytuowanych na działce, na której znajduje się budynek mieszkalny, lub przeznaczonej pod budownictwo mieszkaniowe, przy czym łączna liczba tych wiat'}/>
            <Answer name={'C'}
                    text={'Wiat o powierzchni zabudowy do 50 m2, sytuowanych na działce, na której znajduje się budynek mieszkalny, lub przez przy czym łączna liczba tych wiat na działce nie może przekraczać dwóch na każde 1000 m2 powierzchni działki'}/>

            <div className="flex flex-row mt-12 mb-8 mx-8 justify-between">
                <button
                    className="rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-14 w-14 hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => setQuestion(question > 2 ? question - 1 : 1)}>
                    <ArrowXIcon/></button>
                <button
                    onClick={() => history.push('/exam-end')}
                    className="rounded-2xl border border-blue-500 px-2 py-3 md:px-14 text-lg h-full text-blue-500 hover:bg-blue-50 transition-colors duration-200">
                    Zakończ Egzamin
                </button>
                <button
                    className="transform rotate-180 rounded-2xl border border-blue-500 text-blue-500 p-1.5 h-14 w-14 hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => setQuestion(question < questions ? question + 1 : 500)}>
                    <ArrowXIcon/></button>
            </div>
            <ExamEnd visible={modal} onClose={(e) => {
                setModal(false);
                setShouldBlockNavigation(e)
            }} nextLocation={nextLocation}/>

        </div>
    )
}

export default WrittenExam;