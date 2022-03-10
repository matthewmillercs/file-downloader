export type FileData = {
  name: string;
  device: string;
  path: string;
  status: "Available" | "Scheduled";
  id?: number;
  selected?: boolean;
};

export type Column = {
  title: string;
  render: (data: any) => any;
};
