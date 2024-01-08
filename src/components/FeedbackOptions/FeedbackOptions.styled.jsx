import styled from '@emotion/styled';

export const BtnContainer = styled.div`
  display: flex;
  justify-content: space-around;
  box-shadow: 0px 0px 36px 5px var(--background2) inset,
    0px 0px 26px 5px var(--accent2);
  border-radius: 26px;
  background-color: var(--background1);
  padding: 16px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 6px;
  border: none;
  outline: none;

  background-color: var(--accent1);
  box-shadow: 0px 0px 20px 10px var(--accent2) inset,
    0px 0px 10px 7px var(--accent2);
  color: white;
  text-transform: capitalize;
  transition: all 0.4s ease;
  &:hover,
  &:focus {
    background-color: var(--accent2);
    box-shadow: 0px 0px 18px 5px var(--accent1) inset,
      0px 0px 8px 5px var(--accent1);
    cursor: pointer;
    transition: all 0.4s ease;
  }
`;
