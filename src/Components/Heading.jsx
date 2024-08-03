import React from 'react'
import { done, undone } from '../assets'
import TagLine from './TagLine'

const Heading = ({ classNames, tag, title, text }) => {
    return (
        <div className={`${classNames} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
            {tag && (
                <div className='mb-4'>
                    <TagLine>
                        {tag}
                    </TagLine>

                </div>
            )}
            {title && <h2 className='h2'>{title}</h2>}
            {text && (
                <p className='body-2 mt-4 text-n-4'>{text}</p>
            )}
        </div>
    )
}

export default Heading
