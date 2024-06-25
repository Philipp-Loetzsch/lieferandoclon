let dishes = [];
let prices = [];
let amounts = [];

function addToBasket(dish, price) {
  let indexAdd = dishes.indexOf(dish);
  if (indexAdd == -1) {
    dishes.push(dish);
    prices.push(price);
    amounts.push(1);
  } else if (amounts[indexAdd] >= 9) {
    return alert("Maximale Anzahl von Bestellungen erreicht");
  }
  prices[indexAdd] += price;
  amounts[indexAdd] += 1;
  saveLocal();
}

function removeFromBasket(dish, price) {
  let indexRemove = dishes.indexOf(dish);
  if (indexRemove != -1) {
    prices[indexRemove] -= price;
    amounts[indexRemove] -= 1;
    if (amounts[indexRemove] <= 0) {
      dishes.splice(indexRemove, 1);
      prices.splice(indexRemove, 1);
      amounts.splice(indexRemove, 1);
    }
    saveLocal();
  }
}

function removeDishFromBasket(dish) {
  let indexDelete = dishes.indexOf(dish);
  if (indexDelete != -1) {
    dishes.splice(indexDelete, 1);
    prices.splice(indexDelete, 1);
    amounts.splice(indexDelete, 1);
    saveLocal();
  }
}

function updateBasket() {
  let basket = document.getElementById(`orderBasket`);
  let basketRepo = document.getElementById(`contentResponsiveBasket`);
  basket.innerHTML = "";
  basketRepo.innerHTML = "";
  for (let i = 0; i < dishes.length; i++) {
    let formattedPrice = parseFloat(prices[i]).toFixed(2).replace(".", ",");
    basket.innerHTML += createBasket(i, formattedPrice);
    basketRepo.innerHTML += createBasket(i, formattedPrice);
  }
  toggleEmptyBasket();
  showScrollbarSide();
  showScrollbarResponsive();
}