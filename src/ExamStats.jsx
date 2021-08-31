import React, {useState} from "react";
import {DownArrow2Icon} from "./Icons";
import MainCharts from "./MainCharts";
import Dropdown from "./components/Dropdown";

const ExamStats = () => {
    const [category, setCategory] = useState(0);
    const [interval, setInterval] = useState(0);
    const [bar, setBar] = useState(false);

    return (<div className="h-full w-full rounded-3xl bg-white flex flex-col">
        <div className="flex flex-col mx-auto px-2 my-8 sm:mx-8">
            <p className="text-blue-500">Twoje statystyki</p>
            <h1 className="font-bold text-2xl">Sprawdź swoje statystyki</h1>
        </div>

        <div className="flex flex-col xl:flex-row justify-between mb-4">

            <div className="px-4 md:px-12 xl:px-0 xl:ml-12 xl:flex-grow">
                <div className="mx-4 mt-4 md:mt-2">
                    <Dropdown name={'Wybierz specjalność'} options={[{
                        name: 'Test'
                    }]}/>
                </div>

                <div className="flex flex-col mt-4">
                    <div className="flex flex-row justify-between mx-4">
                        <p className="my-auto">Wyniki</p>
                        <div className="flex flex-row space-x-1 cursor-pointer">
                            <div onClick={() => setInterval(0)} className={interval === 0 ? "rounded-lg bg-blue-500 text-white" : "rounded-lg"}><p className="mx-4 my-1 text-sm">Dzień</p></div>
                            <div onClick={() => setInterval(1)} className={interval === 1 ? "rounded-lg bg-blue-500 text-white" : "rounded-lg"}><p className="mx-4 my-1 text-sm">Tydzień</p></div>
                            <div onClick={() => setInterval(2)} className={interval === 2 ? "rounded-lg bg-blue-500 text-white" : "rounded-lg"}><p className="mx-4 my-1 text-sm">Miesiąc</p></div>
                        </div>
                    </div>
                    <MainCharts bar={bar} period={interval}/>
                </div>
            </div>

            <div className="mx-auto xl:mx-0 px-4 flex flex-col">
                <button
                    onClick={() => setCategory(0)}
                    className={"mt-4 rounded-2xl border border-blue-500 font-medium text-center text-lg py-3 px-4 w-full md:w-96 mx-auto " + (category === 0 ? "bg-blue-500 text-white" : "bg-white text-blue-500")}>Nauka
                </button>
                <button
                    onClick={() => setCategory(1)}
                    className={"mt-4 rounded-2xl border border-blue-500 font-medium text-center text-lg py-3 px-4 w-full md:w-96 mx-auto " + (category === 1 ? "bg-blue-500 text-white" : "bg-white text-blue-500")}>Egzamin
                </button>
                <button
                    className="mt-4 rounded-2xl bg-gray-300 border text-black font-medium text-center text-lg py-3 px-4 w-full md:w-96 mx-auto">Resetuj
                    statystyki dla wybranej specialności
                </button>
                <div className="flex flex-row justify-center gap-4 mt-4">
                    <div className={"rounded-lg border border-blue-500 cursor-pointer w-full text-center " + (!bar ? "bg-blue-500 text-white" : "text-blue-500")} onClick={() => setBar(false)}>
                        <p className="mx-4 my-1 text-sm">LINIOWY</p>
                    </div>
                    <div className={"rounded-lg border border-blue-500 cursor-pointer w-full text-center " + (bar ? "bg-blue-500 text-white" : "text-blue-500")} onClick={() => setBar(true)}>
                        <p className="mx-4 my-1 text-sm">SŁUPKOWY</p>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default ExamStats;