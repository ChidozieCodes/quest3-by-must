import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import slider1 from '../assets/slider1.jpg';
import slider2 from '../assets/slider2.jpg';
import slider3 from '../assets/slider3.jpg';

const slides = [
  {
    id: 1,
    image: slider1,
    subtitle: '특별한 나눔',
    title: '함께하는 마음이 만드는 소중한 변화',
    text: '즐거움과 나눔이 있는 감동의 순간',
  },
  {
    id: 2,
    image: slider2,
    subtitle: '함께하는 기쁨',
    title: '작은 정성이 만드는 큰 감동',
    text: '세상을 밝히는 따뜻한 실천',
  },
  {
    id: 3,
    image: slider3,
    subtitle: '마음을 나누다',
    title: '지금, 우리가 함께 할 때',
    text: '변화는 우리 안에서 시작됩니다',
  },
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(goNext, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id='hero'>
        <article className="hero-slider">
        {slides.map((slide, index) => (
            <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            id='heroimg'
            >
            {index === currentSlide && (
                <div className="overlay">
                <h4 className="subtitle">{slide.subtitle}</h4>
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
                </div>
            )}
            </div>
        ))}

        <div className="slider-controls">
            <button className="arrow" onClick={goPrev}>&larr;</button>
            <div className="dots">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  tabIndex={-1}
                />
              ))}
            </div>
            <button className="arrow" onClick={goNext}>&rarr;</button>
        </div>
        </article>
    </section>
  );
}

export default HeroSection;
