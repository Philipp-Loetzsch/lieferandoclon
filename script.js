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
    let contentSoups = soups[i];
    soup.innerHTML += order(i, contentSoups);
 };
 for (let i = 0; i < salats.length; i++) {
  let contentSalats = salats[i];
  salat.innerHTML += order(i, contentSalats);
};
 for (let i = 0; i < fishes.length; i++) {
  let contentFishes = fishes[i];
  fish.innerHTML += order(i, contentFishes);
};
 for (let i = 0; i < beefs.length; i++) {
  let contentBeefs = beefs[i];
  beef.innerHTML += order(i, contentBeefs);
};
 for (let i = 0; i < porks.length; i++) {
  let contentPorks = porks[i];
  pork.innerHTML += order(i, contentPorks);
};
 for (let i = 0; i < noodles.length; i++) {
  let contentNoodles = noodles[i];
  noodle.innerHTML += order(i, contentNoodles);
};
 for (let i = 0; i < desserts.length; i++) {
  let contentDesserts = desserts[i];
  dessert.innerHTML += order(i, contentDesserts);
};
 for (let i = 0; i < drinks.length; i++) {
  let contentDrinks = drinks[i];
  drink.innerHTML += order(i, contentDrinks);
};
}
