import { setLocalStorage } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

const dataSource = new ProductData("tents");
let products = JSON.parse(localStorage.getItem("so-cart"));

if (products == null) {
  products = [];
}

function addProductToCart(product) {
  products.push(product);
  setLocalStorage("so-cart", products);
}
// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  addProductToCart(product);
}

// add listener to Add to Cart button
document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);
