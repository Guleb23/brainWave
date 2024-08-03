import React from 'react'
import brackets from '../assets/svg/Brackets'

const TagLine = ({ children, classNames }) => {
    return (
        <div className={`tagline flex items-center gap-1 ${classNames || ''}`}>
            {brackets("left")}
            <p className='mx-3 text-n-3'>
                {children}
            </p>
            {brackets("right")}
        </div>
    )
}

export default TagLine
