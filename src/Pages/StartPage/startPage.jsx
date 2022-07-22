import './startPage.css'
import { useState, useContext } from 'react';
import { DifficultyContext } from '../../Contexts/difficultyContext';
import ChoiceCard from '../../Components/ChoiceCard/Card/choiceCard';
import ChoiceCardGroup from '../../Components/ChoiceCard/choiceCardGroup';
import ButtonOL from '../../Components/Button/button';
import { QuestionCircle24Regular, FoodPizza24Regular } from '@fluentui/react-icons';
import { Link, useNavigate } from 'react-router-dom';

const StartPage = () => {
    const { lowDifficulty, mediumDifficulty, highDifficulty, setDifficulty } = useContext(DifficultyContext)

    const [radioSelection, setRadioSelection] = useState(lowDifficulty);

    const navigate = useNavigate()

    const handleRadioClick = (value) => {
        setRadioSelection(value);
    }
    
    const buttonClicked = () => {
        setDifficulty(radioSelection)
        navigate('/game')
    }

    return(
    <div className='startPageContent'>
        <ChoiceCardGroup selectedValue={radioSelection} optionChange={handleRadioClick}>
                <ChoiceCard 
                    cardLabel={"I want to chill"} 
                    value={lowDifficulty}
                />
                <ChoiceCard 
                    cardLabel={"I'll take some heat"} 
                    value={mediumDifficulty} 
                />
                <ChoiceCard 
                    cardLabel={"Sure kick my butt"} 
                    value={highDifficulty} 
                />
        </ChoiceCardGroup>

        <div className="buttonCluster">

            <Link to="/help">
                <QuestionCircle24Regular className='iconButton'/>
            </Link>

            <ButtonOL label={"Start"} buttonClicked={buttonClicked}/>
            
            <Link to="/about">
                <FoodPizza24Regular className='iconButton'/>
            </Link>
            
        </div>
        
    </div>
    )
}

export default StartPage