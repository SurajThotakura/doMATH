import React, { createContext, useState } from 'react';

export const DifficultyContext = createContext();

const DifficultyContextProvider = (props) => {
    const lowDifficulty = 20;
    const mediumDifficulty = 200;
    const highDifficulty = 2000;
    const [difficulty , setDifficulty] = useState(lowDifficulty);
    return (
        <DifficultyContext.Provider value={{difficulty, lowDifficulty, mediumDifficulty, highDifficulty, setDifficulty}}>
            {props.children}
        </DifficultyContext.Provider>
    )
}

export default DifficultyContextProvider