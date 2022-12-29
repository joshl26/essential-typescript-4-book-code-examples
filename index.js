let ProductProto = {
  toString: function () {
    return `toString: Name: ${this.name}, Price: ${this.price}`;
  },
};

let hat = {
  name: "Hat",
  price: 100,
  getPriceIncTax() {
    return Number(this.price) * 1.2;
  },
};

let boots = {
  name: "Boots",
  price: 100,
  getPriceIncTax() {
    return Number(this.price) * 1.2;
  },
};

let hatPrototype = Object.getPrototypeOf(hat);
hatPrototype.toString = function () {
  return `toString: Name: ${this.name}, Price: ${this.price}`;
};

let Product = function (name, price) {
  this.name = name;
  this.price = price;
};

Product.prototype.toString = function () {
  let chainResult = Product.prototype.toString.call(this);
  //   return `toString: Name: ${this.name}, Price: ${this.price}`;
  return `${chainResult} , Tax: ${this.getPriceIncTax()}`;
};

let TaxedProduct = function (name, price, taxRate) {
  Product.call(this, name, price);
  this.taxRate = taxRate;
};

Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype);

TaxedProduct.prototype.getPriceIncTax = function () {
  return Number(this.price) * this.taxRate;
};

TaxedProduct.prototype.toTaxString = function () {
  return `${this.toString()}, tax: ${this.getPriceIncTax()}`;
};

let hat1 = new Product("hat", 100);
let boots2 = new Product("Boots", 100);

Object.setPrototypeOf(hat, ProductProto);
Object.setPrototypeOf(boots, ProductProto);

let hat2 = new TaxedProduct("hat", 100, 1.2);
let boots3 = new TaxedProduct("Boots", 100);

console.log(hat2.toTaxString());
console.log(boots3.toString());

console.log(`hat and TaxedProducts" ${hat2 instanceof TaxedProduct}`);
console.log(`hat and Product" ${hat2 instanceof Product}`);
console.log(`boots and TaxedProducts" ${boots3 instanceof TaxedProduct}`);
console.log(`boots and Product" ${boots3 instanceof Product}`);

console.log(`Hat Prototype: ${hatPrototype}`);

let bootsPrototype = Object.getPrototypeOf(boots);
console.log(`Boots Prototype: ${bootsPrototype}`);

console.log(`Common prototype: ${hatPrototype === bootsPrototype}`);

console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax()}`);
console.log(`toString: :${hat.toString()}`);
