import React from "react";
import "../styling/Form.css";

const Form = props => (
  <form className="Form" onSubmit={props.getRecipe}>
    <input className="Input" type="text" name="recipeName" placeholder="What do you fancy?" />
    <br /> <button className="Button">I'm hungry, let's search!</button>
  </form>
);

export default Form;
