import { FC } from "react";
import closeButton from "../../../assets/CloseIcon.png";
import "./modal.scss";

interface ModalProps {
  handleClose: () => void;
  showModal: boolean;
  children: any;
}

export const Modal: FC<ModalProps> = (props) => {
  const { handleClose, showModal, children } = props;
  if (!showModal) return null;
  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        <button className="close-button" onClick={handleClose}>
          <img src={closeButton} width="24px" height="24px" />
        </button>
        <div>{children}</div>
      </div>
    </>
  );
};
