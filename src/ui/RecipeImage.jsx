import styled from "styled-components";

const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: var(--border-radius);
  margin-bottom: 2rem;
`;

function RecipeImage({ recipeImage }) {
  return (
    <>
      <StyledImg src={recipeImage} />
    </>
  );
}

export default RecipeImage;
