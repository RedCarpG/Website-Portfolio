import './Home.scss'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'
import { ReactComponent as Sun } from "../assets/svg/Sun.svg"
import { ReactComponent as Front1 } from "../assets/svg/Front1.svg"
import { ReactComponent as Front2 } from "../assets/svg/Front2.svg"
import { ReactComponent as Back1 } from "../assets/svg/Back1.svg"
import { ReactComponent as Back2 } from "../assets/svg/Back2.svg"

export default function Home() {
    return (
        <div id="home" className='home'>
            <Controller>
                <Scene 
                    triggerElement={null}
                    triggerHook="onEnter"
                    reverse={true}
                    indicators={true}
                    duration={3000}
                >
                    {(progress) => (

                        <Timeline totalProgress={progress} paused>
                            {/* <Tween
                                from={{
                                    opacity: '1'
                                }}
                                to={{
                                    opacity: '0'
                                }}>
                                <p className=' tw-z-10 tw-flex tw-justify-center tw-items-center tw-text-zinc-50 tw-text-[20vw] tw-fixed tw-top-0 tw-bottom-0 tw-left-0 tw-right-0'> 
                                Hi</p>
                            </Tween>
                            <Tween
                                from={{
                                    x: '0',
                                    y: '0',
                                    attr: {
                                        width: '100%',
                                        height: '100%',
                                    }
                                }}
                                to={{
                                    x: '35vw',
                                    y: '-25vh',
                                    attr: {
                                        width: '35%',
                                        height: '35%',
                                    }
                                }}
                            >
                                <Sun className={"svg-sun"}/>
                            </Tween> */}
                            <Tween>
                                <Back2 className={"svg-back2"}/>
                            </Tween>                            
                            {/* <Tween>
                                <Back1 className={"svg-back1"}/>
                            </Tween>                            
                            <Tween>
                                <Front2 className={"svg-front2"}/>
                            </Tween>
                            <Tween>
                                <Front1 className={"svg-front1"}/>
                            </Tween> */}
                        </Timeline>
                    )}
                </Scene>
            </Controller>
            {/* <section /> */}

            {/* <section className="parallaxie tw-banner" >
                <div className="heading tw-flex tw-justify-start tw-items-center tw-px-28">
                    <div>
                        <p className='intro tw-text-[10rem] tw-pb-4'> Hi, I'm Peng </p>
                        <p className='tw-text-xl'> Young graduate of Polytech Nantes </p>
                    </div>
                </div>
            </section>
            <section className=' tw-flex tw-justify-center tw-items-center tw-text-white tw-h-10'> 
                Hi
            </section> */}
        </div>
    )
}
