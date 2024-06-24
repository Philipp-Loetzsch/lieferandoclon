function showDishes() {
  let categories = ["soups", "salats", "fishes", "beefs", "porks", "noodles", "desserts", "drinks",];
  for (let i = 0; i < categories.length; i++) {
    let category = categories[i];
    let container = document.getElementById(`choose${category}`);
    let items = menus[category];
    container.innerHTML = "";
    
    for(let j = 0; j < items.length; j++){
    let item = items[j];
    let price = parseFloat(item.price);
    let formattedPrice = price.toFixed(2).replace(".", ",");
    container.innerHTML += createOrderCard(item, formattedPrice);
    }
  }
}

function updateBasket() {
  let basket = document.getElementById(`orderBasket`);
  basket.innerHTML = "";
  for (let i = 0; i < dishes.length; i++) {
    let price = parseFloat(prices[i]);
    let formattedPrice = price.toFixed(2).replace(".", ",");
    basket.innerHTML += createBasket(i, formattedPrice);
  }
}

function updateSum(){
  let orderSum = document.getElementById(`sum`);
  let totalSum = prices.reduce((acc, curr) => acc + parseFloat(curr), 0);
  let formattedTotalSum = totalSum.toFixed(2).replace(".", ",");
  orderSum.innerHTML = createSum(totalSum, formattedTotalSum);
  
}