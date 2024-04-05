var menProducts = [
    {id: 17, name: "Men Solid Button Up Shirt", price: 450, quantity: 1},
    {id: 18, name: "Men Solid Corduroy Loose Pants", price: 220, quantity: 1},
    {id: 19, name: "Baggy sweat short", price: 200, quantity: 1},
    {id: 20, name: "Solid Drop Shoulder Sweater", price: 330, quantity: 1},
    {id: 21, name: "Men Half Sleeved Polo", price: 200, quantity: 1},
    {id: 22, name: "Men Raglan Hoodie", price: 130, quantity: 1},
    {id: 23, name: "Stringer Tank", price: 320, quantity: 1},
    {id: 24, name: "Light Jeans Loose Fit", price: 120, quantity: 1},
    {id: 25, name: "Boxer Brief", price: 100, quantity: 1},
    {id: 26, name: "Collar Cotton Shirt", price: 220, quantity: 1},
];

var menProductsContainer = document.getElementById('menProductsContainer');

for (let i = 0; i < menProducts.length; i++) {
    var mProduct = menProducts[i];
    var source = "./img/" + mProduct.name + ".jpg"
    var action = "addToCartFromMen(" + i + ")"

    var menProductDiv = document.createElement('div');
    menProductDiv.className = "menProducts"
    var button = "<button class='CartBtn' onclick='" + action + "'><img class='IconContainer' src='/img/cart.png'>Add to Cart</button>";

    menProductDiv.innerHTML = "<img src='" + source + "'" + "class='photo'>" + "<h1>" + mProduct.name + "</h1>" + "<h2> ₱" + mProduct.price + "</h2>" + button;
    menProductsContainer.appendChild(menProductDiv);
}

function addToCartFromMen(index) {
    toAdd = menProducts[index]
    if (!cartedProducts.some(existingProduct => existingProduct.id === toAdd.id)) {
        cartedProducts.push(menProducts[index]);
        localStorage.setItem('cartedProducts', JSON.stringify(cartedProducts))
        addedAProduct();   
    } else {
        window.alert("Already in Cart");
    }
}