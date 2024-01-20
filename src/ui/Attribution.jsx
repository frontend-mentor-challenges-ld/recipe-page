import styled from "styled-components";

const StyledAttribution = styled.div`
  font-family: var(--outfit);
  position: fixed;
  bottom: 0;

  background-color: #333333;
  width: 100%;
  padding: 2rem;
  color: var(--eggshell);

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: var(--raspberry-dark);
    font-family: inherit;
  }
`;

function Attribution() {
  return (
    <StyledAttribution className="attribution">
      <p>
        Challenge by&nbsp;
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer">
          Frontend Mentor
        </a>
        . Coded by&nbsp;
        <a href="https://github.com/lindseydortch">Lindsey Dortch&nbsp;</a>
        owner of&nbsp;<a href="https://alorscreative.com/">Alors Creative</a>.
      </p>
    </StyledAttribution>
  );
}

export default Attribution;
