import ChefImage from "./chef.jpg";

function displayAboutPage() {
    const contentDiv = document.querySelector("#content");

    const chefImage = new Image();
    chefImage.src = ChefImage;
    chefImage.alt = "Restaurant chef image";

    const aboutUsContainerText = document.createElement("div");
    aboutUsContainerText.classList.add("about-us-container-text");
    const aboutUsH1 = document.createElement("h1");
    aboutUsH1.textContent = "About Us";
    const aboutUsDetails = document.createElement("p");
    aboutUsDetails.textContent = "Founded in 1989, we have been the best restaurant in Thessaloniki for the past 50 years.\r\n \
                                Dolore eu quis pariatur voluptate ex tempor ex deserunt. Do reprehenderit labore proident \
                                velit cupidatat enim occaecat aliqua dolore nostrud commodo est dolor cillum. Irure excepteur \
                                nulla in reprehenderit quis eiusmod sunt deserunt sit dolore ea. Mollit irure incididunt \
                                cupidatat cillum. Exercitation laboris eiusmod veniam amet amet."

    aboutUsContainerText.append(aboutUsH1, aboutUsDetails);
    contentDiv.append(chefImage, aboutUsContainerText);
}

export default displayAboutPage;