import React, {useState} from "react";
import {
    ArchitectureIcon,
    BridgeIcon,
    CraneIcon,
    DamIcon,
    DemolitionIcon,
    MultimeterIcon,
    RoadIcon,
    SanitaryIcon,
    TeletechnicalIcon,
    TrainStationIcon,
    TrainSwitchIcon,
} from "./Icons";
import SpecialtyCard from "./components/SpecialtyCard";
import SubSpeciality from "./modals/SubSpeciality";


const Specialty = () => {
    const [speciality, setSpeciality] = useState("");
    const [subspecialiyModal, setSubspecialiyModal] = useState(false);
    return (
        <div className="h-full w-full rounded-3xl bg-white flex flex-col">
            <div className="flex flex-col px-2 my-8 sm:mx-8">
                <p className="text-blue-500">Uprawnienia budowlane</p>
                <h1 className="font-bold text-2xl">Wybierz specjalność</h1>
            </div>

            <div className="flex mx-auto justify-center mt-16 mb-24">
                <div className="mt-3 mb-8 mx-8 md:mx-16 flex flex-col sm:flex-row flex-wrap gap-8 justify-start">
                    <SpecialtyCard icon={ArchitectureIcon} title={'Architektoniczna'} onClick={(t) => {setSpeciality(t);setSubspecialiyModal(true)}}/>
                    <SpecialtyCard icon={CraneIcon} title={'Konstrukcyjno-Budowlana'} onClick={(t) => {setSpeciality(t);setSubspecialiyModal(true)}}/>
                    <SpecialtyCard icon={SanitaryIcon} title={'Instalacjna sanitarna'} onClick={(t) => {setSpeciality(t);setSubspecialiyModal(true)}}/>
                    <SpecialtyCard icon={MultimeterIcon} title={'Instalacjna elektryczna'} onClick={(t) => {setSpeciality(t);setSubspecialiyModal(true)}}/>
                    <SpecialtyCard icon={TeletechnicalIcon} title={'Instalacjna teletechniczna'} onClick={(t) => {setSpeciality(t);setSubspecialiyModal(true)}}/>
                    <SpecialtyCard icon={DemolitionIcon} title={'Inżynieryjna wyburzeniowa'} onClick={(t) => {setSpeciality(t);setSubspecialiyModal(true)}}/>
                    <SpecialtyCard icon={RoadIcon} title={'Inżynieryjna drogowa'} onClick={(t) => {setSpeciality(t);setSubspecialiyModal(true)}}/>
                    <SpecialtyCard icon={BridgeIcon} title={'Inżynieryjna mostowa'} onClick={(t) => {setSpeciality(t);setSubspecialiyModal(true)}}/>
                    <SpecialtyCard icon={TrainStationIcon} title={'Inżynieryjna kolejowa (obiekty budowlane)'} onClick={(t) => {setSpeciality(t);setSubspecialiyModal(true)}}/>
                    <SpecialtyCard icon={TrainSwitchIcon} title={'Inżynieryjna kolejowa (sterowanie ruchem)'} onClick={(t) => {setSpeciality(t);setSubspecialiyModal(true)}}/>
                    <SpecialtyCard icon={DamIcon} title={'Inżynieryjna hydrotechniczna'} onClick={(t) => {setSpeciality(t);setSubspecialiyModal(true)}}/>
                </div>
            </div>
            <SubSpeciality visible={subspecialiyModal} speciality={speciality} onClose={() => setSubspecialiyModal(false)}/>
        </div>
    );
}

export default Specialty;