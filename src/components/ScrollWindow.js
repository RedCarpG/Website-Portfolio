import './ScrollWindow.scss'
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const THRESHOLD_TOP = window.innerHeight/2
const THRESHOLD_BOT = window.innerHeight/2

export default function ScrollWindow({ children, className="", size="full", direction="Y", scrollItemOutCb, scrollItemInCb }) {
    
    const scrollWindow = useRef(null)

    useEffect(() => {
        onScroll();
        
        scrollWindow.current.addEventListener('scroll', onScroll);
            
        return () => {
            scrollWindow.current.removeEventListener('scroll', onScroll);
        }
    }, []);
    
    /** On Scroll Event handler */
    function onScroll() {
        const slideItems = scrollWindow.current.querySelectorAll(".slide-item");

        slideItems.forEach((item) => {

            let slideBCR = item.getBoundingClientRect();
            if (slideBCR.top > THRESHOLD_BOT || slideBCR.bottom < THRESHOLD_TOP) {
                /* If element is scrolling down out */
                item.classList.remove('slide-up');
                item.classList.add('slide-down');
                if (scrollItemOutCb) scrollItemOutCb(item)
            } else {
                /* If element is scrolling up in */
                item.classList.remove('slide-down');
                item.classList.add('slide-up');
                if (scrollItemInCb) scrollItemInCb(item)
            }

        })
    }

    return (
        <div className={`scroll-window ${size} ${direction}` + className} ref={scrollWindow}>
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