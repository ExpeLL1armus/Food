function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    // Slider

    const slides = document.querySelectorAll(slide),
        nextSlide = document.querySelector(nextArrow),
        prevSlide = document.querySelector(prevArrow),
        totalSlides = document.querySelector(totalCounter),
        currentSlide = document.querySelector(currentCounter),
        slidesWrapper = document.querySelector(wrapper),
        slidesField = slidesWrapper.querySelector(field),
        slideWidth = window.getComputedStyle(slidesWrapper).width,
        slider = document.querySelector(container);
    
    let slideIndex = 1,
        offset = 0;

    slidesField.style.width = 100 * slides.length + '%'
    slidesField.style.display = 'flex'
    slidesField.style.transition = '0.5s all'

    slidesWrapper.style.overflow = 'hidden'

    slides.forEach(slide => {
        slide.style.width = slideWidth
    })

    slider.style.position = 'relative';

    const indicators = document.createElement('ol'),
        dots = [];

    indicators.classList.add('carousel-indicators');
    slider.append(indicators)

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li')
        dot.classList.add('dot')
        dot.setAttribute('data-slide-to', i + 1)
        
        if (i == 0) {
            dot.style.opacity = 1
        }

        indicators.append(dot)
        dots.push(dot)
    }


    // showSlides(slideIndex)

    if (slides.length < 10) {
        totalSlides.textContent = `0${slides.length}`
    } else {
        totalSlides.textContent = slides.length
    }

    if (slideIndex < 10) {
        currentSlide.textContent = `0${slideIndex}`
    } else {
        currentSlide.textContent = slideIndex
    }

    nextSlide.addEventListener('click', () => {
        if (offset == withoutPX(slideWidth) * (slides.length - 1)) {
            offset = 0
        } else {
            offset += withoutPX(slideWidth)
        }

        slidesField.style.transform = `translateX(-${offset}px)`

        if (slideIndex == slides.length) {
            slideIndex = 1
        } else {
            slideIndex++
        }

        if (slideIndex < 10) {
            currentSlide.textContent = `0${slideIndex}`
        } else {
            currentSlide.textContent = slideIndex
        }

        dotsOpacity()
    })

    prevSlide.addEventListener('click', () => {
        if (offset == 0) {
            offset = withoutPX(slideWidth) * (slides.length - 1)
        } else {
            offset -= withoutPX(slideWidth)
        }

        slidesField.style.transform = `translateX(-${offset}px)`

        if (slideIndex == 1) {
            slideIndex = slides.length
        } else {
            slideIndex--
        }

        if (slideIndex < 10) {
            currentSlide.textContent = `0${slideIndex}`
        } else {
            currentSlide.textContent = slideIndex
        }

        dotsOpacity()
    })

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to')

            slideIndex = slideTo
            offset = withoutPX(slideWidth) * (slideTo - 1)
            slidesField.style.transform = `translateX(-${offset}px)`

            if (slideIndex < 10) {
                currentSlide.textContent = `0${slideIndex}`
            } else {
                currentSlide.textContent = slideIndex
            }

            dotsOpacity()
        })
    })

    function dotsOpacity() {
        dots.forEach(dot => dot.style.opacity = '.5')
        dots[slideIndex - 1].style.opacity = 1
    }

    function withoutPX(str) {
        return +str.replace(/\D/g, '')
    }

    // function showSlides(n) {
    //     if (n > slides.length) {
    //         slideIndex = 1
    //     }  
    //     if (n < 1) {
    //         slideIndex = slides.length
    //     }

    //     slides.forEach(slide => {
    //         slide.classList.add('hide')
    //         slide.classList.remove('show')
    //     })

    //     slides[slideIndex - 1].classList.add('show')
    //     slides[slideIndex - 1].classList.remove('hide')

    //     if (slideIndex < 10) {
    //         currentSlide.textContent = `0${slideIndex}`
    //     } else {
    //         currentSlide.textContent = slideIndex
    //     }
    // }

    // function nextSlideFunction(n) {
    //     showSlides(slideIndex += n)
    // }
    
    // prevSlide.addEventListener('click', () => {
    //     nextSlideFunction(-1)
    // })
    // nextSlide.addEventListener('click', () => {
    //     nextSlideFunction(1)
    // })
}

export default slider;