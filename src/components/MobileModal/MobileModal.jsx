import Modal from "react-modal";
import icons from "../../images/icons.svg";
import * as n from "./MobileModal.styled";
import { MobileMenu } from "../MobileMenu/MobileMenu";

Modal.setAppElement("#root");

export const MobileModal = ({ isModalOpen, closeModal, styles }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={styles}
      contentLabel="Custom Modal"
    >
      <n.CloseButton type="button" onClick={closeModal}>
        <n.CloseIcon>
          <use href={`${icons}#close`} />
        </n.CloseIcon>
      </n.CloseButton>
      <MobileMenu />
    </Modal>
  );
};
