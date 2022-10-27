import { createContactCard } from "./contact";
import { createHomeCard } from "./home";
import { createMenuCard } from "./menu";
import icon from "./imgs/GitHub-Mark-Light-32px.png"


const contentDiv = document.querySelector('#content');
export function setAttributes(el, attrs) {
    Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
}

export function generatePage() {
    // Create header, main and footer elements
    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');

    // Create contents for header

    const restaurantNameDiv = document.createElement('div');
    restaurantNameDiv.classList.add('restaurant-name');
    restaurantNameDiv.innerText = 'Mozzafiato';
    header.appendChild(restaurantNameDiv);

    const ulNavBar = document.createElement('ul');
    const liNavElem1 = document.createElement('li');
    setAttributes(liNavElem1, { 
        'data-active': 'true',
        'data-page': 'home'
    });
    liNavElem1.innerText = 'Home';
    ulNavBar.appendChild(liNavElem1);
    const liNavElem2 = document.createElement('li');
    setAttributes(liNavElem2, { 
        'data-active': 'false',
        'data-page': 'menu'
    });
    liNavElem2.innerText = 'Menu';
    ulNavBar.appendChild(liNavElem2);
    const liNavElem3 = document.createElement('li');
    setAttributes(liNavElem3, { 
        'data-active': 'false',
        'data-page': 'contact'
    });
    liNavElem3.innerText = 'Contact';
    ulNavBar.appendChild(liNavElem3);

    header.appendChild(ulNavBar);

    // Create contents for main

    main.appendChild(createHomeCard());

    const navElems = header.querySelectorAll('[data-active]');

    navElems.forEach(elem => {
        elem.addEventListener('click', e => {
            navElems.forEach(elem => {
                elem.dataset.active = "false";
            });
            while (main.firstChild) {
                main.removeChild(main.firstChild);
            }
            e.target.dataset.active = "true";
            switch (e.target.dataset.page) {
                case 'home':
                    console.log('hi there')
                    main.appendChild(createHomeCard());
                    main.firstChild.setAttribute('data-active-page', 'true');
                    break;
                case 'menu':
                    main.appendChild(createMenuCard());
                    main.firstChild.setAttribute('data-active-page', 'true');
                    break;
                case 'contact':
                    main.appendChild(createContactCard());
                    main.firstChild.setAttribute('data-active-page', 'true');
                    break;
            }
        })
    })
    // Create contents for footer

    const paragraph = document.createElement('p');
    paragraph.innerText = 'Copyright © 2022 GEOFARL';
    footer.appendChild(paragraph);

    const hyperLinkIcon = document.createElement('a');
    setAttributes(hyperLinkIcon, {
        href: "https://github.com/GEOFARL",
        target: "_blank",
    })
    const img = document.createElement('img');
    img.src = icon;
    hyperLinkIcon.appendChild(img);

    footer.appendChild(hyperLinkIcon);


    contentDiv.appendChild(header);
    contentDiv.appendChild(main);
    contentDiv.appendChild(footer);
}