let menus = {
  soups: [
    {
      dish: ["Gemüsesuppe"],
      description: ["Suppe mit frischem Gemüse aus kontrolliertem Anbau"],
      price: [1.2],
    },
    {
      dish: ["Spargelcremesuppe"],
      description: ["Suppe aus frischem Spargel"],
      price: [3.2],
    },
  ],
  salats: [
    {
      dish: ["Gemischter Salat"],
      description: ["Blattsalat mit Tomate und Gurke"],
      price: [2.5],
    },
  ],
  fishes: [
    {
      dish: ["Lachsfilet"],
      description: ["Frisches Lachsfilet in Spinat-Rahmsoße"],
      price: [6.8],
    },
  ],
  beefs: [
    {
      dish: ["Rinderhacksteak"],
      description: [
        "Gehacktes Rindfleisch mit Kartoffeln, Gemüße und brauner Soße",
      ],
      price: [5.4],
    },
  ],
  porks: [
    {
      dish: ["Schweinebraten"],
      description: ["Bio-Schweinefleisch mit Kartoffeln und Gemüse"],
      price: [4.60],
    },
  ],
  noodles: [
    {
      dish: ["Nudeln mit Tomatensoße"],
      description: ["Spirelli mit Tomatensoße und Käse"],
      price: [1.5],
    },
  ],
  desserts: [
    {
      dish: ["Eis"],
      description: ["3 Kugeln Eis (Vanille, Schokolade und Erdbeere"],
      price: [2.3],
    },
  ],
  drinks: [
    {
      dish: ["Cola"],
      description: ["0,5l Flasche Cola"],
      price: [2.5],
    },
  ],
};

function showDishes() {
  let categories = ["soups", "salats", "fishes", "beefs", "porks", "noodles", "desserts", "drinks",];
  for (let i = 0; i < categories.length; i++) {
    let category = categories[i];
    let container = document.getElementById(`choose${category}`);
    let items = menus[category];
    container.innerHTML = "";
    
    for(let j = 0; j < items.length; j++){
    let item = items[j];
    container.innerHTML += createOrderCard(j, item);
    }
  }
}

function createOrderCard(j, item) {
  return /* html */ `
      <div class="ordercard">
        <div class="dishcard">
          <h4><b>${item.dish}</b></h4>
          <span>${item.description}</span>
          <h5><b>${item.price} €</b></h5>
        </div>
        <div><button onclick="addToBasket(${j})">+</button></div>
      </div>`;
}

function addToBasket(index) {
  // Funktion zum Hinzufügen zum Warenkorb
}
