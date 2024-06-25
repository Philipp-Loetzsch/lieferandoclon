function toggleEmptyBasket() {
  let orderSum = document.getElementById(`sum`);
  let orderResponsiveSum = document.getElementById(`responsiveSum`);
  let emptyBasket = document.getElementById(`emptyBasket`);
  let emptyBasketResponsive = document.getElementById(`emptyBasketResponsive`);
  let isEmpty = dishes.length == 0;

  orderSum.classList.toggle("d-none", isEmpty);
  orderResponsiveSum.classList.toggle("d-none", isEmpty);
  emptyBasket.classList.toggle("d-none", !isEmpty);
  emptyBasket.classList.toggle("d-flex", isEmpty);
  emptyBasketResponsive.classList.toggle("d-none", !isEmpty);
  emptyBasketResponsive.classList.toggle("d-flex", isEmpty);

  if (!isEmpty) {
    updateSum(orderSum, orderResponsiveSum);
  }
}

function toggleResponsiveBasket(){
  let toolgeResponsiveBasket = document.getElementById(`responsiveBasket`);
  toolgeResponsiveBasket.classList.toggle("d-none");
  toolgeResponsiveBasket.classList.toggle("d-flex");
  updateBasket();
  hideOrderDoneRepo();
}

function showOrderDone(){
  document.getElementById(`orderDone`).classList.remove("d-none")
  document.getElementById(`orderDone`).classList.add("d-flex")
  showOrderDoneRepo();
}

function hideOrderDone(){
  document.getElementById(`orderDone`).classList.remove("d-flex")
  document.getElementById(`orderDone`).classList.add("d-none")
  hideOrderDoneRepo();
}
function showOrderDoneRepo(){
  document.getElementById(`orderDoneRepo`).classList.remove("d-none")
  document.getElementById(`orderDoneRepo`).classList.add("d-flex")
}

function hideOrderDoneRepo(){
  document.getElementById(`orderDoneRepo`).classList.remove("d-flex")
  document.getElementById(`orderDoneRepo`).classList.add("d-none")
}