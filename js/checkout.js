const total = calcSubTotalForCheckout();
document.getElementById('checkOutTotal').innerHTML = total;
let shipOutProducts = JSON.parse(localStorage.getItem('cartedProducts'))
var toCheckOut = document.getElementById('toCheckOut')
console.log(shipOutProducts)

for (let i = 0; i < shipOutProducts.length; i++) {
    var toShip = shipOutProducts[i];
    var source = "./img/" + toShip.name + ".jpg"

    var shippProduct = document.createElement('div');
    shippProduct.className = "shipOutProducts"

    shippProduct.innerHTML = "<img src='" + source + "'" + "class='photo'>" + 
    "<div> <h1>" + toShip.name + "</h1>" + 
    "<h2> Price: ₱" + toShip.price + "(₱" + toShip.price * toShip.quantity + ")</h2>" +
    "<h5> Quantity: " + toShip.quantity + "</h5> </div>";
    toCheckOut.appendChild(shippProduct);
}