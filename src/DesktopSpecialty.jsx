import React from "react";
import {
    ArchitectureIcon, BridgeIcon,
    CraneIcon, DamIcon, DemolitionIcon,
    MultimeterIcon, RoadIcon,
    SanitaryIcon, TeletechnicalIcon, TrainStationIcon, TrainSwitchIcon,
} from "./Icons";


class DesktopSpecialty extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <div className="h-full w-full rounded-3xl bg-white flex flex-col">
                <div className="flex flex-col px-2 my-8 sm:mx-8">
                    <p className="text-blue-500">Uprawnienia budowlane</p>
                    <h1 className="font-bold text-2xl">Wybierz specjalność</h1>
                </div>

                <div className="flex mx-auto  justify-center">
                    <div className="mt-3 mb-8 mx-8 md:mx-16 flex flex-col sm:flex-row flex-wrap gap-8">

                        <div className="w-52 h-52 bg-blue-500 rounded-3xl flex flex-col">
                            <div className="mx-auto mt-8 mb-4"><ArchitectureIcon/></div>
                            <p className="mb-4 text-white text-center font-medium">Architektoniczna</p>
                        </div>
                        <div className="w-52 h-52 bg-blue-500 rounded-3xl flex flex-col">
                            <div className="mx-auto mt-8 mb-4"><CraneIcon/></div>
                            <p className="mb-4 w-24 mx-auto text-white text-center font-medium break-normal">Konstrukcyjno-
                                Budowlana</p>
                        </div>
                        <div className="w-52 h-52 bg-blue-500 rounded-3xl flex flex-col">
                            <div className="mx-auto mt-8 mb-4"><SanitaryIcon/></div>
                            <p className="mb-4 w-24 mx-auto text-white text-center font-medium break-normal">Instalacjna
                                sanitarna</p>
                        </div>
                        <div className="w-52 h-52 bg-blue-500 rounded-3xl flex flex-col">
                            <div className="mx-auto mt-8 mb-4"><MultimeterIcon/></div>
                            <p className="mb-4 w-24 mx-auto text-white text-center font-medium break-normal">Instalacjna
                                elektryczna</p>
                        </div>
                        <div className="w-52 h-52 bg-blue-500 rounded-3xl flex flex-col">
                            <div className="mx-auto mt-8 mb-4"><TeletechnicalIcon/></div>
                            <p className="mb-4 w-24 mx-auto text-white text-center font-medium break-normal">Instalacjna
                                teletechniczna</p>
                        </div>
                        <div className="w-52 h-52 bg-blue-500 rounded-3xl flex flex-col">
                            <div className="mx-auto mt-8 mb-4"><DemolitionIcon/></div>
                            <p className="mb-4 w-24 mx-auto text-white text-center font-medium break-normal">
                                Inżynieryjna wyburzeniowa
                                </p>
                        </div>
                        <div className="w-52 h-52 bg-blue-500 rounded-3xl flex flex-col">
                            <div className="mx-auto mt-8 mb-4"><RoadIcon/></div>
                            <p className="mb-4 w-24 mx-auto text-white text-center font-medium break-normal">
                                Inżynieryjna drogowa
                            </p>
                        </div>
                        <div className="w-52 h-52 bg-blue-500 rounded-3xl flex flex-col">
                            <div className="mx-auto mt-8 mb-4"><BridgeIcon/></div>
                            <p className="mb-4 w-24 mx-auto text-white text-center font-medium break-normal">
                                Inżynieryjna mostowa
                            </p>
                        </div>
                        <div className="w-52 h-52 bg-blue-500 rounded-3xl flex flex-col">
                            <div className="mx-auto mt-8 mb-4"><TrainStationIcon/></div>
                            <p className="mb-4 mx-3 text-white text-center font-medium break-normal">
                                Inżynieryjna kolejowa (obiekty budowlane)</p>
                        </div>
                        <div className="w-52 h-52 bg-blue-500 rounded-3xl flex flex-col">
                            <div className="mx-auto mt-8 mb-4"><TrainSwitchIcon/></div>
                            <p className="mb-4 mx-3 text-white text-center font-medium break-normal">
                                Inżynieryjna kolejowa (sterowanie ruchem)</p>
                        </div>
                        <div className="w-52 h-52 bg-blue-500 rounded-3xl flex flex-col">
                            <div className="mx-auto mt-8 mb-4"><DamIcon/></div>
                            <p className="mb-4 w-24 mx-auto text-white text-center font-medium break-normal">
                                Inżynieryjna hydrotechniczna
                            </p>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default DesktopSpecialty;