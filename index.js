let hat = {
  name: "Hat",
  price: 100,
};

let boots = {
  name: "Boots",
  price: "100",
};

let additionalProperties = {
  ...hat,
  discounted: true,
};
console.log(`Additional: ${JSON.stringify(additionalProperties)}`);

let replacedProperties = { ...hat, price: 10 };
console.log(`Replaced: ${JSON.stringify(replacedProperties)}`);

let { price, ...someProperties } = hat;
console.log(`Selected: ${JSON.stringify(someProperties)}`);

let otherHat = { ...hat };
console.log(`Spread: ${otherHat.name}, ${otherHat.price}`);

let gloves = {
  productName: "Gloves",
  price: "40",
};

gloves.name = gloves.productName;
delete gloves.productName;
gloves.price = 20;

let propertyCheck = hat.price ?? 0;
// let objectAndPropertyCheck = (hat ?? {}).price ?? 0;

let objectAndPropertyCheck = hat?.price ?? 0;
console.log(`Checks: ${propertyCheck}, ${objectAndPropertyCheck}`);

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

let [, , three] = names;
console.log(`Three: ${three}`);

let prices = [100, 120, 50.25];

let [, ...highest] = prices.sort((a, b) => a - b);
highest.forEach((price) => console.log(`High price: ${price}`));

prices.push(100);
prices.push("100");
prices.push(50.25);

console.log(`First Item: ${names[0]}: ${prices[0]}`);

let sumPrices = (...numbers) => {
  return numbers.reduce((total, val) => {
    return total + (Number.isNaN(Number(val)) ? 0 : Number(val));
  });
};

// let totalPrice = sumPrices(...prices);
let totalPrice = sumPrices(hat.price, boots.price, gloves.price);

console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

let combinedArray = [...names, ...prices];
combinedArray.forEach((element) =>
  console.log(`Combined Array Element: ${element}`)
);

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
