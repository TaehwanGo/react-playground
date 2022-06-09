// react-table 공부
import React from "react";
import { faker } from '@faker-js/faker';
import ReactTable from "@/components/ReactTable";

faker.seed(100);

function ReactTablePage() {
  const columns = ["Name", "Email", "Phone"];

  const data = Array(53)
    .fill('')
    .map(() => ({
      name: faker.name.lastName() + faker.name.firstName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
    }));

  return (
    <ReactTable columns={columns} data={data} />
  );
}

export default ReactTablePage;
