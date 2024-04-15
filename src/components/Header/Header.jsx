import { useState } from "react";
import { useLocation } from "react-router-dom";
import { CommonModal } from "../Modal/Modal";
import * as n from "./Header.styled";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import { LoginForm } from "../LoginForm/LoginForm";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalForm, setModalForm] = useState("");
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

  const register = () => {
    setModalForm("register");
    openModal();
  };

  const login = () => {
    setModalForm("login");
    openModal();
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
            <n.LogInButton type="button" onClick={login}>
              Log In
            </n.LogInButton>
          </li>
          <li>
            <n.RegistrationButton type="button" onClick={register}>
              Registration
            </n.RegistrationButton>
          </li>
        </n.ButtonWrapper>
      </n.LinkButtonWrapper>
      <CommonModal isModalOpen={isModalOpen} closeModal={closeModal}>
        {modalForm === "register" && <RegistrationForm />}
        {modalForm === "login" && <LoginForm />}
      </CommonModal>
    </n.Header>
  );
};
