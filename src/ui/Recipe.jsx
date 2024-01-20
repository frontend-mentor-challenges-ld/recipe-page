import styled from "styled-components";

import RecipeHeader from "./RecipeHeader";
import RecipePreparation from "./RecipePreparation";
import RecipeIngredients from "./RecipeIngredients";
import RecipeInstructions from "./RecipeInstructions";
import RecipeNutrition from "./RecipeNutrition";

const StyledRecipe = styled.div`
  background-color: var(--white);
  padding: 3rem;
  border-radius: var(--border-radius);
`;

function Recipe() {
  return (
    <StyledRecipe>
      <RecipeHeader />
      <RecipePreparation />
      <RecipeIngredients />
      <RecipeInstructions />
      <RecipeNutrition />
    </StyledRecipe>
  );
}

export default Recipe;
