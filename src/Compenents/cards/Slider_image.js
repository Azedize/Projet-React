import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
export default function Slider(props) {
    const slides = [
        {
            url: props.img1,
        },
        {
            url: props.img2,
        },
        {
            url: props.img3,
        },
        {
            url: props.img4,
        },
        {
            url: props.img5,
        },
        
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };


    return (
        <div>
            <div className='slider-container'>
                <div
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className='slider-image'
                >

                </div>

                <div className={`nav-arrow prev ${currentIndex === 0 ? 'hidden' : 'block'}`}>
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>

                <div className={`nav-arrow next ${currentIndex === slides.length - 1 ? 'hidden' : 'block'}`}>
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>

                <div className='slider-dots'>
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className={`dot ${slideIndex === currentIndex ? 'active' : ''}`}
                        >
                            <RxDotFilled />

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


