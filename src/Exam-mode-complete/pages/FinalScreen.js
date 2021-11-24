import React from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { handleAmountChange, handleScoreChange } from "../redux/actions";

import { SettingsIcon, LightbulbIcon } from '../../Icons';

import { Button } from '@material-ui/core';

const FinalScreen = () => {
    const disptach = useDispatch();
    const history = useHistory();
    const { score } = useSelector((state) => state);
  
    const handleBackToSettings = () => {
      disptach(handleScoreChange(0));
      disptach(handleAmountChange(50));
      history.push("/exam");
    };

    return (
        <>
    <div className="h-full w-full rounded-3xl bg-white flex flex-col overflow-hidden">

    <div className="border-b border-opacity-50 flex mt-4 flex-col xl:flex-row justify-between">
    <div className="flex flex-col px-2 ml-2 xl:ml-8 my-4">
        <p className="text-blue-500">Tryb egzaminu pisemnego</p>
        <h1 className="font-bold ">Inżynieria hydrotechniczna - Projektowanie oraz kierowanie robotami w
            ograniczonym zakresie</h1>
    </div>

        

    <div className="flex flex-col md:flex-row mx-4 mb-2 md:mb-0 md:mr-8 justify-end">
    <div className="my-auto flex flex-row">
            <div className="my-auto ml-auto md:ml-8"><LightbulbIcon/></div>
            <div className="my-auto ml-8"><SettingsIcon/></div>
    </div>
    </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 style={{ margin: '40px', textAlign: 'center' }}>Twój wynik egzaminu: {score}</h1>
            <Button  
            style={{ alignSelf: 'center', margin: '5px' }} onClick={handleBackToSettings} variant="outlined">
            Rozwiąż ponownie
        </Button>
        </div>

</div>
        </>
    )
}

export default FinalScreen
