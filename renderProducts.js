function renderProducts(productsData, section) {
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

    const productTitleAndPriceContainer = document.createElement("div");
    productTitleAndPriceContainer.classList.add(
      "products-title-and-price-container"
    );
    productDetailsContainer.appendChild(productTitleAndPriceContainer);

    const productTitle = document.createElement("h3");
    productTitle.textContent = eachProduct.title;
    productTitle.classList.add("product-title");
    productTitleAndPriceContainer.appendChild(productTitle);

    const productPrice = document.createElement("p");
    productPrice.textContent = eachProduct.price;
    productPrice.classList.add("product-price");
    productTitleAndPriceContainer.appendChild(productPrice);

    const addToCartButtonContainer = document.createElement("div");
    addToCartButtonContainer.classList.add("add-to-cart-button-container");
    const addToCartButton = document.createElement("button");
    // addToCartButton.classList.add("add-to-cart-button");
    if (section === productsSection) {
      const cartIconEl = document.createElement("i");
      cartIconEl.classList.add("fa-solid", "fa-cart-shopping");
      cartIconEl.addEventListener("click", () => addCartItem(eachProduct));
      addToCartButtonContainer.appendChild(cartIconEl);
      productDetailsContainer.appendChild(addToCartButtonContainer);
    } else {
      const deleteIconEl = document.createElement("i");
      deleteIconEl.classList.add("fa-solid", "fa-trash");
      addToCartButton.appendChild(deleteIconEl);
      addToCartButton.addEventListener("click", () =>
        removeCartItem(eachProduct)
      );
      addToCartButtonContainer.appendChild(addToCartButton);
      productDetailsContainer.appendChild(addToCartButtonContainer);
      const cartItemQuantityContainer = document.createElement("div");
      productDetailsContainer.appendChild(cartItemQuantityContainer);
      const decrementCartItemQuantity = document.createElement("button");
      decrementCartItemQuantity.textContent = "-";
      cartItemQuantityContainer.appendChild(decrementCartItemQuantity);
      const cartItemQuantity = document.createElement("span");
      cartItemQuantity.textContent = eachProduct.length;
      cartItemQuantityContainer.appendChild(cartItemQuantity);
      const incrementCartItemQuantity = document.createElement("button");
      incrementCartItemQuantity.textContent = "+";
      cartItemQuantityContainer.appendChild(incrementCartItemQuantity);
    }
  });
}
