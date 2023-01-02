function calculateTax(amount: number): number {
  return amount * 1.2;
}

function writePrice(product: string, price: number): void {
  console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
let prices = [];
prices.push(...[100, 75, 42]);
let names: string[] = ["Hat", "Gloves", "Umbrella"];

prices.forEach((price: number, index: number) => {
  writePrice(names[index], calculateTax(price));
});

let hatPrice = 100;
let glovesPrice = 75;
let umbrellaPrice = 42;

writePrice("Hat", calculateTax(hatPrice));
writePrice("Gloves", calculateTax(glovesPrice));
writePrice("Umbrella", calculateTax(umbrellaPrice));

writePrice(names[0], calculateTax(prices[0]));
writePrice(names[1], calculateTax(prices[1]));
writePrice(names[2], calculateTax(prices[2]));

//Tuples
let hat: [string, number, number?] = ["Hat", 100];
let gloves: [string, number, number?] = ["Gloves", 75, 10];

[hat, gloves].forEach((tuple) => {
  let [name, price, taxRate] = tuple;
  if (taxRate != undefined) {
    price += price * (taxRate / 100);
  }
  writePrice(name, price);
});

hat.forEach((h: string | number) => {
  if (typeof h === "string") {
    console.log(`String: ${h}`);
  } else {
    console.log(`Number: ${h.toFixed(2)}`);
  }
});

writePrice(hat[0], hat[1]);
writePrice(gloves[0], gloves[1]);

let products: [string, number][] = [
  ["Hat", 100],
  ["Gloves", 75],
];

let tupleUnion: ([string, number] | boolean)[] = [
  true,
  false,
  hat,
  ...products,
];

tupleUnion.forEach((elem: [string, number] | boolean) => {
  if (elem instanceof Array) {
    let [str, num] = elem;
    console.log(`Name: ${str}`);
    console.log(`Price: ${num.toFixed(2)}`);
  } else if (typeof elem === "boolean") {
    console.log(`Boolean value ${elem}`);
  }
});

enum OtherEnum {
  First = 10,
  Two = 20,
}

enum Product {
  Hat = OtherEnum.First + 1,
  Gloves = 20,
  Umbrella = Hat + Gloves,
}

let productValue: Product = Product.Hat;
if (typeof productValue === "number") {
  console.log("Value is a number");
}

let unionValue: number | Product = Product.Hat;
if (typeof unionValue === "number") {
  console.log("Value is a number");
}

let productName: string = Product[productValue];

console.log(`Value: ${productValue}, Name: ${productName}`);

enum City {
  London = "London",
  Paris = "Paris",
  NY = "New York",
}
console.log(`City: ${City.London}`);

[(Product.Hat, Product.Gloves, Product.Umbrella)].forEach((val) => {
  console.log(`Number value ${val}`);
});

let products1: [Product, number][] = [
  [Product.Hat, 100],
  [Product.Gloves, 75],
];

products1.forEach((prod: [Product, number]) => {
  switch (prod[0]) {
    case Product.Hat:
      writePrice("Hat", calculateTax(prod[1]));
      break;
    case Product.Gloves:
      writePrice("Gloves", calculateTax(prod[1]));
      break;
    case Product.Umbrella:
      writePrice("Umbrella", calculateTax(prod[1]));
      break;
  }
});
