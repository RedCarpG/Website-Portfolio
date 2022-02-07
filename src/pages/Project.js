import ScrollWindow, { ScrollItem } from '../components/ScrollWindow'
import SlideWindow, { SlideItem } from '../components/SlideWindow'
import ClickImage from '../components/ClickImage'
import TicTacToe from '../assets/img/projects/tictactoe.png'
import LostViking from '../assets/img/projects/LostViking.png'
import BeBarBall from '../assets/img/projects/BeBarBall.png'
import { FaGithub } from 'react-icons/fa'
import './Project.scss'

function PageContent({ children, title }) {
    return (
        
        <div className='tw-flex tw-flex-col tw-justify-center tw-items-center tw-pt-10'>
            <h1> {title} </h1>
            { children }
        </div>
    )
}

export default function Project() {
    /** Callback function for current Scrolling in / focused Element */
    function scrollItemInCb(scrollItem) {
        scrollItem.childNodes.forEach((child) => {
            switch (child) {
                default: 
            }
        })
    }

    /** Callback function for Scrolling out Elements */
    function scrollItemOutCb(scrollItem) {
        scrollItem.childNodes.forEach((child) => {
            // if (child === resume.current) setShowNavBar(true)
        })
    }

    /** Callback function for current Scrolling in / focused Element */
    function slideInCb(index, item) {
        const img = item.querySelector('.clickImage')
        if(img) img.classList.add('active')
    }

    /** Callback function for Scrolling out Elements */
    function slideOutCb(index, item) {
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
                                <section className='tw-flex tw-flex-col tw-text-center tw-gap-5 tw-items-center'>
                                    <h2> Tic Tac Toe </h2>
                                    <ClickImage src={TicTacToe} alt='Tic Tac Toe' />
                                    <div>
                                        <p className='tw-text-xl tw-mb-2'>Tools used: </p>
                                        <ul className='tw-text-sm'> 
                                            <li> HTML / CSS / JavaScript </li>
                                            <li> ReactJS </li>
                                            <li> Figma </li>
                                        </ul>
                                        <ul>
                                            <li><a href="https://github.com/RedCarpG/JavaScript-Game-TicTacToe/tree/v_html" target="_blank" rel="noreferrer"> <FaGithub /> </a></li>
                                        </ul>
                                    </div>
                                    <a className='tw-button tw-w-auto tw-text-base' href="https://redcarpg.github.io/JavaScript-Game-TicTacToe/" target="_blank" rel="noreferrer"> Try it out in web browser</a>
                                </section>
                            </SlideItem>
                        </SlideWindow>
                    </PageContent>
                </ScrollItem>

                <ScrollItem className={'other tw-bg-zinc-900 tw-bg-opacity-80 tw-text-zinc-300'}>
                    <PageContent title={"Other Mini Projects"}>
                        <SlideWindow slideInCb={slideInCb} slideOutCb={slideOutCb}>
                            <SlideItem className=''>
                                <section className='tw-flex tw-flex-col tw-text-center tw-gap-5 tw-items-center'>                          
                                    <h2> Lost Viking </h2>
                                    <ClickImage  src={LostViking} alt='Lost Viking'/>
                                    <div>
                                        <p className='tw-text-xl'>Tools used: </p>
                                        <ul className='tw-text-sm'> 
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
                                <section className='tw-flex tw-flex-col tw-text-center tw-gap-5 tw-items-center'>                          
                                    <h2> BeBarBall </h2>
                                    <ClickImage  src={BeBarBall} alt='BeBarBall'/>
                                    <div>
                                        <p className='tw-text-xl'> Tools used: </p>
                                        <ul className='tw-text-sm'> 
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
                                <ClickImage  src={[require("../assets/img/projects/art0.jpg")]} alt='art0'/>
                            </SlideItem>
                        </SlideWindow>
                    </PageContent>
                </ScrollItem>
                <ScrollItem className={'graphic-design tw-bg-zinc-900 tw-bg-opacity-80 tw-text-zinc-300'}>
                    <PageContent title={"E-commercial Design Portfolio"}>
                        <SlideWindow slideInCb={slideInCb} slideOutCb={slideOutCb}>
                            <SlideItem className=''>
                                <ClickImage  src={[require("../assets/img/projects/banner0.jpg")]} alt='banner0'/>
                            </SlideItem>
                            <SlideItem className=''>
                                <ClickImage  src={[require("../assets/img/projects/banner1.jpg")]} alt='banner1'/>
                            </SlideItem>
                            <SlideItem className=''>
                                <ClickImage  src={[require("../assets/img/projects/banner2.jpg")]} alt='banner2'/>
                            </SlideItem>
                            <SlideItem className=''>
                                <ClickImage  src={[require("../assets/img/projects/banner3.jpg")]} alt='banner3'/>
                            </SlideItem>
                            <SlideItem className=''>
                                <ClickImage  src={[require("../assets/img/projects/banner4.jpg")]} alt='banner4'/>
                            </SlideItem>
                        </SlideWindow>
                    </PageContent>
                </ScrollItem>

            </ScrollWindow>
        </div>
    )
}