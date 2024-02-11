import { Pagination } from "@mantine/core";
import { useState } from "react";
import TableBar from "./table/table";

function chunk(array, size = 10) {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}

export default function PaginationBar({ boglovchilar }) {
  const [activePage, setPage] = useState(1);
  const data = chunk(boglovchilar);
  const items = <TableBar data={boglovchilar} />;
//   const items = data[activePage - 1].map((item) => (
//     <Text key={item.id}>
//       id: {item.id}, name: {item.name}
//     </Text>
//   ));
  return (
    <>
      {items}
      <Pagination total={data.length} value={activePage} onChange={setPage} mt="sm" />
    </>
  );
}
