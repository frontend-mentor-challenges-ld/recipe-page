import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --nutmeg: hsl(14, 45%, 36%);
    --dark-raspberry: hsl(332, 51%, 32%);
    --white: hsl(0, 0%, 100%);
    --rose-white: hsl(330, 100%, 98%);
    --eggshell: hsl(30, 54%, 90%);
    --light-grey: hsl(30, 18%, 87%);
    --brown: hsl(30, 10%, 34%);
    --dark-charcoal: hsl(24, 5%, 18%);

    --young-serif: 'Young Serif', serif;
    --outfit: 'Outfit', sans-serif;

    --border-radius: 1rem;
  }

  *, 
  *::before,
  *::after {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-size: 1.6rem;
    font-family: var(--outfit);
    background-color: var(--eggshell);
    color: var(--brown);
    line-height: 1.5;
  }

  a {
    text-decoration: none;
  }

  .section-margin-tb {
    margin: 2rem 0;
  }

  .sm-margin-bottom {
    margin-bottom: 3rem;
  }

  .section-border-bottom {
    border-bottom: 1px solid var(--light-grey);
  }

`;

export default GlobalStyles;
