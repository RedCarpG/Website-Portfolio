import './Home.scss'
import { useRef, forwardRef, useImperativeHandle } from 'react'
import { Controller, Scene } from 'react-scrollmagic'
import { Tween, Timeline } from 'react-gsap'
import { ReactComponent as Sun } from "../assets/svg/Sun.svg"
import { ReactComponent as Mountain4 } from "../assets/svg/Mountain4.svg"
import { ReactComponent as Mountain3 } from "../assets/svg/Mountain3.svg"
import { ReactComponent as Mountain2 } from "../assets/svg/Mountain2.svg"
import { ReactComponent as Mountain1 } from "../assets/svg/Mountain1.svg"
import { ReactComponent as Bird } from "../assets/svg/Bird.svg"
import { ReactComponent as Cloud } from "../assets/svg/Cloud.svg"
import { FaGithub, FaLinkedin, FaRegEnvelope, FaAngleDown } from "react-icons/fa"

export default function Home() {
    const AnimTargets = forwardRef((props, ref) => {
        const bg = useRef(null);
        const sun = useRef(null);
        const cloudSun1 = useRef(null);
        const cloudSun2 = useRef(null);
        const mount1 = useRef(null);
        const mount2 = useRef(null);
        const mount3 = useRef(null);
        const mount4 = useRef(null);
        const cloud = useRef(null);
        useImperativeHandle(ref, () => ({
            bg,
            sun,
            cloudSun1,
            cloudSun2,
            mount1,
            mount2,
            mount3,
            mount4,
            cloud
        }));
        return (
            <>
                <div ref={bg} className='bg tw-bg-opacity-20 tw-bg-zinc-100 tw-fixed tw-top-0 tw-bottom-0 tw-w-full tw-h-full'></div>
                <Sun ref={sun} className={"svg-sun"}/>
                <Cloud ref={cloudSun1} className={"svg-cloud"}/>
                <Cloud ref={cloudSun2} className={"svg-cloud"}/>
                <Mountain4 ref={mount4} className={"svg-mount4"}/>
                <Mountain3 ref={mount3} className={"svg-mount3"}/>
                <Mountain2 ref={mount2} className={"svg-mount2"}/>
                <Mountain1 ref={mount1} className={"svg-mount1"}/>
            </>
        );
      });

    return (
        <div id="home" className='home'>
        <section id='trigger' />
        <Controller> 
            <Scene
                triggerElement={"#trigger"}
                triggerHook={"onLeave"}
                duration={"1000%"}
                // indicators={true}
            >
                <Timeline
                >
                    <Timeline
                        wrapper={
                            <div className='animation'>
                            </div>
                        }
                        target={
                            <AnimTargets/>
                        }
                        duration={1000}
                        labels={[
                            { label: "stage0", position: 0},
                            { label: "stage1", position: 20},
                            { label: "stage2", position: 40},
                            { label: "stage3", position: 60},
                            { label: "stage4", position: 80},
                        ]}
                    >
                        {/* Mount 4 */}

                        <Tween target="mount4" ease="power3.inOut" 
                            from={{ y: "-55vh", scale: 1.2, opacity: .1}}
                            to={{ y: "-80vh", scale: 1, opacity: 1}} 
                            duration={10}
                            position={"stage3"}
                        />
                        <Tween target="mount4" ease="power3.out" 
                            from={{ y: "100vh", scale: 2, opacity: 0}}
                            to={{ y: "-55vh", scale: 1.2, opacity: .1}} 
                            duration={10}
                            position={"stage2"}
                        />

                        {/* Mount 3 */}
                        <Tween target="mount3" ease="power3.inOut" 
                            from={{ y: "-55vh", scale: 1.2, opacity: .2}}
                            to={{ y: "-65vh", scale: 1, opacity: 1 }} 
                            duration={10}
                            position={"stage3"}
                        />
                                            
                        <Tween target="mount3" ease="power3.out" 
                            from={{ y: "100vh", scale: 2, opacity: 0}}
                            to={{ y: "-55vh", scale: 1.2, opacity: .2}} 
                            duration={10}
                            position={"stage2"}
                        />

                        {/* Mount 2 */}
                        <Tween target="mount2" ease="power3.inOut" 
                            from={{ y: "-65vh", scale: 1.2, opacity: .4}}
                            to={{ y: "-53vh", scale: 1, opacity: 1}} 
                            duration={10}
                            position={"stage3"}
                        />

                        <Tween target="mount2" ease="power3.out" 
                            from={{ y: "100vh", scale: 2, opacity: 0}}
                            to={{ y: "-65vh", scale: 1.2, opacity: .4}} 
                            duration={10}
                            position={"stage2"}
                        />

                        {/* Cloud */}
                        <Tween target="cloudSun2" ease="power4.inOut" 
                            from={{ x: "-5vw", y: "-7vh", scale: 2}}
                            to={{ x: "37vw", y: "-20vh", scale: 1}} 
                            duration={10}
                            position={"stage3"}
                        />
                        <Tween target="cloudSun1" ease="power4.inOut" 
                            from={{ x: "8vw", y: "-5vh", scale: 1}}
                            to={{ x: "0vw", y: "-15vh", scale: .5}} 
                            duration={10}
                            position={"stage3"}
                        />

                        <Tween target="cloudSun2" ease="power2.inOut" 
                            from={{ x: "100vw", y: "-5vh",  scale: 5, opacity: 0}}
                            to={{ x: "-5vw", y: "-7vh", scale: 2, opacity: 1 }} 
                            duration={7}
                            position={"stage1"}
                        />
                        <Tween target="cloudSun1" ease="power2.out" 
                            from={{ x: "100vw", y: "-5vh",  scale: 3, opacity: 0}}
                            to={{ x: "8vw", y: "-5vh", scale: 1, opacity: 1 }} 
                            duration={10}
                            position={"stage1"}
                        />

                        {/* Mount1 */}
                        <Tween target="mount1" ease="power3.inOut" 
                            from={{ x: "0vw", y: "-58vh", scale: 1.1 }}
                            to={{ x: "0", y: "-40vh", scale: 1 }} 
                            duration={10}
                            position={"stage3"}
                        />

                        <Tween target="mount1" ease="power3.out" 
                            from={{ x: "100vw", y: "100vh", scale: 4, opacity: 0}}
                            to={{ x: "0vw", y: "-58vh", scale: 1.1, opacity: 1}} 
                            duration={10}
                            position={"stage2"}
                        />

                        {/* BG fade */}
                        <Tween target="bg" ease="power2.inOut"
                            from={{ "background-color": "rgb(39 39 42)" }}
                            to={{ "background-color": "rgb(244 244 245)"}}
                            duration={5}
                            position={"stage1"}
                        />  
                        {/* Sun */}
                        <Tween target="sun" ease="power2.inOut"
                            from={{ y: "-20vh",  x: "0", scale: 1}}
                            to={{ y: "-30vh", x: "30vw", scale: .7}}
                            duration={10}
                            position={"stage3"}
                        />  

                        <Tween target="sun" ease="power2.inOut"
                            from={{  y: "50vh", scale: 3 }}
                            to={{ y: "-20vh", scale: 1 }}
                            duration={5}
                            position={"stage1"}
                        />  

                        {/* Text */}
                        <Timeline 
                            target={<> 
                                <h1 className='tw-text-zinc-200 tw-text-[20rem] tw-pt-[50vh]'> HI </h1>
                                <h1 className='tw-text-zinc-200 tw-text-[10rem] tw-pt-[10vh]'> I'm Peng </h1>
                                <div className='arrow tw-text-zinc-100 tw-text-[5rem]'>
                                    <FaAngleDown className=' tw-translate-y-[30vh]'/> 
                                    <FaAngleDown className=' tw-translate-y-[33vh]'/> 
                                </div>
                                
                            </>}
                            position={"stage0"}
                        >

                            <Tween target={0} ease="power2.inOut"
                                from={{ opacity: 1}}
                                to={{ opacity: 0}}
                                duration={10}
                                position={10}
                            />
                            <Tween target={0} ease="power2.inOut"
                                from={{ opacity: 0}}
                                to={{ opacity: 1}}
                                duration={5}
                                position={0}
                            />
                            <Tween target={1} ease="power2.inOut"
                                from={{ opacity: 1}}
                                to={{ opacity: 0}}
                                duration={10}
                                position={10}
                            />
                            <Tween target={1} ease="power2.inOut"
                                from={{ opacity: 0}}
                                to={{ opacity: 1}}
                                duration={5}
                                position={5}
                            />
                            <Tween target={2} ease="power2.inOut"
                                from={{ opacity: 1 }}
                                to={{ display: "none", opacity: 0 }}
                                duration={1}
                                position={0}
                            />
                        </Timeline>
                    
                        <Timeline 
                            target={ <> 
                                <h1 className='tw-text-zinc-800 tw-text-[5rem] tw-pt-[60vh] '> Welcome to my Portfolio Website </h1>
                            </>}
                            position={"stage1"}
                        >

                            <Tween target={0} ease="power2.inOut"
                                from={{ opacity: 1}}
                                to={{ opacity: 0}}
                                duration={10}
                                position={10}
                            />
                            <Tween target={0} ease="power2.inOut"
                                from={{ opacity: 0}}
                                to={{ opacity: 1}}
                                duration={5}
                                position={5}
                            />
                        </Timeline>

                        <Timeline 
                            target={ <> 
                                <h1 className=' tw-text-zinc-800 tw-text-[3rem] tw-pl-[65vw] tw-pt-[15vh]'> I come from Anhui, China. <br/> And currently based in France </h1>
                            </>}
                            position={"stage2"}
                        >

                            <Tween target={0} ease="power2.inOut"
                                from={{ opacity: 1}}
                                to={{ opacity: 0}}
                                duration={10}
                                position={10}
                            />
                            <Tween target={0} ease="power2.inOut"
                                from={{ opacity: 0}}
                                to={{ opacity: 1}}
                                duration={5}
                                position={5}
                            />
                        </Timeline>
                    </Timeline>

                    <Timeline 
                        target={ 

                            <footer className="footer">
                                <Footer/>
                            </footer>
                        }
                        duration={200}
                    >
                        <Tween target={0} ease="power2.inOut"
                            from={{ opacity: 0}}
                            to={{ opacity: 1, y: '-100%'}}
                            duration={10}
                        />
                    </Timeline>
                </Timeline>
            </Scene>
        </Controller>
        <section className='tw-h-screen' />
        </div>
    )
}


function Footer() {
    return (    
        <>
            <h1 className=''> Thanks for watching </h1>
            <div> 
                <div className='tools tw-flex tw-flex-col tw-justify-center'>
                    <ul> 
                        <h2> Tools used: </h2>
                        <li> React JS </li>
                        <li> Scroll Magic </li>
                        <li> GASP </li>
                        <li> Tailwind CSS / PostCss </li>
                    </ul>
                </div>
            </div> 
            <div className="icon">
                <a href="https://github.com/RedCarpG" target="_blank" rel="noreferrer"> <FaGithub /> </a>
                <a href="https://www.linkedin.com/in/peng-gao-fr/" target="_blank" rel="noreferrer"> <FaLinkedin /> </a>
                <a href="mailto: peng.gao1102@gmail.com"> <FaRegEnvelope /> </a>
            </div>
        </>

    )
}