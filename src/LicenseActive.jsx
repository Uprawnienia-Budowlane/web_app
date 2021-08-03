import React from "react";


class LicenseActive extends React.Component {
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
                            <p className="text-center text-white mt-4 md:px-12">przykładowyjakiśemail@email.com</p>
                            <p className="text-xs text-center text-white mb-4">wi29mdfsf##3r334r33r34R#R#R#R#k@SS22e2</p>
                        </div>
                    </div>

                    <div className="flex flex-col pr-8">
                        <p className="text-lg text-blue-500 font-bold text-center">Licencja do nauki na Egzamin Ustny</p>
                        <p className="text-sm text-center">Posiadasz aktywowaną licencję do 11.09.2021</p>
                        <div className="rounded-2xl bg-blue-500 w-full mt-4">
                            <p className="text-center text-white mt-4 md:px-12">przykładowyjakiśemail@email.com</p>
                            <p className="text-xs text-center text-white mb-4">wi29mdfsf##3r334r33r34R#R#R#R#k@SS22e2</p>
                        </div>
                    </div>

                    <div className="flex flex-col pr-8">
                        <p className="text-lg text-blue-500 font-bold text-center">Licencja dostępu do aktów prawnych</p>
                        <p className="text-sm text-center">Posiadasz aktywowaną licencję do 11.09.2021</p>
                        <div className="rounded-2xl bg-blue-500 w-full mt-4">
                            <p className="text-center text-white mt-4 md:px-12">przykładowyjakiśemail@email.com</p>
                            <p className="text-xs text-center text-white mb-4">wi29mdfsf##3r334r33r34R#R#R#R#k@SS22e2</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LicenseActive;