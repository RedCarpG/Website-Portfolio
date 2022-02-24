import React, { useRef, useState } from 'react'
import './Experience.scss'
import ScrollWindow, { ScrollItem } from '../components/ScrollWindow'
import experienceJson from '../assets/json/experience.json'
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'
import SideNavBar, { SideNavLinkMain, SideNavLinkMinor } from '../components/SideNavBar'

function InfoCard({ info }) {
    return (
        <section>
            {
                info.bg_img && 
                <img class="bg_img" src={[require(`../assets/img/experience/${info.bg_img}`)]} alt={info.bg_img}/>
            }
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
                {info.startDate && <p className='period tw-text-zinc-200'> {`${info.startDate} - ${info.endDate}`} </p>}
                {info.location && <p className='location tw-text-zinc-200'> {info.location} </p>}
            </div>
        </section>
    )
}

export default function Experience() {

    const resume = useRef(null)
    const work = useRef(null)
    const project = useRef(null)
    const education = useRef(null)
    const [currentIndex, setIndex] = useState(0)
    const [showNavBar, setShowNavBar] = useState(false)

    /** Callback function for current Scrolling in / focused Element */
    function scrollItemInCb(scrollItem) {
        switch (scrollItem) {
            case resume.current: {
                setShowNavBar(false)
                setIndex(0)
                break
            }
            case work.current: {
                setIndex(1)
                break
            }
            case project.current: {
                setIndex(2) 
                break
            }
            case education.current: {
                setIndex(3)
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
                
                <ScrollItem id='resume' ref={resume} className={'resume tw-scroll-mb-[-20vh]'}>
                    <div className=' tw-relative tw-flex tw-justify-center tw-items-center tw-flex-col tw-mt-[-15vh]'>
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

                <ScrollItem id='work' ref={work} className={'work tw-bg-zinc-900 tw-bg-opacity-80 tw-text-zinc-300'}>
                    <div>
                        <h1> Work Experience </h1> 
                        <ScrollWindow size='small'>
                        {
                            experienceJson['work'].map((item, index) => {
                                return (
                                    <ScrollItem id={item.id} key={index}>
                                        <InfoCard info={item} key={index}/>
                                    </ScrollItem>
                                ) 
                            })
                        }
                        </ScrollWindow>
                    </div>
                </ScrollItem>

                <ScrollItem id='project' ref={project} className={'project tw-bg-zinc-900 tw-bg-opacity-80 tw-text-zinc-300'}>
                    <div>
                        <h1> Project </h1> 
                        <ScrollWindow size='small'>
                        {
                            experienceJson['project'].map((item, index) => {
                                return (
                                    <ScrollItem  id={item.id} key={index}>
                                        <InfoCard info={item} key={index}/>
                                    </ScrollItem>
                                ) 
                            })
                        }
                        </ScrollWindow>
                    </div>
                </ScrollItem>

                <ScrollItem id='education' ref={education} className={'education tw-bg-zinc-900 tw-bg-opacity-80 tw-text-zinc-300'}>
                    <div>
                        <h1> Educations </h1> 
                        <ScrollWindow size='small'>
                        {
                            experienceJson['education'].map((item, index) => {
                                return (
                                    <ScrollItem  id={item.id} key={index}>
                                        <InfoCard info={item} key={index}/>
                                    </ScrollItem>
                                )
                            })
                        }
                        </ScrollWindow>
                    </div>
                </ScrollItem>
                
            </ScrollWindow>

            <SideNavBar show={showNavBar} currentIndex={currentIndex}>
                <SideNavLinkMain title={"RESUME"} targetID='resume' index={0}/>
                <SideNavLinkMain title={"WORK"} targetID='work' index={1}>
                    {
                        experienceJson['work'].map((item, index) => {
                            return (
                                <SideNavLinkMinor targetID={item.id} title={item.id} key={index}/>
                            ) 
                        })
                    }
                </SideNavLinkMain>
                <SideNavLinkMain title={"PROJECT"} targetID='project' index={2}>
                    {
                        experienceJson['project'].map((item, index) => {
                            return (
                                <SideNavLinkMinor targetID={item.id} title={item.id} key={index}/>
                            ) 
                        })
                    }
                </SideNavLinkMain>
                <SideNavLinkMain title={"EDUCATION"} targetID='education' index={3}>
                    {
                        experienceJson['education'].map((item, index) => {
                            return (
                                <SideNavLinkMinor targetID={item.id} title={item.id} key={index}/>
                            ) 
                        })
                    }
                </SideNavLinkMain>
            </SideNavBar>

        </div>
    )
}
