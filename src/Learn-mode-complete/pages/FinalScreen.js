import React from 'react'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { handleAmountChange, handleScoreChange } from "../redux/actions";

const FinalScreen = () => {
    const disptach = useDispatch();
    const history = useHistory();
    const { score } = useSelector((state) => state);
  
    const handleBackToSettings = () => {
      disptach(handleScoreChange(0));
      disptach(handleAmountChange(50));
    };

    return (
        <div>
            <h1>Final Score {score}</h1>
            <button onClick={handleBackToSettings} variant="outlined">
            back to settings!
        </button>
        </div>
    )
}

export default FinalScreen
