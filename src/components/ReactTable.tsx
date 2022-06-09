import React, { useEffect } from 'react';
import { useTable, useSortBy, HeaderGroup, UseSortByColumnProps } from 'react-table';

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

interface ColumnForSort extends UseSortByColumnProps<TableData>, HeaderGroup<TableData> {}

function ReactTable({ columns, data }: ReactTableProps) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
  );
  const { style: tableStyle, className: tableClassName, role: tableRole } = getTableProps();
  const { style: bodyStyle, className: bodyClassName, role: bodyRole } = getTableBodyProps();
  return (
    <table style={tableStyle} className={tableClassName} role={tableRole}>
      <thead>
        {headerGroups.map((headerGroup) => {
          const { key: headerKey, ...restHeaderGroupProps } = headerGroup.getHeaderGroupProps();
          return (
            <tr key={headerKey} {...restHeaderGroupProps}>
              {headerGroup.headers.map((column) => {
                const { key, ...restColumnProps } = column.getHeaderProps(
                  (column as ColumnForSort).getSortByToggleProps(),
                );
                return (
                  <th key={key} {...restColumnProps}>
                    {column.render('Header')}
                  </th>
                );
              })}
            </tr>
          );
        })}
      </thead>
      <tbody style={bodyStyle} className={bodyClassName} role={bodyRole}>
        {rows.map((row) => {
          prepareRow(row);
          const { key, ...restRowProps } = row.getRowProps();
          return (
            <tr key={key} {...restRowProps}>
              {row.cells.map((cell) => {
                const { key: cellKey, ...restCellProps } = cell.getCellProps();
                return (
                  <td key={cellKey} {...restCellProps}>
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ReactTable;
