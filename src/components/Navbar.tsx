import React, { MouseEventHandler } from 'react'
import './Navbar.scss'
import { NavLink } from "react-router-dom"

type NavBarProps = {
    onToggleContactPage: () => void,
    contactActive: boolean
}

const Navbar: React.FC<NavBarProps> = (
    { contactActive, onToggleContactPage }
) => {
    
    const onClickLink: MouseEventHandler<HTMLAnchorElement> = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if( contactActive ) onToggleContactPage() 
    }

    return (
        <nav id='mainNav' className='' >
            <div className='tw-container tw-text-lg'> GAO PENG </div>
            <div className='tw-container tw-flex tw-justify-end tw-gap-3'>
                <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
                    Menu
                    <i className='fa fa-bars' />
                </button>
                <ul>
                    <li>
                        <NavLink to="/" onClick={onClickLink}> Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/experience" onClick={onClickLink}> Experience </NavLink>
                    </li>
                    <li>
                        <NavLink to="/project" onClick={onClickLink}> Project </NavLink>
                    </li>
                    <li>
                        <button 
                            className={contactActive ? "active" : ""}
                            onClick={() => {onToggleContactPage()}}
                        > 
                            Contact 
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar