import './resultsPage.css'
import ButtonOL from "../../Components/Button/button"
import { QuestionCircle24Regular, FoodPizza24Regular } from "@fluentui/react-icons"
import { Link, useNavigate } from "react-router-dom"
const ResultsPage = () => {

    const solved = 18;

    const navigate = useNavigate();
    const buttonClicked = () => {
        navigate('/')
    }

    return(
        <div className="resultsPageContent">

            <div className='hero'>
                Hello Genius!
            </div>

            <div className="stats">
                <div className='statItem'>
                    <div className="statValue">{solved}</div>
                    <div className="statLabel">Solved</div>
                </div>
                <div className='statItem'>
                    <div className="statValue">{solved-5}</div>
                    <div className="statLabel">Correct answers</div>
                </div>
                <div className='statItem'>
                    <div className="statValue">{solved/3}s</div>
                    <div className="statLabel">Average time</div>
                </div>
                <div className='statItem'>
                    <div className="statValue">{solved/9}s</div>
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