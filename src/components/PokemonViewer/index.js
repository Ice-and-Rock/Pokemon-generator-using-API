import { useEffect, useState } from "react"; 
  // Import useEffect and useState hooks from React library

const pokeImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png";

function PokemonViewer({ id }) { 
    // Define PokemonViewer as a function and uses 'id' from props
  const [pokemonData, setPokemonData] = useState(null); 
    // Declare state variable 'pokemonData' and 'setPokemonData' function using useState hook, initially set to null

  useEffect(() => { 
    // Use useEffect hook to handle side effect (fetching data) on component mount and when 'id' prop changes
    async function fetchPokemon() { 
      // Declare an asynchronous function named fetchPokemon
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, 
        { // Fetch data from PokeAPI with the given 'id' prop value as part of the URL
        headers: { accept: "application/json" }, 
          // Set request headers with 'accept' property set to "application/json"
      });

      const data = await response.json(); 
        // Parse the response to JSON format
      setPokemonData(data); 
        // Update the 'pokemonData' state variable with the fetched data
    }
    fetchPokemon(); 
      // Call fetchPokemon function to initiate data fetching when component mounts or when 'id' prop changes
  
    }, [id]); 
    // Define dependency array with 'id' as its only item, so that the effect only runs when 'id' prop changes

  return (

<div className="pokemon-viewer">
      {pokemonData && (
        <>
        
          <h2 style={{ fontFamily: 'Comic Sans MS' }}>{pokemonData.name}</h2>
        {/* Displays name in FONT Comic Sans! */}
          <h3>Game index: {pokemonData.id}</h3>
        {/* Displays game index */}
          <h4> Base Experience: {pokemonData.base_experience}</h4>
        {/* Displays base Exp. */}
          <h5> Base HP: {pokemonData.stats[0].base_stat}</h5>
        {/* Displays base HP */}
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} style={{width: "300px", height: "300px"}} />
        {/* Displays image of pokemon  with SIZE correction */} 
        </>
        
      )}
    </div>
  
)} ;

export default PokemonViewer;
