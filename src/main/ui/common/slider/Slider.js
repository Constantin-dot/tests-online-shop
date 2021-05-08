import { useState, useEffect } from 'react'
import classes from './Slider.module.css'
import firstSlide from './img1.jpg'
import secondSlide from './img2.jpg'
import thirdSlide from './img3.jpg'
import forthSlide from './img4.jpg'
import fifthSlide from './img5.jpg'
import sixthSlide from './img6.jpg'

const images = [
    <img key={firstSlide} src={firstSlide} alt="first" />,
    <img key={secondSlide} src={secondSlide} alt="second" />,
    <img key={thirdSlide} src={thirdSlide} alt="third" />,
    <img key={forthSlide} src={forthSlide} alt="forth" />,
    <img key={fifthSlide} src={fifthSlide} alt="fifth" />,
    <img key={sixthSlide} src={sixthSlide} alt="sixth" />
]

export const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    useEffect( () => {
        setInterval( () => {
            setActiveIndex((current) => 
                current === images.length - 1 ? 0 : current + 1
            )
        }, 5000)
        return () => clearInterval()
    }, [])

    const prevImageIndex = activeIndex ? activeIndex - 1 : images.length - 1
    const nextImageIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1

    return <div className={classes.slider}>
        <div 
            className={classes.sliderImagePrev}
            key={prevImageIndex}
        >
            {images[prevImageIndex]}
        </div>
        <div 
            className={classes.sliderImage}
            key={activeIndex}
        >
            {images[activeIndex]}
        </div>
        <div 
            className={classes.sliderImageNext}
            key={nextImageIndex}
        >
            {images[nextImageIndex]}
        </div>
    </div>
}