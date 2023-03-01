import { getRandomNumber } from "./getRandomNumber.js";

const URL = "https://pokeapi.co/api/v2/pokemon/";
const MAX_POKEMON = 151;

export async function getRandomPokemon(card) { // es asíncrona
  const idPokemon = getRandomNumber(MAX_POKEMON);
  const url = URL + idPokemon + "/";
  const response = await fetch(url);
  const data = await response.json();
  return data;
//   fetch(url)
//     .then(response => response.json())
//     .then(data => handleData(data, card));
}
