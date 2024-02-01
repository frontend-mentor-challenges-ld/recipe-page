import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import { RecipeProvider } from "./contexts/RecipeContext";

import Attribution from "./ui/Attribution";
import Recipe from "./ui/Recipe";

const StyledLayout = styled.main`
  margin: 10rem auto;
  width: 50%;

  @media only screen and (max-width: 50em) {
    width: 70%;
    margin: 5rem auto;
  }

  @media only screen and (max-width: 25em) {
    width: 100%;
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <RecipeProvider>
        <StyledLayout>
          <Recipe />
        </StyledLayout>
      </RecipeProvider>
      <Attribution />
    </>
  );
}

export default App;
