var Feature;
(function (Feature) {
    Feature[Feature["Waterproof"] = 0] = "Waterproof";
    Feature[Feature["Insulated"] = 1] = "Insulated";
})(Feature || (Feature = {}));
let hat = { name: "Hat", price: 100 };
let gloves = { name: "Gloves", price: 75 };
let umbrella = {
    name: "Umbrella",
    price: 30,
    hasFeature: (feature) => feature === Feature.Waterproof,
};
let mirrorShades = { name: "Sunglasses", price: 54, finish: "mirrored" };
let darkShades = { name: "Sunglasses", price: 54, finish: "flat" };
let products = [hat, gloves, umbrella, mirrorShades, darkShades];
// let products: {
//     name: string;
//     price?: number;
//     hasFeature?(Feature): boolean;
//   }[] = [hat, gloves, umbrella];
products.forEach((prod) => console.log(`${prod.name}: ${prod.price}, ` +
    `Waterproof: ${prod.hasFeature ? prod.hasFeature(Feature.Waterproof) : false}`));
