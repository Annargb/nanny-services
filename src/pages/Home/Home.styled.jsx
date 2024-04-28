import { Link } from "react-router-dom";
import styled from "styled-components";
import home1px from "../../images/home1x.png";
import home2px from "../../images/home2x.png";

export const HomeWrapper = styled.div`
  position: relative;
  /* display: flex; */
  max-width: 1376px;
  width: 100%;
  height: 736px;
  /* max-height: 736px; */
  ///
  height: auto;
  border-radius: 30px;
  background-color: ${(p) => p.theme.colors.green};
  background-repeat: no-repeat;
  background-image: image-set(url(${home1px}) 1x, url(${home2px}) 2x);
  /* background-image: linear-gradient(
      ${(p) => p.theme.colors.gradientColor},
      ${(p) => p.theme.colors.gradientColor}
    ),
    image-set(url(${home1px}) 1x, url(${home2px}) 2x); */
  background-position: right bottom;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 0 96px;

  @media screen and (max-width: 1024px) {
    padding: 0 20px;
  }
`;

export const TextWrapper = styled.div`
  /* width: 677px; */
  height: 736px;
  /* padding: 0 64px 0 96px; */
`;

export const Title = styled.h1`
  position: relative;
  z-index: 1;
  max-width: 517px;
  width: 100%;
  font-weight: 500;
  font-size: 70px;
  /* font-size: 4.375rem; */
  line-height: 1;
  letter-spacing: -0.03em;
  color: ${(p) => p.theme.colors.white};
  margin-bottom: 28px;
  padding-top: 251px;

  @media screen and (max-width: 1264px) {
    padding-top: 170px;
    font-size: 65px;
  }

  @media screen and (max-width: 1264px) {
    /* padding-top: 150px; */
    font-size: 45px;
  }
`;

export const Text = styled.p`
  position: relative;
  z-index: 1;
  max-width: 517px;
  width: 100%;
  font-weight: 400;
  font-size: 28px;
  line-height: 1.07;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.white};
  margin-bottom: 64px;

  @media screen and (max-width: 420px) {
    margin-bottom: 34px;
  }
`;

export const ArrowUp = styled.svg`
  position: absolute;
  top: 22px;
  right: 45px;
  width: 15px;
  height: 17px;

  transition: transform 250ms ${(p) => p.theme.transition};
`;

export const ArrowRight = styled(ArrowUp)`
  width: 20px;
  height: 16px;
  right: 40px;
  transform: translateX(calc(50% + 50px));
`;

export const RedirectLink = styled(Link)`
  position: relative;
  z-index: 1;
  position: relative;
  display: inline-block;
  width: 230px;
  padding: 18px 50px;
  overflow: hidden;
  background-color: transparent;
  border: 1px solid;
  border-color: ${(p) => p.theme.colors.borderColor};
  border-radius: 30px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.white};

  &:hover ${ArrowUp}, &:focus ${ArrowUp} {
    transform: translateY(-55px);
  }

  &:hover ${ArrowRight}, &:focus ${ArrowRight} {
    transform: translateX(calc(-50% + 10px));
  }
`;

export const ImgWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 699px;
  width: 100%;
  height: 736px;
  background-image: linear-gradient(
    ${(p) => p.theme.colors.gradientColor},
    ${(p) => p.theme.colors.gradientColor}
  );
  border-radius: 30px;
  /* border-top-right-radius: 30px;
  border-bottom-right-radius: 30px; */
  /* background-repeat: no-repeat;
  background-image: linear-gradient(
      ${(p) => p.theme.colors.gradientColor},
      ${(p) => p.theme.colors.gradientColor}
    ),
    image-set(url(${home1px}) 1x, url(${home2px}) 2x);
  background-size: cover;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px; */
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

  @media screen and (max-width: 1024px) {
    bottom: 30px;
    right: 30px;
  }

  @media screen and (max-width: 420px) {
    width: 214px;
    height: 100px;
    padding: 16px;
  }
`;

export const CheckWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 13px;
  width: 54px;
  height: 54px;
  background-color: ${(p) => p.theme.colors.green};

  @media screen and (max-width: 420px) {
    width: 44px;
    height: 44px;
  }
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
