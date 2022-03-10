import { Checkbox } from "../../common/checkbox/Checkbox";
import { Column, FileData } from "../../types";
import availableIcon from "../../../assets/AvailableIcon.png";

export const getFileTableColumns = (
  handleOnChecked: (event: any, file: FileData) => void,
  checkedFiles: FileData[]
): Column[] => {
  console.log(checkedFiles);
  return [
    {
      title: "",
      render: (file: FileData) => {
        return (
          <Checkbox
            onChange={(event: any) => handleOnChecked(event, file)}
            disabled={file.status === "Scheduled"}
            checked={file.selected ?? false}
          ></Checkbox>
        );
      },
    },
    {
      title: "Name",
      render: (file: FileData) => {
        return <div>{file.name}</div>;
      },
    },
    {
      title: "Device",
      render: (file: FileData) => {
        return <div>{file.device}</div>;
      },
    },
    {
      title: "Path",
      render: (file: FileData) => {
        return (
          <div
            className={
              file.status === "Available" ? "status-available" : undefined
            }
          >
            <div>{file.path} </div>
            {file.status === "Available" && (
              <img src={availableIcon} width="20px" height="20px" />
            )}
          </div>
        );
      },
    },
    {
      title: "Status",
      render: (file: FileData) => {
        return (
          <div className="status">
            <div>{file.status}</div>
          </div>
        );
      },
    },
  ];
};
