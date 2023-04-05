import React, { Component } from 'react';

class RecipeList extends Component {
  state = {
    recipes: []
  };

  componentDidMount() {
    fetch('https://api.spoonacular.com/recipes/random?number=10&apiKey=c1700f4cf294466586e6453fac2e66a1')
      .then(response => response.json())
      .then(data => {
        this.setState({
          recipes: data.recipes
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const { recipes } = this.state;

    return (
      <div>
        <h1>Recipes</h1>
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id}>
              <h2>{recipe.title}</h2>
              <img src={recipe.image} alt={recipe.title} />
              <p>{recipe.summary}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RecipeList;
