function createOrderCard(j, item) {
  return /* html */ `
      <div class="ordercard">
        <div class="dishcard">
          <h4><b>${item.dish}</b></h4>
          <span>${item.description}</span>
          <h5><b>${item.price} €</b></h5>
        </div>
        <div><button onclick="addToBasket(${j})">+</button></div>
      </div>`;
}

function addToBasket(index) {
  // Funktion zum Hinzufügen zum Warenkorb
}
