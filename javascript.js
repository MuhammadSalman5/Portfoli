// Sample product data
const products = [
    {
        id: 1,
        name: "Product 1",
        price: 19.99,
        image: "product1.jpg",
    },
    {
        id: 2,
        name: "Product 2",
        price: 9.99,
        image: "product2.jpg",
    },
    // Add more products here
];

// Function to create product cards
function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4");

    card.innerHTML = `
        <div class="card">
            <img src="images/${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">$${product.price.toFixed(2)}</p>
                <button class="btn btn-primary add-to-cart" data-product-id="${product.id}">Add to Cart</button>
            </div>
        </div>
    `;

    return card;
}

// Display products on the website
const productList = document.getElementById("product-list");
products.forEach(product => {
    const card = createProductCard(product);
    productList.appendChild(card);
});
