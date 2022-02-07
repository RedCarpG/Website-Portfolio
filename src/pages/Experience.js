import React, { useRef, useState } from 'react'
import './Experience.scss'
import ScrollWindow, { ScrollItem } from '../components/ScrollWindow'
import experienceJson from '../assets/json/experience.json'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'
import SideNavBar from '../components/SideNavBar'

function InfoCard({ info }) {
    return (
        <section id={info.id}>
            <p className='id'> {info.id} 
                <span className='tw-text-zinc-300'>{info.sup && ` - ${info.sup}`}</span> 
            </p>
            {info.fullname && <p className='fullname'> {info.fullname} </p>}
            {info.title && <p className='title tw-text-zinc-400'> {info.title} </p>}
            {info.project && <p className='project'> {info.project} </p>}
            
            {info.skill && 
            <ul className='skill'>
                {info.skill.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            }
            
            {/* {info.description && <p className='description'> {info.description} </p>} */}

            <div className='bottom'>
                {info.startDate && <p className='period tw-text-zinc-400'> {`${info.startDate} - ${info.endDate}`} </p>}
                {info.location && <p className='location tw-text-zinc-400'> {info.location} </p>}
            </div>
        </section>
    )
}

export default function Experience() {

    const resume = useRef(null)
    const work = useRef(null)
    const project = useRef(null)
    const education = useRef(null)
    const [currentFocus, setFocus] = useState('resume')
    const [showNavBar, setShowNavBar] = useState(false)

    /** Callback function for current Scrolling in / focused Element */
    function scrollItemInCb(scrollItem) {
        switch (scrollItem) {
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
    }

    /** Callback function for Scrolling out Elements */
    function scrollItemOutCb(scrollItem) {
        if (scrollItem === resume.current) setShowNavBar(true)
    }

    return (

        <div id='experience-page' className=''>
            
            <ScrollWindow scrollItemInCb={scrollItemInCb} scrollItemOutCb={scrollItemOutCb}>
                
                <ScrollItem  ref={resume} className={'resume tw-scroll-mb-[-20vh]'}>
                    <div id='resume' className=' tw-relative tw-flex tw-justify-center tw-items-center tw-flex-col tw-mt-[-15vh]'>
                        <div className='tw-text-xl tw-px-56 tw-text-center tw-leading-relaxed'> 
                            Currently graduated from my <b> Master/Engineer </b> Degree, 
                            <br/>I am looking for a job opportunity as
                            <b> Front-end developer & Software developer </b>
                        </div>
                        <div className='tw-text-sm  tw-mt-10 tw-flex tw-flex-col tw-items-center'>
                            <p className='tw-mb-3 tw-text-red-500'> Download my Resume </p>
                            <a className='tw-button' href={require("../assets/file/cv.pdf")} download> 
                               👉  Download  👈
                            </a>
                        </div>
                        <HiOutlineChevronDoubleDown className=' tw-text-2xl tw-absolute tw-bottom-10'/>
                    </div>
                </ScrollItem>

                <ScrollItem ref={work} className={'work tw-bg-zinc-900 tw-bg-opacity-80 tw-text-zinc-300'}>
                    <div id='work' >
                        <h1> Work Experience </h1> 
                        <ScrollWindow size='small'>
                        {
                            experienceJson['work'].map((item, index) => {
                                return (
                                    <ScrollItem key={index}>
                                        <InfoCard info={item} key={index}/>
                                    </ScrollItem>
                                ) 
                            })
                        }
                        </ScrollWindow>
                    </div>
                </ScrollItem>

                <ScrollItem ref={project} className={'project tw-bg-zinc-900 tw-bg-opacity-80 tw-text-zinc-300'}>
                    <div id='project'>
                        <h1> Project </h1> 
                        <ScrollWindow size='small'>
                        {
                            experienceJson['project'].map((item, index) => {
                                return (
                                    <ScrollItem key={index}>
                                        <InfoCard info={item} key={index}/>
                                    </ScrollItem>
                                ) 
                            })
                        }
                        </ScrollWindow>
                    </div>
                </ScrollItem>

                <ScrollItem ref={education} className={'education tw-bg-zinc-900 tw-bg-opacity-80 tw-text-zinc-300'}>
                    <div id='education'>
                        <h1> Educations </h1> 
                        <ScrollWindow size='small'>
                        {
                            experienceJson['education'].map((item, index) => {
                                return (
                                    <ScrollItem key={index}>
                                        <InfoCard info={item} key={index}/>
                                    </ScrollItem>
                                )
                            })
                        }
                        </ScrollWindow>
                    </div>
                </ScrollItem>
                
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
