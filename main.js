const API_URL = `https://fakestoreapi.com/products`;

let data = [];
let cardsContainer = document.querySelector(".cards-container");

async function fetchProducts() {
  let response = await fetch(API_URL);
  data = await response.json();
}

document.addEventListener("DOMContentLoaded", async function () {
  await fetchProducts();
  let htmlString = ``;
  let data2 = [data[0], data[1]];
  //data = data[0];
  data.forEach((product, index) => {
    const filledStarsCount = parseInt(product.rating.rate);
    let unfilledStarsCount = 5 - filledStarsCount;

    let tmpDiv = document.createElement("div");

    for (let i = 0; i < filledStarsCount; i++) {
      tmpDiv.innerHTML += `<span class="start__filled">&#9733;</span>`;
    }

    for (let i = 0; i < unfilledStarsCount; i++) {
      tmpDiv.innerHTML += `<span class="start__unfilled">&#9734;</span>`;
    }

    console.log(index, tmpDiv.innerHTML);

    cardsContainer.innerHTML += `<div class="card-prod">
        <div class="image-container">
          <img src="${product.image}" class="product-image">
        </div>
        <div class="product-details">
          <span class="product-title">${product.title}</span>
          <!-- category -->
          <span class="product-category">${product.category}</span>
          <!-- rating -->
          <div class="product-rating">  
            ${tmpDiv.innerHTML}
          </div>
          <!-- rating count -->
          <div>Rating Count: <span class="product-rating-count">${product.rating.count}</span> </div>
        </div>
        <div class="product-price">
          <button class="price-btn">${product.price}</button>
        </div>
      </div>`;
    tmpDiv.innerHTML = ``;
    return product;
  });
});
