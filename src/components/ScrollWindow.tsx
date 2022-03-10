import React, { useEffect, useRef } from 'react';
import './ScrollWindow.scss'

const THRESHOLD_TOP = window.innerHeight/2
const THRESHOLD_BOT = window.innerHeight/2

type ScrollItemProps = React.HTMLProps<HTMLDivElement>
export const ScrollItem = React.forwardRef<HTMLDivElement, React.PropsWithChildren<ScrollItemProps>>((
    {children, className="", ...rest}, ref
) => {
    return (
        <div className={`scroll-item ${className}`} ref={ref} {...rest}>
            {children}
        </div>
    )
})

type ScrollWindowProps = {
    scrollItemOutCb?: (scrollItem: HTMLElement) => void,
    scrollItemInCb?: (scrollItem: HTMLElement) => void,
    size?: "full" | "small",
    className?: string
}

const ScrollWindow: React.FC<ScrollWindowProps> = (
    {children, scrollItemOutCb, scrollItemInCb, size="full", className="", ...rest}
) => {
    
    const scrollWindowRef = useRef<HTMLDivElement>(null)

    useEffect(() => {   
        /** On Scroll Event handler */
        function onScroll() {
            if (scrollWindowRef.current) {
                const scrollItems = scrollWindowRef.current.querySelectorAll(".scroll-item");
        
                scrollItems.forEach((each) => {
                    const item = each as HTMLElement
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
                scrollWindowRef.current.addEventListener('scroll', onScroll);
            }
        }

        onScroll();
        // scrollWindowRef.current.addEventListener('scroll', onScroll);
    }, [scrollItemOutCb, scrollItemInCb]);
    

    return (
        <div className={`scroll-window ${size}` + className} ref={scrollWindowRef} {...rest}>
            { children }
        </div>
    )
}

export default ScrollWindow