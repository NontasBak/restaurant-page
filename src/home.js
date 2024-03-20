import RestaurantHome from './home-image.jpg';

function displayHomePage() {
    const contentDiv = document.querySelector("#content");
    contentDiv.removeAttribute("class");
    contentDiv.classList.add("home");
    const containerDiv = document.createElement("div");

    const homeImage = new Image();
    homeImage.src = RestaurantHome;
    homeImage.classList.add("home-image");
    homeImage.alt = "Restaurant image";
    containerDiv.appendChild(homeImage);

    const homeHeader = document.createElement("h2");
    homeHeader.textContent = "The best restaurant in Thessaloniki";
    homeHeader.classList.add("home-header");
    containerDiv.appendChild(homeHeader);

    contentDiv.appendChild(containerDiv);
}

export default displayHomePage;