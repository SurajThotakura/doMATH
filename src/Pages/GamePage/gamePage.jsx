//General
import './gamePage.css'
import { useState, useContext, useRef, useEffect } from "react";
//Context
import { DifficultyContext } from "../../Contexts/difficultyContext";
import { GameStatsContext } from '../../Contexts/gameStatsContext';
//Hooks
import useQuestionGen from "../../Hooks/mathQuestionHook";
import useTimerAnimationFrame from '../../Hooks/timerHook';
import useKeyPress from '../../Hooks/keyPressHook';
//Icons
import { 
    DismissCircle48Regular, 
    FoodPizza24Regular, 
    Next48Regular, 
    QuestionCircle24Regular 
} from '@fluentui/react-icons';
//Components
import { Link, Navigate, useNavigate } from 'react-router-dom';
import TextInput from '../../Components/TextInput/textInput';
import ButtonOL from '../../Components/Button/button';


const GamePage = () => {
    const { difficulty } = useContext(DifficultyContext);
    const { questionCount, setQuestionCount, correctAnswerCount, setCorrectAnswerCount, fastestSolve, setFastestSolve, setFinishTime} = useContext(GameStatsContext);

    const [currentQuestion , setCurrentQuestion] = useState(null)
    const [currentAnswer , setCurrentAnswer] = useState(null);
    const answerRef = useRef(0);

    const [timerCount, setTimerCount] = useState(0)
    const [solveTime, setSolveTime] = useState(0);

    const navigate = useNavigate();

    useTimerAnimationFrame(deltaTime => {
        setTimerCount(prevCount => (prevCount + deltaTime/1000))
    })

    const getNewQuestion = () => {
        const { answer , problemStatement } = useQuestionGen(difficulty);
        setCurrentAnswer(answer);
        setCurrentQuestion(problemStatement);
        setSolveTime(timerCount);
    }

    useEffect(() => {
        getNewQuestion();
    }, [])

    const nextQuestion = () => {
        getNewQuestion();
        setQuestionCount(questionCount+1);
        console.log(questionCount);
        answerRef.current && answerRef.current.focus();
    }

    const validation = () => {
        if(currentAnswer == answerRef.current.value){
            setCorrectAnswerCount(correctAnswerCount+1)
            if((timerCount-solveTime)<fastestSolve){
                setFastestSolve(timerCount-solveTime);
            }
        }
        answerRef.current && answerRef.current.blur();
        nextQuestion();
    }

    const leaveGame = () => {
        const roundTime = Math.round(timerCount);
        setFinishTime(roundTime);
    }

    useKeyPress(['Enter'], validation);
    useKeyPress(['Alt'], nextQuestion);
    useKeyPress(['x'], ()=>{leaveGame(); navigate('/results')});

    return (
        timerCount<121?
        <div className="gameContent">
            <div className='questionWraper'>
                <div className="liveStats">
                    <div>{Math.round(timerCount)}</div>
                    <div>Total solved: {questionCount}</div>
                </div>
                <div className='question'>
                    {currentQuestion}
                </div>
            </div>

            <div className="answerWraper">
                <TextInput placeHolder="" inputRef={answerRef}/>

                <div className='buttonCluster'>
                    <Link to='/help'>
                        <QuestionCircle24Regular/>
                    </Link>

                    <Link to='#'>
                        <Next48Regular onClick={nextQuestion}/>
                    </Link>

                    <ButtonOL label="Submit" buttonClicked={validation}/>

                    <Link to='/results'>
                        <DismissCircle48Regular onClick={leaveGame}/>
                    </Link>

                    <Link to='/about'>
                        <FoodPizza24Regular/>
                    </Link>
                </div>
            </div>
        </div>
        : <Navigate replace to='/results'/>
    )
}

export default GamePage