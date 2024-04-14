import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CommonModal } from "../Modal/Modal";
import * as n from "./Header.styled";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "";
  };

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
            <n.LogInButton type="button" onClick={openModal}>
              Log In
            </n.LogInButton>
          </li>
          <li>
            <n.RegistrationButton type="button" onClick={openModal}>
              Registration
            </n.RegistrationButton>
          </li>
        </n.ButtonWrapper>
      </n.LinkButtonWrapper>
      <CommonModal isModalOpen={isModalOpen} closeModal={closeModal}>
        <RegistrationForm />
      </CommonModal>
    </n.Header>
  );
};
