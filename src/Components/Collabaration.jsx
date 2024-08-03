import React from 'react'
import Section from './Section'
import { collabApps, collabContent, collabText } from '../constants'
import { brainwaveSymbol, check } from '../assets'
import Button from './Button'
import App from '../App'
import { LeftCurve, RightCurve } from './design/Collaboration'

const Collabaration = () => {
    return (
        <Section crosses>
            <div className='container lg:flex '>
                <div className='max-w-[25rem] '>
                    <h2 className='h2 mb-4 md:mb-8'>AI chat for seamless collabaration</h2>
                    <ul className='max-w[22rem] mb-10 md:mb-14'>
                        {collabContent.map((item, index) => (
                            <li className='mb-3 py-3' key={index}>
                                <div className='flex items-center'>
                                    <img src={check} width={24} height={24} />
                                    <h6 className='body-2 ml-5'>{item.title}</h6>

                                </div>
                                {item.text && (
                                    <p className='body-2 mt-3 text-n-4'>{item.text}</p>
                                )}
                            </li>
                        ))}
                    </ul>

                    <Button>Try it out</Button>
                </div>

                <div className='lg:ml-auto xl:w-[38rem] mt-4'>
                    <p className='body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto'>{collabText}</p>
                    <div className='relative left-1/2 flex w-[22rem] aspect-square rounded-full border border-n-6 -translate-x-1/2 scale-75 md:scale-100'>
                        <div className='flex w-60 aspect-square m-auto border  border-n-6 rounded-full'>
                            <div className='w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full'>
                                <div className='flex items-center justify-center w-full h-full bg-n-8 rounded-full'>
                                    <img src={brainwaveSymbol} width={48} height={48} />
                                </div>
                            </div>
                        </div>
                        <ul>
                            {collabApps.map((item, index) => (
                                <li className={`absolute -top-[2rem] left-1/2 h-3/5 -ml-[1.6rem] origin-bottom rotate-${index * 45}`} key={index}>
                                    <div className={`realtive -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-full -rotate-${index * 45}`}>
                                        <img src={item.icon} className='m-auto' width={item.width} height={item.height} />
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <LeftCurve />
                        <RightCurve />
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Collabaration
