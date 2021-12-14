import {DownArrowIcon} from "../Icons";
import {useEffect} from "react";


const SubSpeciality = (props) => {
    const sub = [{
        name: 'Projektowanie bez ograniczeń'
    }, {
        name: 'Kierowanie robotami bez ograniczeń'
    }, {
        name: 'Kierowanie robotami w ograniczonym zakresie'
    }, {
        name: 'Projektowanie oraz kierowanie robotami bez ograniczeń'
    }, {
        name: 'Projektowanie oraz kierowanie robotami w ograniczonym zakresie'
    }];

    const sub1 = [{
        name: 'Projektowanie bez ograniczeń'
    }, {
        name: 'Kierowanie robotami bez ograniczeń'
    }, {
        name: 'Projektowanie oraz kierowanie robotami bez ograniczeń'
    }];

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) props.onClose()
        };
        window.addEventListener('keydown', handleEsc);

        return () => window.removeEventListener('keydown', handleEsc);
    });

    /* Mobile_hide - tą klase nalezy dopisać do jednego z elementów, żeby wersja mobilna przekompilowała się bez bugów w cssie */

    return (<div
        className={"fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center " + (props.visible ? '' : 'hidden')}>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-10 cursor-pointer"
             onClick={() => props.onClose()}/>
        <div className="relative w-full max-w-screen-lg bg-white shadow-lg rounded-xl bg-white pt-8 pb-5 px-10">
            <h1 className="font-medium text-2xl">Wybierz zakres uprawnień</h1>
            <h2 className="text-sm mt-3">{props.speciality}</h2>

            <div className="bg-blue-200 rounded-2xl w-full mt-5 overflow-hidden">
                {(props.speciality === "Inżynieryjna wyburzeniowa" ? sub1 : sub).map((e, i) => <div
                    className="px-6 py-4 border-b border-opacity-50 border-gray-400 font-light flex flex-row justify-between items-center cursor-pointer hover:bg-blue-300 bg-opacity-5"
                    key={i}>
                    <p>{e.name}</p>
                    <span className="transform -rotate-90">
                        <DownArrowIcon/>
                    </span>
                </div>)}
            </div>

        </div>
    </div>);
}

export default SubSpeciality;