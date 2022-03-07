import { useEffect, useState } from "react";
import { FileData, mockData } from "./mock-data";
import { Checkbox } from "../checkbox/Checkbox";
import downloadIcon from "../../assets/DownloadIcon.png";
import availableIcon from "../../assets/AvailableIcon.png";

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
                    fileList.filter((file) => file.status === "Available")
                        .length
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

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            <Checkbox
                                onChange={(event) =>
                                    handleSelectAllChecked(event)
                                }
                                checked={
                                    checkedFiles.length ===
                                    fileList.filter(
                                        (file) => file.status === "Available"
                                    ).length
                                }
                                indeterminate={isIndeterminate}
                            ></Checkbox>
                        </th>
                        <th>
                            <div>
                                {checkedFiles.length > 0
                                    ? "Selected " + checkedFiles.length
                                    : "None Selected"}
                            </div>
                        </th>
                        <th>
                            <button
                                className="download-button"
                                onClick={() => {
                                    console.log(checkedFiles);
                                }}
                            >
                                <img
                                    src={downloadIcon}
                                    width="16px"
                                    height="16px"
                                />
                                <div>Download Selected</div>
                            </button>
                        </th>
                    </tr>
                </thead>
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Device</th>
                        <th>Path</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {fileList.map((file) => {
                        return (
                            <tr className="table-row">
                                <td>
                                    <Checkbox
                                        onChange={(event) =>
                                            handleOnChecked(event, file)
                                        }
                                        disabled={file.status === "Scheduled"}
                                        checked={file.selected ?? false}
                                    ></Checkbox>
                                </td>
                                <td>{file.name}</td>
                                <td>{file.device}</td>
                                <td>{file.path}</td>
                                <td className="status">
                                    {file.status === "Available" && (
                                        <img
                                            src={availableIcon}
                                            width="16px"
                                            height="16px"
                                        />
                                    )}

                                    <div>{file.status}</div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
