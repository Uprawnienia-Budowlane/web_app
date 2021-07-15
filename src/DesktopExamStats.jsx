import React from "react";
import {DownArrow2Icon} from "./Icons";
import DesktopMainCharts from "./DesktopMainCharts";


class DesktopExamStats extends React.Component {

    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <div className="h-full w-full rounded-3xl bg-white flex flex-col">
                <div className="flex flex-col mx-auto px-2 my-8 sm:mx-8">
                    <p className="text-blue-500">Twoje statystyki</p>
                    <h1 className="font-bold text-2xl">Sprawdź swoje statystyki</h1>
                </div>

                <div className="flex flex-col xl:flex-row justify-between mb-4">

                    <div className="px-4 md:px-12 xl:px-0 xl:ml-12 xl:flex-grow">
                        <div className="mx-4 mt-4 md:mt-2">
                            <button
                                className="rounded-2xl border border-blue-500 font-medium text-lg py-3 w-full">
                                <div className="px-4 flex flex-row justify-between">
                                    <p>Wybierz specjalność</p>
                                    <div className="my-auto">
                                        <DownArrow2Icon/>
                                    </div>
                                </div>
                            </button>
                        </div>

                        <div className="flex flex-col mt-4">
                            <div className="flex flex-row justify-between mx-4">
                                <p className="my-auto">Wyniki</p>
                                <div className="flex flex-row space-x-4">
                                    <div className="my-auto"><p className="my-auto">Dzień</p></div>
                                    <div className="rounded-xl bg-blue-500"><p
                                        className="mx-4 my-2 text-white text-sm">Tydzień</p></div>
                                    <div className="my-auto"><p>Miesiąc</p></div>
                                </div>
                            </div>
                             <DesktopMainCharts/>
                        </div>
                    </div>

                    <div className="mx-auto xl:mx-0 px-4 flex flex-col">
                        <button
                            className="mt-4 rounded-2xl bg-white border border-blue-500 text-blue-500 font-medium text-center text-lg py-3 px-4 w-full md:w-96 mx-auto">Nauka
                        </button>
                        <button
                            className="mt-4 rounded-2xl bg-blue-500 border border-blue-500 text-white font-medium text-center text-lg py-3 px-4 w-full md:w-96 mx-auto">Egzamin
                        </button>
                        <button
                            className="mt-4 rounded-2xl bg-gray-300 border text-black font-medium text-center text-lg py-3 px-4 w-full md:w-96 mx-auto">Resetuj statystyki dla wybranej specialności
                        </button>
                    </div>

                </div>

            </div>
        );
    }
}

export default DesktopExamStats;