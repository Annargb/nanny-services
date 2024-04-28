import { useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import icons from "../../images/icons.svg";
import * as n from "./MobileMenu.styled";

export const MobileMenu = ({ closeModal, register, login, logout }) => {
  const currentUserName = useSelector(selectUserName);

  const loginClick = () => {
    login();
    closeModal();
  };

  const registerClick = () => {
    register();
    closeModal();
  };

  const loginOutClick = () => {
    logout();
    closeModal();
  };

  return (
    <div>
      <n.NavWrapper>
        <n.MobileLink to="/" onClick={closeModal}>
          Home
        </n.MobileLink>
        <n.MobileLink to="/nannies" onClick={closeModal}>
          Nannies
        </n.MobileLink>
        {currentUserName && (
          <n.MobileLink to="/favorites" onClick={closeModal}>
            Favorites
          </n.MobileLink>
        )}
      </n.NavWrapper>
      {!currentUserName ? (
        <n.ButtonWrapper>
          <li>
            <n.LogInButton type="button" onClick={loginClick}>
              Log In
            </n.LogInButton>
          </li>
          <li>
            <n.RegistrationLogOutButton type="button" onClick={registerClick}>
              Registration
            </n.RegistrationLogOutButton>
          </li>
        </n.ButtonWrapper>
      ) : (
        <n.ButtonWrapper>
          <li>
            <n.UserWrapper>
              <n.UserAvatar>
                <n.UserAvatarIcon>
                  <use href={`${icons}#user`} />
                </n.UserAvatarIcon>
              </n.UserAvatar>
              <n.UserName>{currentUserName}</n.UserName>
            </n.UserWrapper>
          </li>
          <li>
            <n.RegistrationLogOutButton type="button" onClick={loginOutClick}>
              Log out
            </n.RegistrationLogOutButton>
          </li>
        </n.ButtonWrapper>
      )}
    </div>
  );
};
