# React Table

- 라이브러리 정보

  - https://www.npmjs.com/package/react-table

- 예제
  - https://www.daleseo.com/react-table/

```tsx
// react-table 적용 전
import React from 'react';

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
```

```tsx
// react-table 적용 후
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
```

```ts
/**
  * getTableProps() => {role: 'table'}
  * rows => [{
              "id": "0",
              "original": {
                  "name": "McGlynnFreida",
                  "email": "Delphia78@yahoo.com",
                  "phone": "1-703-597-1826"
              },
              "index": 0,
              "depth": 0,
              "cells": [
                  {}
              ],
              "values": {
                  "name": "McGlynnFreida",
                  "email": "Delphia78@yahoo.com",
                  "phone": "1-703-597-1826"
              },
              "originalSubRows": [],
              "subRows": []
            },
            ...
            // 초기 값은 위와 같으나 나중에 prepare 이후 되게 복잡한 구조로 이루어짐
            // 사용 방법은 그냥 외워야(보일러 코드 처럼) 할 듯
          ]
  * getTableBodyProps() => {role: 'rowgroup'}
  * headerGroups => [
    {
        "headers": [
            {
                "Header": "Name",
                "depth": 0,
                "id": "name",
                "width": 150,
                "minWidth": 0,
                "maxWidth": 9007199254740991,
                "sortType": "alphanumeric",
                "sortDescFirst": false,
                "canResize": true,
                "originalWidth": 150,
                "isVisible": true,
                "totalVisibleHeaderCount": 1,
                "totalLeft": 0,
                "totalMinWidth": 0,
                "totalWidth": 150,
                "totalMaxWidth": 9007199254740991,
                "totalFlexWidth": 150
            },
            {
                "Header": "Email",
                "depth": 0,
                "id": "email",
                "width": 150,
                "minWidth": 0,
                "maxWidth": 9007199254740991,
                "sortType": "alphanumeric",
                "sortDescFirst": false,
                "canResize": true,
                "originalWidth": 150,
                "isVisible": true,
                "totalVisibleHeaderCount": 1,
                "totalLeft": 150,
                "totalMinWidth": 0,
                "totalWidth": 150,
                "totalMaxWidth": 9007199254740991,
                "totalFlexWidth": 150
            },
            {
                "Header": "Phone",
                "depth": 0,
                "id": "phone",
                "width": 150,
                "minWidth": 0,
                "maxWidth": 9007199254740991,
                "sortType": "alphanumeric",
                "sortDescFirst": false,
                "canResize": true,
                "originalWidth": 150,
                "isVisible": true,
                "totalVisibleHeaderCount": 1,
                "totalLeft": 300,
                "totalMinWidth": 0,
                "totalWidth": 150,
                "totalMaxWidth": 9007199254740991,
                "totalFlexWidth": 150
            }
          ]
        }
      ]
  */
```

- useTable의 return값들
