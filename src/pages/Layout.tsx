import React, { useState } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar'
import Contact from './Contact'
import './Layout.scss'

const Layout: React.FC = () => {
    
    const [contactActive, setContactActive] = useState(false)
    function ToggleContactPage() {
      setContactActive((contactActive) => !contactActive)
    }

    return (
        <>
            <Navbar contactActive={contactActive} onToggleContactPage={ToggleContactPage}/>
            <Outlet />
            <Contact contactActive={contactActive} onToggleContactPage={ToggleContactPage}/>
        </>
    )
}

export default Layout