import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/authOperations";
import { CommonModal } from "../Modal/Modal";
import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
import { LoginForm } from "../LoginForm/LoginForm";
import icons from "../../images/icons.svg";
import { authModalStyles, mobileMenuStyles } from "../../styles/modalStyles";
import * as n from "./Header.styled";
import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
// import { MobileModal } from "../MobileModal/MobileModal";
import { MobileMenu } from "../MobileMenu/MobileMenu";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
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

  const openMobileModal = () => {
    setIsMobileModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMobileModal = () => {
    setIsMobileModalOpen(false);
    document.body.style.overflow = "";
  };

  const register = () => {
    setModalForm("register");
    openModal();
  };

  const login = () => {
    document.body.style.overflow = "hidden";
    setModalForm("login");
    openModal();
  };

  return (
    <n.Header>
      <n.HeaderContainer $transparentBg={isHomePage}>
        <n.Logo to="/">Nanny.Services</n.Logo>
        <n.LinkButtonWrapper>
          <n.NavWrapper>
            <n.HeaderLink to="/">Home</n.HeaderLink>
            <n.HeaderActiveLink to="/nannies">Nannies</n.HeaderActiveLink>
            {currentUserName && (
              <n.HeaderActiveLink to="/favorites">Favorites</n.HeaderActiveLink>
            )}
          </n.NavWrapper>
          {!currentUserName ? (
            <n.ButtonWrapper $isUserExist={currentUserName !== null}>
              <li>
                <n.LogInButton type="button" onClick={login}>
                  Log In
                </n.LogInButton>
              </li>
              <li>
                <n.RegistrationLogOutButton
                  type="button"
                  onClick={register}
                  $unvisibleBorder={isHomePage}
                >
                  Registration
                </n.RegistrationLogOutButton>
              </li>
            </n.ButtonWrapper>
          ) : (
            <n.ButtonWrapper $isUserExist={currentUserName !== null}>
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
                <n.RegistrationLogOutButton
                  type="button"
                  onClick={handleLogOut}
                  $unvisibleBorder={isHomePage}
                >
                  Log out
                </n.RegistrationLogOutButton>
              </li>
            </n.ButtonWrapper>
          )}
          <BurgerMenu openModal={openMobileModal} />
        </n.LinkButtonWrapper>
        <CommonModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          styles={authModalStyles}
        >
          {modalForm === "register" && (
            <RegistrationForm closeModal={closeModal} />
          )}
          {modalForm === "login" && <LoginForm closeModal={closeModal} />}
        </CommonModal>
        <CommonModal
          $mobile={isMobileModalOpen}
          isModalOpen={isMobileModalOpen}
          closeModal={closeMobileModal}
          styles={mobileMenuStyles}
        >
          <MobileMenu
            closeModal={closeMobileModal}
            register={register}
            login={login}
            logout={handleLogOut}
          />
        </CommonModal>
        {/* <MobileModal
          isModalOpen={isMobileModalOpen}
          closeModal={closeMobileModal}
          styles={mobileMenuStyles}
        /> */}
      </n.HeaderContainer>
    </n.Header>
  );
};

// import { useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { selectUserName } from "../../redux/auth/selectors";
// import { logOut } from "../../redux/auth/authOperations";
// import { CommonModal } from "../Modal/Modal";
// import { RegistrationForm } from "../RegistrationForm/RegistrationForm";
// import { LoginForm } from "../LoginForm/LoginForm";
// import icons from "../../images/icons.svg";
// import { authModalStyles, mobileMenuStyles } from "../../styles/modalStyles";
// import * as n from "./Header.styled";
// import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
// // import { MobileModal } from "../MobileModal/MobileModal";
// import { MobileMenu } from "../MobileMenu/MobileMenu";

// export const Header = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
//   const [modalForm, setModalForm] = useState("");
//   const currentUserName = useSelector(selectUserName);
//   const location = useLocation();
//   const isHomePage = location.pathname === "/";
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleLogOut = async () => {
//     try {
//       await dispatch(logOut());
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     document.body.style.overflow = "";
//   };

//   const openMobileModal = () => {
//     setIsMobileModalOpen(true);
//     document.body.style.overflow = "hidden";
//   };

//   const closeMobileModal = () => {
//     setIsMobileModalOpen(false);
//     document.body.style.overflow = "";
//   };

//   const register = () => {
//     setModalForm("register");
//     openModal();
//   };

//   const login = () => {
//     setModalForm("login");
//     openModal();
//   };

//   return (
//     <n.Header $transparentBg={isHomePage}>
//       <n.Logo to="/">Nanny.Services</n.Logo>
//       <n.LinkButtonWrapper>
//         <n.NavWrapper>
//           <n.HeaderLink to="/">Home</n.HeaderLink>
//           <n.HeaderActiveLink to="/nannies">Nannies</n.HeaderActiveLink>
//           {currentUserName && (
//             <n.HeaderActiveLink to="/favorites">Favorites</n.HeaderActiveLink>
//           )}
//         </n.NavWrapper>
//         <n.ButtonWrapper $isUserExist={currentUserName !== null}>
//           <li>
//             {currentUserName ? (
//               <n.UserWrapper>
//                 <n.UserAvatar>
//                   <n.UserAvatarIcon>
//                     <use href={`${icons}#user`} />
//                   </n.UserAvatarIcon>
//                 </n.UserAvatar>
//                 <n.UserName>{currentUserName}</n.UserName>
//               </n.UserWrapper>
//             ) : (
//               <n.LogInButton type="button" onClick={login}>
//                 Log In
//               </n.LogInButton>
//             )}
//           </li>
//           <li>
//             {currentUserName ? (
//               <n.RegistrationLogOutButton
//                 type="button"
//                 onClick={handleLogOut}
//                 $unvisibleBorder={isHomePage}
//               >
//                 Log out
//               </n.RegistrationLogOutButton>
//             ) : (
//               <n.RegistrationLogOutButton
//                 type="button"
//                 onClick={register}
//                 $unvisibleBorder={isHomePage}
//               >
//                 Registration
//               </n.RegistrationLogOutButton>
//             )}
//           </li>
//         </n.ButtonWrapper>
//         <BurgerMenu openModal={openMobileModal} />
//       </n.LinkButtonWrapper>
//       <CommonModal
//         isModalOpen={isModalOpen}
//         closeModal={closeModal}
//         styles={authModalStyles}
//       >
//         {modalForm === "register" && (
//           <RegistrationForm closeModal={closeModal} />
//         )}
//         {modalForm === "login" && <LoginForm closeModal={closeModal} />}
//       </CommonModal>
//       <CommonModal
//         isModalOpen={isMobileModalOpen}
//         closeModal={closeMobileModal}
//         styles={mobileMenuStyles}
//       >
//         <MobileMenu closeModal={closeMobileModal} />
//       </CommonModal>
//       {/* <MobileModal
//         isModalOpen={isMobileModalOpen}
//         closeModal={closeMobileModal}
//         styles={mobileMenuStyles}
//       /> */}
//     </n.Header>
//   );
// };
