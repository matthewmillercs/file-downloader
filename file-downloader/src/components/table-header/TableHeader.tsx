import { FC } from "react";
import { Checkbox } from "../common/checkbox/Checkbox";
import { FileData } from "../types";
import downloadIcon from "../../assets/DownloadIcon.png";

interface TableHeaderProps {
  files: FileData[];
  checkedFiles: FileData[];
  isIndeterminate: boolean;
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  handleSelectAllChecked: (event: any) => void;
}

export const TableHeader: FC<TableHeaderProps> = (props) => {
  const {
    files,
    checkedFiles,
    showModal,
    setShowModal,
    handleSelectAllChecked,
    isIndeterminate,
  } = props;
  return (
    <header className="top-bar">
      <div className="select-all">
        <Checkbox
          onChange={(event) => handleSelectAllChecked(event)}
          checked={
            checkedFiles.length ===
            files.filter((file) => file.status === "Available").length
          }
          indeterminate={isIndeterminate}
        ></Checkbox>
      </div>
      <div className="selected-count">
        {checkedFiles.length > 0
          ? "Selected " + checkedFiles.length
          : "None Selected"}
      </div>
      <button
        className="download-button"
        onClick={() => {
          setShowModal(true);
        }}
      >
        <img src={downloadIcon} width="20px" height="20px" />
        <div>Download Selected</div>
      </button>
    </header>
  );
};
