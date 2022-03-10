import React from 'react'
import ScrollWindow, { ScrollItem } from '../components/ScrollWindow'
import SlideWindow, { SlideItem } from '../components/SlideWindow'
import ClickImage from '../components/ClickImage'
import { FaGithub } from 'react-icons/fa'
import './Project.scss'


type PageContentProps = {
    title?: string
}
const PageContent: React.FC<PageContentProps> = (
    { children, title }
) => {
    return (
        <div className='tw-flex tw-flex-col tw-justify-center tw-items-center tw-pt-10'>
            <h1> {title} </h1>
            { children }
        </div>
    )
}

const Project: React.FC = () => {
    /** Callback function for current Scrolling in / focused Element */
    function scrollItemInCb(scrollItem: HTMLElement) {
        // const childrenElements = scrollItem.children as any as Array<HTMLElement>
        // childrenElements.forEach((child) => {
        //     switch (child) {
        //         default: 
        //     }
        // })
    }

    /** Callback function for Scrolling out Elements */
    function scrollItemOutCb(scrollItem: HTMLElement) {
        // scrollItem.childNodes.forEach((child) => {
        //     if (child === resume.current) setShowNavBar(true)
        // })
    }

    /** Callback function for current Scrolling in / focused Element */
    function slideInCb(index: number, item: HTMLElement) {
        const img = item.querySelector('.clickImage')
        if(img) img.classList.add('active')
    }

    /** Callback function for Scrolling out Elements */
    function slideOutCb(index: number, item: HTMLElement) {
        const img = item.querySelector('.clickImage')
        if(img) img.classList.remove('active')
    }

    return (
        <div id='project-page' className=''>
            <ScrollWindow scrollItemInCb={scrollItemInCb} scrollItemOutCb={scrollItemOutCb}>
                
                <ScrollItem className={'web tw-bg-opacity-80 tw-text-zinc-300'}>
                    <PageContent title={"Web Demo Project"}>
                        <SlideWindow slideInCb={slideInCb} slideOutCb={slideOutCb}>
                            <SlideItem className='tictactoe'>
                                <section className=''>
                                    <h2> Tic Tac Toe </h2>
                                    <ClickImage src={require("../assets/img/projects/tictactoe.png")} alt='Tic Tac Toe' />
                                    <div>
                                        <p className=''>Tools used: </p>
                                        <ul className=''> 
                                            <li> HTML / CSS / JavaScript </li>
                                            <li> ReactJS </li>
                                            <li> Figma </li>
                                        </ul>
                                        <ul>
                                            <li><a href="https://github.com/RedCarpG/JavaScript-Game-TicTacToe/tree/v_html" target="_blank" rel="noreferrer"> <FaGithub /> </a></li>
                                        </ul>
                                    </div>
                                    <a className='tw-button tw-w-auto tw-text-[.7em] tw-p-[1em]' href="https://redcarpg.github.io/JavaScript-Game-TicTacToe/" target="_blank" rel="noreferrer"> Try it out in web browser</a>
                                </section>
                            </SlideItem>
                        </SlideWindow>
                    </PageContent>
                </ScrollItem>

                <ScrollItem className={'other tw-bg-zinc-900 tw-bg-opacity-80 tw-text-zinc-300'}>
                    <PageContent title={"Other Mini Projects"}>
                        <SlideWindow slideInCb={slideInCb} slideOutCb={slideOutCb}>
                            <SlideItem className=''>
                                <section className=''>                          
                                    <h2> Lost Viking </h2>
                                    <ClickImage  src={require("../assets/img/projects/LostViking.png")} alt='Lost Viking'/>
                                    <div>
                                        <p className=''>Tools used: </p>
                                        <ul className=''> 
                                            <li> Python </li>
                                            <li> Pygame </li>
                                            <li> Aseprite </li>
                                            <li> PhotoShop </li>
                                        </ul>
                                        <ul>
                                            <li><a href="https://github.com/RedCarpG/Python-Pygame-LostViking" target="_blank" rel="noreferrer"> <FaGithub /> </a></li>
                                        </ul>
                                    </div>
                                </section>
                            </SlideItem>
                            <SlideItem className=''>
                                <section className=''>                          
                                    <h2> BeBarBall </h2>
                                    <ClickImage  src={require("../assets/img/projects/BeBarBall.png")} alt='BeBarBall'/>
                                    <div>
                                        <p className=''> Tools used: </p>
                                        <ul className=''> 
                                            <li> Python </li>
                                            <li> Pygame </li>
                                        </ul>
                                        <ul>
                                            <li><a href="https://github.com/RedCarpG/Python-Pygame-Bebarball" target="_blank" rel="noreferrer"> <FaGithub /> </a></li>
                                        </ul>
                                    </div>
                                </section>
                            </SlideItem>
                        </SlideWindow>
                    </PageContent>
                </ScrollItem>
                <ScrollItem className={'graphic-design tw-bg-zinc-900 tw-bg-opacity-80 tw-text-zinc-300'}>
                    <PageContent title={"Graphic Design Portfolio"}>
                        <SlideWindow slideInCb={slideInCb} slideOutCb={slideOutCb}>
                            <SlideItem className=''>
                                <ClickImage  src={require("../assets/img/projects/post0.jpg")} alt='post0'/>
                            </SlideItem>
                            <SlideItem className=''>
                                <ClickImage  src={require("../assets/img/projects/post1.jpg")} alt='post1'/>
                            </SlideItem>
                            <SlideItem className=''>
                                <ClickImage  src={require("../assets/img/projects/post2.jpg")} alt='post2'/>
                            </SlideItem>
                            <SlideItem className=''>
                                <ClickImage  src={require("../assets/img/projects/post3.jpg")} alt='post3'/>
                            </SlideItem>
                            <SlideItem className=''>
                                <ClickImage  src={require("../assets/img/projects/art0.jpg")} alt='art0'/>
                            </SlideItem>
                        </SlideWindow>
                    </PageContent>
                </ScrollItem>
                <ScrollItem className={'graphic-design tw-bg-zinc-900 tw-bg-opacity-80 tw-text-zinc-300'}>
                    <PageContent title={"E-commercial Design Portfolio"}>
                        <SlideWindow slideInCb={slideInCb} slideOutCb={slideOutCb}>
                            <SlideItem className=''>
                                <ClickImage  src={require("../assets/img/projects/banner0.jpg")} alt='banner0'/>
                            </SlideItem>
                            <SlideItem className=''>
                                <ClickImage  src={require("../assets/img/projects/banner1.jpg")} alt='banner1'/>
                            </SlideItem>
                            <SlideItem className=''>
                                <ClickImage  src={require("../assets/img/projects/banner2.jpg")} alt='banner2'/>
                            </SlideItem>
                            <SlideItem className=''>
                                <ClickImage  src={require("../assets/img/projects/banner3.jpg")} alt='banner3'/>
                            </SlideItem>
                            <SlideItem className=''>
                                <ClickImage  src={require("../assets/img/projects/banner4.jpg")} alt='banner4'/>
                            </SlideItem>
                        </SlideWindow>
                    </PageContent>
                </ScrollItem>

            </ScrollWindow>
        </div>
    )
}

export default Project