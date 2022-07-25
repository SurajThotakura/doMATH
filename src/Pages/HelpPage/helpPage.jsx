import './helpPage.css'
import { DismissCircle48Regular } from '@fluentui/react-icons';
import { Link, useNavigate } from 'react-router-dom';
import useKeyPress from '../../Hooks/keyPressHook';

const HelpPage = () => {
    const navigate = useNavigate();
    useKeyPress(['Enter'], navigate('/'));
    return (
        <div className='staticContent'>
            <div className="textFlexWrapper">
                <div className="firstLine">Ha!<span role="img" aria-label="sheep">🤣</span></div>
                <div className="secondLine">bazinga!</div>
                <div className="thirdLine"><span role="img" aria-label="sheep">✨</span>there is no help here<span role="img" aria-label="sheep">✨</span></div>
            </div>
            <Link to="/"><DismissCircle48Regular/></Link>
        </div>
    )
}

export default HelpPage