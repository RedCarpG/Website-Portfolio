import { useRef, useState } from 'react'
import './ClickImage.scss'

export default function ClickImage({ src, alt }) {
    const [full, setFull] = useState(false)
    const img = useRef(null)

    function onClick(el) {
        
        if (img.current && !img.current.classList.contains('active')) {
            return
        }
        setFull(current => !current)
    }

    return (
    <>
        <img ref={img} className={'clickImage'} src={src} alt={alt} onClick={onClick}/>
        { full && 
            <div className='fullImage' onClick={onClick}>
                <img src={src} alt={alt}/>
            </div>
        }
    </>
    )
}