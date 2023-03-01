import VanillaTilt from "vanilla-tilt";

export const addCardEffect = () => {
  const allCards = document.querySelectorAll(".pokemon-card");
  VanillaTilt.init(allCards, {
    glare: true,
    "max-glare": 0.20,
    speed: 900
  });
};
