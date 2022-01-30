import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'
import './Layout.scss'

export default function Layout() {
    

    let switchContactVisibleCb = null
    function setContactVisibleCb(cb) {
      switchContactVisibleCb = cb
    }
  
    function onClickConatct() {
      if (switchContactVisibleCb) {
        switchContactVisibleCb()
      }
    }
    return (
        <>
            <Navbar onClickConatct={onClickConatct} />
            <Outlet />
            <Contact switchVisibleCb={setContactVisibleCb}/>
        </>
    )
}

Layout.propTypes = {
}