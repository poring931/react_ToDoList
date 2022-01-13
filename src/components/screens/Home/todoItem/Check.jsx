import React from 'react'
import { BsCheck2 } from 'react-icons/bs';

const Check = ({isCompleted}) => {
    return (
        <div className={`border-2 rounded-lg border-pink-500 w-5 h-5 flex items-center mr-3 transition-all
            ${isCompleted ? 'bg-pink-500' : ''}
        `}>
            {
                isCompleted &&
                <BsCheck2/>
            }
            
        </div>
    )
}

export default Check
