import React, { useRef, useState } from 'react'
import './ClickImage.scss'

type ClickImageProps = {
    src: string,
    alt: string
}

const ClickImage: React.FC<ClickImageProps> = (
    { src, alt }
) => {
    const [full, setFull] = useState(false)
    const imgRef = useRef<HTMLImageElement>(null)

    const onToggleFullImage: React.MouseEventHandler<HTMLDivElement> = (el) => {
        
        if (imgRef.current && !imgRef.current.classList.contains('active')) {
            return
        }
        setFull(current => !current)
    }

    return (
    <>
        <img ref={imgRef} className={'clickImage'} src={src} alt={alt} onClick={onToggleFullImage}/>
        { full && 
            <div className='fullImage' onClick={onToggleFullImage}>
                <img src={src} alt={alt}/>
            </div>
        }
    </>
    )
}
export default ClickImage