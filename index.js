let productsList = [
  {
    id: 1,
    title: "Puffy Jacket for Men",
    image: "./images/Puffy Jacket for Men.jpeg",
    price: 3200,
    quantity: 1,
  },
  {
    id: 2,
    title: "Polo Tea Shirt for Men",
    image: "./images/Polo Tea Shirt for Men.jpg",
    price: 1500,
    quantity: 1,
  },
  {
    id: 3,
    title: "Downtown Fashion Mens Cotton Full Sleeve T-Shirt",
    image: "./images/downtown-fashion-mens-cotton-full-sleeve-t-shirt.jpg",
    price: 1500,
    quantity: 1,
  },
  {
    id: 4,
    title: "Mens Corporate Shirt Long Sleeve Float Navy",
    image: "./images/Mens_Corporate_Shirt_Long_Sleeve_Float_Navy-875x1000.jpg",
    price: 1800,
    quantity: 1,
  },
  {
    id: 5,
    title: "Formal Shirt for Men",
    image: "./images/Formal Shirt for Men.jpg",
    price: 2400,
    quantity: 1,
  },

  {
    id: 6,
    title: "Black Skinny Jeans For Men",
    image: "./images/black-skinny-jeans-for-Men.jpg",
    price: 2500,
    quantity: 1,
  },
  {
    id: 7,
    title: "Denim Jeans Pant for Men",
    image: "./images/Denim Jeans Pant for Men.jpg",
    price: 3500,
    quantity: 1,
  },
  {
    id: 8,
    title: "Donic Shirt Argon Blue Front Web",
    image: "./images/donic-shirt_argon-blue-front-web_600x600.jpg",
    price: 2000,
    quantity: 1,
  },
  {
    id: 9,
    title: "Track Pants for Men Black",
    image: "./images/Track Pants for Men Black.jpg",
    price: 1100,
    quantity: 1,
  },
  {
    id: 10,
    title: "Track Pants for Men",
    image: "./images/Track Pants for Men.jpg",
    price: 1300,
    quantity: 1,
  },
  {
    id: 11,
    title: "Apple  Airpods with Mic and Wireless Charging Case, White",
    image:
      "./images/Apple  Airpods with Mic and Wireless Charging Case, White.jpeg",
    price: 5000,
    quantity: 1,
  },
  {
    id: 12,
    title: "Apple Smart Watch for Men",
    image: "./images/Apple Smart Watch for Men.jpg",
    price: 10000,
    quantity: 1,
  },
  {
    id: 13,
    title: "Apple iPhone 13 Pro",
    image: "./images/Apple_iPhone_13_Pro.jpg",
    price: 150000,
    quantity: 1,
  },

  {
    id: 14,
    title: "Iphone 13 Pro Charger",
    image: "./images/Iphone 13 Pro Charger.jpeg",
    price: 5000,
    quantity: 1,
  },
  {
    id: 15,
    title: "Inklenzo Men'sBoys Cuff Canvas Sneaker Shoes for Daily Use",
    image:
      "./images/Inklenzo Men'sBoys Cuff Canvas Sneaker Shoes for Daily Use.jpg",
    price: 3700,
    quantity: 1,
  },
  {
    id: 16,
    title: "Men Loafer Shoes Leather High Quality",
    image: "./images/Men Loafer Shoes Leather High Quality.jpg",
    price: 1800,
    quantity: 1,
  },
];

let cartProductsList = [];

let emptyCartMessagesList = [
  "Enhance your cart with exciting finds – start shopping now!",
  "Give your cart a boost! Explore our fantastic products.",
  "Your cart awaits! Discover a world of amazing items.",
  "Add joy to your cart with must-have products – explore now.",
  "Ready to fill your cart with excitement? Check out our latest arrivals.",
  "Is your cart craving something special? Find it here!",
  "Your cart misses you! Browse our products for unique treasures.",
  "Time to shop! Your cart is eager for some fantastic additions.",
  "Add vibrancy to your cart – explore our catalog for excitement!",
  "Spruce up your cart with amazing products. Start your journey now!",
];
let appContainer = document.querySelector(".app-container");
let productsSection = document.querySelector("#productsSection");
let cartProductsSection = document.querySelector("#cartSection");
let cartFilterSection = document.querySelector(".cart-filter-section");
let cartSummarySection = document.querySelector(".cart-summary-section");
const cartItemsCount = document.querySelector(".cart-items-count");

