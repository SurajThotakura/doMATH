import { DismissCircle48Regular, SportBasketball24Regular } from '@fluentui/react-icons';
import { Link, useNavigate } from 'react-router-dom';
import useKeyPress from '../../Hooks/keyPressHook';

const PizzaPage = () => {
    const navigate = useNavigate();
    useKeyPress(['Enter'], navigate('/'));
    return (
        <div className='staticContent'>
            <div className="textFlexWrapper">
                <div className="firstLine">Send me some</div>
                <div className="secondLine">pizza!</div>
                <div className="thirdLine">
                    <a href="https://github.com/SurajThotakura" target="_blank" rel="noreferrer noopener">GitHub.</a>
                    <a href="https://dribbble.com/surajsatya007" target="_blank" rel="noreferrer noopener">Dribbble.</a>
                    <a href="https://codepen.io/suraj-thotakura" target="_blank" rel="noreferrer noopener">CodePen.</a>
                </div>
            </div>
            <Link to="/"><DismissCircle48Regular/></Link>
        </div>
    )
}

export default PizzaPage