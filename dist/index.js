function calculateTax(amount) {
    return amount * 1.2;
}
function writePrice(product, price) {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}
let prices = [];
prices.push(...[100, 75, 42]);
let names = ["Hat", "Gloves", "Umbrella"];
prices.forEach((price, index) => {
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
let hat = ["Hat", 100];
let gloves = ["Gloves", 75, 10];
[hat, gloves].forEach((tuple) => {
    let [name, price, taxRate] = tuple;
    if (taxRate != undefined) {
        price += price * (taxRate / 100);
    }
    writePrice(name, price);
});
hat.forEach((h) => {
    if (typeof h === "string") {
        console.log(`String: ${h}`);
    }
    else {
        console.log(`Number: ${h.toFixed(2)}`);
    }
});
writePrice(hat[0], hat[1]);
writePrice(gloves[0], gloves[1]);
let products = [
    ["Hat", 100],
    ["Gloves", 75],
];
let tupleUnion = [
    true,
    false,
    hat,
    ...products,
];
tupleUnion.forEach((elem) => {
    if (elem instanceof Array) {
        let [str, num] = elem;
        console.log(`Name: ${str}`);
        console.log(`Price: ${num.toFixed(2)}`);
    }
    else if (typeof elem === "boolean") {
        console.log(`Boolean value ${elem}`);
    }
});
var OtherEnum;
(function (OtherEnum) {
    OtherEnum[OtherEnum["First"] = 10] = "First";
    OtherEnum[OtherEnum["Two"] = 20] = "Two";
})(OtherEnum || (OtherEnum = {}));
var Product;
(function (Product) {
    Product[Product["Hat"] = 11] = "Hat";
    Product[Product["Gloves"] = 20] = "Gloves";
    Product[Product["Umbrella"] = 31] = "Umbrella";
})(Product || (Product = {}));
let productValue = Product.Hat;
if (typeof productValue === "number") {
    console.log("Value is a number");
}
let unionValue = Product.Hat;
if (typeof unionValue === "number") {
    console.log("Value is a number");
}
let productName = Product[productValue];
console.log(`Value: ${productValue}, Name: ${productName}`);
var City;
(function (City) {
    City["London"] = "London";
    City["Paris"] = "Paris";
    City["NY"] = "New York";
})(City || (City = {}));
console.log(`City: ${City.London}`);
[(Product.Hat, Product.Gloves, Product.Umbrella)].forEach((val) => {
    console.log(`Number value ${val}`);
});
let products1 = [
    [Product.Hat, 100],
    [Product.Gloves, 75],
];
products1.forEach((prod) => {
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
