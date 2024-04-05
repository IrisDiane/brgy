let allProduct = [
    //from kids
    {id: 101, name: "Girls Floral Print Ruffle Trim Blouse & Overall Dress", price: 470, category: "kid" , quantity: 1},
    {id: 102, name: "Coffee Floral Dress", price: 420, category: "kid" , quantity: 1},
    {id: 103, name: "Fox Embroidery Dress", price: 420, category: "kid" , quantity: 1},
    {id: 104, name: "Little Dinosaur Set For Toddlers", price: 420, category: "kid" , quantity: 1},
    {id: 105, name: "2-piece Linen Set", price: 320, category: "kid" , quantity: 1},
    {id: 106, name: "Young Boy Striped Print Shirt & Shorts", price: 320, category: "kid" , quantity: 1},
    {id: 107, name: "Three Piece Kiddy Shorts", price: 320, category: "kid" , quantity: 1},
    {id: 108, name: "Toddler Girl Solid Tee & Ruffle Trim Romper", price: 320, category: "kid" , quantity: 1},
    {id: 109, name: "Baby Sunflower Print Frilled Flutter Sleeve Dress & Headband", price: 320, category: "kid" , quantity: 1},
    {id: 110, name: "Baby Rainbow Print Cami Top & Gingham Ruffle Hem Shorts", price: 320, category: "kid" , quantity: 1},

    //from women
    {id: 1, name: "Blazer", price: 250, category: "women", quantity: 1},
    {id: 2, name: "Scoop Neck Tee", price: 120, category: "women", quantity: 1},
    {id: 3, name: "Crop Tank Top", price: 100, category: "women", quantity: 1},
    {id: 4, name: "Half Button Placket Tee", price: 230, category: "women", quantity: 1},
    {id: 5, name: "Zipper Corduroy Shorts", price: 130, category: "women", quantity: 1},
    {id: 6, name: "Bikini Swimsuit", price: 245, category: "women", quantity: 1},
    {id: 7, name: "Spaghetti Dress", price: 450, category: "women", quantity: 1},
    {id: 8, name: "Gingham Collar  Top & Split Hem Skirt", price: 220, category: "women", quantity: 1},
    {id: 9, name: "Floral Skirt With Split", price: 200, category: "women", quantity: 1},
    {id: 10, name: "Sleepwear Set", price: 330, category: "women", quantity: 1},
    {id: 11, name: "Wide Leg Jeans", price: 200, category: "women", quantity: 1},
    {id: 12, name: "Zipper Sweatshirt", price: 130, category: "women", quantity: 1},
    {id: 13, name: "Ruched Top With High Waisted Bikini", price: 320, category: "women", quantity: 1},
    {id: 14, name: "Long Sleeve A-Line Mini Dress", price: 120, category: "women", quantity: 1},
    {id: 15, name: "Wide Leg Shorts", price: 100, category: "women", quantity: 1},
    {id: 16, name: "Wide leg trouser", price: 220, category: "women", quantity: 1},

    //from men
    {id: 17, name: "Men Solid Button Up Shirt", price: 450, category: "men", quantity: 1},
    {id: 18, name: "Men Solid Corduroy Loose Pants", price: 220, category: "men", quantity: 1},
    {id: 19, name: "Baggy sweat short", price: 200, category: "men", quantity: 1},
    {id: 20, name: "Solid Drop Shoulder Sweater", price: 330, category: "men", quantity: 1},
    {id: 21, name: "Men Half Sleeved Polo", price: 200, category: "men", quantity: 1},
    {id: 22, name: "Men Raglan Hoodie", price: 130, category: "men", quantity: 1},
    {id: 23, name: "Stringer Tank", price: 320, category: "men", quantity: 1},
    {id: 24, name: "Light Jeans Loose Fit", price: 120, category: "men", quantity: 1},
    {id: 25, name: "Boxer Brief", price: 100, category: "men", quantity: 1},
    {id: 26, name: "Collar Cotton Shirt", price: 220, category: "men", quantity: 1},

    //from plus-size

    {id: 27, name: "Plus Batwing Sleeve Shirt Dress", price: 450, category:"plus size", quantity: 1},
    {id: 28, name: "Plus Off Shoulder Sleeve & Shorts", price: 220, category:"plus size", quantity: 1},
    {id: 29, name: "Plus High Waist Asymmetrical Hem Denim Skirt", price: 200, category:"plus size", quantity: 1},
    {id: 30, name: "Plus Roll Up Denim Shorts", price: 330, category:"plus size", quantity: 1},
    {id: 31, name: "Plus Tropical Print Drawstring Swimsuit", price: 200, category:"plus size", quantity: 1},
    {id: 32, name: "Men Plus Size Knitted Short Sleeve", price: 130, category:"plus size", quantity: 1},
    {id: 33, name: "Men Oversized Drop Shoulder Tee", price: 130, category:"plus size", quantity: 1},
    {id: 34, name: "Men Oversized Wide Leg Pants", price: 130, category:"plus size", quantity: 1},
    {id: 35, name: "Loose Fit Waffle Knit T-shirt", price: 130, category:"plus size", quantity: 1},
    {id: 36, name: "Men Pocket Drawstring Thermal Hoodie", price: 130, category:"plus size", quantity: 1},
];

var SearchedProduct = [];
const SproductContainer = document.getElementById('SproductContainer');

renderResults();

function inPageShowResult(keyword){
    event.preventDefault();
    keyword = keyword.toLowerCase();
    SearchedProduct = lookInArray(keyword, allProduct);
    localStorage.clear();
    localStorage.setItem('SearchedProduct', JSON.stringify(SearchedProduct));
    SproductContainer.innerHTML = '';
    renderResults();
}

function showSearchResult(keyword){
    event.preventDefault();
    keyword = keyword.toLowerCase();
    SearchedProduct = lookInArray(keyword, allProduct);
    localStorage.setItem('SearchedProduct', JSON.stringify(SearchedProduct));
    window.location.href= './search.html'
}

function lookInArray(keyword, array){
    return array.filter(function (product) {
        return product.name.toLowerCase().includes(keyword) || product.category.toLowerCase().includes(keyword);
    });
}

function renderResults() {
    SearchedProduct = JSON.parse(localStorage.getItem('SearchedProduct'));
    try {
    for (let i = 0; i < SearchedProduct.length; i++) {
        const product = SearchedProduct[i];
        var source = "./img/" + product.name + ".jpg"
        var action = "addToCartFromCart(" + i + ")"
    
        var productDiv = document.createElement('div');
        productDiv.className = "searchProducts"
        var button = "<button class='CartBtn' onclick='" + action + "'><img class='IconContainer' src='/img/cart.png'>Add to Cart</button>";
    
        productDiv.innerHTML = "<img src='" + source + "'" + "class='photo'>" + "<h1>" + product.name + "</h1>" + "<h2> ₱" + product.price + "</h2>" + button;
        SproductContainer.appendChild(productDiv);
    } } catch(error){
        console.log(error);
    }
}

function addToCartFromCart(index) {
    toAdd = SearchedProduct[index]
    if (!cartedProducts.some(existingProduct => existingProduct.id === toAdd.id)) {
        cartedProducts.push(SearchedProduct[index]);
        localStorage.setItem('cartedProducts', JSON.stringify(cartedProducts))
        addedAProduct();   
    } else {
        window.alert("Already in Cart");
    }
}