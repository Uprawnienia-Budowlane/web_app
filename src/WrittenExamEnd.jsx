import React from "react";
import {LightbulbIcon, SettingsIcon} from "./Icons";

const WrittenExamEnd = () => {
    return (
        <div className="h-full w-full rounded-3xl bg-white flex flex-col overflow-hidden">

            <div className="border-b border-opacity-50 flex mt-4 flex-col xl:flex-row justify-between">
                <div className="flex flex-col px-2 ml-2 xl:ml-8 my-4">
                    <p className="text-blue-500">Tryb egzaminu pisemnego</p>
                    <h1 className="font-bold ">Inżynieria hydrotechniczna - Projektowanie oraz kierowanie robotami w
                        ograniczonym zakresie</h1>
                </div>

                <div className="flex flex-col md:flex-row mx-4 mb-2 md:mb-0 md:mr-8 justify-end">
                    <div className="my-auto flex flex-row">
                        <div className="my-auto ml-auto md:ml-8"><LightbulbIcon/></div>
                        <div className="my-auto ml-8"><SettingsIcon/></div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default WrittenExamEnd;