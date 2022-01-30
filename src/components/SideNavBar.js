import React, { useEffect, useRef, useState } from "react"
import "./SideNavBar.scss"

export default function SideNavBar({ show, currentFocus, children}) {
    
    const navBarList = useRef(null)
    const [currentIndex, setIndex] = useState(0)

    /** Side effect every time current focused Element changes */
    useEffect(() => {
        const focusItem = () => {
            if (!navBarList) return
            navBarList.current.childNodes.forEach((each) => {
                each.classList.remove('focus')
            })
            navBarList.current.querySelector(`.${currentFocus}`).classList.add('focus')
        }
        const moveCenter = () => {
            if (!navBarList) return
            let index = navBarList.current.querySelector(`.${currentFocus}`).dataset.index
            setIndex(index)
            navBarList.current.style.setProperty('--offset', `${index}`);
        }

        moveCenter()
        focusItem()
    }, [currentFocus])

    useEffect(() => {

        const changeOpacity = () => {
            if (!navBarList) return
            let items = navBarList.current.childNodes
            items.forEach((each) => {
                const eachIndex = each.dataset.index
                each.style.setProperty('--opacity', `${1 - Math.abs(currentIndex - eachIndex) * 0.3}`);
                each.style.setProperty('--size', `${100 - Math.abs(currentIndex - eachIndex) * 20}%`);
            })
        }
        changeOpacity()

    }, [currentIndex])


    return (
        <div className={`sideNavBar tw-text-zinc-200 ${show ? 'show':''}`}>
            <ul ref={navBarList}>
                {children}
            </ul>
            <div className="time-line"></div>
        </div>
    )
}

