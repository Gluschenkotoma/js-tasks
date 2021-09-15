const Handlebars = require("handlebars");
import pokemonTpl from "../templates/pockemon-card.hbs";

fetch("https://pokeapi.co/api/v2/pokemon/2")
  .then((response) => {
    return response.json();
  })
  .then((pockemon) => {
    console.log(pockemon);
    const murkup = pokemonTpl(pockemon); // разметка pokemonTpl, pockemon ответ сервера с response.json
    console.log(murkup);
  })
  .catch((error) => {
    console.log(error);
  });
