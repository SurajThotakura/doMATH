import './choiceCardGroup.css'
import { createContext } from 'react';

export const SelectionContext = createContext();

const ChoiceCardGroup = (props) => {
    const optionChange = props.optionChange;
    const selectedValue = props.selectedValue;
    return (
        <div className='CardsGroup'>
            <SelectionContext.Provider value={{ optionChange, selectedValue }}>
                {props.children}
            </SelectionContext.Provider>
        </div>
    )
}

export default ChoiceCardGroup