import './gamePage.css'
import { useState, useContext } from "react";
import { DifficultyContext } from "../../Contexts/difficultyContext";
import useQuestionGen from "../../Hooks/mathQuestionHook";
import { DismissCircle48Regular, FoodPizza24Regular, Next48Regular, QuestionCircle24Regular } from '@fluentui/react-icons';
import { Link } from 'react-router-dom';

const GamePage = () => {
    const { difficulty } = useContext(DifficultyContext)
    const { questionArray } = useQuestionGen(difficulty);
    const [questionCount, setQuestionCount] = useState(0)
    const questions = questionArray.map((x, index) => {
        return(
        <div key={index}>
            <div>{x.problemStatement}</div>
            <div>{x.answer}</div>
        </div>)
    })

    const skipQuestion = () => console.log('A question was skiped')
    return (
        <div className="gameContent">
            <div className='question'>
            {questions[questionCount]}
            </div>
            <div className='buttonCluster'>
                <Link to='/help'>
                    <QuestionCircle24Regular/>
                </Link>

                <Link to='/game'>
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