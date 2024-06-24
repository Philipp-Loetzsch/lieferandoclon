let dishes = [];
let prices = [];
let amounts =[];

function createOrderCard(j, item) {
  let price = parseFloat(item.price);
  let formattedPrice = price.toFixed(2).replace(".", ",");
  return /* html */ `
      <div class="ordercard">
        <div id="dishcard${item.dish}" class="dishcard">
          <h4><b>${item.dish}</b></h4>
          <span>${item.description}</span>
          <h5><b>${formattedPrice} €</b></h5>
        </div>
        <div><button onclick="addToBasket('${item.dish}',${item.price})">+</button></div>
      </div>`;
}

function addToBasket(dish, price) {
  let index = dishes.indexOf(dish);
  if (index == -1) {
    dishes.push(dish);
    prices.push(price);
    amounts.push(1);
  } else {
    prices[index] += price;
    amounts[index] += 1;
  }
  
  let basket = document.getElementById(`orderBasket`);
  basket.innerHTML = "";
  for (let i = 0; i < dishes.length; i++) {
    let formattedPrice = prices[i].toFixed(2).replace(".", ",");
    basket.innerHTML += /* html */ `
      <div>
        <div>${dishes[i]}</div>
        <div>${formattedPrice} €</div>
        <div>${amounts[i]}</div>
        <div>
          <button onclick="addToBasket('${dishes[i]}', ${prices[i] / amounts[i]})">+</button>
          <button onclick="removeFromBasket('${dishes[i]}', ${prices[i] / amounts[i]})">-</button>
          <button onclick="removeDishFromBasket('${dishes[i]}')">trash</button>
        </div>
      </div>`;
  }
}

function removeFromBasket(dish, price) {
  let index = dishes.indexOf(dish);
  if (index != -1) {
    prices[index] -= price;
    amounts[index] -= 1;
    if (amounts[index] <= 0) {
      dishes.splice(index, 1);
      prices.splice(index, 1);
      amounts.splice(index, 1);
    }
    updateBasket();
  }
}

function removeDishFromBasket(dish) {
  let index = dishes.indexOf(dish);
  if (index != -1) {
    dishes.splice(index, 1);
    prices.splice(index, 1);
    amounts.splice(index, 1);
    updateBasket();
  }
}

function updateBasket() {
  let basket = document.getElementById(`orderBasket`);
  basket.innerHTML = "";
  for (let i = 0; i < dishes.length; i++) {
    let formattedPrice = prices[i].toFixed(2).replace(".", ",");
    basket.innerHTML += /* html */ `
      <div>
        <div>${dishes[i]}</div>
        <div>${formattedPrice} €</div>
        <div>${amounts[i]}</div>
        <div>
          <button onclick="addToBasket('${dishes[i]}', ${prices[i] / amounts[i]})">+</button>
          <button onclick="removeFromBasket('${dishes[i]}', ${prices[i] / amounts[i]})">-</button>
          <button onclick="removeDishFromBasket('${dishes[i]}')">trash</button>
        </div>
      </div>`;
  }
}
