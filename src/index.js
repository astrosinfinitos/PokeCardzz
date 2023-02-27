const boton = document.querySelector(".get-pokemon");
boton.addEventListener("click", getRandomPokemon);

const URL = "https://pokeapi.co/api/v2/pokemon/";
const MAX_POKEMON = 151;

function getRandomNumber(maxNumber) {
  return 1 + Math.floor(Math.random() * maxNumber);
}

function getRandomPokemon() {
  const idPokemon = getRandomNumber(MAX_POKEMON);
  const url = URL + idPokemon + "/";
  fetch(url)
    .then(response => response.json())
    .then(data => handleData(data));
}

function handleData(data) {
  const name = document.querySelector(".name");
  name.textContent = data.name;

  const weight = document.querySelector(".weight");
  weight.textContent = data.weight / 10 + "kg";

  const height = document.querySelector(".height");
  height.textContent = data.height / 10 + "m";

  const pokemonImg = document.querySelector(".pokemon-img");
  pokemonImg.src = data.sprites.versions["generation-i"]["red-blue"].front_default;

  const types = document.querySelector(".types");
  const pokemonTypes = data.types.map((pokemon) => pokemon.type.name);
  types.innerHTML = "";
  pokemonTypes.forEach(pokemonType => {
    const divType = document.createElement("div");
    divType.classList.add("type");
    divType.textContent = pokemonType;
    types.appendChild(divType);
  });
}
