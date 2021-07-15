import React from "react";
import {
    Chart2Icon,
    ChildWithBookIcon,
    DocumentsIcon,
    DocumentWithHeartIcon, DownArrow2Icon,
    HandWithGearIcon,
    SaleIcon,
    TestIcon
} from "./Icons";
import DesktopMainCharts from "./DesktopMainCharts";

class DesktopMain extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <div className="h-full w-full rounded-3xl bg-white flex flex-row justify-between flex-wrap">
                <div className="flex flex-col mx-auto px-2 my-8 sm:mx-8">
                    <p className="text-blue-500">Uprawnienia budowlane</p>
                    <h1 className="font-bold text-2xl">Witaj Adam</h1>

                    <div className=" mt-6 shadow-md rounded-3xl bg-blue-500 flex flex-row justify-between">
                        <h1 className="text-2xl sm:text-3xl text-white font-bold mx-2 sm:mx-10 my-auto">Wybierz swoją
                            specjalność</h1>
                        <div className="mr-4 sm:mr-16 my-4">
                            <HandWithGearIcon/>
                        </div>
                    </div>

                    <div className="mt-6 mb-3 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
                        <div className="bg-blue-100 rounded-3xl flex flex-col">
                            <div className="mx-auto mt-8 mb-4"><TestIcon/></div>
                            <p className="mb-4 text-blue-500 text-center font-medium">Egzamin pisemny</p>
                        </div>

                        <div className="bg-blue-100 rounded-3xl flex flex-col">
                            <div className="mx-auto mt-8 mb-4"><ChildWithBookIcon/></div>
                            <p className="mb-4 text-blue-500 text-center font-medium">Egzamin ustny</p>
                        </div>

                        <div className="bg-blue-100 rounded-3xl flex flex-col">
                            <div className="mx-auto mt-8 mb-4"><DocumentsIcon/></div>
                            <p className="mb-4 text-blue-500 text-center font-medium">Akty prawne</p>
                        </div>

                        <div className="bg-blue-100 rounded-3xl flex flex-col">
                            <div className="mx-auto mt-8 mb-4"><Chart2Icon/></div>
                            <p className="mb-4 text-blue-500 text-center font-medium">Statystyki</p>
                        </div>

                        <div className="bg-blue-100 rounded-3xl flex flex-col">
                            <div className="mx-auto mt-8 mb-4"><DocumentWithHeartIcon/></div>
                            <p className="mb-4 text-blue-500 text-center font-medium">Ulubione pytania</p>
                        </div>

                        <div className="bg-blue-100 rounded-3xl flex flex-col">
                            <div className="mx-auto mt-8 mb-4"><SaleIcon/></div>
                            <p className="mb-4 text-blue-500 text-center font-medium">Pakiety promocyjne</p>
                        </div>

                    </div>
                </div>

                <div className="my-6 mx-2 md:mr-8 shadow-md rounded-3xl bg-blue-500 flex-col">
                    <div className="flex-col mx-6 my-8">
                        <p className="text-white">Podgląd</p>
                        <h1 className="font-bold text-white text-2xl">Twoich Statystyk</h1>

                        <div className="mt-8 py-4 rounded-3xl bg-white flex-col">
                            <div className="mx-4 flex flex-col md:flex-row">
                                <button
                                    className="md:mr-1 rounded-2xl border border-blue-500 text-blue-500 font-medium text-center text-lg py-3 px-4 w-full md:w-72">Nauka
                                </button>
                                <button
                                    className="mt-4 md:mt-0 md:ml-1 rounded-2xl bg-blue-500 border border-blue-500 text-white font-medium text-center text-lg py-3 px-4 w-full md:w-72">Egzamin
                                </button>
                            </div>
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
                                        <div className="rounded-xl bg-blue-500"><p className="mx-4 my-2 text-white text-sm">Tydzień</p></div>
                                        <div className="my-auto"><p>Miesiąc</p></div>
                                    </div>
                                </div>
                                <DesktopMainCharts />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default DesktopMain;