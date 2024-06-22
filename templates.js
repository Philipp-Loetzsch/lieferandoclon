function order(i, contentSoups) {
  return /* html */ `   
    <div class="ordercard">
     <div class="dishcard">
         <h4><b> ${contentSoups["dish"]} </b></h4>
         <span>${contentSoups["description"]}</span>
         <h5><b>${contentSoups["price"]} €</b></h5>
     </div>
     <div><button onclick="addToBasket(i)">+</button></div>
  </div>`;
}
function order(i, contentSalats) {
  return /* html */ `   
    <div class="ordercard">
     <div class="dishcard">
         <h4><b> ${contentSalats["dish"]} </b></h4>
         <span>${contentSalats["description"]}</span>
         <h5><b>${contentSalats["price"]} €</b></h5>
     </div>
     <div><button onclick="addToBasket(i)">+</button></div>
  </div>`;
}
function order(i, contentFishes) {
  return /* html */ `   
    <div class="ordercard">
     <div class="dishcard">
         <h4><b> ${contentFishes["dish"]} </b></h4>
         <span>${contentFishes["description"]}</span>
         <h5><b>${contentFishes["price"]} €</b></h5>
     </div>
     <div><button onclick="addToBasket(i)">+</button></div>
  </div>`;
}
function order(i, contentBeefs) {
  return /* html */ `   
    <div class="ordercard">
     <div class="dishcard">
         <h4><b> ${contentBeefs["dish"]} </b></h4>
         <span>${contentBeefs["description"]}</span>
         <h5><b>${contentBeefs["price"]} €</b></h5>
     </div>
     <div><button onclick="addToBasket(i)">+</button></div>
  </div>`;
}
function order(i, contentPorks) {
  return /* html */ `   
    <div class="ordercard">
     <div class="dishcard">
         <h4><b> ${contentPorks["dish"]} </b></h4>
         <span>${contentPorks["description"]}</span>
         <h5><b>${contentPorks["price"]} €</b></h5>
     </div>
     <div><button onclick="addToBasket(i)">+</button></div>
  </div>`;
}
function order(i, contentNoodles) {
  return /* html */ `   
    <div class="ordercard">
     <div class="dishcard">
         <h4><b> ${contentNoodles["dish"]} </b></h4>
         <span>${contentNoodles["description"]}</span>
         <h5><b>${contentNoodles["price"]} €</b></h5>
     </div>
     <div><button onclick="addToBasket(i)">+</button></div>
  </div>`;
}
function order(i, contentDishes) {
  return /* html */ `   
    <div class="ordercard">
     <div class="dishcard">
         <h4><b> ${contentDishes["dish"]} </b></h4>
         <span>${contentDishes["description"]}</span>
         <h5><b>${contentDishes["price"]} €</b></h5>
     </div>
     <div><button onclick="addToBasket(i)">+</button></div>
  </div>`;
}
function order(i, contentDrinks) {
  return /* html */ `   
    <div class="ordercard">
     <div class="dishcard">
         <h4><b> ${contentDrinks["dish"]} </b></h4>
         <span>${contentDrinks["description"]}</span>
         <h5><b>${contentDrinks["price"]} €</b></h5>
     </div>
     <div><button onclick="addToBasket(i)">+</button></div>
  </div>`;
}
