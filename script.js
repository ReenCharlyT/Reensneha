//Search Function
function searchProduct() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let cards = document.getElementsByClassName("product-card");

    let visibleCards = [];

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i].getElementsByTagName("h3")[0].innerText.toLowerCase();

        if (title.includes(input)) {
            cards[i].style.display = "block";
            visibleCards.push(cards[i]);
        } else {
            cards[i].style.display = "none";
        }

        // Reset old highlight
        cards[i].style.border = "none";
        cards[i].style.backgroundColor = "white";
    }

    highlightLowestVisible(visibleCards);
}

// Highlight Lowest Price
function highlightLowestPrice() {
    let prices = document.querySelectorAll(".price");
    let minPrice = Infinity;
    let lowestCard = null;

    prices.forEach(priceTag => {
        let price = parseInt(priceTag.innerText.replace(/[^\d]/g, ""));
        if (price < minPrice) {
            minPrice = price;
            lowestCard = priceTag.parentElement;
        }
    });

    if (lowestCard) {
        lowestCard.style.border = "3px solid green";
        lowestCard.style.backgroundColor = "#eafaf1";
    }
}

// Sort by Price (Low to High)
function sortByPrice() {
    let container = document.querySelector(".product-container");
    let cards = Array.from(container.getElementsByClassName("product-card"));

    cards.sort((a, b) => {
        let priceA = parseInt(a.querySelector(".price").innerText.replace(/[^\d]/g, ""));
        let priceB = parseInt(b.querySelector(".price").innerText.replace(/[^\d]/g, ""));
        return priceA - priceB;
    });

    container.innerHTML = "";
    cards.forEach(card => container.appendChild(card));
}

function highlightLowestVisible(cards) {
    let minPrice = Infinity;
    let lowestCard = null;

    cards.forEach(card => {
        let priceText = card.querySelector(".price").innerText;
        let price = parseInt(priceText.replace(/[^\d]/g, ""));

        if (price < minPrice) {
            minPrice = price;
            lowestCard = card;
        }
    });

    if (lowestCard) {
        lowestCard.style.border = "3px solid green";
        lowestCard.style.backgroundColor = "#eafaf1";
    }
}

// Run highlight when page loads
window.onload = highlightLowestPrice;