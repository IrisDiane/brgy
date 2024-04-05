var kidProducts = [
    {id: 101, name: "Girls Floral Print Ruffle Trim Blouse & Overall Dress", price: 470 , quantity: 1},
    {id: 102, name: "Coffee Floral Dress", price: 420 , quantity: 1},
    {id: 103, name: "Fox Embroidery Dress", price: 420 , quantity: 1},
    {id: 104, name: "Little Dinosaur Set For Toddlers", price: 420 , quantity: 1},
    {id: 105, name: "2-piece Linen Set", price: 320 , quantity: 1},
    {id: 106, name: "Young Boy Striped Print Shirt & Shorts", price: 320 , quantity: 1},
    {id: 107, name: "Three Piece Kiddy Shorts", price: 320 , quantity: 1},
    {id: 108, name: "Toddler Girl Solid Tee & Ruffle Trim Romper", price: 320 , quantity: 1},
    {id: 109, name: "Baby Sunflower Print Frilled Flutter Sleeve Dress & Headband", price: 320 , quantity: 1},
    {id: 110, name: "Baby Rainbow Print Cami Top & Gingham Ruffle Hem Shorts", price: 320 , quantity: 1},
];

var kidProductsContainer = document.getElementById('kidProductsContainer');

for (let i = 0; i < kidProducts.length; i++) {
    var kProduct = kidProducts[i];
    var source = "./img/" + kProduct.name + ".jpg"
    var action = "addToCartFromKid(" + i + ")"

    var kidProductDiv = document.createElement('div');
    kidProductDiv.className = "kidProducts"
    var button = "<button class='CartBtn' onclick='" + action + "'><img class='IconContainer' src='/img/cart.png'>Add to Cart</button>";

    kidProductDiv.innerHTML = "<img src='" + source + "'" + "class='photo'>" + "<h1>" + kProduct.name + "</h1>" + "<h2> ₱" + kProduct.price + "</h2>" + button;
    kidProductsContainer.appendChild(kidProductDiv);
}

function addToCartFromKid(index) {
    toAdd = kidProducts[index]
    if (!cartedProducts.some(existingProduct => existingProduct.id === toAdd.id)) {
        cartedProducts.push(kidProducts[index]);
        localStorage.setItem('cartedProducts', JSON.stringify(cartedProducts))
        addedAProduct();   
    } else {
        window.alert("Already in Cart");
    }
}