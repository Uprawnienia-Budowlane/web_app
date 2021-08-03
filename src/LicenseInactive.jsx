import React from "react";


class LicenseInactive extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <div className="h-full w-full rounded-3xl bg-white flex flex-col justify-between flex-wrap">

                <div className="border-b border-opacity-50 my-8 flex flex-col md:flex-row justify-between">
                    <div className="ml-8 flex flex-col mb-8">
                        <p className="text-blue-500">Sprawdź licencje</p>
                        <h1 className="font-bold text-2xl ">Aktualne licencje</h1>
                    </div>
                    <div className="mx-auto flex flex-row md:space-x-4 mb-8">
                        <button
                            className="rounded-2xl border border-blue-500 text-white bg-blue-500 text-center py-3 px-4">Posiadane licencje
                        </button>
                        <button
                            className="rounded-2xl border border-blue-500 text-blue-500 text-center py-3 px-8">Wykup licencje
                        </button>
                    </div>
                    <div className="mx-auto md:mr-8 mb-8">
                        <button
                            className="rounded-2xl border border-blue-500 text-green-500 font-bold text-center text-lg py-3 px-8">Posiadasz aktualną bazę danych
                        </button>
                    </div>
                </div>

                <div className="mt-4 md:mt-16 flex flex-col md:flex-row flex-wrap space-x-8 justify-center md:justify-between border-b border-opacity-50">

                    <div className="flex flex-col mx-8">
                        <p className="text-lg text-blue-500 font-bold text-center">Licencja do nauki na Egzamin Pisemny</p>
                        <p className="text-sm text-center">Posiadasz aktywowaną licencję do 11.09.2021</p>
                        <div className="rounded-2xl bg-blue-500 w-full mt-4">
                            <p className="text-center text-white my-4 px-12">Wykup Licencje</p>
                        </div>
                    </div>

                    <div className="flex flex-col pr-8">
                        <p className="text-lg text-blue-500 font-bold text-center">Licencja do nauki na Egzamin Ustny</p>
                        <p className="text-sm text-center">Posiadasz aktywowaną licencję do 11.09.2021</p>
                        <div className="rounded-2xl bg-blue-500 w-full mt-4">
                            <p className="text-center text-white my-4 px-12">Wykup Licencje</p>
                        </div>
                    </div>

                    <div className="flex flex-col pr-8 mb-4 md:mb-36">
                        <p className="text-lg text-blue-500 font-bold text-center">Licencja dostępu do aktów prawnych</p>
                        <p className="text-sm text-center">Posiadasz aktywowaną licencję do 11.09.2021</p>
                        <div className="rounded-2xl bg-blue-500 w-full mt-4">
                            <p className="text-center text-white my-4 px-12">Wykup Licencje</p>
                        </div>
                    </div>
                </div>

                <div className="mx-8 mt-2 mb-8 flex flex-col">
                    <p className="mb-4 text-lg text-blue-500 font-bold text-left">Aktywuj nową licencje</p>
                    <div className="flex flex-row space-x-4">
                        <div className="mt-auto">
                            <p className=" mb-1 text-sm text-blue-500">Adres email:</p>
                            <input
                                className="border-blue-500 rounded-2xl border outline-none h-12 w-full p-4"
                                placeholder=""/>
                        </div>
                        <div className="mt-auto">
                            <p className=" mb-1 text-sm text-blue-500">Klucz:</p>
                            <input
                                className="border-blue-500 rounded-2xl border outline-none h-12 w-full p-4"
                                placeholder=""/>
                        </div>
                        <button
                            className="rounded-2xl border border-blue-500 bg-blue-500 text-white text-center h-12 mt-auto px-8" >Aktywuj licencje
                        </button>

                    </div>
                </div>
            </div>
        )
    }
}

export default LicenseInactive;