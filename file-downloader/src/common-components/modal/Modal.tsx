import { FC } from "react";
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
        <div>{children}</div>
        <button onClick={handleClose}>Close Modal</button>
      </div>
    </>
  );
};
