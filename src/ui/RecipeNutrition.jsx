import styled, { css } from "styled-components";
import Heading from "./Heading";
import { useRecipe } from "../contexts/RecipeContext";

const NutritionHeadline = styled.p`
  margin-top: 2rem;
`;

const NutritionTable = styled.div``;

const NutritionRow = styled.div`
  padding: 1rem 0;
  display: flex;

  ${props =>
    props.$hasBorderBottom === true &&
    css`
      border-bottom: 1px solid var(--light-grey);
    `}
`;

const NutritionInfoLabel = styled.p`
  padding-left: 4rem;
  flex-basis: 50%;
`;

const NutritionInfo = styled.p`
  font-weight: 600;
  color: var(--nutmeg);
`;

function RecipeNutrition() {
  const {
    nutrition: { calories, carbs, protein, fat }
  } = useRecipe();

  return (
    <div className="section-margin-tb">
      <Heading $as="h2">Nutrition</Heading>
      <NutritionHeadline>
        The table below shows nutritional values per serving without the
        additional fillings.
      </NutritionHeadline>
      <NutritionTable>
        <NutritionRow $hasBorderBottom={true}>
          <NutritionInfoLabel>Calories</NutritionInfoLabel>
          <NutritionInfo>{calories}kcal</NutritionInfo>
        </NutritionRow>
        <NutritionRow $hasBorderBottom={true}>
          <NutritionInfoLabel>Carbs</NutritionInfoLabel>
          <NutritionInfo>{calories}g</NutritionInfo>
        </NutritionRow>
        <NutritionRow $hasBorderBottom={true}>
          <NutritionInfoLabel>Protein</NutritionInfoLabel>
          <NutritionInfo>{calories}g</NutritionInfo>
        </NutritionRow>
        <NutritionRow>
          <NutritionInfoLabel>Fat</NutritionInfoLabel>
          <NutritionInfo>{calories}g</NutritionInfo>
        </NutritionRow>
      </NutritionTable>
    </div>
  );
}

export default RecipeNutrition;
