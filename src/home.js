import { setAttributes } from "./website";
import image from "./imgs/chef.png";

export function createHomeCard() {
    const cardHome = document.createElement('div');
    setAttributes(cardHome, {
        class: "card home",
        'data-active-page': "true"
    });
    const p1 = document.createElement('p');
    p1.innerText = 'Best pizza in your country';
    const p2 = document.createElement('p');
    p2.innerText = 'Made with passion since 1908';
    const p3 = document.createElement('p');
    p3.innerText = 'Order online or visit us!';
    const img = document.createElement('img');
    img.src = image;
    cardHome.appendChild(p1);
    cardHome.appendChild(p2);
    cardHome.appendChild(img);
    cardHome.appendChild(p3);
    return cardHome;
}