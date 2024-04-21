import Modal from "react-modal";
import * as n from "./AppointmentModal.styled";
import icons from "../../images/icons.svg";

const customStyles = {
  overlay: {
    background: "rgba(11, 11, 11, 0.6)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    maxWidth: "600px",
    maxHeight: "720px",
    // maxHeight: "580px",
    overflow: "hidden",
    padding: "64px 32px 64px 64px",
    borderRadius: "30px",
    marginRight: "-50%",
    paddingLeft: "-5px",
    transform: "translate(-50%, -50%)",
    backgroundColor: "fbfbfb",
  },
};

Modal.setAppElement("#modal");

export const AppointmentModal = ({ children, isModalOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Custom Modal"
    >
      <n.CloseButton type="button" onClick={closeModal}>
        <n.CloseIcon>
          <use href={`${icons}#close`} />
        </n.CloseIcon>
      </n.CloseButton>
      {children}
    </Modal>
  );
};
