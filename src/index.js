import './reset.css';
import './style.css';
import html from "./index.html";
import displayHomePage from "./home.js";
import displayMenuPage from "./menu.js";
import displayAboutPage from "./about.js";

// default state
displayHomePage();
const contentDiv = document.querySelector("#content");
contentDiv.classList.add("home");

const navButtons  = document.querySelectorAll("nav");
navButtons.forEach((button) => button.addEventListener("click", handleButton))

function handleButton(e) {
    contentDiv.textContent = "";
    contentDiv.removeAttribute("class");
    contentDiv.classList.add(`${e.target.textContent.toLowerCase()}`);

    switch(e.target.textContent) {
        case "Home":
            displayHomePage();
            break;
        case "Menu":
            displayMenuPage();
            break;
        case "About":
            displayAboutPage();
            break;
        default:
            console.error("Something went wrong with the nav buttons");
    }
}
