import './appFooter.css'
import { useState } from 'react'
import { ArrowEnter20Filled, ArrowEnterFilled, ArrowEnterLeft20Filled } from '@fluentui/react-icons'

const AppFooter = () => {

    const actionContent = "to start"

    return (
        <div className='appFooter'>
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