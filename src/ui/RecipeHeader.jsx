import styled from "styled-components";
import Heading from "./Heading";
import RecipeImage from "./RecipeImage";
import { useRecipe } from "../contexts/RecipeContext";

const StyledRecipeDescription = styled.p`
  margin-top: 1rem;
  font-weight: 400;
  color: var(--brown);
`;

function RecipeHeader({ recipe }) {
  // const {
  //   recipeImage,
  //   recipeName,
  //   recipeDescription,
  //   preparaionTime: { total, preparation, cooking },
  //   ingredients,
  //   instructions,
  //   nutrition: { calories, carbs, protein, fat }
  // } = recipe;

  const { recipeImage, recipeName, recipeDescription } = useRecipe();

  return (
    <>
      <RecipeImage recipeImage={recipeImage} />
      <Heading $as="h1">{recipeName}</Heading>
      <StyledRecipeDescription>{recipeDescription}</StyledRecipeDescription>
    </>
  );
}

export default RecipeHeader;
