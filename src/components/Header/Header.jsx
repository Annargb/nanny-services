import { useLocation } from "react-router-dom";
import * as n from "./Header.styled";

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <n.Header $variant={isHomePage}>
      <n.Logo>Nanny.Services</n.Logo>
      <n.LinkButtonWrapper>
        <n.NavWrapper>
          <n.HeaderLink to="/">Home</n.HeaderLink>
          <n.HeaderLink to="/nannies">Nannies</n.HeaderLink>
          <n.HeaderLink to="/favorites">Favorites</n.HeaderLink>
        </n.NavWrapper>
        <n.ButtonWrapper>
          <li>
            <n.LogInButton type="button">Log In</n.LogInButton>
          </li>
          <li>
            <n.RegistrationButton type="button">
              Registration
            </n.RegistrationButton>
          </li>
        </n.ButtonWrapper>
      </n.LinkButtonWrapper>
    </n.Header>
  );
};
