var plusSizeProducts = [
    {id: 27, name: "Plus Batwing Sleeve Shirt Dress", price: 450, quantity: 1},
    {id: 28, name: "Plus Off Shoulder Sleeve & Shorts", price: 220, quantity: 1},
    {id: 29, name: "Plus High Waist Asymmetrical Hem Denim Skirt", price: 200, quantity: 1},
    {id: 30, name: "Plus Roll Up Denim Shorts", price: 330, quantity: 1},
    {id: 31, name: "Plus Tropical Print Drawstring Swimsuit", price: 200, quantity: 1},
    {id: 32, name: "Men Plus Size Knitted Short Sleeve", price: 130, quantity: 1},
    {id: 33, name: "Men Oversized Drop Shoulder Tee", price: 130, quantity: 1},
    {id: 34, name: "Men Oversized Wide Leg Pants", price: 130, quantity: 1},
    {id: 35, name: "Loose Fit Waffle Knit T-shirt", price: 130, quantity: 1},
    {id: 36, name: "Men Pocket Drawstring Thermal Hoodie", price: 130, quantity: 1},
    
    
];

var plusSizeProductsContainer = document.getElementById('plusSizeProductsContainer');

for (let i = 0; i < plusSizeProducts.length; i++) {
    var pProduct = plusSizeProducts[i];
    var source = "./img/" + pProduct.name + ".jpg"
    var action = "addToCartFromPlusSize(" + i + ")"

    var plusSizeProductDiv = document.createElement('div');
    plusSizeProductDiv.className = "plusSizeProducts"
    var button = "<button class='CartBtn' onclick='" + action + "'><img class='IconContainer' src='/img/cart.png'>Add to Cart</button>";

    plusSizeProductDiv.innerHTML = "<img src='" + source + "'" + "class='photo'>" + "<h1>" + pProduct.name + "</h1>" + "<h2> ₱" + pProduct.price + "</h2>" + button;
    plusSizeProductsContainer.appendChild(plusSizeProductDiv);
}

function addToCartFromPlusSize(index) {
    toAdd = plusSizeProducts[index]
    if (!cartedProducts.some(existingProduct => existingProduct.id === toAdd.id)) {
        cartedProducts.push(plusSizeProducts[index]);
        localStorage.setItem('cartedProducts', JSON.stringify(cartedProducts))
        addedAProduct();   
    } else {
        window.alert("Already in Cart");
    }
}