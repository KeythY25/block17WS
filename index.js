const coffeeMenu = require("./coffee_data.js")

//Access the names of the drinks
const drinkName = (item) => {
    return item.name;
}

const fiveorLess = (item) => {
    return item.price <= 5;
}

const evenPriced = (item) => {
    return item.price %2 == 0; 
}

const findPriceArr = (item) => {
    return item.price;
}

const totalCost = (accumulator, currentValue) =>{
    return accumulator + currentValue;
}

const isSeasonal = (item) => {
    return item.seasonal === true;
}
console.log("--------------------------------2. Drink Menu--------------------------------");
//prints all of the drinks in the menu
console.log(coffeeMenu.map(drinkName));


console.log("--------------------------------3. Drinks $5 or less--------------------------------");
//prints an array of drinks that cost 5 and under
const drinks5nUnder = coffeeMenu.filter(fiveorLess);
console.table(drinks5nUnder);

console.log("--------------------------------4. Even priced drinks--------------------------------");
//4. print an array of drinks that are priced at an even number
const drinksPricedEven = coffeeMenu.filter(evenPriced);
console.table(drinksPricedEven);


console.log("--------------------------------5. Sum of one of every drink--------------------------------");
//5.print total if you were to order one of every drink
const priceArray = coffeeMenu.map(findPriceArr);
console.log(priceArray);
const totalPrice = priceArray.reduce(totalCost);
console.log(`The total for all the drinks is $${totalPrice}`);

console.log("--------------------------------6. Seasonal Drinks--------------------------------");
//6. print an array with all of the drinks that are seasonal
const seasonalDrinks = coffeeMenu.filter(isSeasonal);
console.table(seasonalDrinks);

console.log("--------------------------------7. Seasonal Drinks with imported beans --------------------------------");
//7.print all the seasonal drinks with the words
const drinkArr = seasonalDrinks.map(drinkName);
console.log(drinkArr)
drinkArr.forEach(element => console.log(element + " with imported beans"));

console.log("--------------------------------END--------------------------------");
