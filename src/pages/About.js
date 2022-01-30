import React, { useRef, useState } from 'react'
import './About.scss'
import ScrollWindow from '../components/ScrollWindow'
import experienceJson from '../assets/experience.json'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'
import SlideItem from '../components/SlideItem'
import SideNavBar from '../components/SideNavBar'

function InfoCard({ info }) {
    return (
        <section id={info.id}>
            <p className='id'> {info.id} 
                <span className='tw-text-zinc-300'>{info.sup && ` - ${info.sup}`}</span> 
            </p>
            {info.fullname && <p className='fullname tw-text-zinc-400'> {info.fullname} </p>}
            {info.title && <p className='title'> {info.title} </p>}
            {info.project && <p className='project'> {info.project} </p>}
            
            {/* {info.description && <p className='description'> {info.description} </p>} */}

            <div className='bottom'>
                {info.startDate && <p className='period'> {`${info.startDate} - ${info.endDate}`} </p>}
                {info.location && <p className='location'> {info.location} </p>}
            </div>
        </section>
    )
}

export default function About() {

    const resume = useRef(null)
    const work = useRef(null)
    const project = useRef(null)
    const education = useRef(null)
    const [currentFocus, setFocus] = useState('resume')
    const [showNavBar, setShowNavBar] = useState(false)

    /** Callback function for current Scrolling in / focused Element */
    function scrollItemInCb(scrollItem) {
        scrollItem.childNodes.forEach((child) => {
            switch (child) {
                case resume.current: {
                    setShowNavBar(false)
                    break
                }
                case work.current: {
                    setFocus('work')
                    break
                }
                case project.current: {
                    setFocus('project') 
                    break
                }
                case education.current: {
                    setFocus('education')
                    break
                }
                default: 
            }
        })
    }

    /** Callback function for Scrolling out Elements */
    function scrollItemOutCb(scrollItem) {
        scrollItem.childNodes.forEach((child) => {
            if (child === resume.current) setShowNavBar(true)
        })
    }

    return (

        <div id='about' className=''>
            
            <ScrollWindow scrollItemInCb={scrollItemInCb} scrollItemOutCb={scrollItemOutCb}>
                
                <SlideItem className={'tw-h-[120vh]  tw-scroll-mb-[-20vh]'}>
                    <div className='resume tw-relative' id='resume' ref={resume}>
                        <p className='tw-text-3xl tw-px-56 tw-text-center tw-leading-relaxed'> 
                            Currently graduated from my <b> Master/Engineer </b> Degree, 
                            <br/>I am looking for a job opportunity as
                            <b> Front-end developer & Software developer </b>
                        </p>
                        <div className=' tw-mt-10 tw-flex tw-flex-col tw-items-center'>
                            <p className=' tw-text-lg tw-mb-3 tw-text-red-500'> Download my Resume </p>
                            <button className=' tw-button' onClick={null} type='button'> 
                               👉  Download  👈
                            </button>
                        </div>
                        <HiOutlineChevronDoubleDown className=' tw-text-5xl tw-absolute tw-bottom-10'/>
                    </div>
                </SlideItem>

                <SlideItem className={'tw-bg-zinc-900 tw-bg-opacity-80 tw-text-zinc-300'}>
                    <div className='work ' id='work' ref={work}>
                        
                        <h1 className='tw-mt-10 tw-font-bold'> Work Experience </h1> 
                        <ScrollWindow size='small'>
                        {
                            experienceJson['work'].map((item, index) => {
                                return (
                                    <SlideItem key={index}>
                                        <InfoCard info={item} key={index}/>
                                    </SlideItem>
                                ) 
                            })
                        }
                        </ScrollWindow>
                    </div>
                </SlideItem>

                <SlideItem className={'tw-bg-zinc-900 tw-bg-opacity-80 tw-text-zinc-300'}>
                    <div className='project ' id='project' ref={project}>
                        
                        <h1 className='tw-mt-10 tw-font-bold'> Project </h1> 
                        <ScrollWindow size='small'>
                        {
                            experienceJson['project'].map((item, index) => {
                                return (
                                    <SlideItem key={index}>
                                        <InfoCard info={item} key={index}/>
                                    </SlideItem>
                                ) 
                            })
                        }
                        </ScrollWindow>
                    </div>
                </SlideItem>

                <SlideItem className={'tw-bg-zinc-900 tw-bg-opacity-80 tw-text-zinc-300'}>
                    <div className='education' id='education' ref={education}>
                        <h1 className='tw-mt-10 tw-font-bold'> Educations </h1> 
                        <ScrollWindow size='small'>
                        {
                            experienceJson['education'].map((item, index) => {
                                return (
                                    <SlideItem key={index}>
                                        <InfoCard info={item} key={index}/>
                                    </SlideItem>
                                )
                            })
                        }
                        </ScrollWindow>
                        
                    </div>
                </SlideItem>
                
            </ScrollWindow>

            <SideNavBar show={showNavBar} currentFocus={`nav-${currentFocus}`}>
                <li className='nav-resume' data-index={0}> <h1> <a href='#resume' rel='internal'> RESUME </a> </h1></li>
                <li className='nav-work' data-index={1}> <h1> <a href='#work' rel='internal'> WORK </a> </h1>
                    <ul className={'tw-text-zinc-400'} >
                    {
                        experienceJson['work'].map((item, index) => {
                            return (
                                <li key={index}>
                                <a href={`#${item.id}`} rel='internal'> {item.id} </a> 
                                </li>
                            ) 
                        })
                    }
                    </ul>
                </li>
                <li className='nav-project' data-index={2}> <h1> <a href='#project' rel='internal'> PROJECT </a> </h1>
                    <ul className={'tw-text-zinc-400'}>
                    {
                        experienceJson['project'].map((item, index) => {
                            return (
                                <li key={index}>
                                <a href={`#${item.id}`} rel='internal'> {item.id} </a> 
                                </li>
                            ) 
                        })
                    }
                    </ul>
                </li>
                <li className='nav-education' data-index={3}> <h1>  <a href='#education' rel='internal'> EDUCATION </a> </h1>        
                    <ul className={'tw-text-zinc-400'} >
                    {
                        experienceJson['education'].map((item, index) => {
                            return (
                                <li key={index}>
                                    <a href={`#${item.id}`} rel='internal'> {item.id} </a> 
                                </li>
                            ) 
                        })
                    }
                    </ul>
                </li>
            </SideNavBar>

        </div>
    )
}
