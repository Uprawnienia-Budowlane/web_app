import React from "react";
import {CheckboxCircleIcon, TagIcon, ThreeInOneIcon} from "./Icons";

class DesktopShop extends React.Component {

    render(props) {
        return (
            <div className="h-full w-full rounded-3xl bg-white flex flex-col">
                <div className="flex flex-col mx-auto px-2 my-8 sm:mx-8">
                    <p className="text-blue-500">Uprawnienia budowlane</p>
                    <h1 className="font-bold text-2xl">Promocyjne pakiety</h1>
                </div>

                <div className="flex flex-row flex-wrap justify-around">

                    <div className="mb-6 rounded-2xl bg-blue-50 flex flex-col w-80">
                        <div className="mx-4 mt-8 flex flex-row justify-between">
                            <p className="text-blue-500 opacity-60 my-auto">PAKIET</p>
                            <div className="my-auto"><TagIcon/></div>
                        </div>
                        <p className="mx-4 mt-4 text-2xl text-blue-500">Pakiet mobilny 3w1</p>
                        <div className="mx-4 mt-2 flex flex-row">
                            <p className="text-2xl text-blue-500">500zł</p>
                            <p className="ml-2 text-blue-500 opacity-60 my-auto">/ za sztukę</p>
                        </div>
                        <p className="mx-4 mt-2 overflow-clip text-blue-500 text-sm">Ten przedmiot pozwoli ci na zakup
                            pakietu licencji mobilnych.</p>

                        <div className="mx-4 mt-2 flex flex-row">
                            <div className="mt-1 mb-auto mr-2"><CheckboxCircleIcon/></div>
                            <p className="overflow-clip text-blue-500 ">Licencja mobilna do nauki na egzamin pisemny</p>
                        </div>
                        <div className="mx-4 mt-2 flex flex-row">
                            <div className="mt-1 mb-auto mr-2"><CheckboxCircleIcon/></div>
                            <p className="overflow-clip text-blue-500 ">Licencja mobilna do nauki na egzamin ustny</p>
                        </div>
                        <div className="mx-4 mt-2 flex flex-row">
                            <div className="mt-1 mb-auto mr-2"><CheckboxCircleIcon/></div>
                            <p className="overflow-clip text-blue-500 ">Licencja mobilna do zbioru aktów prawnych</p>
                        </div>
                        <div className="mx-auto mt-4"><ThreeInOneIcon/></div>
                        <button
                            className="mx-4 my-6 rounded-2xl border border-blue-500 bg-blue-500 text-white font-medium text-center text-lg py-2 px-4">Zakup produkt
                        </button>
                    </div>
                    <div className="mb-6 rounded-2xl bg-blue-50 flex flex-col w-80">
                        <div className="mx-4 mt-8 flex flex-row justify-between">
                            <p className="text-blue-500 opacity-60 my-auto">PAKIET</p>
                            <div className="my-auto"><TagIcon/></div>
                        </div>
                        <p className="mx-4 mt-4 text-2xl text-blue-500">Pakiet mobilny 3w1</p>
                        <div className="mx-4 mt-2 flex flex-row">
                            <p className="text-2xl text-blue-500">500zł</p>
                            <p className="ml-2 text-blue-500 opacity-60 my-auto">/ za sztukę</p>
                        </div>
                        <p className="mx-4 mt-2 overflow-clip text-blue-500 text-sm">Ten przedmiot pozwoli ci na zakup
                            pakietu licencji mobilnych.</p>

                        <div className="mx-4 mt-2 flex flex-row">
                            <div className="mt-1 mb-auto mr-2"><CheckboxCircleIcon/></div>
                            <p className="overflow-clip text-blue-500 ">Licencja mobilna do nauki na egzamin pisemny</p>
                        </div>
                        <div className="mx-4 mt-2 flex flex-row">
                            <div className="mt-1 mb-auto mr-2"><CheckboxCircleIcon/></div>
                            <p className="overflow-clip text-blue-500 ">Licencja mobilna do nauki na egzamin ustny</p>
                        </div>
                        <div className="mx-4 mt-2 flex flex-row">
                            <div className="mt-1 mb-auto mr-2"><CheckboxCircleIcon/></div>
                            <p className="overflow-clip text-blue-500 ">Licencja mobilna do zbioru aktów prawnych</p>
                        </div>
                        <div className="mx-auto mt-4"><ThreeInOneIcon/></div>
                        <button
                            className="mx-4 my-6 rounded-2xl border border-blue-500 bg-blue-500 text-white font-medium text-center text-lg py-2 px-4">Zakup produkt
                        </button>
                    </div>
                    <div className="mb-6 rounded-2xl bg-blue-50 flex flex-col w-80">
                        <div className="mx-4 mt-8 flex flex-row justify-between">
                            <p className="text-blue-500 opacity-60 my-auto">PAKIET</p>
                            <div className="my-auto"><TagIcon/></div>
                        </div>
                        <p className="mx-4 mt-4 text-2xl text-blue-500">Pakiet mobilny 3w1</p>
                        <div className="mx-4 mt-2 flex flex-row">
                            <p className="text-2xl text-blue-500">500zł</p>
                            <p className="ml-2 text-blue-500 opacity-60 my-auto">/ za sztukę</p>
                        </div>
                        <p className="mx-4 mt-2 overflow-clip text-blue-500 text-sm">Ten przedmiot pozwoli ci na zakup
                            pakietu licencji mobilnych.</p>

                        <div className="mx-4 mt-2 flex flex-row">
                            <div className="mt-1 mb-auto mr-2"><CheckboxCircleIcon/></div>
                            <p className="overflow-clip text-blue-500 ">Licencja mobilna do nauki na egzamin pisemny</p>
                        </div>
                        <div className="mx-4 mt-2 flex flex-row">
                            <div className="mt-1 mb-auto mr-2"><CheckboxCircleIcon/></div>
                            <p className="overflow-clip text-blue-500 ">Licencja mobilna do nauki na egzamin ustny</p>
                        </div>
                        <div className="mx-4 mt-2 flex flex-row">
                            <div className="mt-1 mb-auto mr-2"><CheckboxCircleIcon/></div>
                            <p className="overflow-clip text-blue-500 ">Licencja mobilna do zbioru aktów prawnych</p>
                        </div>
                        <div className="mx-auto mt-4"><ThreeInOneIcon/></div>
                        <button
                            className="mx-4 my-6 rounded-2xl border border-blue-500 bg-blue-500 text-white font-medium text-center text-lg py-2 px-4">Zakup produkt
                        </button>
                    </div>
                    <div className="mb-6 rounded-2xl bg-blue-50 flex flex-col w-80">
                        <div className="mx-4 mt-8 flex flex-row justify-between">
                            <p className="text-blue-500 opacity-60 my-auto">PAKIET</p>
                            <div className="my-auto"><TagIcon/></div>
                        </div>
                        <p className="mx-4 mt-4 text-2xl text-blue-500">Pakiet mobilny 3w1</p>
                        <div className="mx-4 mt-2 flex flex-row">
                            <p className="text-2xl text-blue-500">500zł</p>
                            <p className="ml-2 text-blue-500 opacity-60 my-auto">/ za sztukę</p>
                        </div>
                        <p className="mx-4 mt-2 overflow-clip text-blue-500 text-sm">Ten przedmiot pozwoli ci na zakup
                            pakietu licencji mobilnych.</p>

                        <div className="mx-4 mt-2 flex flex-row">
                            <div className="mt-1 mb-auto mr-2"><CheckboxCircleIcon/></div>
                            <p className="overflow-clip text-blue-500 ">Licencja mobilna do nauki na egzamin pisemny</p>
                        </div>
                        <div className="mx-4 mt-2 flex flex-row">
                            <div className="mt-1 mb-auto mr-2"><CheckboxCircleIcon/></div>
                            <p className="overflow-clip text-blue-500 ">Licencja mobilna do nauki na egzamin ustny</p>
                        </div>
                        <div className="mx-4 mt-2 flex flex-row">
                            <div className="mt-1 mb-auto mr-2"><CheckboxCircleIcon/></div>
                            <p className="overflow-clip text-blue-500 ">Licencja mobilna do zbioru aktów prawnych</p>
                        </div>
                        <div className="mx-auto mt-4"><ThreeInOneIcon/></div>
                        <button
                            className="mx-4 my-6 rounded-2xl border border-blue-500 bg-blue-500 text-white font-medium text-center text-lg py-2 px-4">Zakup produkt
                        </button>
                    </div>

                </div>

                <div className="mx-auto mb-8 flex flex-col space-y-3 md:space-y-0 md:flex-row w-5/6">
                    <button
                        className="rounded-2xl border border-blue-500 bg-blue-500 text-white font-medium text-center text-xl py-3 px-6 mx-2 w-full">PAKIETY 3w1
                    </button>
                    <button
                        className="rounded-2xl border border-blue-500 text-blue-500 font-medium text-center text-xl py-3 px-6 mx-2 w-full">PAKIETY 2w1
                    </button>
                    <button
                        className="rounded-2xl border border-blue-500 text-blue-500 font-medium text-center text-xl py-3 px-6 mx-2 w-full">PAKIETY 2x
                    </button>
                </div>
            </div>
        )
    }
}

export default DesktopShop;