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
import { NavLink } from "react-router-dom"

export default function Home() {
    const AnimTargets = forwardRef((props, ref) => {
        const bg = useRef(null);
        const sun = useRef(null);
        const cloudSun1 = useRef(null);
        const cloudSun2 = useRef(null);
        const cloud3 = useRef(null);
        const cloud4 = useRef(null);
        const cloud5 = useRef(null);
        const cloud6 = useRef(null);
        const bird1 = useRef(null);
        const bird2 = useRef(null);
        const bird3 = useRef(null);
        const bird4 = useRef(null);
        const mount1 = useRef(null);
        const mount2 = useRef(null);
        const mount3 = useRef(null);
        const mount4 = useRef(null);
        const peng = useRef(null);
        const gao = useRef(null);
        useImperativeHandle(ref, () => ({
            bg,
            sun,
            cloudSun1,
            cloudSun2,
            cloud3,
            cloud4,
            cloud5,
            cloud6,
            bird1,
            bird2,
            bird3,
            bird4,
            mount1,
            mount2,
            mount3,
            mount4,
            peng,
            gao
        }));
        return (
            <>
                <div ref={bg} className='bg tw-bg-opacity-20 tw-bg-zinc-100 tw-fixed tw-top-0 tw-bottom-0 tw-w-full tw-h-full'></div>
                <Sun ref={sun} className={"svg-sun"}/>
                <Cloud ref={cloudSun1} className={"svg-cloud"}/>
                <Cloud ref={cloudSun2} className={"svg-cloud"}/>
                <Mountain4 ref={mount4} className={"svg-mount4"}/>
                <Cloud ref={cloud3} className={"svg-cloud"}/>
                <Cloud ref={cloud4} className={"svg-cloud"}/>
                <Mountain3 ref={mount3} className={"svg-mount3"}/>
                <Cloud ref={cloud5} className={"svg-cloud"}/>
                <h1 className='name gao' ref={gao}> Gao </h1>
                <h1 className='name peng' ref={peng}> Peng </h1>
                <Cloud ref={cloud6} className={"svg-cloud"}/>
                <Mountain2 ref={mount2} className={"svg-mount2"}/>
                <Bird ref={bird1} className={"svg-bird"}/>
                <Bird ref={bird2} className={"svg-bird"}/>
                <Bird ref={bird3} className={"svg-bird"}/>
                <Bird ref={bird4} className={"svg-bird"}/>
                <Mountain1 ref={mount1} className={"svg-mount1"}/>
            </>
        );
    });

    return (
        <div id="home-page" className='home'>
        <section id='trigger' />
        <Controller> 
            <Scene
                triggerElement={"#trigger"}
                triggerHook={"onLeave"}
                duration={"1500%"}
            >
                <Timeline >
                    <Timeline
                        wrapper={
                            <div className='animation'>
                            </div>
                        }
                        target={
                            <AnimTargets/>
                        }
                        duration={2000}
                        labels={[
                            { label: "stage0", position: 0},
                            { label: "stage1", position: 20},
                            { label: "stage2", position: 40},
                            { label: "stage3", position: 60},
                            { label: "stage4", position: 80},
                            { label: "stage5", position: 100},
                        ]}
                    >
                        {/* Stage 5 */}
                        <Tween target="peng" ease="power3.inOut" 
                            from={{ x: "25vw", y: "100vh", opacity: 0}}
                            to={{ y: "20vh", opacity: 1}} 
                            duration={20}
                            position={"stage5"}
                        />
                        <Tween target="gao" ease="power3.inOut" 
                            from={{ x: "-25vw", y: "100vh", opacity: 0}}
                            to={{ y: "0vh", opacity: 1}} 
                            duration={20}
                            position={"stage5"}
                        />
                        {/* Stage 4 */}
                        <Tween target="bg" ease="power2.inOut"
                            from={{ "background-color": "rgb(225 225 225)" }}
                            to={{ "background-color": "rgb(255 255 255)"}}
                            duration={20}
                            position={"stage4"}
                        />  
                        <Tween target="mount4" ease="power3.inOut" 
                            from={{ y: "50vh", scale: 1.2, opacity: .1}}
                            to={{ y: "-20vh", scale: 1, opacity: 1}} 
                            duration={20}
                            position={"stage4"}
                        />
                        <Tween target="mount3" ease="power3.inOut" 
                            from={{ y: "20vh", scale: 1.2, opacity: .2}}
                            to={{ y: "-10vh", scale: 1, opacity: 1 }} 
                            duration={20}
                            position={"stage4"}
                        />          
                        <Tween target="mount2" ease="power3.inOut" 
                            from={{ y: "0", scale: 1.2, opacity: .4}}
                            to={{ y: "5vh", scale: 1, opacity: 1}} 
                            duration={20}
                            position={"stage4"}
                        />
                        <Tween target="bird4" ease="power4.inOut" 
                            from={{ x: "-60vw", y: "15vh",  scale: 0, opacity: 0 }}
                            to={{ x: "0vw", y: "-25vh", scale: .2, opacity: .8 }} 
                            duration={20}
                            position={"stage4"}
                        />
                        <Tween target="bird3" ease="power4.inOut" 
                            from={{ x: "-60vw", y: "15vh",  scale: 0, opacity: 0 }}
                            to={{ x: "2vw", y: "-28vh", scale: .4, opacity: .8 }} 
                            duration={20}
                            position={"stage4"}
                        />
                        <Tween target="bird2" ease="power4.inOut" 
                            from={{ x: "22vw", y: "0vh",  scale: 1, opacity: 1  }}
                            to={{ x: "-30vw", y: "-15vh", scale: 1, opacity: .6  }} 
                            duration={20}
                            position={"stage4"}
                        />
                        <Tween target="bird1" ease="power4.inOut" 
                            from={{ x: "30vw", y: "-5vh",  scale: 1.5, opacity: 1  }}
                            to={{ x: "-25vw", y: "-10vh", scale: .6, opacity: .6 }} 
                            duration={20}
                            position={"stage4"}
                        />
                        <Tween target="cloud6" ease="power4.inOut" 
                            from={{ x: "50vw", y: "20vh",  scale: 3, opacity: 0}}
                            to={{ x: "40vw", y: "35vh", scale: 2.5, opacity: .9 }} 
                            duration={20}
                            position={"stage4"}
                        />
                        <Tween target="cloud5" ease="power4.inOut" 
                            from={{ x: "0vw", y: "20vh",  scale: 2, opacity: 0}}
                            to={{ x: "20vw", y: "10vh", scale: 1.2, opacity: .8 }} 
                            duration={20}
                            position={"stage4"}
                        />
                        <Tween target="cloud4" ease="power4.inOut" 
                            from={{ x: "-50vw", y: "0vh",  scale: 2, opacity: 0}}
                            to={{ x: "-40vw", y: "-22vh", scale: 1.5, opacity: .8 }} 
                            duration={20}
                            position={"stage4"}
                        />
                        <Tween target="cloud3" ease="power4.inOut" 
                            from={{ x: "0vw", y: "0vh",  scale: 1.5, opacity: 0}}
                            to={{ x: "-11vw", y: "-8vh", scale: 1, opacity: .8 }} 
                            duration={20}
                            position={"stage4"}
                        />
                        <Tween target="cloudSun2" ease="power4.inOut" 
                            from={{ x: "-2vw", y: "0vh", scale: 1.5}}
                            to={{ x: "35vw", y: "-12vh", scale: .8}} 
                            duration={20}
                            position={"stage4"}
                        />
                        <Tween target="cloudSun1" ease="power4.inOut" 
                            from={{ x: "10vw", y: "0vh", scale: .8, opacity: 1 }}
                            to={{ x: "15vw", y: "-10vh", scale: .3, opacity: .8 }} 
                            duration={20}
                            position={"stage4"}
                        />
                        <Tween target="mount1" ease="power3.inOut" 
                            from={{ x: "0vw", y: "5vh", scale: 1.1 }}
                            to={{ x: "0", y: "30vh", scale: 1 }} 
                            duration={20}
                            position={"stage4"}
                        />
                        <Tween target="sun" ease="power2.inOut"
                            from={{ y: "-6rem", x: "0", scale: 1}}
                            to={{ y: "-30vh", x: "30vw", scale: .7}}
                            duration={20}
                            position={"stage4"}
                        />  

                        {/* Stage 3 */}
                        <Tween target="mount4" ease="power3.out" 
                            from={{ y: "100vh", scale: 2, opacity: 0}}
                            to={{ y: "50vh", scale: 1.2, opacity: .1}} 
                            duration={20}
                            position={"stage3"}
                        />       
                        <Tween target="mount3" ease="power3.out" 
                            from={{ y: "100vh", scale: 2, opacity: 0}}
                            to={{ y: "20vh", scale: 1.2, opacity: .2}} 
                            duration={20}
                            position={"stage3"}
                        />
                        <Tween target="mount2" ease="power3.out" 
                            from={{ y: "100vh", scale: 2, opacity: 0}}
                            to={{ y: "0", scale: 1.2, opacity: .4}} 
                            duration={20}
                            position={"stage3"}
                        />
                        <Tween target="bird2" ease="power4.inOut" 
                            from={{ x: "50vw", y: "20vh",  scale: 1.5, opacity: 0}}
                            to={{ x: "22vw", y: "0vh", scale: 1, opacity: 1 }} 
                            duration={20}
                            position={"stage3"}
                        />
                        <Tween target="bird1" ease="power4.inOut" 
                            from={{ x: "50vw", y: "30vh",  scale: 2, opacity: 0}}
                            to={{ x: "30vw", y: "-5vh", scale: 1.5, opacity: 1 }} 
                            duration={20}
                            position={"stage3"}
                        />
                        <Tween target="mount1" ease="power3.out" 
                            from={{ x: "100vw", y: "200vh", scale: 4, opacity: 0}}
                            to={{ x: "0vw", y: "5vh", scale: 1.1, opacity: 1}} 
                            duration={20}
                            position={"stage3"}
                        />

                        <Timeline 
                            target={ <> 
                                <h1 className=' tw-text-zinc-800 tw-text-[4vmin] tw-pl-[64vw] tw-pr-[5vw] tw-pt-[15vh] tw-pb-[60vh] tw-flex tw-justify-center tw-items-center'> 
                                    Feel free to contact me. 
                                </h1>
                            </>}
                            position={"stage3"}
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
                                duration={10}
                                position={0}
                            />
                        </Timeline>

                        {/* Stage 2 */}
                        <Tween target="cloudSun2" ease="power2.inOut" 
                            from={{ x: "100vw", y: "50vh",  scale: 3, opacity: 0}}
                            to={{ x: "-2vw", y: "0vh", scale: 1.5, opacity: 1 }} 
                            duration={15}
                            position={"stage2"}
                        />
                        <Tween target="cloudSun1" ease="power2.out" 
                            from={{ x: "100vw", y: "50vh",  scale: 2, opacity: 0}}
                            to={{ x: "10vw", y: "0vh", scale: .8, opacity: 1 }} 
                            duration={10}
                            position={"stage2"}
                        />
                        <Tween target="bg" ease="power2.inOut"
                            from={{ "background-color": "rgb(39 39 42)" }}
                            to={{ "background-color": "rgb(225 225 225)"}}
                            duration={10}
                            position={"stage1"}
                        />  
                        <Tween target="sun" ease="power2.inOut"
                            from={{  y: "100vh", scale: 3 }}
                            to={{ y: "-6rem", scale: 1 }}
                            duration={10}
                            position={"stage1"}
                        />  
                        <Timeline 
                            target={ <> 
                                <h1 className='tw-text-zinc-800 tw-text-[7vmin] tw-pt-[70vh] '> Welcome to my Portfolio Website </h1>
                            </>}
                            position={"stage2"}
                        >

                            <Tween target={0} ease="power2.inOut"
                                from={{ opacity: 1}}
                                to={{ opacity: 0}}
                                duration={10}
                                position={15}
                            />
                            <Tween target={0} ease="power2.inOut"
                                from={{ opacity: 0}}
                                to={{ opacity: 1}}
                                duration={10}
                                position={0}
                            />
                        </Timeline>

                        {/* Stage 0 */}
                        <Timeline 
                            target={<> 
                                <h1 className='tw-text-zinc-200 tw-text-[15rem] tw-pt-[50vh]'> HI </h1>
                                <h1 className='tw-text-zinc-200 tw-text-[7rem] tw-pt-[10vh]'> I'm Peng </h1>
                                <div className='arrow tw-text-zinc-100'>
                                    <FaAngleDown className=' tw-translate-y-[30vh]'/> 
                                    <FaAngleDown className=' tw-translate-y-[35vh]'/> 
                                </div>
                                
                            </>}
                            position={"stage0"}
                        >

                            <Tween target={1} ease="power2.inOut"
                                from={{ opacity: 1}}
                                to={{ opacity: 0}}
                                duration={10}
                                position={15}
                            />
                            <Tween target={1} ease="power2.inOut"
                                from={{ opacity: 0}}
                                to={{ opacity: 1}}
                                duration={5}
                                position={5}
                            />
                            <Tween target={0} ease="power2.inOut"
                                from={{ opacity: 1}}
                                to={{ opacity: 0}}
                                duration={10}
                                position={15}
                            />
                            <Tween target={0} ease="power2.inOut"
                                from={{ opacity: 0}}
                                to={{ opacity: 1}}
                                duration={5}
                                position={0}
                            />
                            <Tween target={2} ease="power2.inOut"
                                from={{ opacity: 1 }}
                                to={{ display: "none", opacity: 0 }}
                                duration={1}
                                position={0}
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
            <div> 
                Please refer to the pages <NavLink to="/experience">Experience</NavLink> and <NavLink to="/project"> Project </NavLink> for more information about me.
            </div>
            <div>
                <h1 className='tw-mb-5'> About this project </h1>
                <div> I will keep on updating this project before it's fully finished </div>
                    
                <div className='tw-flex tw-justify-center tw-gap-2 tw-items-center'> 
                    Visit Github repository of this project: 
                    <a className=' tw-items-center tw-content-center' href="https://github.com/RedCarpG/Website-Portfolio" target="_blank" rel="noreferrer"> <FaGithub /> </a>
                </div>
                <div className='tools tw-flex tw-flex-col tw-justify-center tw-mt-5'>
                    <h2 className='tw-mb-2'> Tools used: </h2>
                    <ul> 
                        <li> JavaScript/ TypeScript / HTML / CSS </li>
                        <li> React JS </li>
                        <li> Tailwind CSS / PostCss </li>
                        <li> Scroll Magic </li>
                        <li> GASP </li>
                        <li> Figma </li>
                    </ul>
                </div>
            </div>
            <div>
                <p className='tw-mb-5'> Feel free to contact me </p>
                <div className="icon">
                    <a href="https://github.com/RedCarpG" target="_blank" rel="noreferrer"> <FaGithub /> </a>
                    <a href="https://www.linkedin.com/in/peng-gao-fr/" target="_blank" rel="noreferrer"> <FaLinkedin /> </a>
                    <a href="mailto: peng.gao1102@gmail.com"> <FaRegEnvelope /> </a>
                </div>
            </div>
        </>
    )
}