import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  return `<li class="product-card">
  <a href="product_pages/index.html?product=${product.Id}">
  <img
    src="${product.Image}"
    alt="Image of ${product.Name}"
  />
  <h3 class="card__brand">${product.Brand.Name}</h3>
  <h2 class="card__name">${product.Name}</h2>
  <p class="product-card__price">$${product.FinalPrice}</p></a>
</li>`;
}

export default class ProductListing {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    const list = await this.dataSource.getData();
    const filteredList = this.filterProducts(list);
    this.renderList(filteredList);
  }

  filterProducts(list) {
    const desiredProducts = [
      "880RR", // Marmot Ajax Tent - 3-Person, 3-Season
      "985RF", // The North Face Talus Tent - 4-Person, 3-Season
      "985PR", // The North Face Alpine Guide Tent - 3-Person, 4-Season
      "344YJ"  // Cedar Ridge Rimrock Tent - 2-Person, 3-Season
    ];

    return list.filter(product => desiredProducts.includes(product.Id));
  }

  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
}