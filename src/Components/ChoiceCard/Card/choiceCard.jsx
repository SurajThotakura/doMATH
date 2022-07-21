import './choiceCard.css';
import { Circle24Regular, CheckmarkCircle24Filled } from '@fluentui/react-icons'
import { useState, useContext} from 'react';
import { SelectionContext } from '../choiceCardGroup.jsx'


const ChoiceCard = (props) => {
    const cardLabel = props.cardLabel;
    const formatedContent = cardLabel.split(" ").map((x,index) => <p key={index} className="labelWord">{x}</p>);
    const value = props.value;
    const { optionChange, selectedValue } = useContext(SelectionContext);
    return (
        <div>
            <div className={value===selectedValue?'cardDark':'cardLight'} onClick={()=>optionChange(value)}>
                <div className="formatedContent">
                    {formatedContent}
                </div>
                <div>
                    {value===selectedValue?<CheckmarkCircle24Filled/>:<Circle24Regular/>}
                </div>
            </div>
        </div>
    )
}

export default ChoiceCard