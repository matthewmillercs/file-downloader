import { Checkbox } from "../../common-components/checkbox/Checkbox";
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
        return <div>{file.path}</div>;
      },
    },
    {
      title: "Status",
      render: (file: FileData) => {
        return (
          <div className="status">
            {file.status === "Available" && (
              <img src={availableIcon} width="16px" height="16px" />
            )}
            <div>{file.status}</div>
          </div>
        );
      },
    },
  ];
};
