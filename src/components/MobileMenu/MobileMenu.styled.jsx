import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin: 84px 0;
`;

export const MobileLink = styled(NavLink)`
  position: relative;
  padding-bottom: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.01em;
  color: ${(p) => p.theme.colors.white};

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

export const ButtonWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
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
`;

export const RegistrationLogOutButton = styled(LogInButton)`
  max-width: 168px;
  width: 100%;
  background-color: ${(p) => p.theme.colors.green};
  border: 1px solid;
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
