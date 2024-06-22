function order(i, contentSoup) {
  return /* html */ `   
    <div class="ordercard">
     <div class="dishcard">
         <h4><b> ${contentSoup["dish"]} </b></h4>
         <span>${contentSoup["description"]}</span>
         <h5><b>${contentSoup["price"]} €</b></h5>
     </div>
     <div><button onclick="addToBasket(i)">+</button></div>
  </div>`;
}
function order(i, contentSalat) {
  return /* html */ `   
    <div class="ordercard">
     <div class="dishcard">
         <h4><b> ${contentSalat["dish"]} </b></h4>
         <span>${contentSalat["description"]}</span>
         <h5><b>${contentSalat["price"]} €</b></h5>
     </div>
     <div><button onclick="addToBasket(i)">+</button></div>
  </div>`;
}
