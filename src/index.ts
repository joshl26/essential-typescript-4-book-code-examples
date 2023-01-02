// console.log("Web app");
// console.log("This is a new statement");

import { LocalDataSource } from "./data/localDataSource";
import { HtmlDisplay } from "./htmlDisplay";
import "bootstrap/dist/css/bootstrap.css";

let ds = new LocalDataSource();

async function displayData(): Promise<HTMLElement> {
  let display = new HtmlDisplay();
  display.props = {
    products: await ds.getProducts("name"),
    order: ds.order,
  };
  return display.getContent();
}

// async function displayData(): Promise<string> {
//   let ds = new LocalDataSource();
//   let allProducts = await ds.getProducts("name");
//   let categories = await ds.getCategories();
//   let chessProducts = await ds.getProducts("name", "Chess");

//   let result = "";

//   allProducts.forEach((p) => (result += `Product: ${p.name}, ${p.category}\n`));
//   categories.forEach((c) => (result += `Category: ${c}\n`));
//   chessProducts.forEach((p) => ds.order.addProduct(p, 1));
//   result += `Order total: $${ds.order.total.toFixed(2)}`;
//   return result;
// }

// displayData().then((res) => console.log(res));

document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    displayData().then((elem) => {
      let rootElement = document.getElementById("app");
      rootElement.innerHTML = "";
      rootElement.appendChild(elem);
    });
  }
};
