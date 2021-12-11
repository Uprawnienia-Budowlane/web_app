import React, {useState, useEffect} from "react";

const Licenses = () => {

    const [writtenActive, setWrittenActive] = useState(false);
    const [oralActive, setOralActive] = useState(false);
    const [actsActive, setActsActive] = useState(true);

    const [licenses, setLicenses] = useState([])


    return (
        <div className="h-full w-full rounded-3xl bg-white flex flex-col justify-between flex-wrap">

            <div className="border-b border-opacity-50 my-8 flex flex-col md:flex-row justify-between">
                <div className="ml-8 flex flex-col mb-8">
                    <p className="text-blue-500">Sprawdź licencje</p>
                    <h1 className="font-bold text-2xl ">Aktualne licencje</h1>
                </div>
                <div className="mx-auto flex flex-row md:space-x-4 mb-8">
                    <button
                        className="rounded-2xl border border-blue-500 text-white bg-blue-500 text-center py-1.5 px-5">Posiadane
                        licencje
                    </button>
                    <button
                        className="rounded-2xl border border-blue-500 text-blue-500 text-center py-1.5 px-9">Wykup
                        licencje
                    </button>
                </div>
                <div className="mx-auto md:mr-8 mb-8">
                    <button
                        className="rounded-2xl border border-blue-500 text-green-500 font-bold text-center text-lg py-3 px-8">Posiadasz
                        aktualną bazę danych
                    </button>
                </div>
            </div>

            <div
                className="mt-4 md:mt-16 flex flex-col md:flex-row flex-wrap space-x-8 justify-center md:justify-evenly border-b border-opacity-50">
                
            <div className="flex flex-col mx-8">
                    <p className="text-lg text-blue-500 font-bold text-center">licenzja</p>
                    <p className="text-sm text-center">{(() => {
                        if(writtenActive)
                            return "Posiadasz aktywowaną licencję do 11.09.2021";
                        else
                            return "Obecnie nieaktywna";
                    })()}</p>
                    <div className="rounded-2xl bg-blue-500 w-full mt-4">
                        <p className="text-center text-white my-4 px-12">Wykup Licencje</p>
                    </div>
                </div>


                <div className="flex flex-col pr-8">
                    <p className="text-lg text-blue-500 font-bold text-center">Licencja do nauki na Egzamin Ustny</p>
                    <p className="text-sm text-center">{(() => {
                        if(oralActive)
                            return "Posiadasz aktywowaną licencję do 11.09.2021";
                        else
                            return "Obecnie nieaktywna";
                    })()}</p>
                    <div className="rounded-2xl bg-blue-500 w-full mt-4">
                        <p className="text-center text-white my-4 px-12">Wykup Licencje</p>
                    </div>
                </div>

                <div className="flex flex-col pr-8 mb-4 md:mb-36">
                    <p className="text-lg text-blue-500 font-bold text-center">Licencja dostępu do aktów prawnych</p>
                    <p className="text-sm text-center">{(() => {
                        if(actsActive)
                            return "Posiadasz aktywowaną licencję do 11.09.2021";
                        else
                            return "Obecnie nieaktywna";
                    })()}</p>
                    <div className="rounded-2xl bg-blue-500 w-full mt-4">
                        <p className="text-center text-white my-4 px-12">{(() => {
                            if(actsActive)
                                return <>juzek@juzek.pl<br/><small>wi29mdfsf##3r334r33r34R#R#R#R#k@SS22e2</small></>;
                            else
                                return "Wykup licencję";
                        })()}</p>
                    </div>
                </div>
            </div>

            <div className="mx-8 my-12 flex flex-col w-2/3">
                <p className="mb-4 text-lg text-blue-500 font-bold text-left">Aktywuj nową licencję:</p>
                <div className="flex flex-row space-x-8">
                    <div className="mt-auto w-full">
                        <p className=" mb-1 text-sm text-blue-500">Adres email:</p>
                        <input
                            className="border-blue-500 rounded-2xl border outline-none h-12 w-full p-4"
                            placeholder=""/>
                    </div>
                    <div className="mt-auto w-full">
                        <p className=" mb-1 text-sm text-blue-500">Klucz:</p>
                        <input
                            className="border-blue-500 rounded-2xl border outline-none h-12 w-full p-4"
                            placeholder=""/>
                    </div>
                    <button
                        className="rounded-2xl border border-blue-500 bg-blue-500 text-white text-center h-12 mt-auto px-8  w-96">Aktywuj
                        licencje
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Licenses;