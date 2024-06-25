function showDishes() {
  let categories = ["soups", "salats", "fishes", "beefs", "porks", "noodles", "desserts", "drinks",];
  for (let i = 0; i < categories.length; i++) {
    let category = categories[i];
    let container = document.getElementById(`choose${category}`);
    let items = menus[category];
    container.innerHTML = "";

    for (let j = 0; j < items.length; j++) {
      let item = items[j];
      let price = parseFloat(item.price);
      let formattedPrice = price.toFixed(2).replace(".", ",");
      container.innerHTML += createOrderCard(item, formattedPrice);
    }
  }
  updateResponsiveBasketButton();
}

function updateSum(orderSum, orderResponsiveSum) {
  let subTotal = prices.reduce((acc, curr) => acc + parseFloat(curr), 0);
  let totalSum = subTotal + 1.5;
  let formattedTotalSum = totalSum.toFixed(2).replace(".", ",");
  let formattedSubTotal = subTotal.toFixed(2).replace(".", ",");
  orderSum.innerHTML = createSum(formattedTotalSum, formattedSubTotal);
  orderResponsiveSum.innerHTML = createSum(formattedTotalSum, formattedSubTotal);
}

function orderDone() {
  if (dishes.length > 0) {
    dishes = [];
    prices = [];
    amounts = [];
    alert("Ihre Bestellung wurde aufgegeben");
    saveLocal();
  }
}

function updateResponsiveBasketButton(){
  let responsiveBasket = document.getElementById(`responsiveBasketBtn`);
  let priceTotal = prices.reduce((acc, curr) => acc + parseFloat(curr), 0) + 1.5;
  let formattedPriceTotal= priceTotal.toFixed(2).replace(".", ",");
  responsiveBasket.innerHTML = `Warenkorb (${formattedPriceTotal} €)`;
}