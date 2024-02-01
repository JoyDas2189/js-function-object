var shoppingCart = {
    books: 3,
    sunglasses: 1, 
    keyboard:1,
    mouse: 3,
    pen: 10
}
var penCount = shoppingCart.pen;
console.log(penCount);

var mouseCount = shoppingCart["mouse"];
console.log(mouseCount);

//finding the keys...
var keyNames = Object.keys(shoppingCart);
console.log(keyNames);

//finding the values...
var keyValues = Object.values(shoppingCart);
console.log(keyValues);


//Set Property...

shoppingCart.pen = 16;

shoppingCart["pen"] = 16;

var propertyName = "pen";
shoppingCart[propertyName] = 16;
console.log(shoppingCart);