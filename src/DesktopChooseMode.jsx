import React from "react";
import {ABCClockPaperIcon, ABCPaperIcon} from "./Icons";

class DesktopChooseMode extends React.Component {

    render(props) {
        return (
            <div className="h-full w-full rounded-3xl bg-white flex flex-col">
                <div className="flex flex-col mx-auto px-2 my-8 sm:mx-8">
                    <p className="text-blue-500">Inżynieryjna drogowa </p>
                    <h1 className="font-bold text-2xl">Projektowe i wykonawcze w ograniczonym zakresie</h1>
                </div>

                <div className="flex flex-col xl:flex-row justify-center mt-6 mb-10 md:mb-40">
                    <div className="mx-4 bg-blue-500 rounded-2xl flex flex-col">
                        <div className="mx-auto xl:mx-24 mt-16 mb-4"><ABCPaperIcon /></div>
                        <p className="mb-4 text-center text-white text-3xl">Nauka testów</p>
                    </div>
                    <div className="mx-4 mt-4 xl:mt-0 bg-blue-500 rounded-2xl flex flex-col">
                        <div className="mx-auto xl:mx-10 mt-16 mb-4"><ABCClockPaperIcon /></div>
                        <p className="mb-4 text-center text-white text-3xl">Egzamin pisemny</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default DesktopChooseMode;