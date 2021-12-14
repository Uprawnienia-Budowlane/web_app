import React, {useState} from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import CheckBox from "./components/CheckBox";

import mobile_arrow_ from './photos/mobile_arrow.svg'

const Rule = (props) => {
    const [checked, setChecked] = useState(false);
    return (
        <div
            className={(checked === true ? " bg-blue-200" : "") + " flex flex-row md:flex-row"}>
            <CheckBox checked={checked} onChecked={(v) => setChecked(v)}/>
            <h1 className="text-sm my-auto pr-4 pb-4 pl-4 md:pl-0 md:pb-0 md:my-auto">{props.rule}</h1>
        </div>
    );
}

const Acts = () => {
    return (
            <>
        <div className="mobile_bar_itself mb-6 shadow-xl">
        <img src={mobile_arrow_}></img>
        <div className="flex flex-col px-2 my-8 ml-0 mx-6">
        <p className="text-blue-500">Inżynieryjna drogowa </p>
        <h1 className="font-bold text-2xl">Wybierz akty do nauki</h1>
        </div>
        </div>

        <div className="h-full w-full rounded-3xl bg-white flex flex-col">
            <div className="flex flex-col mx-auto px-2 my-8 sm:mx-8 Mobile_hide">
                <p className="text-blue-500">Inżynieryjna drogowa</p>
                <h1 className="font-bold text-2xl">Wybierz akty do nauki</h1>
            </div>
            <div className="flex flex-col overflow-hidden">
                <div className="flex flex-row">
                    <CheckBox onChecked={() => {}}/>
                    <h1 className="font-bold text-2xl my-auto">Wszystkie przepisy</h1>
                </div>

                <Rule rule="Ustawa z dnia 07.07.1994 r. – Prawo budowlane." fill={false}/>
                <Rule
                    rule="Rozporządzenie Ministra Infrastruktury z dnia 12.04.2002 r. w sprawie warunków technicznych jakim powinny odpowiadać budynki i ich usytuowanie."
                    fill={false}/>
                <Rule
                    rule="Rozporządzenie Ministra Infrastruktury i Rozwoju z dnia 20.10.2015 r. w sprawie warunków technicznych jakim powinny odpowiadać skrzyżowania linii kolejowych oraz bocznic kolejowych z drogami i ich usytuowanie. "
                    fill={true}/>
                <Rule
                    rule="Rozporządzenie Ministra Infrastruktury i Budownictwa z dnia 24.08.2016 r. w sprawie wzorów: wniosku o pozwolenie na budowę lub rozbiórkę, zgłoszenia budowy i przebudowy budynku mieszkalnego jednorodzinnego, oświadczenia o posiadanym prawie do dysponowania nieruchomością na cele budowlane, oraz decyzji o pozwoleniu na budowę lub rozbiórkę. "
                    fill={false}/>
                <Rule rule="Heu, abactus! Messis sed mire ducunt ad nobilis cedrium. Galluss nocere in fatalis quadrata! Ecce, peritus pars! Liberis messis! Advena, ausus, et agripeta." fill={true}/>
                <Rule rule="Est talis extum, cesaris. Salvus, velox eras recte acquirere de rusticus, secundus musa. Cur messor studere? Eheu, bubo!" fill={true}/>
                <Rule rule="Cum historia ridetis, omnes planetaes carpseris primus, regius orexises. Cur guttus peregrinationes? Gallus, saga, et calcaria. Lotus zetas ducunt ad luna." fill={true}/>
            </div>
            <div className="mx-8 flex">
            <Link to="/act-mode" style={{display: 'block', alignSelf: 'center', width: '100%' }}>
            <button style={{ width: '100%' }} className="mt-6 mb-8 rounded-2xl border border-blue-500 bg-blue-500 text-white font-medium text-center text-lg py-4 px-4 flex-grow ">Rozpocznij naukę</button>
            </Link>
            </div>
        </div>
        </>
    )
};

export default Acts;