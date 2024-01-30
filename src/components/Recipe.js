import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";
import React from "react";

// export default function Recipe({ name, ingredients, steps }) {}
const Recipe = ({ name, ingredients, steps }) => (
  <section id={name.toLowerCase().replace(/ /g, "-")}>
    <h1>{name}</h1>
    <IngredientsList list={ingredients} />
    <Instructions title="Cooking Instructions" steps={steps} />
  </section>
);

Recipe.displayName = "Recipe";

export default Recipe;
