import { getRandomNumber } from "./modules/getRandomNumber.js";
import { addCardEffect } from "./modules/addCardEffect.js";

const dom = {
  boton: document.querySelector(".get-pokemon"),
  pokemonList: document.querySelector(".pokemon-list")
};

dom.boton.addEventListener("click", addNewCard);

const URL = "https://pokeapi.co/api/v2/pokemon/";
const MAX_POKEMON = 151;

function getRandomPokemon(card) {
  const idPokemon = getRandomNumber(MAX_POKEMON);
  const url = URL + idPokemon + "/";
  fetch(url)
    .then(response => response.json())
    .then(data => handleData(data, card));
}

function handleData(data, card) {
  card.name.textContent = data.name;
  card.weight.textContent = data.weight / 10 + "kg";
  card.height.textContent = data.height / 10 + "m";
  card.pokemonImg.src = data.sprites.versions["generation-vi"]["x-y"].front_default;

  const pokemonTypes = data.types.map((pokemon) => pokemon.type.name);
  card.types.innerHTML = "";
  pokemonTypes.forEach(pokemonType => {
    const divType = document.createElement("div");
    divType.classList.add("type");
    divType.textContent = pokemonType;
    card.types.appendChild(divType);
  });
}

function addNewCard() {
  dom.pokemonList.innerHTML += /* html */ `
  <div class="pokemon-card dark">
    <img src="" alt="" class="pokemon-img">
    <div class="data">
      <h2 class="name">GolasBordas</h2>
      <div class="info">
        <div class="height">2000m</div>
        <div class="weight">2kg</div>
        <div class="types"></div>
      </div>
    </div>
  </div>`;
  const lastCard = document.querySelector(".pokemon-card:last-child");
  const card = {
    name: lastCard.querySelector(".name"),
    weight: lastCard.querySelector(".weight"),
    height: lastCard.querySelector(".height"),
    pokemonImg: lastCard.querySelector(".pokemon-img"),
    types: lastCard.querySelector(".types")
  };

  getRandomPokemon(card);
  addCardEffect();
}
