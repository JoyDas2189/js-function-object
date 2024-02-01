function bringShingara (money) {
    var shingaraPrice = 10;
    var shingaraQuantity = money/shingaraPrice;
    return shingaraQuantity;
}
var myTaka = 100;
var totalShingara = bringShingara(myTaka);
console.log(`Total Number of Shingara You Will Get: ${totalShingara}`);