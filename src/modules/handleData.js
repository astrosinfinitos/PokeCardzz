export function handleData(data, card) {
  // manejamos los datos de la api
  card.name.textContent = data.name;
  card.weight.textContent = data.weight / 10 + "kg";
  card.height.textContent = data.height / 10 + "m";
  card.pokemonImg.src = data.sprites.versions["generation-vi"]["x-y"].front_default;

  // manejamos los tipos de pokemon
  const pokemonTypes = data.types.map((pokemon) => pokemon.type.name);
  card.types.innerHTML = "";
  pokemonTypes.forEach(pokemonType => {
    const divType = document.createElement("div");
    divType.classList.add("type", "type-" + pokemonType);
    divType.textContent = pokemonType;
    card.types.appendChild(divType);
  });

  // añadimos el sonido a la carta
  card.element.addEventListener("click", () => {
    const idPaddingZero = data.id.toString().padStart(3, 0);
    const url = `sounds/${idPaddingZero}.mp3`;
    const audio = new Audio(url);
    audio.play();
  });
}
