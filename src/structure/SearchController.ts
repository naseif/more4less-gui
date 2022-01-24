export class SearchControllerT {
  search_button: HTMLElement;
  input_field: HTMLElement;

  constructor() {
    this.search_button = document.getElementById("searchButton");
    this.input_field = document.getElementById("searchField");
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  generateCards = (searchResult: any[]): string => {
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
  handleSearch = async (e: any) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    const cards_div = document.getElementById("cards_div");
    cards_div.innerHTML = `<div class="text-center">
    <div class="spinner-grow text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>`;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const searchForProduct = await more4less.search(this.input_field.value);
    cards_div.innerHTML = "";
    const html_cards = this.generateCards(searchForProduct);
    cards_div.innerHTML = html_cards;
  };

  attachEventListeners() {
    this.input_field.addEventListener("keyup", async (e) => {
      if (e.key === "Enter") {
        this.handleSearch(e);
      }
    });

    this.search_button.addEventListener("click", this.handleSearch);
  }
}
