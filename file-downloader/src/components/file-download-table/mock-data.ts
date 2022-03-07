export type FileData = {
    name: string;
    device: string;
    path: string;
    status: string;
    id?: number;
    selected?: boolean;
};

export const mockData: FileData[] = [
    {
        name: "smss.exe",
        device: "Stark",
        path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
        status: "Scheduled",
    },
    {
        name: "netsh.exe",
        device: "Targaryen",
        path: "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
        status: "Available",
    },
    {
        name: "uxtheme.dll",
        device: "Lannister",
        path: "\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",
        status: "Available",
    },
    {
        name: "cryptbase.dll",
        device: "Martell",
        path: "\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",
        status: "Scheduled",
    },
    {
        name: "7za.exe",
        device: "Baratheon",
        path: "\\Device\\HarddiskVolume1\\temp\\7za.exe",
        status: "Scheduled",
    },
];
