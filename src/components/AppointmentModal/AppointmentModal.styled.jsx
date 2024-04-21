import styled from "styled-components";

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
`;

export const CloseIcon = styled.svg`
  width: 20px;
  height: 20px;
  transition: fill 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    fill: ${(p) => p.theme.colors.green};
  }
`;
