import React, { useState } from "react"; 
  // Import React and useState hook from React library
import "./App.css"; 
  // Import CSS file for App component

import PokemonViewer from "../PokemonViewer"; 
  // Import PokemonViewer component from "../PokemonViewer" file

  const pokeImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png";


function App() { 
  // Define App component as a functional component
  const [id, setId] = useState(); 
    // Declare state variable 'id' and 'setId' function using useState hook, initially set to undefined

  function handleClick() { 
    // Define handleClick function, which will be called when button is clicked
    const id = Math.floor(Math.random() * 151) + 1;
      // Generate a random number between 1 and 151
    setId(id); 
      // Update the 'id' state variable with the generated random number
    console.log("handleClick works"); 
      // Log a message to the console to indicate that handleClick function is working
  }


  return (
    
  
    <div className="App"> 
      {/* Render a div element with class name 'App' */}
      <header>
        <img src={pokeImage} alt="Pokemon Logo" style={{width: "900px", height: "300px"}} />
      </header>
      
        {/* TODO: Task 2 - Call handleClick when button clicked ✅*/}
      <button onClick={handleClick}>Get Random Pokemon</button> 
        {/* Render a button element with text 'Get Random Pokemon' and onClick event handler set to handleClick function */}
  
        {/* TODO: Task 2 - Pass 'id' as a prop to PokemonViewer component ✅*/}
      <PokemonViewer id={id} /> 
        {/* Render PokemonViewer component and pass 'id' state variable as a prop named 'id' */}
  
    </div>
  );
  
}

export default App; // Export the App component as the default export for use in other files
