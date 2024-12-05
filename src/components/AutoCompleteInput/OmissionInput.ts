import styled from "styled-components";
import { StyledInput } from "@components/shared/Input/Input";

interface ButtonProps {
  correct: boolean;
  incorrect: boolean;
}

export const Input = styled(StyledInput)<ButtonProps>`
  padding: 0;
  border: none;
  border-bottom: 2px var(--clr-n-cool-grey-6) solid;
  background: none;
  border-radius: 0;
  color: var(--clr-n-cool-grey-2);
  font-style: italic;

  min-width: 4px; /* Минимальная ширина */

  ${({ correct }) => correct && `background-color: var(--clr-accent__teal-9)`};
  ${({ correct }) =>
    correct && `border-bottom: 2px var(--clr-accent__teal-9) solid`};

  ${({ incorrect }) =>
    incorrect && `background-color: var(--clr-accent__pink-vivid-10)`};
  ${({ incorrect }) =>
    incorrect && `border-bottom: 2px var(--clr-accent__pink-vivid-10) solid`};
`;
