import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";

const ExamEnd = (props) => {

  const history = useHistory();

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) props.onClose()
        };
        window.addEventListener('keydown', handleEsc);

        return () => window.removeEventListener('keydown', handleEsc);
    });
    

    return (<div
        className={"fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center " + (props.visible ? '' : 'hidden')}>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-10 cursor-pointer"
             onClick={() => props.onClose(true)}/>
        <div className="relative w-full max-w-sm bg-white shadow-lg rounded-xl bg-white py-8 px-10">
            <h2 className="text-sm text-blue-500">Tryb egzaminu pisemnego</h2>
            <h1 className="font-medium text-2xl mt-1">Zakończenie egzaminu</h1>
            <p className="text-center my-4">Czy napewno chcesz zakończyć tryb egzaminu i przejść do podsumowania?</p>
            <div className="flex flex-row gap-4 mx-6 pt-1">
                <button
                    onClick={() => {
                        props.onClose(false);
                        setTimeout(() => history.push(props.nextLocation.pathname), 1);
                    }}
                    className="uppercase rounded-2xl border border-blue-500 text-center py-1.5 px-2 w-full text-blue-500">Tak
                </button>
                <button
                    onClick={() => props.onClose(true)}
                    className="uppercase rounded-2xl border border-blue-500 text-center py-1.5 px-2 w-full bg-blue-500 text-white">Nie
                </button>
            </div>
        </div>
    </div>);
}

export default ExamEnd;