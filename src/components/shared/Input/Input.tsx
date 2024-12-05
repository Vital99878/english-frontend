import styled from 'styled-components';

export const StyledInput = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s, box-shadow 0.3s;

    /* Состояние hover */

    //&:hover {
    //    border-color: #b32121;
    //}

    /* Состояние focus */

    &:focus {
        border-color: #4A90E2;
    }

    /* Состояние disabled */

    &:disabled {
        background-color: #f5f5f5;
        border-color: #ddd;
        color: #aaa;
        cursor: not-allowed;
    }

    /* Состояние readonly */

    &[readonly] {
        background-color: #f9f9f9;
        border-color: #e0e0e0;
        color: #666;
        cursor: default;
    }

    /* Состояние valid */

    //&:valid {
    //    border-color: #28a745;
    //}

    /* Состояние invalid */

    &:invalid {
        border-color: #dc3545;
    }

    /* Состояние required */

    &:required {
        border-style: dashed;
    }

    /* Стилизация placeholder */

    &::placeholder {
        color: #aaa;
        font-style: italic;
    }
`;


export const AutoWidthInput = styled.input<{textWidth: number}>`
  font-size: 16px;
  //padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;

  /* Скрываем input для расчета ширины */
  width: ${(props) => props.textWidth}px;
  min-width: 4px; /* Минимальная ширина */
`;


