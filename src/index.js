import './style.scss';

const navElems = document.querySelectorAll('[data-active]');
const pages = document.querySelectorAll('.card');

navElems.forEach(elem => {
    elem.addEventListener('click', e => {
        navElems.forEach(elem => {
            elem.dataset.active = "false";
        });
        pages.forEach(page => {
            if (page.classList.contains(elem.dataset.page)) {
                page.setAttribute('data-active-page', "true");
            } else
                page.setAttribute('data-active-page', "false");
        })
        e.target.dataset.active = "true";
    })
})