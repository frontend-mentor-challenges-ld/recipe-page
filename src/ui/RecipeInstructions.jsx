import styled from "styled-components";
import { useRecipe } from "../contexts/RecipeContext";
import Heading from "./Heading";
import { List, ListItem } from "./List";

const StyledSpan = styled.span`
  font-weight: 600;
`;

function RecipeInstructions() {
  const { instructions } = useRecipe();

  return (
    <div className="section-margin-tb section-border-bottom">
      <Heading $as="h2">Instructions</Heading>
      <List>
        {instructions.map((instruction, index) => (
          <ListItem key={index}>
            <StyledSpan>{instruction.split(":").shift()}:</StyledSpan>
            {instruction.split(":").pop()}
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default RecipeInstructions;
