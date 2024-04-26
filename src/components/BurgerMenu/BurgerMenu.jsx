import icons from "../../images/icons.svg";
import * as n from "./BurgerMenu.styled";

export const BurgerMenu = ({ openModal }) => {
  return (
    <n.ButtonMenu onClick={openModal}>
      <n.IconBurgerMenu>
        <use href={`${icons}#burger-menu`} />
      </n.IconBurgerMenu>
    </n.ButtonMenu>
  );
};
