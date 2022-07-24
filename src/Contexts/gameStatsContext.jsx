import React, { createContext, useState } from 'react';

export const GameStatsContext = createContext();

const GameStatsContextProvider = (props) => {
    const [questionCount,setQuestionCount] = useState(0);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);
    const [fastestSolve, setFastestSolve] = useState(120);
    const [finishTime, setFinishTime] = useState(120)
    return (
        <GameStatsContext.Provider value={{
            questionCount, setQuestionCount,
            correctAnswerCount, setCorrectAnswerCount, 
            fastestSolve, setFastestSolve, 
            finishTime, setFinishTime
        }}>
            {props.children}
        </GameStatsContext.Provider>
    )
}

export default GameStatsContextProvider