function renderHeader() {
  const headerContainerEl = document.createElement("div");
  headerContainerEl.classList.add("header");
  appContainer.appendChild(headerContainerEl);
  const homeLogoContainer = document.createElement("div");
  const appName = document.createElement("h1");
  appName.textContent = "InTrendz";
  appName.classList.add("app-name");
  homeLogoContainer.appendChild(appName);
  headerContainerEl.appendChild(homeLogoContainer);

  const navLinksContainer = document.createElement("div");
  navLinksContainer.classList.add("nav-links-container");
  const productsNavLink = document.createElement("a");
  productsNavLink.href = "#productsSection";
  productsNavLink.classList.add("nav-link");
  productsNavLink.innerHTML = '<i class="fa-solid fa-bag-shopping"></i>';
  navLinksContainer.appendChild(productsNavLink);

  const cartNavLinkContainer = document.createElement("div");
  cartNavLinkContainer.classList.add("cart-nav-link-container");
  const cartNavLink = document.createElement("a");
  cartNavLink.href = "#cartSection";
  cartNavLink.classList.add("nav-link");
  cartNavLink.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
  cartNavLinkContainer.appendChild(cartNavLink);
  const cartItemQuantityContainer = document.createElement("div");
  cartItemQuantityContainer.classList.add(
    "header-cart-item-quantity-container"
  );
  const cartItemQuantityEl = document.createElement("span");
  cartItemQuantityEl.textContent = cartProductsList.length;
  cartItemQuantityEl.classList.add("header-cart-item-quantity");
  cartItemQuantityContainer.appendChild(cartItemQuantityEl);
  cartNavLinkContainer.appendChild(cartItemQuantityContainer);
  navLinksContainer.appendChild(cartNavLinkContainer);

  headerContainerEl.appendChild(navLinksContainer);
}

