import { FC, useState } from "react";
import { Modal } from "../common/modal/Modal";
import { FileData } from "../types";

interface DownloadModalProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  checkedFiles: FileData[];
}

export const DownloadModal: FC<DownloadModalProps> = (props) => {
  const { showModal, setShowModal, checkedFiles } = props;
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Modal showModal={showModal} handleClose={handleCloseModal}>
      <div className="download-modal">
        {checkedFiles.length ? (
          checkedFiles.map((file) => {
            return (
              <div className="download-files">
                {"Device: " + file.device + ", Path: " + file.path}
              </div>
            );
          })
        ) : (
          <>No files selected.</>
        )}
      </div>
    </Modal>
  );
};
