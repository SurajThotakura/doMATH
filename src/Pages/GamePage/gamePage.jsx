import './gamePage.css'
import { useState, useContext, useRef } from "react";
import { DifficultyContext } from "../../Contexts/difficultyContext";
import useQuestionGen from "../../Hooks/mathQuestionHook";
import { DismissCircle48Regular, FoodPizza24Regular, Next48Regular, QuestionCircle24Regular } from '@fluentui/react-icons';
import { Link } from 'react-router-dom';
import TextInput from '../../Components/TextInput/textInput';

const GamePage = () => {
    const { difficulty } = useContext(DifficultyContext)
    const { questionArray } = useQuestionGen(difficulty);
    
    const [questionCount, setQuestionCount] = useState(0)

    const [answerContent, setAnswerContent] = useState('Type your answer')

    const updateAnswerContent = () => {
        const value = answerRef.current.value;
        value?setAnswerContent(value):setAnswerContent('Type your answer')
    }
    
    const answerRef = useRef(0);

    const questions = questionArray.map((x) => {
        return(<div>{x.problemStatement}</div>)
    })

    const skipQuestion = () => {
        setQuestionCount(questionCount+1)
        answerRef.current && answerRef.current.focus();
    }

    return (
        <div className="gameContent">
            <div className='question'>
                {questions[questionCount]}
            </div>

            <TextInput placeHolder="Type your answer" inputRef={answerRef}/>

            <div className='buttonCluster'>
                <Link to='/help'>
                    <QuestionCircle24Regular/>
                </Link>

                <Link to='#'>
                    <Next48Regular onClick={skipQuestion}/>
                </Link>

                <Link to='/results'>
                    <DismissCircle48Regular/>
                </Link>

                <Link to='/about'>
                    <FoodPizza24Regular/>
                </Link>
            </div>
        </div>
    )
}

export default GamePage