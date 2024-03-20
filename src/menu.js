import Image1 from "./gyros.jpg";
import Image2 from "./steak.jpg";
import Image3 from "./souvlaki.jpg";

const dishImages = [Image1, Image2, Image3];
const dishNames = ["Gyros", "Steak", "Souvlakia"];
const dishDescriptions = [
    "Gyros with french potatoes, tomatoes, onions and ketchup/mustard",
    "Steak with french potatoes on the side",
    "5 Souvlakia with a generous portion of french potatoes on the side"
];
const dishPrices = [4, 8, 7];
let menuDishes = [];

for(let i = 0; i < 3; i++)
    menuDishes[i] = new MenuDish(dishImages[i], dishNames[i], dishDescriptions[i], dishPrices[i]);


function MenuDish(imageUrl, name, description, price) {
    this.imageUrl = imageUrl;
    this.name = name;
    this.description = description;
    this.price = price;
}

const contentDiv = document.querySelector("#content");


function displayDish(dish) {
    
    const dishContainer = document.createElement("div");
    dishContainer.classList.add("dish-container");
    const dishImage = new Image();
    dishImage.src = dish.imageUrl;
    dishImage.alt = `${dish.name} image`;

    const textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    const nameH2 = document.createElement("h2");
    nameH2.textContent = dish.name;
    const descriptionP = document.createElement("p");
    descriptionP.textContent = dish.description;
    const priceH3 = document.createElement("h3");
    priceH3.textContent = `${dish.price}€`;

    textContainer.append(nameH2, descriptionP, priceH3);
    dishContainer.append(dishImage, textContainer);
    contentDiv.appendChild(dishContainer);
}

function displayMenuPage() {
    contentDiv.removeAttribute("class");
    contentDiv.classList.add("menu");

    const menuTitleH1 = document.createElement("h1");
    menuTitleH1.textContent = "Menu~"
    contentDiv.appendChild(menuTitleH1);

    menuDishes.forEach((dish) => displayDish(dish));
}

export default displayMenuPage