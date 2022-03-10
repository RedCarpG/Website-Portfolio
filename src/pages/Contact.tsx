import React from "react"
import { CSSTransition } from 'react-transition-group'
import { FaPaste, FaGithub, FaLinkedin } from 'react-icons/fa'
import "./Contact.scss"

type ContactProps = {
    contactActive: boolean,
    onToggleContactPage: () => void
}

const Contact: React.FC<ContactProps> = ( 
    {contactActive, onToggleContactPage}
) => {

    return (
        <CSSTransition
          in={contactActive}
          timeout={0}
          classNames="hidden"
          unmountOnExit
        >
            <div id="contact-page" className="contact-page cover-page">
                <div className=" tw-absolute tw-top-0 tw-bottom-0 tw-left-0 tw-right-0 tw-z-0" 
                    onClick={() => {onToggleContactPage()}}></div>
                <div className="tw-flex tw-flex-col tw-items-center tw-w-full tw-z-10">
                    
                    <p className="tw-text-2xl"> Contact me </p> 
                    <div className="email-box tw-mt-[-2rem]"> 
                        <a className="email" href="mailto:peng.gao1102@gmail.com" > 
                            peng.gao1102@gmail.com 

                        </a> 
                        <FaPaste className="copy-btn tw-text-gray-400" 
                        onClick={() => {
                            navigator.clipboard.writeText("peng.gao1102@gmail.com");
                            alert("Copied email: peng.gao1102@gmail.com");
                        }}></FaPaste> 
                    </div> 
                </div>
                
                <div className="social tw-flex tw-flex-col tw-items-center tw-gap-5">
                    <p> Other Social </p> 
                    <div className="social-btn tw-flex tw-gap-7 tw-text-2xl">
                        <a href="https://github.com/RedCarpG" target="_blank" rel="noreferrer"> <FaGithub /> </a>
                        <a href="https://www.linkedin.com/in/peng-gao-fr/" target="_blank" rel="noreferrer"> <FaLinkedin /> </a>
                    </div>
                </div>
            </div>

        </CSSTransition>
    )
}
export default Contact