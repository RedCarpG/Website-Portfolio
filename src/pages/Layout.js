import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import './Layout.scss'

export default function Layout() {
    
    const [contactActive, setContactActive] = useState(false)

    function ToggleConatctVisible() {
      setContactActive((contactActive) => !contactActive)
    }
    return (
        <>
            <Navbar onClickConatct={ToggleConatctVisible} contactActive={contactActive} />
            <Outlet />
            <Contact contactActive={contactActive} onToggleVisible={ToggleConatctVisible}/>
        </>
    )
}

Layout.propTypes = {
}