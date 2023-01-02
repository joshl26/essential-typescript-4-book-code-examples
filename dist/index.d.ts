declare function calculateTax(amount: number): number;
declare function writePrice(product: string, price: number): void;
declare let prices: any[];
declare let names: string[];
declare let hatPrice: number;
declare let glovesPrice: number;
declare let umbrellaPrice: number;
declare let hat: [string, number, number?];
declare let gloves: [string, number, number?];
declare let products: [string, number][];
declare let tupleUnion: ([string, number] | boolean)[];
declare enum OtherEnum {
    First = 10,
    Two = 20
}
declare enum Product {
    Hat = 11,
    Gloves = 20,
    Umbrella = 31
}
declare let productValue: Product;
declare let unionValue: number | Product;
declare let productName: string;
declare enum City {
    London = "London",
    Paris = "Paris",
    NY = "New York"
}
declare let products1: [Product, number][];