function renderProducts(productsData, section) {
  if (productsData.length === 0 && section === cartProductsSection) {
    section.textContent = "";
    const showCartEmptyMessageEl = document.createElement("p");
    showCartEmptyMessageEl.textContent =
      emptyCartMessagesList[
        Math.floor(Math.random() * emptyCartMessagesList.length)
      ];
    showCartEmptyMessageEl.classList.add("cart-summary-element");
    cartProductsSection.appendChild(showCartEmptyMessageEl);
  } else {
    section.textContent = "";
    productsData.forEach((eachProduct) => {
      const productCardContainer = document.createElement("li");
      productCardContainer.classList.add("product-card");
      section.appendChild(productCardContainer);

      const productImage = document.createElement("img");
      productImage.src = eachProduct.image;
      productImage.alt = eachProduct.title;
      productImage.classList.add("product-image");
      productCardContainer.appendChild(productImage);

      const productDetailsContainer = document.createElement("div");
      productDetailsContainer.classList.add("product-details-container");
      productCardContainer.appendChild(productDetailsContainer);

      const productTitlePriceAndCartButtonContainer =
        document.createElement("div");
      productTitlePriceAndCartButtonContainer.classList.add(
        "product-title-price-cart-button-container"
      );
      productDetailsContainer.appendChild(
        productTitlePriceAndCartButtonContainer
      );

      const productTitleAndPriceContainer = document.createElement("div");
      productTitleAndPriceContainer.classList.add(
        "products-title-and-price-container"
      );
      productTitlePriceAndCartButtonContainer.appendChild(
        productTitleAndPriceContainer
      );

      const productTitle = document.createElement("h3");
      productTitle.textContent = eachProduct.title;
      productTitle.classList.add("product-title");
      productTitleAndPriceContainer.appendChild(productTitle);

      const productPrice = document.createElement("p");
      productPrice.textContent = "Price: Rs.";
      const ProductPriceAmount = document.createElement("span");
      ProductPriceAmount.textContent = eachProduct.price * eachProduct.quantity;
      ProductPriceAmount.classList.add("product-price-amount");
      productPrice.appendChild(ProductPriceAmount);
      productPrice.classList.add("product-price");
      productTitleAndPriceContainer.appendChild(productPrice);

      if (section === productsSection) {
        const cartButtonContainer = document.createElement("div");
        cartButtonContainer.classList.add("cart-button-container");

        const addToCartButton = document.createElement("button");
        addToCartButton.classList.add("cart-button");
        const cartIconEl = document.createElement("i");
        cartIconEl.classList.add("fa-solid", "fa-cart-shopping");
        cartIconEl.addEventListener("click", () => addCartItem(eachProduct));
        addToCartButton.appendChild(cartIconEl);
        cartButtonContainer.appendChild(addToCartButton);
        productTitlePriceAndCartButtonContainer.appendChild(
          cartButtonContainer
        );
      } else {
        const cartButtonContainer = document.createElement("div");
        cartButtonContainer.classList.add("cart-button-container");
        const addToCartButton = document.createElement("button");
        addToCartButton.classList.add("cart-button");
        const deleteIconEl = document.createElement("i");
        deleteIconEl.classList.add("fa-solid", "fa-trash");
        addToCartButton.appendChild(deleteIconEl);
        addToCartButton.addEventListener("click", () =>
          removeCartItem(eachProduct)
        );
        cartButtonContainer.appendChild(addToCartButton);
        productTitlePriceAndCartButtonContainer.appendChild(
          cartButtonContainer
        );
        const cartItemQuantityContainer = document.createElement("div");
        cartItemQuantityContainer.classList.add("cart-item-quantity-container");
        productDetailsContainer.appendChild(cartItemQuantityContainer);
        const decrementCartItemQuantityEl = document.createElement("button");
        decrementCartItemQuantityEl.classList.add("quantity-control-button");
        decrementCartItemQuantityEl.addEventListener("click", () =>
          decrementCartItemQuantity(eachProduct)
        );
        const decrementIcon = document.createElement("i");
        decrementIcon.classList.add(
          "fa-solid",
          "fa-minus",
          "quantity-control-icon"
        );
        decrementCartItemQuantityEl.appendChild(decrementIcon);
        cartItemQuantityContainer.appendChild(decrementCartItemQuantityEl);
        const cartItemQuantity = document.createElement("span");
        cartItemQuantity.textContent = eachProduct.quantity;
        cartItemQuantity.classList.add("cart-item-quantity");
        cartItemQuantityContainer.appendChild(cartItemQuantity);
        const incrementCartItemQuantityEl = document.createElement("button");
        incrementCartItemQuantityEl.classList.add("quantity-control-button");
        incrementCartItemQuantityEl.addEventListener("click", () =>
          incrementCartItemQuantity(eachProduct)
        );
        const incrementIcon = document.createElement("i");
        incrementIcon.classList.add(
          "fa-solid",
          "fa-plus",
          "quantity-control-icon"
        );
        incrementCartItemQuantityEl.appendChild(incrementIcon);
        cartItemQuantityContainer.appendChild(incrementCartItemQuantityEl);
      }
    });
  }
  renderCartSummarySection();
}

