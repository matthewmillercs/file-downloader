import { useEffect, useState } from "react";
import { mockData } from "./configs/mock-data";
import { FileData } from "../types";
import { Modal } from "../common/modal/Modal";
import { Table } from "../common/table/Table";
import { getFileTableColumns } from "./configs/get-columns";
import "./styles/file-download-table.scss";
import { TableHeader } from "../table-header/TableHeader";
import { DownloadModal } from "../download-modal/DownloadModal";

export const FileDownloadTable = () => {
  const [files, setFiles] = useState<FileData[]>(
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

  const handleOnChecked = (event: any, file: FileData) => {
    const checked = event.target.checked;
    setFiles(
      files.map((curFile) => {
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
          files.filter((file) => file.status === "Available").length
    );
  }, [checkedFiles, files]);

  useEffect(() => {
    if (files.length) {
      setCheckedFiles(files.filter((file) => file.selected !== false));
    }
  }, [files, setCheckedFiles]);

  const handleSelectAllChecked = (event: any) => {
    const checked = event.target.checked;
    setFiles(
      files.map((curFile) => {
        if (curFile.status === "Available") {
          curFile.selected = checked;
        }
        return curFile;
      })
    );
  };

  return (
    <div className="container">
      <TableHeader
        files={files}
        checkedFiles={checkedFiles}
        showModal={showModal}
        isIndeterminate={isIndeterminate}
        setShowModal={setShowModal}
        handleSelectAllChecked={handleSelectAllChecked}
      ></TableHeader>
      <div className="table-container">
        <Table
          columns={getFileTableColumns(handleOnChecked, files)}
          data={files}
        ></Table>
      </div>
      <DownloadModal
        showModal={showModal}
        setShowModal={setShowModal}
        checkedFiles={checkedFiles}
      ></DownloadModal>
    </div>
  );
};
