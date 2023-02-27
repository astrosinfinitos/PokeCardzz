import { getRandomNumber } from "./modules/getRandomNumber.js";

const dom = {
  name: document.querySelector(".name"),
  boton: document.querySelector(".get-pokemon"),
  weight: document.querySelector(".weight"),
  height: document.querySelector(".height"),
  pokemonImg: document.querySelector(".pokemon-img"),
  types: document.querySelector(".types")
};

dom.boton.addEventListener("click", getRandomPokemon);

const URL = "https://pokeapi.co/api/v2/pokemon/";
const MAX_POKEMON = 151;

function getRandomPokemon() {
  const idPokemon = getRandomNumber(MAX_POKEMON);
  const url = URL + idPokemon + "/";
  fetch(url)
    .then(response => response.json())
    .then(data => handleData(data));
}

function handleData(data) {
  dom.name.textContent = data.name;
  dom.weight.textContent = data.weight / 10 + "kg";
  dom.height.textContent = data.height / 10 + "m";
  dom.pokemonImg.src = data.sprites.versions["generation-i"]["red-blue"].front_default;

  const pokemonTypes = data.types.map((pokemon) => pokemon.type.name);
  dom.types.innerHTML = "";
  pokemonTypes.forEach(pokemonType => {
    const divType = document.createElement("div");
    divType.classList.add("type");
    divType.textContent = pokemonType;
    dom.types.appendChild(divType);
  });
}
