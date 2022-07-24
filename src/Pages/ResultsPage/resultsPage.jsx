import './resultsPage.css'
import ButtonOL from "../../Components/Button/button"
import { QuestionCircle24Regular, FoodPizza24Regular } from "@fluentui/react-icons"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from 'react'
import { GameStatsContext } from '../../Contexts/gameStatsContext'
const ResultsPage = () => {
    const { questionCount, setQuestionCount, correctAnswerCount, setCorrectAnswerCount, fastestSolve, setFastestSolve, finishTime, setFinishTime} = useContext(GameStatsContext);
    const navigate = useNavigate();
    const buttonClicked = () => {
        setCorrectAnswerCount(0);
        setQuestionCount(0);
        setFastestSolve(120);
        setFinishTime(120);
        navigate('/')
    }

    return(
        <div className="resultsPageContent">

            <div className='hero'>
                Hello Genius!
            </div>

            <div className="stats">
                <div className='statItem'>
                    <div className="statValue">{questionCount}</div>
                    <div className="statLabel">Solved</div>
                </div>
                <div className='statItem'>
                    <div className="statValue">{correctAnswerCount}</div>
                    <div className="statLabel">Correct answers</div>
                </div>
                <div className='statItem'>
                    <div className="statValue">{Math.round(finishTime/correctAnswerCount)}s</div>
                    <div className="statLabel">Average time</div>
                </div>
                <div className='statItem'>
                    <div className="statValue">{Math.round(fastestSolve)}s</div>
                    <div className="statLabel">Fastest Solve</div>
                </div>
            </div>

            <div className="buttonCluster">

                <Link to="/help">
                    <QuestionCircle24Regular className='iconButton'/>
                </Link>

                <ButtonOL label={"Play Again"} buttonClicked={buttonClicked}/>

                <Link to="/about">
                    <FoodPizza24Regular className='iconButton'/>
                </Link>

            </div>
        </div>
    )
}

export default ResultsPage