import styled from "styled-components";

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 992px;
  width: 100%;
  margin-bottom: 8px;
  padding-right: 74px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
`;

export const NannyTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.textGray};
`;

export const TitleWrapper = styled.div`
  display: flex;
  gap: 48px;
  align-items: center;
`;

export const LocationRaitingWrapper = styled.ul`
  display: flex;
  gap: 32px;

  @media screen and (max-width: 635px) {
    flex-direction: column;
    gap: 4px;
  }
`;

export const TextWrapper = styled.li`
  position: relative;
  display: flex;
  align-items: center;

  &.pseudo {
    &::before {
      content: "";
      position: absolute;
      display: inline-block;
      width: 2px;
      height: 16px;
      top: 50%;
      transform: translateY(-50%);
      left: -16px;
      background-color: ${(p) => p.theme.colors.textBorder};

      @media screen and (max-width: 635px) {
        display: none;
      }
    }
  }
`;

export const IconMap = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  fill: ${(p) => p.theme.colors.black};
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.black};
`;

export const IconStar = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const AccentText = styled.span`
  color: ${(p) => p.theme.colors.activeGreen};
`;
