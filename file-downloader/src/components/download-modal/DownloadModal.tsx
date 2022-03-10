import { FC, useState } from "react";
import { Modal } from "../common/modal/Modal";
import { FileData } from "../types";
import "./download-modal.scss";

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
          <div>
            <h3>Downloading the following files:</h3>
            {checkedFiles.map((file) => {
              return (
                <div className="download-files">
                  <div>{"Device: " + file.device}</div>
                  <div>{"Path: " + file.path}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <h3>No files selected.</h3>
        )}
      </div>
    </Modal>
  );
};
