import React, { useState } from 'react';

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

  const searchRecipes = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/search?apiKey=${API_KEY}&query=${query}&number=10`);
    const data = await response.json();
    setRecipes(data.results);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  };

  return (
    <div>
      <h1>Recipes</h1>
      <form onSubmit={handleSubmit}>
        <label>Your Taste: </label>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
      {recipes.map((recipe) => (
    <div key={recipe.id}>
        <h2>{recipe.title}</h2>
        <img  src={`https://spoonacular.com/recipeImages/${recipe.image}`} alt={recipe.title} height="200" width="300"/>
        <p >Recipe Name: {recipe.title}</p>
    </div>
))}
     
    </div>
  );
}

export default App;
