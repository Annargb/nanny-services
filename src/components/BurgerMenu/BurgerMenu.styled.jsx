import styled from "styled-components";

export const ButtonMenu = styled.button`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  padding: 0;

  background-color: inherit;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
  @media screen and (min-width: 769px) {
    width: 32px;
    height: 32px;
    display: none;
  }
`;
export const IconBurgerMenu = styled.svg`
  width: 24px;
  height: 24px;
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
  }

  fill: ${(p) => p.theme.colors.white};
`;
