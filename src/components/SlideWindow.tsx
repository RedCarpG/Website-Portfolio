import React, { useEffect, useRef, useState } from 'react';
import './SlideWindow.scss'
import { FaAngleRight, FaAngleLeft} from 'react-icons/fa'

type IndexBarProps = {
    count: number,
    index: number
}
const IndexBar: React.FC<IndexBarProps> = (
    { count, index }
) => {
    let indexList = []
    for( let i=0; i<count; i++) {
        if (index === i) 
            indexList.push(<li key={i} className="active"></li>)
        else
            indexList.push(<li key={i}></li>)
    }
    return (            
        <ul className='index'>
            {indexList}
        </ul>
    )
}

type SlideItemProps = React.HTMLProps<HTMLDivElement>
export const SlideItem = React.forwardRef<HTMLDivElement, React.PropsWithChildren<SlideItemProps>>((
    {children, className="", ...rest}, ref
) => {
    return (
        <div className={`slide-item ${className}`} ref={ref} {...rest}>
            {children}
        </div>
    )
})

type SlideWindowProps = {
    slideInCb: (index: number, item: any) => void,
    slideOutCb: (index: number, item: any) => void,
    className?: string
}
const SlideWindow: React.FC<SlideWindowProps> = (
    {children, slideInCb, slideOutCb, className="", ...rest}
) => {

    const slideWindowRef = useRef<HTMLDivElement>(null)
    const [index, setIndex] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (slideWindowRef.current) setCount(slideWindowRef.current.childNodes.length - 3)
    }, []);

    useEffect(() => {
        function onScroll() {
            if (slideWindowRef.current) {
                const slideItems = slideWindowRef.current.querySelectorAll(".slide-item");
                slideItems.forEach((each) => {
                    each.classList.remove("active")
                    if(slideOutCb) slideOutCb(index, each)
                })
                slideItems[index+1].classList.add("active")
                if(slideInCb) slideInCb(index, slideItems[index+1])
            }
        }
        onScroll()
    }, [index, slideInCb, slideOutCb])

    /** On Scroll Event handler */

    function slideLeft() {
        if (index <= 0) return
        if (!slideWindowRef.current) return
        slideWindowRef.current.scrollLeft -= window.innerWidth/2
        setIndex((currentIndex) => currentIndex-1)
    }
    function slideRight() {
        if (index >= count) return
        if (!slideWindowRef.current) return
        slideWindowRef.current.scrollLeft += window.innerWidth/2
        setIndex((currentIndex) => currentIndex+1)
    }

    return (<>
        <div className={`slide-window ` + className} {...rest}>
            <div className='window' ref={slideWindowRef}>
                <SlideItem/>
                { children }
                <SlideItem/>
            </div>
            <button className={`left ${index===0 ? "hide": ""}`} onClick={slideLeft} > <FaAngleLeft/> </button>
            <button className={`right ${index===count ? "hide": ""}`} onClick={slideRight} > <FaAngleRight/> </button>
            {/* <ul className='index'> */}
            <IndexBar count={count+1} index={index}/>
            {/* </ul> */}
        </div>
    </>)
}
export default SlideWindow