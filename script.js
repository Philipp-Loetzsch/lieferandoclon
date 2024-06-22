function showDishes() {
  let categories = ["soups", "salats", "fishes", "beefs", "porks", "noodles", "desserts", "drinks",];
  for (let i = 0; i < categories.length; i++) {
    let category = categories[i];
    let container = document.getElementById(`choose${category}`);
    let items = menus[category];
    container.innerHTML = "";
    
    for(let j = 0; j < items.length; j++){
    let item = items[j];
    container.innerHTML += createOrderCard(item);
    }
  }
}