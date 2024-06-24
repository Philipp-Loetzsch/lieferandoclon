function toggleEmptyBasket() {
  let orderSum = document.getElementById(`sum`);
  let orderResponsiveSum = document.getElementById(`responsiveSum`);
  let emptybasket = document.getElementById(`emptyBasket`);
  let emptyBasketResponsive = document.getElementById(`emptyBasketResponsive`);
  if (dishes.length == 0) {
    orderSum.classList.add("d-none");
    emptybasket.classList.remove("d-none");
    emptybasket.classList.add("d-flex");
    orderResponsiveSum.classList.add("d-none")
    emptyBasketResponsive.classList.remove("d-none");
    emptyBasketResponsive.classList.add("d-flex");
    return;
  }
  orderResponsiveSum.classList.remove("d-none")
  emptyBasketResponsive.classList.add("d-none");
  emptyBasketResponsive.classList.remove("d-flex");
  orderSum.classList.remove("d-none");
  emptybasket.classList.add("d-none");
  emptybasket.classList.remove("d-flex");
  updateSum(orderSum, orderResponsiveSum);
}

function toggleResponsiveBasket(){
  let toolgeResponsiveBasket = document.getElementById(`responsiveBasket`);
  toolgeResponsiveBasket.classList.toggle("d-none");
  toolgeResponsiveBasket.classList.toggle("d-flex");
  updateBasket();
}