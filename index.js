let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

// function sumPrices(first, second, third = 0) {
//   return first + second + third;
// }

// function sumPrices(...numbers) {
//   return numbers.reduce((total, val) => {
//     return total + (Number.isNaN(Number(val)) ? 0 : Number(val));
//   });
// }

let names = ["Hat", "Boots", "Gloves"];

let prices = [];

prices.push(100);
prices.push("100");
prices.push(50.25);

console.log(`First Item: ${names[0]}: ${prices[0]}`);

let sumPrices = (...numbers) => {
  return numbers.reduce((total, val) => {
    return total + (Number.isNaN(Number(val)) ? 0 : Number(val));
  });
};

let totalPrice = sumPrices(...prices);
console.log(`Total: ${totalPrice}: ${typeof totalPrice}`);

let taxRate; //no tax rate has been defined
console.log(`Tax rate: ${taxRate ?? 10}%`);
taxRate = 0; //zero-rated for tax
console.log(`Tax rate: ${taxRate ?? 10}%`);

if (hatPrice === bootsPrice) {
  console.log("Prices are the same");
} else {
  console.log("Prices are different");
}

// let totalPrice = sumPrices(hatPrice, bootsPrice);

// // let totalPrice = Number(hatPrice) + Number(bootsPrice);

// console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);

// totalPrice = sumPrices(100, 200, 300);
// console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);

// totalPrice = sumPrices(100, 200, undefined, false, "hello");
// console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);

let myVariable = "Adam";

console.log(`Type: ${typeof myVariable}`);

myVariable = 100;

console.log(`Type: ${typeof myVariable}`);

let firstCity;

let secondCity = firstCity || "London";
console.log(`City: ${secondCity}`);
