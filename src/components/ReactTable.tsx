import React, { useEffect } from 'react';
import { useTable } from 'react-table';

type TableData = {
  name: string;
  email: string;
  phone: string;
};

export type Columns = {
  Header: string;
  accessor: keyof TableData;
};

type ReactTableProps = {
  columns: Columns[];
  data: TableData[];
};

function ReactTable({ columns, data }: ReactTableProps) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });
  const { style: tableStyle, className: tableClassName, role: tableRole } = getTableProps();
  const { style: bodyStyle, className: bodyClassName, role: bodyRole } = getTableBodyProps();
  return (
    <table style={tableStyle} className={tableClassName} role={tableRole}>
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()} key={column.id}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody style={bodyStyle} className={bodyClassName} role={bodyRole}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={index}>
              {row.cells.map((cell, idx) => (
                <td {...cell.getCellProps()} key={idx}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ReactTable;
