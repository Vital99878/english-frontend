import styled from 'styled-components'
import { StyledInput } from '@components/shared/Input/Input'

interface ButtonProps {
    correct: boolean
    incorrect: boolean
}

export const AnswerInput = styled(StyledInput)<ButtonProps>`
    padding: 0;
    height: 1.2em;
    border: none;
    border-bottom: 2px var(--clr-n-cool-grey-6) solid;
    background: none;
    border-radius: 0;
    font-style: italic;

    min-width: 4px; /* Минимальная ширина */

    ${({ correct }) => correct && `background-color: var(--clr-accent__teal-9)`};
    ${({ correct }) => correct && `border-bottom: 2px var(--clr-accent__teal-9) solid`};

    ${({ incorrect }) => incorrect && `background-color: var(--clr-accent__pink-vivid-10)`};
    ${({ incorrect }) => incorrect && `border-bottom: 2px var(--clr-accent__pink-vivid-10) solid`};

    @media (min-width: 320px) {
        font-size: 1.5rem /* 24px */;
        line-height: 2rem /* 32px */;
    }
    @media (min-width: 640px) {
        font-size: 1.25rem /* 20px */;
        line-height: 1.75rem /* 28px */;
    }
`
