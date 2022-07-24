import './appFooter.css'
import { useEffect, useState } from 'react'
import { ArrowEnterLeft20Filled } from '@fluentui/react-icons'
import { useLocation } from 'react-router-dom';

const AppFooter = () => {

    const [actionContent, setActionContent] = useState('to start');

    const location = useLocation().pathname;

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
            <div className='enterKey'>
                <ArrowEnterLeft20Filled/>
                <div>Enter</div>
            </div>
            <div className='actionContent'>
                {actionContent}
            </div>
        </div>
    )
}

export default AppFooter