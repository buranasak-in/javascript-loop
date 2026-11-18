// Exercise #4: Displaying Restaurant Name
let restaurantsName = ["KFC", "MOMO PARADISE", "Nabezo"];
let newRestaurants = [];
// Start coding here
// for (let i = 0; i < restaurantsName.length; i++) {
//     let name = `Restaurant Name: ${restaurantsName[i]}`
//     newRestaurants.push(name);
// };
// console.log(newRestaurants);


for (let name of restaurantsName) {
    name = `Restaurant Name: ${name}`
    newRestaurants.push(name);
};
console.log(newRestaurants);
