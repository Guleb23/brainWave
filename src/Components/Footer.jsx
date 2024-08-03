import React from 'react'
import Section from './Section'
import { socials } from '../constants'

const Footer = () => {
    return (
        <Section crosses classNames={`!px-0 !py-10`}>
            <div className='flex container sm:justify-between justify-center items-center gap-10 msx-sm:flex-col'>
                <p className='caption text-n4 lg:block'>
                    {new Date().getFullYear()}. All rights reserved.
                </p>
                <ul className='flex gap-5 flex-wrap'>
                    {socials.map((item, index) => (
                        <li key={index}>
                            <img src={item.iconUrl} />
                        </li>
                    ))}
                </ul>
            </div>
        </Section>
    )
}

export default Footer
