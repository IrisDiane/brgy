var products = [
    {id: 1, name: "Blazer", price: 250, quantity: 1},
    {id: 2, name: "Scoop Neck Tee", price: 120, quantity: 1},
    {id: 3, name: "Crop Tank Top", price: 100, quantity: 1},
    {id: 4, name: "Half Button Placket Tee", price: 230, quantity: 1},
    {id: 5, name: "Zipper Corduroy Shorts", price: 130, quantity: 1},
    {id: 6, name: "Bikini Swimsuit", price: 245, quantity: 1},
];

var productContainer = document.getElementById('sample');

for (let i = 0; i < products.length; i++) {
    var product = products[i];
    var source = "./img/" + product.name + ".jpg"
    var action = "addToCart(" + i + ")"

    var productDiv = document.createElement('div');
    productDiv.className = "container"
    var button = "<button class='CartBtn' onclick='" + action + "'><img class='IconContainer' src='/img/cart.png'>Add to Cart</button>";

    productDiv.innerHTML = "<img src='" + source + "'" + "class='photo'>" + "<h1>" + product.name + "</h1>" + "<h2> ₱" + product.price + "</h2>" + button;
    productContainer.appendChild(productDiv);
}