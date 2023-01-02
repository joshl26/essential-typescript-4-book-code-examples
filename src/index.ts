enum Feature {
  Waterproof,
  Insulated,
}

let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };
let umbrella = {
  name: "Umbrella",
  price: 30,
  hasFeature: (feature) => feature === Feature.Waterproof,
};

let products: {
  name: string;
  price?: number;
  hasFeature?(Feature): boolean;
}[] = [hat, gloves, umbrella];

products.forEach((prod) =>
  console.log(
    `${prod.name}: ${prod.price}, ` +
      `Waterproof: ${
        prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : false
      }`
  )
);
