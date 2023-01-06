'use strict';

window.addEventListener('DOMContentLoaded', ()=> {
    //slider
    const slider = document.querySelector('.slider'),
        sliderWrapper = document.querySelector('.slider-Wrapper'),
        sliderField = document.querySelector('.slider-inner'),
        items = document.querySelectorAll('.slider__item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        width = '600px';

    let currentSlideIndex = 1,
        lastSlideindex = items.length,
        offset = 0;

    sliderField.style.width = 100 * items.length + '%';

    function deleteNotDigits (str) {
        return +str.replace(/\D/gi, '');
    }

    function showSlides(n) {
        if (n > items.length) {
            currentSlideIndex = 1;
        } else if (n < 1) {
            currentSlideIndex = items.length;
        }

        items.forEach((item) => {
            item.classList.remove("slider__item_active");
            item.style.transform = "scale(40%)";
        });
        
        items[currentSlideIndex - 1].style.transform = "scale(100%)";
        items[currentSlideIndex - 1].classList.add("slider__item_active");
        sliderField.style.transform = `translateX(-${offset}px)`;
    }

    showSlides(currentSlideIndex);

    function slideSwitch (target) {
    
        sliderField.style.transform = `translateX(-${offset}px)`;

        if (target === prev) {
            if (currentSlideIndex == 1) {
                currentSlideIndex = items.length;
            } else {
                currentSlideIndex--;
            }
            showSlides(currentSlideIndex);
        }
        if (target === next) {
            if (currentSlideIndex == items.length) {
                currentSlideIndex = 1;
            } else {
                currentSlideIndex++;
            }
            showSlides(currentSlideIndex);
        }
    }

    next.addEventListener('click', ()=> {

        if (offset == deleteNotDigits(width) * (items.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNotDigits(width);
        }

        slideSwitch(next);
    });

    prev.addEventListener('click', ()=> {

        if (offset == 0) {
            offset = deleteNotDigits(width) * (items.length - 1);
        } else {
            offset -= deleteNotDigits(width);
        }

        slideSwitch(prev);
    });
});
