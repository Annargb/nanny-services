import { Link } from "react-router-dom";
import styled from "styled-components";
import home1px from "../../images/home1x.png";
import home2px from "../../images/home2x.png";

export const HomeWrapper = styled.div`
  display: flex;
  width: 1376px;
  height: 736px;
  border-radius: 30px;
  background-color: ${(p) => p.theme.colors.green};
`;

export const TextWrapper = styled.div`
  width: 677px;
  height: 736px;
  padding: 251px 64px 0 96px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 70px;
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${(p) => p.theme.colors.white};
  margin-bottom: 28px;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 28px;
  line-height: 1.07;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.white};
  margin-bottom: 64px;
`;

export const RedirectLink = styled(Link)`
  display: inline-block;
  padding: 18px 50px;
  background-color: transparent;
  border: 1px solid;
  border-color: ${(p) => p.theme.colors.borderColor};
  border-radius: 30px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.white};
`;

export const ArrowUp = styled.svg`
  width: 15px;
  height: 17px;
  margin-left: 18px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  max-width: 699px;
  width: 100%;
  max-height: 736px;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      ${(p) => p.theme.colors.gradientColor},
      ${(p) => p.theme.colors.gradientColor}
    ),
    image-set(url(${home1px}) 1x, url(${home2px}) 2x);
  background-size: cover;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  gap: 16px;
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 284px;
  height: 118px;
  padding: 32px;
  border-radius: 20px;
  background-color: ${(p) => p.theme.colors.white};
`;

export const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  width: 54px;
  height: 54px;
  background-color: ${(p) => p.theme.colors.green};
`;

export const CheckIcon = styled.svg`
  width: 20px;
  height: 16px;
`;

export const InfoText = styled.p`
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 16px;
  color: ${(p) => p.theme.colors.textGrayColor};
`;

export const InfoCount = styled.p`
  font-weight: 700;
  font-size: 24px;
  color: ${(p) => p.theme.colors.black};
`;
