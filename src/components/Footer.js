import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa"
import './Footer.css'

export default function Footer() {
    return (    
        <>
            <div className="tw-footer">
                    <div className="tw-flex tw-flex-raw tw-gap-5 tw-text-xl">
                        <a href="https://github.com/RedCarpG" target="_blank" rel="noreferrer"> <FaGithub /> </a>
                        <a href="https://www.linkedin.com/in/peng-gao-fr/" target="_blank" rel="noreferrer"> <FaLinkedin /> </a>
                        <a href="mailto: peng.gao1102@gmail.com"> <FaRegEnvelope /> </a>
                    </div>
            </div>
        </>

    )
}