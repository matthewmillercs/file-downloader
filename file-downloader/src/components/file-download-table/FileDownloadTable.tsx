import { useEffect, useState } from "react";
import { mockData } from "./configs/mock-data";
import { Checkbox } from "../common-components/checkbox/Checkbox";
import downloadIcon from "../../assets/DownloadIcon.png";
import { FileData } from "../types";
import { Modal } from "../common-components/modal/Modal";
import { Table } from "../common-components/table/Table";
import { getFileTableColumns } from "./configs/get-columns";
import "./file-download-table.scss";

export const FileDownloadTable = () => {
  const [fileList, setFileList] = useState<FileData[]>(
    mockData.map((data, index) => {
      return {
        ...data,
        id: index,
        selected: false,
      };
    })
  );
  const [isIndeterminate, setIsIndeterminate] = useState<boolean>(false);
  const [checkedFiles, setCheckedFiles] = useState<FileData[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleOnChecked = (event: any, file: any) => {
    const checked = event.target.checked;
    setFileList(
      fileList.map((curFile) => {
        if (file.id === curFile.id) {
          curFile.selected = checked;
        }
        return curFile;
      })
    );
  };

  // set to indeterminate state if some but not all files are selected
  useEffect(() => {
    setIsIndeterminate(
      checkedFiles.length > 0 &&
        checkedFiles.length <
          fileList.filter((file) => file.status === "Available").length
    );
  }, [checkedFiles, fileList]);

  useEffect(() => {
    if (fileList.length) {
      setCheckedFiles(fileList.filter((file) => file.selected !== false));
    }
  }, [fileList, setCheckedFiles]);

  const handleSelectAllChecked = (event: any) => {
    const checked = event.target.checked;
    setFileList(
      fileList.map((curFile) => {
        if (curFile.status === "Available") {
          curFile.selected = checked;
        }
        return curFile;
      })
    );
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="top-bar">
        <div className="select-all">
          <Checkbox
            onChange={(event) => handleSelectAllChecked(event)}
            checked={
              checkedFiles.length ===
              fileList.filter((file) => file.status === "Available").length
            }
            indeterminate={isIndeterminate}
          ></Checkbox>
        </div>
        <div>
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
          <img src={downloadIcon} width="16px" height="16px" />
          <div>Download Selected</div>
        </button>
        <Modal showModal={showModal} handleClose={handleCloseModal}>
          <div>
            {checkedFiles.map((file) => {
              return <div>{file.device}</div>;
            })}
          </div>
        </Modal>
      </div>
      <div className="table-container">
        <Table
          columns={getFileTableColumns(handleOnChecked, fileList)}
          data={fileList}
        ></Table>
      </div>
    </div>
  );
};
