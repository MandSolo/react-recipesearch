import React from 'react';
import "../styling/Recipes.css"

const Recipes = props => (
    <div className="recipe-container">
    {props.recipes.map((recipe) => {
      return (
        <div key={recipe.recipe_id}>
          <div className="recipe-viewer">
            <img
              className="recipe-viewer-img"
              src={recipe.image_url}
              alt="{recipe.title}"
            />
            <div className="recipe-viewer-text">
              <h2>{recipe.title}</h2>
              <p>Recipe Source: {recipe.publisher}</p>
              <p>Social Ranking: {recipe.social_rank}%</p>
              <a href={recipe.source_url}> Sounds tasty! Click here to cook this... </a>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

export default Recipes;