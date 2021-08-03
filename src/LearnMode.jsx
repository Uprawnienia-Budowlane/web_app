import React, {useState} from "react";
import {ArrowXIcon, EyeIcon, HeartFill2Icon, LightbulbIcon, QuestionmarkIcon, SettingsIcon} from "./Icons";
import {Document, Page} from "react-pdf";
import {useHistory} from "react-router-dom";
import KeyShortcuts from "./modals/KeyShortcuts";

const Answer = (props) => <div className="flex flex-col md:flex-row border-b border-opacity-50 h-24">
    <p className="text-2xl my-auto py-1 md:py-5 mx-10 md:mx-12 font-medium">{props.name}</p>
    <p className="pr-12 pl-8 pb-2 md:pb-0 md:pl-0 my-auto text-sm">{props.text}</p>
</div>;

const LearnMode = () => {
    const [sidebarMode, setSidebarMode] = useState(0);
    const [zoom, setZoom] = useState(1);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [keyboardModal, setKeyboardModal] = useState(false);
    const history = useHistory();

    return (<div className="h-full w-full flex flex-col xl:flex-row">
            <div className="rounded-3xl bg-white flex flex-col overflow-hidden">

                <div className="border-b border-opacity-50 flex flex-col xl:flex-row justify-between">
                    <div className="flex flex-col px-2 ml-2 xl:ml-8 my-5">
                        <p className="text-blue-500">Tryb egzaminu pisemnego</p>
                        <h1 className="font-bold ">Inżynieria hydrotechniczna - Projektowanie oraz kierowanie
                            robotami w
                            ograniczonym zakresie</h1>
                    </div>

                    <div className="flex flex-col md:flex-row mx-4 md:mr-8 justify-end">
                        <div className="my-auto flex flex-row">
                            <div className="my-auto ml-auto md:ml-8 cursor-pointer"
                                 onClick={() => setKeyboardModal(true)}><LightbulbIcon/></div>
                            <div className="my-auto ml-8 cursor-pointer" onClick={() => history.push('/settings')}>
                                <SettingsIcon/></div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-opacity-50 flex">
                    <h1 className="font-bold p-5 md:px-8">Rozporządzenie Ministra Rozwoju, Pracy i Technologii
                        z dnia 27.10.2020 r. w sprawie ewidencji nabytych, zużytych, przechowywanych i zbytych
                        materiałów wybuchowych przeznaczonych do użytku cywilnego oraz materiałów wybuchowych
                        znalezionych i zniszczonych podczas wykonywania działalności gospodarczej w zakresie
                        oczyszczania terenów.</h1>
                </div>

                <div
                    className="border-b border-opacity-50 bg-warmGray-100 flex flex-col md:flex-row justify-center md:space-x-16">
                    <div className="flex flex-row mx-auto md:mx-0 my-2 md:my-5">
                        <p className="mr-6 font-bold text-blue-500">Pytanie</p>
                        <p className="font-bold">23/500</p>
                    </div>
                    <div className="flex flex-row mx-auto md:mx-0 my-2 md:my-5">
                        <p className="mr-6 font-bold text-blue-500">Poprawne</p>
                        <p className="font-bold text-green-500">4</p>
                    </div>
                    <div className="flex flex-row mx-auto md:mx-0 my-2 md:my-5">
                        <p className="mr-6 font-bold text-blue-500">Błędne</p>
                        <p className="font-bold text-red-500">4</p>
                    </div>
                    <div className="flex flex-row mx-auto md:mx-0 my-2 md:my-5">
                        <p className="mr-6 font-bold text-blue-500">Wynik</p>
                        <p className="font-bold">%</p>
                    </div>
                </div>

                <div className="bg-blue-200">
                    <p className="p-8 text-sm">Organ administracji architektoniczno-budowlanej zamieszcza w
                        Biuletynie Informacji Publicznej na stronie podmiotowej obsługującego go urzędu informacje o
                        doręczeniu zgłoszenia dotyczącego wolnostojących budynków mieszkalnych jednorodzinnych,
                        których
                        obszar oddziaływania mieści się w całości na działce lub działkach, których zostały
                        zaprojektowane w terminie: </p>
                </div>

                <Answer name={'A'}
                        text={'Wiat o powierzchni zabudowy do 50 m2, sytuowanych na działce, na której znajduje się budynek mieszkalny, lub przeznaczonej pod budownictwo mieszkaniowe, przy czym łączna liczba tych wiat na działce nie może przekraczać dwóch na każde 1000 m2 powierzchni działki '}/>
                <Answer name={'B'}
                        text={'Wiat o powierzchni zabudowy do 50 m2, sytuowanych na działce, na której znajduje się budynek mieszkalny, lub przeznaczonej pod budownictwo mieszkaniowe, przy czym łączna liczba tych wiat'}/>
                <Answer name={'C'}
                        text={'Wiat o powierzchni zabudowy do 50 m2, sytuowanych na działce, na której znajduje się budynek mieszkalny, lub przez przy czym łączna liczba tych wiat na działce nie może przekraczać dwóch na każde 1000 m2 powierzchni działki'}/>

                <div className="flex flex-row my-4 mx-8 justify-between">
                    <div className="my-auto text-blue-500">
                        <div
                            className="rounded-2xl border border-blue-500 p-0.5 h-14 w-14 hover:bg-blue-50 transition-colors duration-200">
                            <ArrowXIcon/></div>
                    </div>
                    <div className="flex flex-row space-x-1 md:space-x-8">
                        <div className="my-auto ">
                            <div
                                className="rounded-2xl border border-blue-500 p-3 h-14 w-14 hover:bg-blue-50 transition-colors duration-200">
                                <HeartFill2Icon/></div>
                        </div>
                        <div className="my-auto">
                            <div
                                className="rounded-2xl border border-blue-500 p-3 h-14 w-14 hover:bg-blue-50 transition-colors duration-200">
                                <QuestionmarkIcon/></div>
                        </div>
                        <div className="my-auto">
                            <div
                                className="rounded-2xl border border-blue-500 p-2.5 h-14 w-14 hover:bg-blue-50 transition-colors duration-200">
                                <EyeIcon/></div>
                        </div>
                    </div>
                    <div className="transform rotate-180 my-auto text-blue-500">
                        <div
                            className="rounded-2xl border border-blue-500 p-0.5 h-14 w-14 hover:bg-blue-50 transition-colors duration-200">
                            <ArrowXIcon/></div>
                    </div>
                </div>

            </div>

            <div
                className={"relative w-full xl:w-5/6 xl:ml-4 rounded-3xl bg-white flex flex-col overflow-hidden mt-4 xl:mt-0 " + (window.config.settings.pageLayout === 0 ? 'hidden' : '')}>

                <div className="flex flex-row m-6 justify-between">
                    <p className={sidebarMode === 0 ? 'font-bold' : 'cursor-pointer'}
                       onClick={() => setSidebarMode(0)}>Podgląd Aktu</p>
                    <p className={sidebarMode === 1 ? 'font-bold' : 'cursor-pointer'}
                       onClick={() => setSidebarMode(1)}>Podgląd odpowiedzi</p>
                </div>
                <div className={sidebarMode === 0 ? "" : "hidden"}
                     style={{height: "calc(100vh - 20rem)"}}>
                    <div className="flex flex-row px-6 border-b pb-2">
                        <div className="h-6 w-6 cursor-pointer hover:text-gray-600"
                             onClick={() => setPageNumber(pageNumber > 1 ? pageNumber - 1 : pageNumber)}>
                            <ArrowXIcon/>
                        </div>
                        <div className="flex-1"/>
                        <div
                            className="h-6 w-6 text-2xl font-medium text-center relative mr-1 cursor-pointer hover:text-gray-600"
                            onClick={() => setZoom(zoom + .1)}
                            style={{top: -5}}>
                            +
                        </div>
                        <div
                            className="h-6 w-6 text-2xl font-bold text-center relative ml-1 cursor-pointer hover:text-gray-600"
                            onClick={() => setZoom(zoom - .1)}
                            style={{top: -5}}>
                            −
                        </div>
                        <div className="flex-1"/>
                        <div className="h-6 w-6 transform rotate-180 cursor-pointer hover:text-gray-600"
                             onClick={() => setPageNumber(pageNumber < numPages ? pageNumber + 1 : pageNumber)}>
                            <ArrowXIcon/>
                        </div>
                    </div>
                    <div className="overflow-scroll h-full">
                        <Document
                            file="/57.pdf"
                            renderMode={'canvas'}
                            onLoadSuccess={(pdf) => setNumPages(pdf.numPages)}>
                            <Page pageNumber={pageNumber}
                                  scale={zoom}
                                  renderTextLayer={false}/>
                        </Document>
                    </div>
                </div>
                <div className={sidebarMode === 1 ? "overflow-x-auto overflow-y-none" : "hidden"}
                     style={{height: "calc(100vh - 21rem)"}}>
                    <p className="mx-6">
                        Rozporządzenie Ministra Infrastruktury i Budownictwa z dnia 24.08.2016 r. w sprawie wzorów:
                        wniosku o pozwolenie na budowę lub rozbiórkę, zgłoszenia budowy i przebudowy budynku ...
                    </p>
                    <p className="m-6 text-sm">
                        Libero nunc consequat interdum varius sit amet mattis. Donec ac odio tempor orci dapibus
                        ultrices in iaculis nunc. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit.
                        Malesuada nunc vel risus commodo viverra maecenas. Quis viverra nibh cras pulvinar mattis
                        nunc sed. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Venenatis tellus
                        in metus vulputate eu scelerisque felis imperdiet proin. Ut faucibus pulvinar elementum
                        integer. Gravida rutrum quisque non tellus orci ac auctor. Nulla facilisi morbi tempus
                        iaculis urna id volutpat lacus. Habitant morbi tristique senectus et netus et malesuada
                        fames. </p>
                    <img className="p-6 w-full border-box"
                         src="https://cdn.discordapp.com/attachments/626102413857652749/865594901423849532/unknown.png"
                         alt=""/>
                    <p className="m-6 text-sm">
                        Libero nunc consequat interdum varius sit amet mattis. Donec ac odio tempor orci dapibus
                        ultrices in iaculis nunc. Vulputate odio ut enim blandit volutpat maecenas volutpat blandit.
                        Malesuada nunc vel risus commodo viverra maecenas. Quis viverra nibh cras pulvinar mattis
                        nunc sed. Ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Venenatis tellus
                        in metus vulputate eu scelerisque felis imperdiet proin. Ut faucibus pulvinar elementum
                        integer. Gravida rutrum quisque non tellus orci ac auctor. Nulla facilisi morbi tempus
                        iaculis urna id volutpat lacus. Habitant morbi tristique senectus et netus et malesuada
                        fames. </p>
                </div>
            </div>
            <KeyShortcuts visible={keyboardModal} onClose={() => setKeyboardModal(false)}/>
        </div>
    );
}

export default LearnMode;