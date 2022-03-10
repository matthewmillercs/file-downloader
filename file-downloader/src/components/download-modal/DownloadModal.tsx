import { FC } from "react";
import { FileData } from "../types";

interface DownloadModalProps {
  checkedFiles: FileData[];
}

export const DownloadModal: FC<DownloadModalProps> = (props) => {
  const { checkedFiles } = props;
  return (
    <div className="modal">
      <div className="modal-content"></div>
    </div>
  );
};
