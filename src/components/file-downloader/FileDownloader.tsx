import { FC, useEffect, useState } from "react";
import { FileData } from "../types";
import { Table } from "../common/table/Table";
import { getFileTableColumns } from "./configs/get-columns";
import "./styles/file-download-table.scss";
import { TableHeader } from "../table-header/TableHeader";
import { DownloadModal } from "../download-modal/DownloadModal";

interface FileDownloaderProps {
  data: FileData[];
}

export const FileDownloader: FC<FileDownloaderProps> = (props) => {
  const { data } = props;
  const [files, setFiles] = useState<FileData[]>(
    data.map((dataItem, index) => {
      return {
        ...dataItem,
        id: index,
        selected: false,
      };
    })
  );
  const [isIndeterminate, setIsIndeterminate] = useState<boolean>(false);
  const [checkedFiles, setCheckedFiles] = useState<FileData[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);

  // mark current file as checked when checkbox is selected
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

  // update checkedFiles when files dependency changes to reflect new selections
  useEffect(() => {
    if (files.length) {
      setCheckedFiles(files.filter((file) => file.selected !== false));
    }
  }, [files, setCheckedFiles]);

  // mark all available files as checked when select all is clicked
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
