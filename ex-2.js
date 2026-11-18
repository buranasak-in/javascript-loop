// Exercise #2: Sum the Numbers
let productPrices = [10, 20, 30, 40, 50];
let total = 0;
// Start coding here
// for (let price of productPrices) {
//     total += price;
// }
// console.log(total);

for (let i =0; i < productPrices.length; i++) {
    // total += productPrices[i];
    total = total + productPrices[i];
}
console.log(total);
