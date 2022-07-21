import './textInput.css';
import { useState } from 'react';

const TextInput = (props) => {

    const [userInput,setUserInput] = useState(props.placeHolder)

    const updateUserInput = () => {
        const value = props.inputRef.current.value;
        value?setUserInput(value):setUserInput(props.placeHolder);
    }

    const bringFocus = () => {
        props.inputRef.current && props.inputRef.current.focus();
    }

    return(
        <div className='wrapper'>

            <input autoFocus type="number" className='inputField' ref={props.inputRef} onChange={updateUserInput}/>
            
            <div className='inputFlexWrapper' onClick={bringFocus}>
                <div className='userInput'>{userInput}</div>
                <div className='caret'></div>
            </div>

        </div>
    )
}

export default TextInput