import React, {useState} from "react";
import {ExchangeDolarIcon, FullScreenIcon, LoupeIcon} from "./Icons";
import {Document, Page} from "react-pdf";
import PdfViewerComponent from "./PdfViewerComponent"

const ActMode = () => {
    const [zoom, setZoom] = useState(1.4);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    return (
        <div className="h-full w-full flex flex-col xl:flex-row">
            <div className="relative w-full rounded-3xl bg-white flex flex-col overflow-hidden">
                <div className="relative h-full overflow-scroll" style={{maxHeight: 'calc(100vh - 10rem)'}}>
                <PdfViewerComponent
                document={"Przykładowy_akt prawny_nr_3.pdf"}
                />
                </div>
            </div>

            <div
                className="relative xl:w-1/2 xl:ml-4 rounded-3xl bg-white flex flex-col overflow-hidden mt-4 xl:mt-0">
                <p className="text-blue-500 m-6">Tryb czytania aktów prawnych</p>
                <p className="text-center text-lg mx-6">Obecnie uczysz się specjalności:</p>
                <p className="text-center font-bold text-lg mx-6">
                    Architektonicznej <br/>
                    Projektowanie oraz kierowanie <br/>
                    robotami bez ograniczeń
                </p>
                <p className="text-center my-6 mx-auto w-9/12">Rozporządzenie Ministra Gospodarki i Pracy z dnia
                    4.07.2005 r. w sprawie szkolenia i egzaminowania
                    osób mających dostęp do materiałów wybuchowych
                    przeznaczonych do użytku cywilnego. </p>

                <div className="flex flex-col space-y-3 mb-20 xl:mb-60 mx-4">

                    <button
                        className="rounded-2xl border border-blue-500 font-bold text-sm py-auto h-12 px-6 mx-auto flex flex-row  w-full md:w-2/3">
                        <p className="my-auto">
                            Zmień na inny akt prawny
                        </p>
                        <div className="ml-auto my-auto"><ExchangeDolarIcon/></div>
                    </button>

                    <button
                        className="rounded-2xl border border-blue-500 font-bold text-sm py-auto h-12 px-6 mx-auto flex flex-row  w-full md:w-2/3">
                        <p className="my-auto">
                            Tryb pełnoekranowy
                        </p>
                        <div className="ml-auto my-auto"><FullScreenIcon/></div>
                    </button>

                    <button
                        className="rounded-2xl border border-blue-500 font-bold text-sm py-auto h-12 px-6 mx-auto flex flex-row  w-full md:w-2/3">
                        <p className="my-auto">
                            Przewijanie ciągłe / Przerzucanie stron
                        </p>
                    </button>

                    <button
                        className="rounded-2xl border border-blue-500 font-bold text-sm py-auto h-12 px-6 mx-auto flex flex-row  w-full md:w-2/3">
                        <p className="my-auto">
                            Wyszukiwarka
                        </p>
                        <div className="ml-auto my-auto"><LoupeIcon/></div>
                    </button>

                </div>

            </div>
        </div>
    )
}

export default ActMode