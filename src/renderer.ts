/* eslint-disable @typescript-eslint/ban-ts-comment */

const searchButton = document.getElementById("searchButton");
const inputField = document.getElementById("searchField");

searchButton.addEventListener("click", async (e) => {
  await handleSearch(e);
});

inputField.addEventListener("keyup", async (e) => {
  if (e.key === "Enter") {
    await handleSearch(e);
  }
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const generateCards = (searchResult: any[]): string => {
  let result = "";

  searchResult.forEach((product) => {
    result += `
    <div class="col-auto mb-3">
    <div class="card" style="width: 18rem">
    <img src="${
      product.thumbnail ? product.thumbnail : ""
    }" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title text-black">${product.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${product.engine}</h6>
        <p class="card-text text-black">Price: ${
          product.price ? product.price : "Not available"
        }€</p>
        <a href="${product.link}" class="card-link">Link</a>
      </div>
    </div>
    </div>
    `;
  });
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const handleSearch = async (e?: any) => {
  e.preventDefault();
  // @ts-expect-error
  const getSearchQuery = document.getElementById("searchField").value;
  const cards_div = document.getElementById("cards_div");
  cards_div.innerHTML = `<div class="text-center">
  <div class="spinner-grow text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>`;
  console.log(getSearchQuery);
  // @ts-expect-error
  const searchForProduct = await more4less.search(getSearchQuery);
  cards_div.innerHTML = "";
  const html_cards = generateCards(searchForProduct);
  cards_div.innerHTML = html_cards;
};
