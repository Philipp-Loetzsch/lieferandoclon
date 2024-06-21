function order(i, contentMenu) {
  return /* html */ `   
    <div class="ordercard">
     <div class="dishcard">
         <h4><b> ${contentMenu[i].dish} </b></h4>
         <span>${contentMenu["description"]}</span>
         <h5><b>${contentMenu["price"]} €</b></h5>
     </div>
     <div><button onclick="addToBasket(i)">+</button></div>
  </div>`;
}
