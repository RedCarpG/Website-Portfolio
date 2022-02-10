import React, { useEffect, useRef, useState } from 'react';
import './SlideWindow.scss'
import { FaAngleRight, FaAngleLeft} from 'react-icons/fa'

export const SlideItem = React.forwardRef( ({children, className="", ...rest}, ref) => {

    return (
        <div className={`slide-item ${className}`} ref={ref} {...rest}>
            {children}
        </div>
    )
})

function Index({ count, index }) {
    let indexList = []
    for( let i=0; i<count; i++) {
        if (index === i) 
            indexList.push(<li key={i} className="active"></li>)
        else
            indexList.push(<li key={i}></li>)
    }
    return (
        indexList
    )
}

export default function SlideWindow({ children, slideInCb, slideOutCb, className="", ...rest}) {

    const slideWindow = useRef(null)
    const [index, setIndex] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        setCount(slideWindow.current.childNodes.length - 3)
    }, []);

    useEffect(() => {
        slideWindow.current.childNodes.forEach((each) => {
            each.classList.remove("active")
            if(slideOutCb) slideOutCb(index, each)
        })
        slideWindow.current.childNodes[index+1].classList.add("active")
        if(slideInCb) slideInCb(index, slideWindow.current.childNodes[index+1])
        console.log(slideWindow.current.childNodes[index+1].offsetLeft)
    }, [index, slideInCb, slideOutCb])

    /** On Scroll Event handler */

    function onClickLeft(el) {
        if (index <= 0) return
        slideWindow.current.scrollLeft -= window.innerWidth/2
        setIndex((currentIndex) => currentIndex-1)
    }
    function onClickRight(el) {
        if (index >= count) return
        slideWindow.current.scrollLeft += window.innerWidth/2
        setIndex((currentIndex) => currentIndex+1)
    }

    return (<>
        <div className={`slide-window ` + className} {...rest}>
            <div className='window' ref={slideWindow}>
                <SlideItem/>
                { children }
                <SlideItem/>
            </div>
            <button className={`left ${index===0 ? "hide": ""}`} onClick={onClickLeft} > <FaAngleLeft/> </button>
            <button className={`right ${index===count ? "hide": ""}`} onClick={onClickRight} > <FaAngleRight/> </button>
            <ul className='index'>
                <Index count={count+1} index={index}/>
            </ul>
        </div>
    </>)
}
