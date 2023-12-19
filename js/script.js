import tabs from './modules/tabs';
import calc from './modules/calc';
import cards from './modules/cards';
import forms from'./modules/forms';
import modal from './modules/modal';
import slider from './modules/slider';
import timer from './modules/timer';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    const modalTimer = setTimeout(() => openModal('.modal', modalTimer), 3000)

    tabs('.tabheader__item', '.tabheader__items', '.tabcontent', 'tabheader__item_active');
    calc();
    cards();
    forms(modalTimer);
    modal('[data-modal]', '.modal', modalTimer);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    timer('.timer', '2023-12-15');
})


const add1 = function(a){return a + 1}
const addAll3 = function(a,b,c){return a + b + c}

// composeWithArgs(add1,addAll3)(1,2,3)  => Вернет 7

const composeWithArgs = (...fns) => {
    if (fns.length === 1) {
        return fns[0] + 1
    } else {
        fns.reduce((res, fn) => fn(res), 0)
    }
};