const cards = [
    {
        image: "assets/productimages/1.jpg", // Replace with image URL (optional)
        title: "Card title 1",
        text: "Some quick example text to build on the card's content.",
    },
    {
        image: "assets/productimages/2.jpg", // Replace with image URL (optional)
        title: "Card title 1",
        text: "Some quick example text to build on the card's content.",
    },
    {
        image: "assets/productimages/3.jpg", // Replace with image URL (optional)
        title: "Card title 1",
        text: "Some quick example text to build on the card's content.",
    },
    {
        image: "assets/productimages/4.jpg", // Replace with image URL (optional)
        title: "Card title 1",
        text: "Some quick example text to build on the card's content.",
    },
    {
        image: "assets/productimages/5.jpg", // Replace with image URL (optional)
        title: "Card title 1",
        text: "Some quick example text to build on the card's content.",
    },
    {
        image: "assets/productimages/6.jpg", // Replace with image URL (optional)
        title: "Card title 1",
        text: "Some quick example text to build on the card's content.",
    },
    {
        image: "assets/productimages/7.jpg", // Replace with image URL (optional)
        title: "Card title 1",
        text: "Some quick example text to build on the card's content.",
    },
    {
        image: "assets/productimages/8.jpg", // Replace with image URL (optional)
        title: "Card title 1",
        text: "Some quick example text to build on the card's content.",
    },

    // Add more card objects here
];

const carouselInner = document.querySelector("#carousel-inner");

let numSlides = Math.ceil(cards.length / 4);

for (let i = 0; i < numSlides; i++) {
    const carouselItem = document.createElement("div");
    carouselItem.classList.add("carousel-item");
    if (i === 0) {
        carouselItem.classList.add("active");
    }

    const carouselRow = document.createElement("div");
    carouselRow.classList.add("row");

    for (let j = 0; j < 4; j++) {
        const cardIndex = i * 4 + j;
        if (cardIndex < cards.length) {
            const card = document.createElement("div");
            card.classList.add("col-md-3", "mb-3");

            const cardElement = document.createElement("div");
            cardElement.classList.add("card");

            const cardImage = document.createElement("img");
            cardImage.classList.add("card-img-top");
            cardImage.alt = "Card image cap";
            cardImage.style.height = "200px";
            cardImage.src = cards[cardIndex].image || "..."; // Default image if no image provided

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const cardTitle = document.createElement("h5");
            cardTitle.classList.add("card-title");
            cardTitle.textContent = cards[cardIndex].title;

            const cardText = document.createElement("p");
            cardText.classList.add("card-text");
            cardText.textContent = cards[cardIndex].text;

            const cardButton = document.createElement("a");
            cardButton.classList.add("btn", "btn-primary");
            cardButton.textContent = "Buy Now";
            cardButton.href = "#"; // Adjust link as needed

            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
            cardBody.appendChild(cardButton);

            cardElement.appendChild(cardImage);
            cardElement.appendChild(cardBody);

            card.appendChild(cardElement);
            carouselRow.appendChild(card);
        }
    }

    carouselItem.appendChild(carouselRow);
    carouselInner.appendChild(carouselItem);
}

