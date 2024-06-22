function showDishes() {
  let soup = document.getElementById(`chooseSoups`);
  let salat = document.getElementById(`chooseSalats`);
  let fish = document.getElementById(`chooseFishes`);
  let beef = document.getElementById(`chooseBeefs`);
  let pork = document.getElementById(`choosePorks`);
  let noodle = document.getElementById(`chooseNoodles`);
  let dessert = document.getElementById(`chooseDesserts`);
  let drink = document.getElementById(`chooseDrinks`);
  soup.innerHTML = "";
  salat.innerHTML = "";
  fish.innerHTML = "";
  beef.innerHTML = "";
  pork.innerHTML = "";
  noodle.innerHTML = "";
  dessert.innerHTML = "";
  drink.innerHTML = "";
  for (let i = 0; i < soups.length; i++) {
    let contentsoup = soups[i];
    soup.innerHTML += order(i, contentsoup);
 };
}
