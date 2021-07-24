import React from "react";
import {
    ArrowXIcon, EyeIcon,
    HeartFill2Icon,
    LightballIcon,
    QuestionmarkIcon,
    SettingsIcon
} from "./Icons";

class Question extends React.PureComponent {
    render(props) {
        return (
            <div className="flex flex-col md:flex-row border-b border-opacity-10">
                <p className="text-xl my-auto py-1 md:py-8 mx-10 md:mx-12">{this.props.name}</p>
                <p className="pr-12 pl-8 pb-2 md:pb-0 md:pl-0 md:py-2 my-auto text-sm">{this.props.text}</p>
            </div>
        )
    }
}

class DesktopWrittenExamEnd extends React.Component {

    render(props) {
        return (
            <div className="h-full w-full rounded-3xl bg-white flex flex-col overflow-hidden">

                <div className="border-b border-opacity-10 flex mt-4 flex-col xl:flex-row justify-between">
                    <div className="flex flex-col px-2 ml-2 xl:ml-8 my-4">
                        <p className="text-blue-500">Tryb egzaminu pisemnego</p>
                        <h1 className="font-bold ">Inżynieria hydrotechniczna - Projektowanie oraz kierowanie robotami w
                            ograniczonym zakresie</h1>
                    </div>

                    <div className="flex flex-col md:flex-row mx-4 mb-2 md:mb-0 md:mr-8 justify-end">
                        <div className="my-auto flex flex-row">
                            <div className="my-auto ml-auto md:ml-8"><LightballIcon/></div>
                            <div className="my-auto ml-8"><SettingsIcon/></div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-opacity-10 flex">
                        <h1 className="font-bold px-4 py-3 md:p-8">Rozporządzenie Ministra Rozwoju, Pracy i Technologii z dnia 27.10.2020 r. w sprawie ewidencji nabytych, zużytych, przechowywanych i zbytych materiałów wybuchowych przeznaczonych do użytku cywilnego oraz materiałów wybuchowych znalezionych i zniszczonych podczas wykonywania działalności gospodarczej w zakresie oczyszczania terenów.</h1>
                </div>

                <div className="border-b border-opacity-10 bg-blue-50 flex flex-col md:flex-row justify-center md:space-x-16">
                    <div className="flex flex-row mx-auto md:mx-0 my-2 md:my-7">
                        <p className="mr-6 font-bold text-blue-500">Pytanie</p>
                        <p className="font-bold">23/500</p>
                    </div>
                    <div className="flex flex-row mx-auto md:mx-0 my-2 md:my-7">
                        <p className="mr-6 font-bold text-blue-500">Poprawne</p>
                        <p className="font-bold text-green-500">4</p>
                    </div>
                    <div className="flex flex-row mx-auto md:mx-0 my-2 md:my-7">
                        <p className="mr-6 font-bold text-blue-500">Błędne</p>
                        <p className="font-bold text-red-500">4</p>
                    </div>
                    <div className="flex flex-row mx-auto md:mx-0 my-2 md:my-7">
                        <p className="mr-6 font-bold text-blue-500">Wynik</p>
                        <p className="font-bold">%</p>
                    </div>
                </div>

                <div className="bg-blue-200">
                    <p className="px-8 py-6 text-sm">Organ administracji architektoniczno-budowlanej zamieszcza w
                        Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o
                        doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych, których
                        obszar oddziaływania mieści się w całości na działce lub działkach, których zostały
                        zaprojektowane w terminie: </p>
                </div>

                <Question name={'A'}
                          text={'Wiat o powierzchni zabudowy do 50 m2, sytuowanych na działce, na której znajduje się budynek mieszkalny, lub przeznaczonej pod budownictwo mieszkaniowe, przy czym łączna liczba tych wiat na działce nie może przekraczać dwóch na każde 1000 m2 powierzchni działki '}/>
                <Question name={'B'}
                          text={'Wiat o powierzchni zabudowy do 50 m2, sytuowanych na działce, na której znajduje się budynek mieszkalny, lub przeznaczonej pod budownictwo mieszkaniowe, przy czym łączna liczba tych wiat'}/>

                <div className="flex flex-col md:flex-row">
                    <p className="text-xl my-auto py-1 md:py-8 mx-10 md:mx-12">C</p>
                    <p className="pr-12 pl-8 pb-2 md:pb-0 md:pl-0 md:py-2 my-auto text-sm">Wiat o powierzchni zabudowy do 50 m2, sytuowanych na działce, na której znajduje się budynek mieszkalny, lub przez przy czym łączna liczba tych wiat na działce nie może przekraczać dwóch na każde 1000 m2 powierzchni działki</p>
                </div>

                <div className="flex flex-row mb-8 mx-8 justify-between">
                    <div className="">
                        <button className="rounded-2xl border border-blue-500 p-1"><ArrowXIcon/></button>
                    </div>
                    <div className="flex flex-row space-x-3 md:space-x-8">
                        <div className="my-auto ">
                            <button className="rounded-2xl border border-blue-500 p-2"><HeartFill2Icon/></button>
                        </div>
                        <div className="my-auto">
                            <button className="rounded-2xl border border-blue-500 p-2"><QuestionmarkIcon/></button>
                        </div>
                        <div className="my-auto">
                            <button className="rounded-2xl border border-blue-500 p-1.5"><EyeIcon/></button>
                        </div>
                    </div>
                    <div className="transform rotate-180 ">
                        <button className="rounded-2xl border border-blue-500 p-1"><ArrowXIcon/></button>
                    </div>
                </div>

            </div>
        )
    }
}

export default DesktopWrittenExamEnd