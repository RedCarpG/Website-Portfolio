import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss'
import { Link } from "react-router-dom";

export default function Navbar({ onClickConatct }) {
    
    const [pageActive, setPageActive] = useState("home")
    const [contactActive, setContactActive] = useState(false)

    const getActivePage = useCallback((pageName) => {
        if (pageActive === pageName) {
            return "active"
        }
        return ""
    }, [pageActive])
    const onClickPage = useCallback((pageName) => {
        setPageActive(pageName)
        if (contactActive) {
            setContactActive(!contactActive)
            onClickConatct(null) 
        }
    }, [contactActive, onClickConatct])

    return (
        <nav id='mainNav' className='' >
            <div className='tw-container tw-text-lg'> GAO PENG </div>
            <div className='tw-container tw-flex tw-justify-end tw-gap-3'>
                <button className='navbar-toggler navbar-toggler-right' type='button' data-toggle='collapse' data-target='#navbarResponsive' aria-controls='navbarResponsive' aria-expanded='false' aria-label='Toggle navigation'>
                    Menu
                    <i className='fa fa-bars' />
                </button>
                <ul>
                    <li className={getActivePage("home")}>
                        <Link to="/" onClick={()=>{onClickPage("home")}}> Home </Link>
                    </li>
                    <li className={getActivePage("experience")}>
                        <Link to="/experience"  onClick={()=>{onClickPage("experience")}}> Experience </Link>
                    </li>
                    <li className={getActivePage("project")}>
                        <Link to="/project" onClick={()=>{onClickPage("project")}}> 
                            Project 
                        </Link>
                    </li>
                    <li>
                        <button className={contactActive?"active":""} href='' 
                        onClick={ (e) => { 
                            setContactActive(!contactActive) 
                            onClickConatct(e) 
                        }}> 
                            Contact 
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
Navbar.prototype = {
    onClickConatct: PropTypes.func
}