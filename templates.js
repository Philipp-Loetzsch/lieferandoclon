function createOrderCard(item) {
  let price = parseFloat(item.price)
  let formattedPrice = price.toFixed(2).replace('.', ',');
  return /* html */ `
      <div class="ordercard">
        <div class="dishcard">
          <h4><b>${item.dish}</b></h4>
          <span>${item.description}</span>
          <h5><b>${formattedPrice} €</b></h5>
        </div>
        <div><button onclick="addToBasket('${item.dish}')">+</button></div>
      </div>`;
}

function addToBasket() {
  let basket = document.getElementById(`orderBasket`);
  basket.innerHTML += /* html */ `
            <div>
            <div>${item.dish}</div>
            <div>${item.price}</div>
            <div>Anzahl</div>
            <div>
            <button>+</button>
            <button>-</button>
            <button>trash</button>
            </div>
            </div>`;
}
