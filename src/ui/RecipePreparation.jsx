import styled from "styled-components";
import Heading from "./Heading";
import { useRecipe } from "../contexts/RecipeContext";
import { List, ListItem } from "./List";

const StyledRecipePreparation = styled.div`
  background-color: var(--rose-white);
  margin-top: 2rem;
  border-radius: var(--border-radius);
  padding: 2rem;
`;

const Span = styled.span`
  font-weight: 600;
`;

function RecipePreparation() {
  const {
    preparaionTime: { total, preparation, cooking }
  } = useRecipe();

  return (
    <StyledRecipePreparation>
      <Heading $as="h3">Preparation Time</Heading>
      <List>
        <ListItem>
          <Span>Total:&nbsp;</Span>
          {total}
        </ListItem>
        <ListItem>
          <Span>Preparation:&nbsp;</Span>
          {preparation}
        </ListItem>
        <ListItem>
          <Span>Cooking:&nbsp;</Span>
          {cooking}
        </ListItem>
      </List>
    </StyledRecipePreparation>
  );
}

export default RecipePreparation;
