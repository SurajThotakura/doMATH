import './gamePage.css'
import { useState, useContext, useRef, useEffect } from "react";
import { DifficultyContext } from "../../Contexts/difficultyContext";
import useQuestionGen from "../../Hooks/mathQuestionHook";
import { DismissCircle48Regular, FoodApple24Filled, FoodPizza24Regular, Next48Regular, QuestionCircle24Regular } from '@fluentui/react-icons';
import { Link } from 'react-router-dom';
import TextInput from '../../Components/TextInput/textInput';
import ButtonOL from '../../Components/Button/button';

const GamePage = () => {
    const { difficulty } = useContext(DifficultyContext)

    const [currentQuestion , setCurrentQuestion] = useState(null)
    const [currentAnswer , setCurrentAnswer] = useState(null);
    const answerRef = useRef(0);

    const [questionCount,setQuestionCount] = useState(0);
    const [correctAnswerCount, setCorrectAnswerCount] = useState(0);

    const getNewQuestion = () => {
        const { answer , problemStatement } = useQuestionGen(difficulty);
        setCurrentAnswer(answer);
        setCurrentQuestion(problemStatement);
    }

    useEffect(() => {
        getNewQuestion();
    }, [])

    const nextQuestion = () => {
        getNewQuestion();
        setQuestionCount(questionCount+1);
        answerRef.current && answerRef.current.focus();
    }

    const validation = () => {
        currentAnswer == answerRef.current.value ? setCorrectAnswerCount(correctAnswerCount+1): console.log('wrong');
        nextQuestion();
    }

    return (
        <div className="gameContent">
            <div className='question'>
                {currentQuestion}
            </div>

            <TextInput placeHolder="Type your answer" inputRef={answerRef}/>

            <div className='buttonCluster'>
                <Link to='/help'>
                    <QuestionCircle24Regular/>
                </Link>

                <Link to='#'>
                    <Next48Regular onClick={nextQuestion}/>
                </Link>

                <ButtonOL label="Submit" buttonClicked={validation}/>

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