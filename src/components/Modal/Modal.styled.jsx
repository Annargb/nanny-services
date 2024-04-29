import styled from "styled-components";

export const ScrollContent = styled.div`
  max-width: 600px;
  width: 90%;
  height: 90%;
  max-height: 720px;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    overflow-y: auto;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
`;

export const CloseIcon = styled.svg`
  width: 20px;
  height: 20px;
  fill: ${({ $mobile }) => {
    switch ($mobile) {
      case true:
        return (p) => p.theme.colors.white;
      default:
        return (p) => p.theme.colors.black;
    }
  }};
  transition: fill 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    fill: ${(p) => p.theme.colors.green};
  }
`;
