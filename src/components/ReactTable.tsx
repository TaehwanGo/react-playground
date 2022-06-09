import React from "react";

type TableData = {
    name: string;
    email: string;
    phone: string;
}

type ReactTableProps = {
    columns: string[];
    data: TableData[];
};

function ReactTable({ columns, data }: ReactTableProps) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
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
