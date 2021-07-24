import React from "react";
import {CheckmarkIcon} from "./Icons";

class Rule extends React.PureComponent{
    render() {
        return (
            <div className={(this.props.fill === true ? " bg-blue-200" : "") + " flex flex-col md:flex-row border-b border-opacity-10"}>
                <div className="mx-8 my-3"><CheckmarkIcon/></div>
                <h1 className="text-sm my-auto pr-4 pb-4 pl-4 md:pl-0 md:pb-0 md:my-auto">{this.props.rule}</h1>
            </div>
        )
    }
}

class DesktopActs extends React.Component {

    render(props) {
        return (
            <div className="h-full w-full rounded-3xl bg-white flex flex-col">
                <div className="flex flex-col mx-auto px-2 my-8 sm:mx-8">
                    <p className="text-blue-500">Inżynieryjna drogowa</p>
                    <h1 className="font-bold text-2xl">Wybierz akty do nauki</h1>
                </div>


                <div className="rounded-2xl border border-opacity-10 mx-8 flex flex-col overflow-hidden">

                    <div className="border-b border-opacity-10 flex flex-row">
                        <div className="mx-8 my-4"><CheckmarkIcon/></div>
                        <h1 className="font-bold text-2xl my-auto">Wszystkie przepisy</h1>
                    </div>

                    <Rule rule="Ustawa z dnia 07.07.1994 r. – Prawo budowlane." fill={false} />
                    <Rule rule="Rozporządzenie Ministra Infrastruktury z dnia 12.04.2002 r. w sprawie warunków technicznych jakim powinny odpowiadać budynki i ich usytuowanie." fill={false} />
                    <Rule rule="Rozporządzenie Ministra Infrastruktury i Rozwoju z dnia 20.10.2015 r. w sprawie warunków technicznych jakim powinny odpowiadać skrzyżowania linii kolejowych oraz bocznic kolejowych z drogami i ich usytuowanie. " fill={true} />
                    <Rule rule="Rozporządzenie Ministra Infrastruktury i Budownictwa z dnia 24.08.2016 r. w sprawie wzorów: wniosku o pozwolenie na budowę lub rozbiórkę, zgłoszenia budowy i przebudowy budynku mieszkalnego jednorodzinnego, oświadczenia o posiadanym prawie do dysponowania nieruchomością na cele budowlane, oraz decyzji o pozwoleniu na budowę lub rozbiórkę. " fill={false} />
                    <Rule rule="" fill={true} />
                    <Rule rule="" fill={true} />
                    <Rule rule="" fill={true} />
                </div>

                <button
                    className="mx-8 mt-6 mb-8 rounded-2xl border border-blue-500 bg-blue-500 text-white font-medium text-center text-lg py-4 px-4 flex-grow ">Rozpocznij naukę
                </button>
            </div>
        )
    }
}

export default DesktopActs