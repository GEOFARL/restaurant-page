import { setAttributes } from "./website";
import image1 from "./imgs/pizzas/salsiccia.png"
import image2 from "./imgs/pizzas/gamberi.png"
import image3 from "./imgs/pizzas/pepe.png"
import image4 from "./imgs/pizzas/disgustoso.png"
import image5 from "./imgs/pizzas/colorato.png"
import image6 from "./imgs/pizzas/pomodoro.png"
import image7 from "./imgs/pizzas/crema.png"
import image8 from "./imgs/pizzas/carne.png"


export function createMenuCard() {
    const cardMenu = document.createElement('div');
    setAttributes(cardMenu, {
        class: "card menu",
        'data-active-page': "false"
    });
    function createPizza(src, name, text) {
        const pizza = document.createElement('div');
        pizza.classList.add('pizza');
        const img = document.createElement('img');
        img.src = src;
        const h2 = document.createElement('h2');
        h2.innerText = name;
        const p = document.createElement('p');
        p.innerText = text;
        pizza.appendChild(img);
        pizza.appendChild(h2);
        pizza.appendChild(p);
        return pizza;
    }
    cardMenu.appendChild(createPizza(
        image1,
        "Salsiccia",
        "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
    ));
    cardMenu.appendChild(createPizza(
        image2,
        "Gamberi",
        "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"
    ));
    cardMenu.appendChild(createPizza(
        image3,
        "Pepe",
        "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"
    ));
    cardMenu.appendChild(createPizza(
        image4,
        "Disgustoso",
        "Tomato sauce, Bacon, Pineapple, Olives, Basil"
    ));
    cardMenu.appendChild(createPizza(
        image5,
        "Colorato",
        "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
    ));
    cardMenu.appendChild(createPizza(
        image6,
        "Pomodoro",
        "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
    ));
    cardMenu.appendChild(createPizza(
        image7,
        "Crema",
        "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil"
    ));
    cardMenu.appendChild(createPizza(
        image8,
        "Carne",
        "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"
    ));
    return cardMenu;
}