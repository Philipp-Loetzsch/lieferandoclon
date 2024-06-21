function soupOrder(i,contentSoups) {
    return /* html */`   
    <div class="ordercard">
     <div class="dishcard">
         <h4><b> ${contentSoups["dish"]} </b></h4>
         <span>${contentSoups["description"]}</span>
         <h5><b>${contentSoups["price"]}</b></h5>
     </div>
     <div><button>+</button></div>
  </div>`;
}