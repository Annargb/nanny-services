import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const Header = styled.header`
  position: relative;
  max-width: 1376px;
`;

export const HeaderContainer = styled.div`
  z-index: 2;
  top: 0;
  right: auto;
  left: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid;
  border-color: ${(p) => p.theme.colors.borderColor};
  background-color: ${({ $transparentBg }) => {
    switch ($transparentBg) {
      case true:
        return "transparent";
      default:
        return (p) => p.theme.colors.green;
    }
  }};

  position: ${({ $transparentBg }) => {
    switch ($transparentBg) {
      case true:
        return "absolute";
      default:
        return "static";
    }
  }};

  @media screen and (min-width: 1024px) {
    padding: 20px 96px;
  }
`;

export const LinkButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 92px;

  @media screen and (max-width: 1024px) {
    gap: 48px;
  }

  @media screen and (max-width: 768px) {
    gap: 20px;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  gap: 40px;

  @media screen and (max-width: 1024px) {
    gap: 20px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderLink = styled(NavLink)`
  position: relative;
  padding-bottom: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.white};
`;

export const HeaderActiveLink = styled(HeaderLink)`
  &.active::after {
    content: "";
    position: absolute;
    display: block;
    width: 8px;
    height: 8px;
    bottom: -4px;
    right: 50%;
    transform: translateX(50%);
    border-radius: 50%;
    background-color: #fff;
    margin: 0 auto;
  }
`;

export const Logo = styled(Link)`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.white};

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const ButtonWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ $isUserExist }) => {
    switch ($isUserExist) {
      case true:
        return "24px";
      default:
        return "8px";
    }
  }};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LogInButton = styled.button`
  max-width: 124px;
  width: 100%;
  height: 48px;
  padding: 14px 38px;
  background-color: transparent;
  border: 1px solid;
  border-color: ${(p) => p.theme.colors.borderColor};
  border-radius: 30px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.white};
  transition:
    color 250ms ${(p) => p.theme.transition},
    background-color 250ms ${(p) => p.theme.transition};

  &:hover,
  &:focus {
    color: ${(p) => p.theme.colors.green};
    background-color: ${(p) => p.theme.colors.white};
  }

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    line-height: 1;
    padding: 12px 36px;
  }

  @media screen and (max-width: 720px) {
    padding: 12px 24px;
  }
`;

export const RegistrationLogOutButton = styled(LogInButton)`
  max-width: 168px;
  width: 100%;
  background-color: ${(p) => p.theme.colors.green};
  border: 1px solid;

  border-color: ${({ $unvisibleBorder }) => {
    switch ($unvisibleBorder) {
      case true:
        return "transparent";
      default:
        return (p) => p.theme.colors.borderColor;
    }
  }};
`;

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background-color: ${(p) => p.theme.colors.white};
`;

export const UserAvatarIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${(p) => p.theme.colors.green};
`;

export const UserName = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.white};

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
`;
