import { setAttributes } from "./website";
import image from "./imgs/restaurant-location.png"

export function createContactCard() {
    const cardContact = document.createElement('div');
    setAttributes(cardContact, {
        class: "card contact",
        'data-active-page': "false"
    });
    const p1 = document.createElement('p');
    p1.innerText = '📞 123 456 789';
    const p2 = document.createElement('p');
    p2.innerText = '🏠 Hollywood Boulevard 42, Los Angeles, USA';
    const img = document.createElement('img');
    img.src = image;
    cardContact.appendChild(p1);
    cardContact.appendChild(p2);
    cardContact.appendChild(img);
    return cardContact;
}