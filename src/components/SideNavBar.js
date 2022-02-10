import React, { useEffect, useRef } from "react"
import "./SideNavBar.scss"

function scrollTo(el) {
    el.parentElement.scrollTo({
        top: el.offsetTop
    })
}


export function SideNavLinkMinor({ targetID, title }){
    return (
        <li>
            <h2>
                <button onClick={(e) => {
                    scrollTo(document.getElementById(targetID))
                }}> {title}  </button> 
            </h2>
        </li>
    )
}

export function SideNavLinkMain({ targetID, title, index, children=null}) {
    
    return (
        <li id={`nav-${targetID}`} data-index={index}>
            <h1> 
                <button onClick={(e) => {
                    scrollTo(document.getElementById(targetID))
                }}> {title}  </button> 
            </h1>
            { children && <ul> {children} </ul> }
        </li>
    )
}

export default function SideNavBar({ show, currentIndex, children}) {
    
    const navBarList = useRef(null)

    /** Side effect every time current focused Element changes */
    useEffect(() => {
        const focusItem = () => {
            if (!navBarList) return
            navBarList.current.childNodes.forEach((each) => {
                each.classList.remove('focus')
            })
            // console.log(navBarList.current.querySelector(`#${currentFocus}`))
            navBarList.current.childNodes[currentIndex].classList.add('focus')
            // navBarList.current.querySelector(`#${currentFocus}`).classList.add('focus')
        }
        const moveCenter = () => {
            if (!navBarList) return
            // let index = navBarList.current.childNodes[currentIndex].dataset.index
            // let index = navBarList.current.querySelector(`#${currentFocus}`).dataset.index
            // setIndex(index)
            navBarList.current.style.setProperty('--offset', `${currentIndex}`);
        }
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
        moveCenter()
        focusItem()
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

