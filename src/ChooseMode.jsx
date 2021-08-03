import React from "react";
import {ABCClockPaperIcon, ABCPaperIcon} from "./Icons";
import {useHistory} from "react-router-dom";

const ChooseMode = () => {
    const history = useHistory();
    return (
        <div className="h-full w-full rounded-3xl bg-white flex flex-col">
            <div className="flex flex-col mx-auto px-2 my-8 sm:mx-8">
                <p className="text-blue-500">Inżynieryjna drogowa </p>
                <h1 className="font-bold text-2xl">Projektowe i wykonawcze w ograniczonym zakresie</h1>
            </div>

            <div className="flex flex-col xl:flex-row justify-center mt-6 mb-10 md:mb-40">
                <div className="mx-4 bg-blue-500 rounded-2xl flex flex-col hover:shadow-lg cursor-pointer" onClick={() => history.push('/learn')}>
                    <div className="mx-auto xl:mx-16 mt-12 mb-6 h-60 w-60"><ABCPaperIcon/></div>
                    <p className="mb-5 text-center text-white text-3xl font-medium">Nauka testów</p>
                </div>
                <div className="mx-4 mt-4 xl:mt-0 bg-blue-500 rounded-2xl flex flex-col hover:shadow-lg cursor-pointer" onClick={() => history.push('/exam')}>
                    <div className="mx-auto xl:mx-16 mt-12 mb-6 h-60 w-60"><ABCClockPaperIcon/></div>
                    <p className="mb-5 text-center text-white text-3xl font-medium">Egzamin pisemny</p>
                </div>
            </div>
        </div>
    )
}

export default ChooseMode;