import './SlideItem.scss'

export default function SlideItem( {children, className=""}) {

    return (
        <div className={`slide-item ${className}`} >
            {children}
        </div>
    )
}