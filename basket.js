let dishes = [];
let prices = [];
let amounts = [];

function addToBasket(dish, price) {
    let index = dishes.indexOf(dish);
    if (index == -1) {
      dishes.push(dish);
      prices.push(price);
      amounts.push(1);
    } else if(amounts[index] >= 9){
        return alert("Maximale Anzahl von Bestellungen erreicht");
    } 
      prices[index] += price;
      amounts[index] += 1;
      saveLocal();
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
      saveLocal();
    }
  }
  
  function removeDishFromBasket(dish) {
    let index = dishes.indexOf(dish);
    if (index != -1) {
      dishes.splice(index, 1);
      prices.splice(index, 1);
      amounts.splice(index, 1);
      saveLocal();
    }
  }