import React, {useState, } from "react";

const GenderSelector = (props) => <button
        className={"mt-2 rounded-2xl border border-blue-500 flex flex-row justify-between text-sm py-3 px-4 focus:outline-none" + (props.selected ? ' text-blue-500' : ' text-black')} onClick={() => props.onClick()}>
        <p>{props.gender}</p>
        <div className={"w-4 h-4 bg-blue-500 my-auto rounded-full ml-2" + (props.selected ? '' : ' opacity-0')}/>
    </button>
;

const MobileProfileChange = () => {
    
    const [gender, setGender] = useState(0);

    return(
        <>
        
        <div className="m-8 flex flex-col flex-grow">
                <div className="mt-0 flex flex-col md:flex-row">

                    <div className="mx-auto md:ml-8 w-full md:mr-24">

                        <div className="flex flex-col md:flex-row md:space-x-8 my-6">
                            <div className="w-full">
                                <p className="ml-2 mb-1 text-sm">Imię:</p>
                                <input onChange=""
                                    className="border-blue-500 rounded-2xl border outline-none h-12 w-full p-4"
                                    placeholder=""/>
                            </div>
                            <div className="w-full">
                                <p className="mt-6 md:mt-0 ml-2 mb-1 text-sm">Nazwisko:</p>
                                <input onChange=""
                                    className="border-blue-500 rounded-2xl border outline-none h-12 w-full p-4"
                                    placeholder=""/>
                            </div>
                        </div>

                        <div className="flex flex-col my-4">
                            <p className="ml-2 mb-1 text-sm">Płeć:</p>
                            <div className="flex flex-row md:flex-row justify-around space-x-3 my-1">
                                <GenderSelector gender={'Mężczyzna'} selected={gender === 0} onClick={() => setGender(0)}/>
                                <GenderSelector gender={'Kobieta'} selected={gender === 1} onClick={() => setGender(1)}/>
                            </div>
                        </div>
                        <form className="flex flex-col">
                        <div className="flex flex-col md:flex-row md:space-x-8 my-2">
                            <div className="w-full">
                                <p className="ml-2 mb-1 text-sm">Zmień e-mail:</p>
                                <input onChange=""
                                    className="border-blue-500 rounded-2xl border outline-none h-12 w-full p-4"
                                    placeholder=""/>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-8 my-2">
                            <div className="w-full">
                                <p className="ml-2 mb-1 text-sm">Powtórz e-mail:</p>
                                <input onChange=""
                                    className="border-blue-500 rounded-2xl border outline-none h-12 w-full p-4"
                                    placeholder=""/>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-8 my-2">
                            <div className="w-full">
                                <p className="ml-2 mb-1 text-sm">Nowe hasło:</p>
                                <input onChange=""
                                    className="border-blue-500 rounded-2xl border outline-none h-12 w-full p-4"
                                    type="password"
                                    placeholder=""/>
                            </div>
                            <div className="w-full">
                                <p className="mt-6 md:mt-0 ml-2 mb-1 text-sm">Potwierdź nowe hasło:</p>
                                <input
                                    className="border-blue-500 rounded-2xl border outline-none h-12 w-full p-4"
                                    type="password"
                                    placeholder=""/>
                            </div>
                        </div>
                        <div className="flex flex-row justify-start">
                            <button onClick=""
                                className="mt-5 mb-3 bg-blue-500 h-12 w-full md:w-1/2 rounded-2xl text-white font-medium px-10 focus:outline-none">Zapisz
                                dane
                            </button>
                        </div>
                        </form>
                    </div>

                </div>
            </div>

        </>
    )
}

export default MobileProfileChange