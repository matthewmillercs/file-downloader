import { FC } from "react";
import { Column } from "../../types";
import "./table.scss";

interface TableProps {
  columns: Column[];
  data: any;
}

export const Table: FC<TableProps> = (props) => {
  const { columns, data } = props;
  return (
    <table>
      <thead>
        <tr>
          {columns.map((headerItem, index) => (
            <th key={index}>{headerItem.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, index: any) => (
          <tr
            className={item.selected ? "row-selected" : undefined}
            key={index}
          >
            {columns.map((col, key) => (
              <td key={key}>{col.render(item)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
