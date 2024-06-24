function toggleEmptyBasket() {
  let orderSum = document.getElementById(`sum`);
  let emptybasket = document.getElementById(`emptyBasket`);
  if (dishes.length == 0) {
    orderSum.classList.add("d-none");
    emptybasket.classList.remove("d-none");
    emptybasket.classList.add("d-flex")
    return;
  }
  orderSum.classList.remove("d-none");
  emptybasket.classList.add("d-none");
  emptybasket.classList.remove("d-flex")
  updateSum(orderSum);
}
