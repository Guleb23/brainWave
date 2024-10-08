import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { service1, service2, service3, check } from '../assets'
import { brainwaveServices, brainwaveServicesIcons } from '../constants'
import Generating from './Generating'
import { PhotChatMessage, Gradient, VideoChatMessage, VideoBar } from './design/Services'

const Services = () => {
    return (
        <Section id="how-touse">
            <div className='container'>
                <Heading title="Generative AI made for creators" text="Brainwave unlocks the potential of AI-powered apps" />
                <div className='relative '>
                    <div className='relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]'>
                        <div className='absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto'>
                            <img className='w-ful h-full object-cover md:object-right' width={800} height={800} src={service1} />
                        </div>
                        <div className='relative z-1 max-w-[17rem] ml-auto'>
                            <h4 className='h4 mb-4'>Smarter Ai</h4>
                            <p className='bode-2 mb-[3rem] text-n-3'>
                                Brainwave unlocks the potential of AI-powered applications
                            </p>
                            <ul className='body-2'>
                                {brainwaveServices.map((item, index) => (
                                    <li key={index} className='flex  items-center py-4 border-b border-n-6 '>
                                        <img width={24} height={24} src={check}></img>
                                        <p className='ml-4'>{item}</p>
                                    </li>
                                ))}
                            </ul>

                        </div>
                        <Generating classNames={` absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2 text-base`} />
                    </div>
                    <div className='relative z-1 grid gap-5 lg:grid-cols-2'>
                        <div className='relative  min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden'>
                            <div className='absolute inset-0'>
                                <img src={service2} className='h-full w-full object-cover' width={630} height={750} alt='bot' />
                            </div>
                            <div className='absolute flex inset-0     flex-col justify-end  p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15'>
                                <h4 className='h4 mb-4'>Photo edit</h4>
                                <p className='bode-2 mb-[3rem] text-n-3'>
                                    Automatically enhance your photos using our AI app's photo editing feature. Try it now!
                                </p>

                            </div>
                            <PhotChatMessage />
                        </div>
                        <div className='p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]'>
                            <div className='py-12 px-4 xl:px-8 '>
                                <h4 className='h4 mb-4'> Video generation</h4>
                                <p className='body-2 mb-[2rem] text-n-3'>The world’s most powerful AI photo and video art generation engine. What will you create?

                                </p>
                                <ul className='flex items-center justify-between'>
                                    {brainwaveServicesIcons.map((item, index) => (
                                        <li className='flex items-center justify-center w-[3rem] h-[3rem] p-0.3 rounded-2xl md:w-[3rem] md:h-[3] bg-n-6 ' key={index}>
                                            <div className='flex justify-center items-center h-full w-full '>
                                                <img width={24} height={24} src={item} />
                                            </div>

                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className='relative'>
                                <img src={service3} className='h-full w-full object-center' width={520} height={400} />
                                <VideoBar />
                                <VideoChatMessage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Services
