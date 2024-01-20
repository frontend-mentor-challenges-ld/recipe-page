import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${props =>
    props.$as === "h1" &&
    css`
      font-size: 4rem;
      color: var(--dark-charcoal);
    `}

  ${props =>
    props.$as === "h2" &&
    css`
      font-size: 2.8rem;
      color: var(--nutmeg);
    `}

    ${props =>
    (props.$as === "h1" || props.$as === "h2") &&
    css`
      font-family: var(--young-serif);
      font-weight: 400;
    `}

    ${props =>
    props.$as === "h3" &&
    css`
      font-size: 2rem;
      font-family: var(--outfit);
      color: var(--dark-raspberry);
    `}
`;

export default Heading;
