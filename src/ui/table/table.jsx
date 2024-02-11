import { useEffect, useState } from "react";
import { Input, Table, Text } from "@mantine/core";
import { Pagination } from "@mantine/core";
import { CiSearch } from "react-icons/ci";

function chunk(array, size = 10) {
  if (!array?.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}

export default function TableBar({ dataReceived }) {
  const [activePage, setPage] = useState(1);
  const [data, setData] = useState(chunk(dataReceived));
  const [search, setSearch] = useState("");

  // Ma'lumotlar yordamchi so'z bo'yicha avtomatik ravishda tartiblangan holatda chiqadi
  useEffect(() => {
    const sortedData = [...data].sort((a, b) => {
      return a.yordamchiSoz?.toLowerCase() < b.yordamchiSoz?.toLowerCase() ? -1 : a.yordamchiSoz?.toLowerCase() > b.yordamchiSoz?.toLowerCase() ? 1 : 0;
    });
    setData(sortedData);
  }, [dataReceived]);
  // const data = chunk(dataReceived);
  const rows = data[activePage - 1]
    ?.filter((item) => {
      return search?.toLowerCase() === "" ? item : item.yordamchiSoz.toLowerCase().includes(search);
    })
    .map((item, index) => (
      <Table.Tr key={index}>
        <Table.Th style={{ textAlign: "center" }}>{item.tartibRaqam}</Table.Th>
        <Table.Td>{item.yordamchiSoz}</Table.Td>
        <Table.Td>{item.xalqaroTegi}</Table.Td>
        <Table.Td>{item.ozbekchaTegi}</Table.Td>
        <Table.Td>{item.sofvazifaDosh}</Table.Td>
        <Table.Td>{item.shakli}</Table.Td>
        <Table.Td>{item.manoTuri}</Table.Td>
        <Table.Td>{item.uslubiyXoslanishi}</Table.Td>
        <Table.Td>{item.sofTurkumi}</Table.Td>
        <Table.Td>{item.yordamchiSozVaOlinganManba}</Table.Td>
      </Table.Tr>
    ));

  const ths = (
    <Table.Tr>
      <Table.Th style={{ textAlign: "center" }}>№</Table.Th>
      <Table.Th style={{ textAlign: "center" }}>Yordamchi So'z</Table.Th>
      <Table.Th style={{ textAlign: "center" }}>Xalqaro tegi</Table.Th>
      <Table.Th style={{ textAlign: "center" }}>Sof/vazifadosh</Table.Th>
      <Table.Th style={{ textAlign: "center" }}>Shakli</Table.Th>
      <Table.Th style={{ textAlign: "center" }}>Ma'no turi</Table.Th>
      <Table.Th style={{ textAlign: "center" }}>Uslubiy xoslanishi</Table.Th>
      <Table.Th style={{ textAlign: "center" }}>Uslubiy xoslanishi</Table.Th>
      <Table.Th style={{ textAlign: "center" }}>Sof turkumi</Table.Th>
      <Table.Th style={{ textAlign: "center" }}>Yordamchi so'z va olingan manba</Table.Th>
    </Table.Tr>
  );

  return (
    <div style={{ width: "100%", rowGap: "10px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
      <Input style={{ width: "100%" }} onChange={(e) => setSearch(e.target.value)} mb="10px" placeholder="Your email" leftSection={<CiSearch size={16} />} />

      <div style={{ width: "100%", height: "550px", overflow: "scroll" }}>
        {rows.length ? (
          <Table captionSide="top" horizontalSpacing="xs" verticalSpacing="xs" striped withTableBorder withColumnBorders>
            <Table.Thead>{ths}</Table.Thead>
            <Table.Tbody style={{ textAlign: "justify" }}>{rows}</Table.Tbody>
          </Table>
        ) : (
          <Text style={{ textAlign: "center" }}>Bunday so'z bazda mavjud emas 🤦‍♂️</Text>
        )}
      </div>
      <Pagination style={{ marginTop: "auto" }} total={data.length} value={activePage} onChange={setPage} mt="sm" />
    </div>
  );
}
