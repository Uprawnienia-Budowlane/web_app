import React from "react";
import {DownArrow3Icon, Heart2Icon, HeartFillIcon} from "./Icons";

class Question extends React.PureComponent {
    render(props) {
        return (
            <div className={"border-b border-opacity-10"}>
                <div className="mx-4 my-1 flex flex-col md:flex-row justify-between">
                    <div className="flex flex-col md:flex-row">
                        <p className="text-lg text-center flex-shrink-0 md:my-auto w-32">{this.props.title}</p>
                        <p className="text-sm mx-4 my-1 overflow-ellipsis">{this.props.text}</p>
                    </div>
                    <div className="mr-4 ml-auto my-auto">{this.props.icon}</div>
                </div>
            </div>
        )
    }
}

class DesktopFavoriteQuestions extends React.Component {


    render(props) {
        return (
            <div className="h-full w-full rounded-3xl bg-white flex flex-col">
                <div className="flex flex-col mx-auto px-2 my-8 sm:mx-8">
                    <p className="text-blue-500">Inżynieryjna drogowa</p>
                    <h1 className="font-bold text-2xl">Przeglądaj ulubione pytania</h1>
                </div>

                <div className="mx-4 md:mx-12 xl:mx-36 rounded-2xl border border-blue-500 flex flex-col md:flex-row">
                    <p className="p-4 overflow-ellipsis text-sm font-bold">Rozporządzenie Ministra Infrastruktury i Budownictwa
                        z dnia 24.08.2016 r. w sprawie wzorów: wniosku o pozwolenie na budowę lub rozbiórkę, zgłoszenia
                        budowy i przebudowy budynku mieszkalnego jednorodzinnego, oświadczenia o posiadanym prawie do
                        dysponowania nieruchomością na cele budowlane, oraz decyzji o pozwoleniu na budowę lub
                        rozbiórkę.</p>
                    <div className="my-auto ml-auto mx-4"><DownArrow3Icon/></div>
                </div>

                <div className="mx-4 md:mx-12 xl:mx-36 mt-2 rounded-2xl border border-blue-500 flex flex-col overflow-hidden">

                    <Question title={'Pytanie 1'}
                              text={'Organ administracji architektoniczno-budowlanej zamieszcza w Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych, których obszar oddziaływania mieści się w całości na działce lub działkach, których zostały zaprojektowane w terminie: '}
                              icon={<HeartFillIcon/>}/>
                    <Question title={'Pytanie 12'}
                              text={'Organ administracji architektoniczno-budowlanej zamieszcza w Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych, których obszar oddziaływania mieści się w całości na działce lub działkach, których zostały zaprojektowane w terminie: '}
                              icon={<Heart2Icon/>}/>
                    <Question title={'Pytanie 123'}
                              text={'Organ administracji architektoniczno-budowlanej zamieszcza w Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych, których obszar oddziaływania mieści się w całości na działce lub działkach, których zostały zaprojektowane w terminie: '}
                              icon={<Heart2Icon/>}/>
                    <Question title={'Pytanie 1234'}
                              text={'Organ administracji architektoniczno-budowlanej zamieszcza w Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych, których obszar oddziaływania mieści się w całości na działce lub działkach, których zostały zaprojektowane w terminie: '}
                              icon={<HeartFillIcon/>}/>
                    <Question title={'Pytanie 5000'}
                              text={'Organ administracji architektoniczno-budowlanej zamieszcza w Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych, których obszar oddziaływania mieści się w całości na działce lub działkach, których zostały zaprojektowane w terminie: '}
                              icon={<HeartFillIcon/>}/>
                    <Question title={'Pytanie 5000'}
                              text={'Organ administracji architektoniczno-budowlanej zamieszcza w Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych, których obszar oddziaływania mieści się w całości na działce lub działkach, których zostały zaprojektowane w terminie: '}
                              icon={<Heart2Icon/>}/>
                    <Question title={'Pytanie 5000'}
                              text={'Organ administracji architektoniczno-budowlanej zamieszcza w Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych, których obszar oddziaływania mieści się w całości na działce lub działkach, których zostały zaprojektowane w terminie: '}
                              icon={<HeartFillIcon/>}/>
                </div>

                <div className="mx-auto mt-8 mb-12 flex flex-col space-y-3 md:space-y-0 md:flex-row">
                    <button
                        className="rounded-2xl border border-blue-500 bg-blue-500 text-white font-medium text-center text-xl py-3 px-12 md:24 xl:px-32 mx-2">WSZYSTKIE
                    </button>
                    <button
                        className="rounded-2xl border border-blue-500 text-blue-500 font-medium text-center text-xl py-3 px-16 md:24 xl:px-32 mx-2">TYLKO ULUBIONE
                    </button>

                </div>

            </div>
        )
    }
}

export default DesktopFavoriteQuestions;