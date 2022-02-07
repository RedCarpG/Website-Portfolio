import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './ScrollWindow.scss'

const THRESHOLD_TOP = window.innerHeight/2
const THRESHOLD_BOT = window.innerHeight/2

export const ScrollItem = React.forwardRef( ({children, className=""}, ref) => {

    return (
        <div className={`scroll-item ${className}`} ref={ref}>
            {children}
        </div>
    )
})
export default function ScrollWindow({ children, className="", size="full", scrollItemOutCb, scrollItemInCb }) {
    
    const scrollWindow = useRef(null)

    useEffect(() => {   
        /** On Scroll Event handler */
        function onScroll() {
            const scrollItems = scrollWindow.current.querySelectorAll(".scroll-item");
    
            scrollItems.forEach((item) => {
    
                let slideBCR = item.getBoundingClientRect();
                if (slideBCR.top > THRESHOLD_BOT || slideBCR.bottom < THRESHOLD_TOP) {
                    /* If element is scrolling down out */
                    item.classList.remove('scroll-in');
                    item.classList.add('scroll-out');
                    if (scrollItemOutCb) scrollItemOutCb(item)
                } else {
                    /* If element is scrolling up in */
                    item.classList.remove('scroll-out');
                    item.classList.add('scroll-in');
                    if (scrollItemInCb) scrollItemInCb(item)
                }
            })
        }
        onScroll();
        
        scrollWindow.current.addEventListener('scroll', onScroll);
            
        // return () => {
        //     scrollWindow.current.removeEventListener('scroll', onScroll);
        // }
    }, [scrollItemOutCb, scrollItemInCb]);
    

    return (
        <div className={`scroll-window ${size}` + className} ref={scrollWindow}>
            { children }
        </div>
    )
}

ScrollWindow.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    className: PropTypes.string,
    size: PropTypes.oneOf(["full", "small"]),
    direction: PropTypes.oneOf(["Y", "X"])
}