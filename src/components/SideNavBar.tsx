import React, { useEffect, useRef } from "react"
import "./SideNavBar.scss"

function scrollTo(el: HTMLElement | null) {
    el?.parentElement?.scrollTo({
        top: el.offsetTop
    })
}

type SideNavLinkMinorProps = {
    targetID: string,
    title: string
}
export const SideNavLinkMinor: React.FC<SideNavLinkMinorProps> = (
    { targetID, title }
) => {
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

type SideNavLinkMainProps = {
    targetID: string,
    title: string,
    index: number
}
export const SideNavLinkMain: React.FC<SideNavLinkMainProps> = (
    { targetID, title, index, children=null}
) => {
    
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


type SideNavBarProps = {
    show: boolean,
    currentIndex: number,
}
const SideNavBar: React.FC<SideNavBarProps> = ({ show, currentIndex, children}) => {
    
    const navBarList = useRef<HTMLUListElement>(null)

    /** Side effect every time current focused Element changes */
    useEffect(() => {

        const childrenElements = navBarList?.current?.childNodes as any as Array<HTMLElement>
        const focusItem = () => {
            if (!navBarList) return
            childrenElements.forEach((each) => {
                each.classList.remove('focus')
            })
            // console.log(navBarList.current.querySelector(`#${currentFocus}`))
            childrenElements[currentIndex].classList.add('focus')
            // navBarList.current.querySelector(`#${currentFocus}`).classList.add('focus')
        }
        const moveCenter = () => {
            if (!navBarList) return
            // let index = navBarList.current.childNodes[currentIndex].dataset.index
            // let index = navBarList.current.querySelector(`#${currentFocus}`).dataset.index
            // setIndex(index)
            navBarList?.current?.style.setProperty('--offset', `${currentIndex}`);
        }
        const changeOpacity = () => {
            if (!navBarList) return
            childrenElements.forEach((each) => {
                const eachIndex: number = Number(each.dataset.index)
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

export default SideNavBar