function renderCartFilterSection() {
  const inputAndSearchIconContainer = document.createElement("div");
  inputAndSearchIconContainer.classList.add("input-and-search-icon-container");

  const cartFilterInputEl = document.createElement("input");
  cartFilterInputEl.type = "text";
  cartFilterInputEl.id = "cartFilterInput";
  cartFilterInputEl.placeholder = "Enter max Price";
  cartFilterInputEl.classList.add("cart-filter-input");
  // cartFilterInputEl.addEventListener("change", (event) =>
  //   showInputAmount(event)
  // );
  cartFilterInputEl.addEventListener("input", (event) => filterCart(event));
  inputAndSearchIconContainer.appendChild(cartFilterInputEl);

  const searchIconContainer = document.createElement("div");
  searchIconContainer.classList.add("search-icon-container");
  const searchIconEl = document.createElement("i");
  searchIconEl.classList.add("fa-solid", "fa-magnifying-glass", "search-icon");
  searchIconContainer.appendChild(searchIconEl);
  inputAndSearchIconContainer.appendChild(searchIconContainer);
  cartFilterSection.appendChild(inputAndSearchIconContainer);

  const cartSortAndClearContainer = document.createElement("div");
  cartSortAndClearContainer.classList.add("cart-sort-and-clear-container");
  cartFilterSection.appendChild(cartSortAndClearContainer);

  const cartSortingEl = document.createElement("select");
  cartSortingEl.name = "sort";
  cartSortingEl.classList.add("cart-sort-drop-down");
  cartSortAndClearContainer.appendChild(cartSortingEl);

  const cartSortByEl = document.createElement("option");
  cartSortByEl.value = "Sort By";
  cartSortByEl.textContent = "Sort By";
  cartSortByEl.classList.add("sort-option");
  cartSortingEl.appendChild(cartSortByEl);

  const cartPriceSortingAscendingEl = document.createElement("option");
  cartPriceSortingAscendingEl.value = "Price Ascending";
  cartPriceSortingAscendingEl.textContent = "Price Ascending";
  cartSortingEl.appendChild(cartPriceSortingAscendingEl);

  const cartPriceSortingDecendingEl = document.createElement("option");
  cartPriceSortingDecendingEl.value = "Price Descending";
  cartPriceSortingDecendingEl.textContent = "Price Descending";
  cartSortingEl.appendChild(cartPriceSortingDecendingEl);

  const cartProductTitleSortingAscendingEl = document.createElement("option");
  cartProductTitleSortingAscendingEl.value = "Name Ascending";
  cartProductTitleSortingAscendingEl.textContent = "Name Ascending";
  cartSortingEl.appendChild(cartProductTitleSortingAscendingEl);

  const cartProductTitleSortingDecendingEl = document.createElement("option");
  cartProductTitleSortingDecendingEl.value = "Name Descending";
  cartProductTitleSortingDecendingEl.textContent = "Name Descending";
  cartSortingEl.appendChild(cartProductTitleSortingDecendingEl);

  cartSortingEl.addEventListener("change", (event) => sortCartProducts(event));

  const clearCartButtonEl = document.createElement("button");
  clearCartButtonEl.textContent = "Clear Cart";
  clearCartButtonEl.classList.add("clear-cart-button");
  clearCartButtonEl.addEventListener("click", () => clearCart());
  cartSortAndClearContainer.appendChild(clearCartButtonEl);
}

function clearCart() {
  cartProductsList = [];
  renderProducts(cartProductsList, cartProductsSection);
  renderCartItemsCount(cartProductsList);
}

function sortCartProducts(event) {
  if (event.target.value === "Price Ascending") {
    const newCartProductsList = cartProductsList.sort((a, b) => {
      let currentProductPrice = a.price * a.quantity;
      let nextProductPrice = b.price * b.quantity;
      return currentProductPrice - nextProductPrice;
    });
    cartProductsList = newCartProductsList;
    renderProducts(cartProductsList, cartProductsSection);
  }
  if (event.target.value === "Price Descending") {
    const newCartProductsList = cartProductsList.sort((a, b) => {
      let currentProductPrice = a.price * a.quantity;
      let nextProductPrice = b.price * b.quantity;
      return nextProductPrice - currentProductPrice;
    });
    cartProductsList = newCartProductsList;
    renderProducts(cartProductsList, cartProductsSection);
  }
  if (event.target.value === "Name Ascending") {
    const newCartProductsList = cartProductsList.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    cartProductsList = newCartProductsList;
    renderProducts(cartProductsList, cartProductsSection);
  }
  if (event.target.value === "Name Descending") {
    const newCartProductsList = cartProductsList.sort((a, b) =>
      b.title.localeCompare(a.title)
    );
    cartProductsList = newCartProductsList;
    renderProducts(cartProductsList, cartProductsSection);
  }
}

