import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CommonModal } from "../Modal/Modal";
import * as n from "./Header.styled";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import { LoginForm } from "../LoginForm/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import icons from "../../images/icons.svg";
import { logOut } from "../../redux/auth/authOperations";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalForm, setModalForm] = useState("");
  const currentUserName = useSelector(selectUserName);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    try {
      await dispatch(logOut());
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

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
    <n.Header $transparentBg={isHomePage}>
      <n.Logo>Nanny.Services</n.Logo>
      <n.LinkButtonWrapper>
        <n.NavWrapper>
          <n.HeaderLink to="/">Home</n.HeaderLink>
          <n.HeaderLink to="/nannies">Nannies</n.HeaderLink>
          {currentUserName && (
            <n.HeaderLink to="/favorites">Favorites</n.HeaderLink>
          )}
        </n.NavWrapper>
        <n.ButtonWrapper $isUserExist={currentUserName !== null}>
          <li>
            {currentUserName ? (
              <n.UserWrapper>
                <n.UserAvatar>
                  <n.UserAvatarIcon>
                    <use href={`${icons}#user`} />
                  </n.UserAvatarIcon>
                </n.UserAvatar>
                <n.UserName>{currentUserName}</n.UserName>
              </n.UserWrapper>
            ) : (
              <n.LogInButton type="button" onClick={login}>
                Log In
              </n.LogInButton>
            )}
          </li>
          <li>
            {currentUserName ? (
              <n.RegistrationLogOutButton
                type="button"
                onClick={handleLogOut}
                $unvisibleBorder={isHomePage}
              >
                Log out
              </n.RegistrationLogOutButton>
            ) : (
              <n.RegistrationLogOutButton
                type="button"
                onClick={register}
                $unvisibleBorder={isHomePage}
              >
                Registration
              </n.RegistrationLogOutButton>
            )}
          </li>
        </n.ButtonWrapper>
      </n.LinkButtonWrapper>
      <CommonModal isModalOpen={isModalOpen} closeModal={closeModal}>
        {modalForm === "register" && (
          <RegistrationForm closeModal={closeModal} />
        )}
        {modalForm === "login" && <LoginForm closeModal={closeModal} />}
      </CommonModal>
    </n.Header>
  );
};
