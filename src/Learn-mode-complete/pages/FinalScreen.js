import React from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { handleAmountChange, handleScoreChange } from "../redux/actions";

import { Button } from '@material-ui/core';

const FinalScreen = () => {
    const disptach = useDispatch();
    const history = useHistory();
    const { score } = useSelector((state) => state);
  
    const handleBackToSettings = () => {
      disptach(handleScoreChange(0));
      disptach(handleAmountChange(50));
      history.push("/learn");
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 style={{ margin: '10px' }}>Twój wynik egzaminu próbnego: {score}</h1>
            <Button  
            style={{ alignSelf: 'center', margin: '5px' }} onClick={handleBackToSettings} variant="outlined">
            Rozwiąż ponownie
        </Button>
        </div>
    )
}

export default FinalScreen
