function saveLocal() {
    let dishesAsText = JSON.stringify(dishes);
    localStorage.setItem("dishes", dishesAsText);
    let pricesAsText = JSON.stringify(prices);
    localStorage.setItem("prices", pricesAsText);
    let amountsAsText = JSON.stringify(amounts);
    localStorage.setItem("amounts", amountsAsText);
    loadLocal();
  }
  
  function loadLocal() {
    let dishesAsText = localStorage.getItem("dishes");
    let pricesAsText = localStorage.getItem("prices");
    let amountsAsText = localStorage.getItem("amounts");
    if (dishesAsText && pricesAsText && amountsAsText) {
      dishes = JSON.parse(dishesAsText);
      prices = JSON.parse(pricesAsText);
      amounts = JSON.parse(amountsAsText);
    }
    updateBasket();
}