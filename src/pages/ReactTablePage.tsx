// react-table 공부
import React, { useMemo } from "react";
import { faker } from '@faker-js/faker';
import ReactTable, { Columns } from "@/components/ReactTable";

faker.seed(100);

function ReactTablePage() {
  const columns: Columns[] = useMemo(() => {
    return [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Phone",
        accessor: "phone",
      },
    ];
  }, []);

  const data = useMemo(() => {
    return Array(53)
      .fill('')
      .map(() => ({
        name: faker.name.lastName() + faker.name.firstName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
      }));
  }, []);

  return (
    <ReactTable columns={columns} data={data} />
  );
}

export default ReactTablePage;
