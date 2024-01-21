import styled from "styled-components";
import Heading from "./Heading";
import RecipeImage from "./RecipeImage";
import { useRecipe } from "../contexts/RecipeContext";

const StyledRecipeDescription = styled.p`
  margin-top: 1rem;
  font-weight: 400;
  color: var(--brown);
`;

function RecipeHeader() {
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
