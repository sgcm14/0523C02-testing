// Cargar el archivo JSON desde la API
import fetch from 'node-fetch';
const apiUrl = 'https://pokeapi.co/api/v2/ability/';

async function fetchAbilityData() {
  try {
    const response = await fetch(apiUrl);
    if (response.ok) {
      const data = await response.json();
      // console.log(data); // Imprimir la respuesta de la API
      return data;
    } else {
      throw new Error('Error al obtener los datos');
    }
  } catch (error) {
    console.error(error);
  }
}

// Función para buscar un Pokemon por nombre
async function buscarPokemon(nombre) {
  const data = await fetchAbilityData();
  const pokemons = data.results;

  // Usando el método find de arreglos y una arrow function
  const pokemonEncontrado = pokemons.find((pokemon) => pokemon.name === nombre);

  if (pokemonEncontrado) {
    console.log(`¡Éxito! Se encontró el Pokemon ${nombre}`);
    console.log(`URL: ${pokemonEncontrado.url}`);
  } else {
    console.log(`Advertencia: No se encontró el Pokemon ${nombre}`);
  }
}

// Llamar a la función para buscar un Pokemon
buscarPokemon('pikachu');
