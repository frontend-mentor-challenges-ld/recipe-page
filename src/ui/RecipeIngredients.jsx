import { useRecipe } from "../contexts/RecipeContext";
import Heading from "./Heading";
import { List, ListItem } from "./List";

function RecipeIngredients() {
  const { ingredients } = useRecipe();

  return (
    <div className="section-margin-tb section-border-bottom">
      <Heading $as="h2">Ingredients</Heading>
      <List className="sm-margin-bottom">
        {ingredients.map((ingredient, index) => (
          <ListItem key={index}>{ingredient}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default RecipeIngredients;
