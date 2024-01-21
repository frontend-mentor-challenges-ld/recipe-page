import styled from "styled-components";

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: var(--border-radius);
  margin-bottom: 2rem;

  @media only screen and (max-width: 25em) {
    border-radius: 0;
    /* margin: -3rem; */
    /* overflow: visible; */
    display: inline-block;
    margin-top: -3rem;
    margin-left: -3rem;
    margin-right: -3rem;
    width: 100vw;
  }
`;

function RecipeImage({ recipeImage }) {
  return (
    <>
      <StyledImg src={recipeImage} />
    </>
  );
}

export default RecipeImage;
