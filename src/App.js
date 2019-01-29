import React, { Component } from "react";
import Form from "./components/Form.js";
import "./App.css";

class App extends Component {
  state = {
    recipes: []
  };

  getRecipe = async e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    const API_KEY = "e5943591c1f978e175091317f3b0f7a3";

    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken1`
    );

    const data = await api_call.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        {this.state.recipes.map(recipe => {
          return <p>{recipe.title}</p>;
        })}
      </div>
    );
  }
}

export default App;
