import React from "react";
import {ArrowXIcon, SettingsIcon, TimerIcon} from "./Icons";

class Question extends React.PureComponent{
    render(props) {
        return(
            <div className="flex flex-col md:flex-row border-b border-opacity-10">
                <p className="text-xl my-auto py-1 md:py-12 mx-10 md:mx-12">{this.props.name}</p>
                <p className="pr-12 pl-8 pb-2 md:pb-0 md:pl-0 md:py-2 my-auto text-sm">{this.props.text}</p>
            </div>
        )
    }
}

class DesktopWrittenExam extends React.Component {

    render(props) {
        return (
            <div className="h-full w-full rounded-3xl bg-white flex flex-col overflow-hidden">

                <div className="border-b border-opacity-10 flex mt-4 flex-col xl:flex-row justify-between">
                    <div className="flex flex-col px-2 ml-2 xl:ml-8 my-4">
                        <p className="text-blue-500">Tryb egzaminu pisemnego</p>
                        <h1 className="font-bold ">Inżynieria hydrotechniczna - Projektowanie oraz kierowanie robotami w
                            ograniczonym zakresie</h1>
                    </div>

                    <div className="flex flex-col md:flex-row mx-4 mb-2 md:mb-0 md:mr-8 justify-between">
                        <p className="mb-5 mt-auto">WYMAGANY WYNIK: 45/90</p>
                        <p className="mb-5 mt-auto md:ml-4 mr-10">Czas: 90 minut</p>
                        <div className="my-auto flex flex-row">
                            <div className="my-auto"><TimerIcon/></div>
                            <p className="my-auto ml-1 text-3xl font-bold text-blue-500">23:35</p>
                            <div className="my-auto ml-auto md:ml-8"><SettingsIcon/></div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-opacity-10 bg-blue-50 flex flex-row justify-center h-16">
                    <div className="flex flex-row my-auto">
                        <p className="mr-6 font-bold text-blue-500">Pytanie</p>
                        <p className="font-bold">23/500</p>
                    </div>
                </div>

                <div className="bg-blue-200">
                    <p className="px-8 py-10 text-sm">Organ administracji architektoniczno-budowlanej zamieszcza w Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych, których obszar oddziaływania mieści się w całości na działce lub działkach, których zostały zaprojektowane w terminie: </p>
                </div>

                <Question name={'A'} text={'Wiat o powierzchni zabudowy do 50 m2, sytuowanych na działce, na której znajduje się budynek mieszkalny, lub przeznaczonej pod budownictwo mieszkaniowe, przy czym łączna liczba tych wiat na działce nie może przekraczać dwóch na każde 1000 m2 powierzchni działki '} />
                <Question name={'B'} text={'Wiat o powierzchni zabudowy do 50 m2, sytuowanych na działce, na której znajduje się budynek mieszkalny, lub przeznaczonej pod budownictwo mieszkaniowe, przy czym łączna liczba tych wiat'} />
                <Question name={'C'} text={'Wiat o powierzchni zabudowy do 50 m2, sytuowanych na działce, na której znajduje się budynek mieszkalny, lub przez przy czym łączna liczba tych wiat na działce nie może przekraczać dwóch na każde 1000 m2 powierzchni działki'} />

                <div className="flex flex-row mt-12 mb-8 mx-8 justify-between">
                    <div className=""><button className="rounded-2xl border border-blue-500 p-1"><ArrowXIcon/></button></div>
                    <div className=""><button className="rounded-2xl border border-blue-500 px-2 md:px-14 text-lg h-full text-blue-500">Zakończ Egzamin</button></div>
                    <div className="transform rotate-180 "><button className="rounded-2xl border border-blue-500 p-1"><ArrowXIcon/></button></div>
                </div>

            </div>
        )
    }
}

export default DesktopWrittenExam