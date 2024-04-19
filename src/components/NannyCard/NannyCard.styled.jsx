import styled from "styled-components";

export const CardWrapper = styled.li`
  display: flex;
  gap: 24px;
  width: 1184px;
  ///
  min-height: 318px;
  border-radius: 24px;
  padding: 24px;
  margin-bottom: 32px;
  background-color: ${(p) => p.theme.colors.white};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border: 2px solid ${(p) => p.theme.colors.avatarBorder};
  border-radius: 30px;
`;

export const AvatarActive = styled.span`
  position: absolute;
  top: 9px;
  right: 9px;
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background-color: ${(p) => p.theme.colors.white};

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    right: 2px;
    display: block;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: ${(p) => p.theme.colors.activeGreen};
  }
`;

export const AvatarPhoto = styled.img`
  border-radius: 15px;
  width: 96px;
  height: 96px;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 992px;
  margin-bottom: 8px;
`;

export const NannyTitle = styled.h3`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.textGray};
`;

export const LocationRaitingWrapper = styled.ul`
  display: flex;
  gap: 16px;
`;

export const TitleButtonWrapper = styled.div`
  display: flex;
  gap: 48px;
  align-items: center;
`;

export const IconMap = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
  fill: ${(p) => p.theme.colors.black};
`;

export const TextWrapper = styled.li`
  display: flex;
  align-items: center;
  /* flex-shrink: 0; */
  /* gap: 8px; */

  /* &:nth-child(-n + 2) {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 2px;
      width: 2px;
      height: 16px;
      background-color: ${(p) => p.theme.colors.textBorder};
    }
  } */

  /* padding-right: 16px; */
  /* border-right: 1px solid ${(p) => p.theme.colors.textBorder}; */
`;

export const TextDelimiter = styled.span`
  display: inline-block;
  flex-shrink: 0;
  width: 2px;
  height: 16px;
  margin-left: 16px;
  background-color: ${(p) => p.theme.colors.textBorder};
`;

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.black};
`;

export const AccentText = styled.span`
  color: ${(p) => p.theme.colors.activeGreen};
`;

export const IconStar = styled.svg`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

export const Name = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1;
  margin-bottom: 24px;
  color: ${(p) => p.theme.colors.black};
`;

export const About = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${(p) => p.theme.colors.textGrayColor};

  margin-bottom: ${({ $biggerMargin }) => {
    switch ($biggerMargin) {
      case true:
        return "48px";
      default:
        return "14px";
    }
  }};
`;

export const ReadMore = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  color: ${(p) => p.theme.colors.black};
`;

export const HeartButton = styled.button`
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconHeart = styled.svg`
  width: 26px;
  height: 22px;
  fill: ${(p) => p.theme.colors.black};
  transition: fill 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    fill: ${(p) => p.theme.colors.green};
  }
`;

export const PressedHeart = styled(IconHeart)`
  fill: ${(p) => p.theme.colors.green};
`;

export const AppointmentButton = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.white};
  border-radius: 30px;
  padding: 14px 26px;
  border: 1px solid;
  border-color: ${(p) => p.theme.colors.green};
  background-color: ${(p) => p.theme.colors.green};
  width: 215px;
  transition:
    color 250ms ${(p) => p.theme.transition},
    background-color 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.green};
    background-color: ${(p) => p.theme.colors.white};
  }
`;
