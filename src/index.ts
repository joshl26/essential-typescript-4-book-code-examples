enum Feature {
  Waterproof,
  Insulated,
}

type Product = {
  name: string;
  price?: number;
  hasFeature?(Feature): boolean;
};

let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };
let umbrella = {
  name: "Umbrella",
  price: 30,
  hasFeature: (feature) => feature === Feature.Waterproof,
};

let mirrorShades = { name: "Sunglasses", price: 54, finish: "mirrored" };
let darkShades: Product = { name: "Sunglasses", price: 54, finish: "flat" };

let products: Product[] = [hat, gloves, umbrella, mirrorShades, darkShades];

// let products: {
//     name: string;
//     price?: number;
//     hasFeature?(Feature): boolean;
//   }[] = [hat, gloves, umbrella];

products.forEach((prod) =>
  console.log(
    `${prod.name}: ${prod.price}, ` +
      `Waterproof: ${
        prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : false
      }`
  )
);
