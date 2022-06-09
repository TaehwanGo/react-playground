import React from "react";
import { useTable } from "react-table";

type TableData = {
    name: string;
    email: string;
    phone: string;
}

export type Columns = {
    Header: string;
    accessor: keyof TableData;
}

type ReactTableProps = {
    columns: Columns[];
    data: TableData[];
};

function ReactTable({ columns, data }: ReactTableProps) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns, data,
  });
  const { style, className, role } = getTableProps();
  return (
    <table style={style} className={className} role={role}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.Header}>{column.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ name, email, phone }) => (
          <tr key={name + email + phone}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ReactTable;
