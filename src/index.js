import { addCardEffect } from "./modules/addCardEffect.js";
import { handleData } from "./modules/handleData.js";
import { getRandomPokemon } from "./modules/getRandomPokemon.js";

const dom = {
  boton: document.querySelector(".get-pokemon"),
  pokemonList: document.querySelector(".pokemon-list")
};

dom.boton.addEventListener("click", addNewCard);

async function addNewCard() {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon-card", "dark");
  pokemonCard.innerHTML += /* html */ `
    <img src="" alt="" class="pokemon-img">
    <div class="data">
      <h2 class="name">GolasBordas</h2>
      <div class="info">
        <div class="stats">
          <div class="height">2000m</div>
          <div class="weight">2kg</div>
        </div>
        <div class="types"></div>
      </div>
    </div>`;
  dom.pokemonList.appendChild(pokemonCard);
  const lastCard = document.querySelector(".pokemon-card:last-child");
  const card = {
    name: lastCard.querySelector(".name"),
    weight: lastCard.querySelector(".weight"),
    height: lastCard.querySelector(".height"),
    pokemonImg: lastCard.querySelector(".pokemon-img"),
    types: lastCard.querySelector(".types"),
    element: lastCard
  };

  const data = await getRandomPokemon(card); // nos guardamos la func en data para usarla abajo
  handleData(data, card);
  addCardEffect();
}
