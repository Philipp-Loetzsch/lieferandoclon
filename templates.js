function createOrderCard(item, formattedPrice) {
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

function createBasket(i, formattedPrice) {
  return /* html */ `
      <div class="basket-content">
        <div> <b>${amounts[i]}</b> </div>
        <div> <b> ${dishes[i]}</b> </div>
        <div>${formattedPrice} €</div>
      </div>
        <div class="btn-basket">
          <button onclick="removeDishFromBasket('${dishes[i]}')"><img src="./assets/img/trash.png" alt="trash"></button>
          <button onclick="removeFromBasket('${dishes[i]}', ${prices[i] / amounts[i]})">-</button>
          <div>x ${amounts[i]}</div>
          <button onclick="addToBasket('${dishes[i]}', ${prices[i] / amounts[i]})">+</button>
        </div>
       `;
}

function createSum(totalSum, formattedTotalSum) {
  return /* html */ ` 
  <div class="sum">
  <div> <span>Zwischensumme:</span> <div>${formattedTotalSum}€</div></div>
     <div> <span>Lieferkosten:</span> <span>1,50€</span></div>
     <div> <span>Gesamtpreis:</span> <div>${(totalSum+1.50)}€</div> </div>
  </div>`;
}
