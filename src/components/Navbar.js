import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss'
import { NavLink } from "react-router-dom";

export default function Navbar({ onClickConatct, contactActive }) {
    
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
                        <NavLink  to="/"> Home </NavLink >
                    </li>
                    <li>
                        <NavLink  to="/experience"> Experience </NavLink >
                    </li>
                    <li>
                        <NavLink  to="/project"> Project </NavLink >
                    </li>
                    <li>
                        <button 
                            className={contactActive?"active":""}
                            onClick={ (e) => { 
                                onClickConatct(e) 
                            }}
                        > 
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