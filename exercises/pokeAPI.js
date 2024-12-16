export async function getPokemonList() {
  // TODO
const repsonse = await fetch('https://pokeapi.co/api/v2/pokemon');

const data = await repsonse.json();
return data.results.map(pokemon => pokemon.name);
}
