import Modal from "react-modal";

const customStyles = {
  overlay: {
    background: "rgba(11, 11, 11, 0.6)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "565px",
    minHeight: "489px",
    maxHeight: "579px",
    overflow: "hidden",
    padding: "64px",
    borderRadius: "30px",
    marginRight: "-50%",
    paddingLeft: "-5px",
    transform: "translate(-50%, -50%)",
    backgroundColor: "fbfbfb",
  },
};

Modal.setAppElement("#root");

export const CommonModal = ({ children }) => {
  return (
    <Modal style={customStyles} contentLabel="Custom Modal">
      {children}
    </Modal>
  );
};
