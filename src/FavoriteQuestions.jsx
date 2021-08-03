import React, {useState} from "react";
import {DownArrow3Icon} from "./Icons";
import FavoriteQuestion from "./components/FavoriteQuestion";

const FavoriteQuestions = () => {
    const [category, setCategory] = useState(0);
    return (<div className="h-full w-full rounded-3xl bg-white flex flex-col">
        <div className="flex flex-col mx-auto px-2 my-8 sm:mx-8">
            <p className="text-blue-500">Inżynieryjna drogowa</p>
            <h1 className="font-bold text-2xl">Przeglądaj ulubione pytania</h1>
        </div>

        <div className="mx-4 md:mx-12 xl:mx-36 rounded-2xl border border-blue-500 flex flex-col md:flex-row">
            <p className="p-4 overflow-ellipsis text-sm font-bold">Rozporządzenie Ministra Infrastruktury i
                Budownictwa
                z dnia 24.08.2016 r. w sprawie wzorów: wniosku o pozwolenie na budowę lub rozbiórkę, zgłoszenia
                budowy i przebudowy budynku mieszkalnego jednorodzinnego, oświadczenia o posiadanym prawie do
                dysponowania nieruchomością na cele budowlane, oraz decyzji o pozwoleniu na budowę lub
                rozbiórkę.</p>
            <div className="my-auto ml-auto mx-4"><DownArrow3Icon/></div>
        </div>

        <div className="mx-4 md:mx-12 xl:mx-36 mt-2 rounded-2xl border border-blue-500 overflow-hidden">
            <table>
                <thead className="p-4 border-b border-opacity-50">
                <tr className="">
                    <th className="text-center py-4">Nr.</th>
                    <th className="text-center py-4">Pytanie</th>
                    <th className="text-center py-4">Odpowiedź</th>
                    <th className="text-center py-4"></th>
                </tr>
                </thead>
                <tbody>
                <FavoriteQuestion id={'11'}
                                  question={'Organ administracji architektoniczno-budowlanej zamieszcza w Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych, których obszar oddziaływania mieści się w całości na działce lub działkach, których zostały zaprojektowane w terminie: '}
                                  answer={'Organ administracji architektoniczno-budowlanej zamieszcza w Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych, których obszar oddziaływania mieści się w całości na działce lub działkach, których zostały zaprojektowane w terminie: '}/>
                <FavoriteQuestion id={'25'}
                                  question={'Organ administracji architektoniczno-budowlanej zamieszcza w Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych, których obszar oddziaływania mieści się w całości na działce lub działkach, których zostały zaprojektowane w terminie: '}
                                  answer={'Organ administracji architektoniczno-budowlanej zamieszcza w Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych, których obszar oddziaływania mieści się w całości na działce lub działkach, których zostały zaprojektowane w terminie: '}/>
                <FavoriteQuestion id={'32'}
                                  question={'Organ administracji architektoniczno-budowlanej zamieszcza w Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych, których obszar oddziaływania mieści się w całości na działce lub działkach, których zostały zaprojektowane w terminie: '}
                                  answer={'Organ administracji architektoniczno-budowlanej zamieszcza w Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych, których obszar oddziaływania mieści się w całości na działce lub działkach, których zostały zaprojektowane w terminie: '}/>
                <FavoriteQuestion id={'41'}
                                  question={'Organ administracji architektoniczno-budowlanej zamieszcza w Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych, których obszar oddziaływania mieści się w całości na działce lub działkach, których zostały zaprojektowane w terminie: '}
                                  answer={'Organ administracji architektoniczno-budowlanej zamieszcza w Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych, których obszar oddziaływania mieści się w całości na działce lub działkach, których zostały zaprojektowane w terminie: '}/>
                <FavoriteQuestion id={'56'}
                                  question={'Organ administracji architektoniczno-budowlanej zamieszcza w Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych, których obszar oddziaływania mieści się w całości na działce lub działkach, których zostały zaprojektowane w terminie: '}
                                  answer={'Organ administracji architektoniczno-budowlanej zamieszcza w Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych, których obszar oddziaływania mieści się w całości na działce lub działkach, których zostały zaprojektowane w terminie: '}/>

                </tbody>
            </table>
        </div>
        <div className="mx-auto mt-8 mb-12 flex flex-col space-y-3 md:space-y-0 md:flex-row">
            <button
                onClick={() => setCategory(0)}
                className={"rounded-2xl border border-blue-500 font-medium text-center text-xl py-3 px-12 md:24 xl:px-32 mx-2 " + (category === 0 ? "bg-blue-500 text-white " : "text-blue-500")}>WSZYSTKIE
            </button>
            <button
                onClick={() => setCategory(1)}
                className={"rounded-2xl border border-blue-500 font-medium text-center text-xl py-3 px-16 md:24 xl:px-32 mx-2 " + (category === 1 ? "bg-blue-500 text-white " : "text-blue-500")}>TYLKO
                ULUBIONE
            </button>
        </div>
    </div>);
}


export default FavoriteQuestions;