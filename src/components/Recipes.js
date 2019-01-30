import React from 'react';

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
              <p>Source: {recipe.publisher}</p>
              <p>Social Ranking: {recipe.social_rank}</p>
              <a href={recipe.source_url}>go to recipe!</a>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

export default Recipes;