import './helpPage.css'
import { DismissCircle48Regular } from '@fluentui/react-icons';
import { Link } from 'react-router-dom';

const HelpPage = () => {
    return (
        <div className='staticContent'>
            <div className="textFlexWrapper">
                <div className="firstLine">Fuck you</div>
                <div className="secondLine">bitch!</div>
                <div className="thirdLine">I ain't gonna help you</div>
            </div>
            <Link to="/"><DismissCircle48Regular/></Link>
        </div>
    )
}

export default HelpPage