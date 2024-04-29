import Modal from "react-modal";
import icons from "../../images/icons.svg";
import * as n from "./Modal.styled";

Modal.setAppElement("#root");

export const CommonModal = ({
  children,
  isModalOpen,
  closeModal,
  styles,
  $mobile,
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={styles}
      contentLabel="Custom Modal"
    >
      <n.CloseButton type="button" onClick={closeModal}>
        <n.CloseIcon $mobile={$mobile}>
          <use href={`${icons}#close`} />
        </n.CloseIcon>
      </n.CloseButton>
      {children}
    </Modal>
  );
};
