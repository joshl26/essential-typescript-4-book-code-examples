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
let hat: [string, number] = ["Hat", 100];
let gloves: [string, number] = ["Gloves", 75];

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
