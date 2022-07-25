import './appFooter.css'
import { useEffect, useState } from 'react'
import { ArrowEnterLeft20Filled } from '@fluentui/react-icons'
import { useLocation } from 'react-router-dom';

const AppFooter = () => {

    const [actionContent, setActionContent] = useState('to start');

    const location = useLocation().pathname;

    const keyDecor = (label, Icon) => {
        return(
            <div className='keyDecor'>
                <Icon/>
                <div>{label}</div>
            </div>
        )
    }

    useEffect(() => {
        setActionContent(
            location==='/'? 'to start'
            : location==='/game'? 'to submit'
            : location==='/results'? 'to play again'
            : 'to go home'
        )
    },[location]);

    return (
        <div className='appFooter'>
            <div className="press"> Press </div>
                {keyDecor('Enter', ArrowEnterLeft20Filled)}
            <div className='actionContent'>
                {actionContent}
            </div>
        </div>
    )
}

export default AppFooter;