function filterCart(event) {
  let value = event.target.value;
  if (value !== "") {
    const filteredCartProductsList = cartProductsList.filter(
      (eachProduct) => eachProduct.price <= parseInt(value)
    );
    renderProducts(filteredCartProductsList, cartProductsSection);
  } else {
    renderProducts(cartProductsList, cartProductsSection);
  }
}

function decrementCartItemQuantity(product) {
  const selectedProduct = cartProductsList.find(
    (each) => each.id === product.id
  );
  if (selectedProduct.quantity === 1) {
    const newCartProductsList = cartProductsList.filter(
      (each) => each.id !== product.id
    );
    cartProductsList = newCartProductsList;
    renderProducts(cartProductsList, cartProductsSection);
  }
  if (selectedProduct.quantity > 1) {
    const newCartProductsList = cartProductsList.map((eachProduct) => {
      if (eachProduct.id === product.id) {
        return { ...eachProduct, quantity: eachProduct.quantity - 1 };
      } else {
        return eachProduct;
      }
    });
    cartProductsList = newCartProductsList;
    renderProducts(cartProductsList, cartProductsSection);
    renderCartItemsCount(cartProductsList);
    renderHeader();
  }
}

function incrementCartItemQuantity(product) {
  const newCartProductsList = cartProductsList.map((eachProduct) => {
    if (eachProduct.id === product.id) {
      return { ...eachProduct, quantity: eachProduct.quantity + 1 };
    } else {
      return eachProduct;
    }
  });
  cartProductsList = newCartProductsList;
  renderProducts(cartProductsList, cartProductsSection);
  renderHeader();
}

function removeCartItem(product) {
  const filteredCartProductsList = cartProductsList.filter(
    (eachProduct) => eachProduct.id !== product.id
  );
  cartProductsList = filteredCartProductsList;
  renderProducts(cartProductsList, cartProductsSection);
  renderCartItemsCount(cartProductsList);
  renderHeader();
}

function addCartItem(product) {
  const cartItem = cartProductsList.find(
    (eachProduct) => eachProduct.id === product.id
  );
  if (cartItem === undefined) {
    cartProductsList.push(product);
    renderCartItemsCount(cartProductsList);
  } else {
    cartProductsList = cartProductsList.map((each) => {
      if (each.id === product.id) {
        return { ...each, quantity: each.quantity + 1 };
      } else {
        return each;
      }
    });
  }
  renderProducts(cartProductsList, cartProductsSection);
  renderCartItemsCount(cartProductsList);
  renderHeader();
}

function renderCartSummarySection() {
  cartSummarySection.textContent = "";
  const totalPriceContainerEl = document.createElement("div");
  const totalPriceEl = document.createElement("p");
  totalPriceEl.classList.add("text-center");
  let totalPrice = cartProductsList.reduce((acc, cur) => {
    let updatedTotal = cur.price * cur.quantity;
    return acc + updatedTotal;
  }, 0);
  totalPriceEl.textContent = "Total Price   = Rs." + totalPrice.toFixed(2);
  totalPriceContainerEl.appendChild(totalPriceEl);
  cartSummarySection.appendChild(totalPriceContainerEl);
  const averagePriceContainerEl = document.createElement("div");
  const averagePriceEl = document.createElement("p");
  averagePriceEl.classList.add("text-center");
  let quantity = cartProductsList.reduce((acc, cur) => acc + cur.quantity, 0);
  let averagePrice = 0;
  if (quantity > 0) {
    averagePrice = parseInt(totalPrice / quantity);
  } else {
    averagePrice = 0;
  }
  averagePriceEl.textContent = "Average Price = Rs." + averagePrice.toFixed(2);
  averagePriceContainerEl.appendChild(averagePriceEl);
  cartSummarySection.appendChild(averagePriceContainerEl);
}
function renderCartItemsCount() {
  cartItemsCount.textContent = cartProductsList.length;
  cartItemsCount.classList.add("cart-items-count");
  cartFilterSection.classList.add("cart-filter-section");
}

renderProducts(productsList, productsSection);
renderCartFilterSection();
renderProducts(cartProductsList, cartProductsSection);
renderCartSummarySection();
renderHeader();
