import { useEffect, useState } from "react";
import { Group, Input, Select, Table, Text } from "@mantine/core";
import { Pagination } from "@mantine/core";
import { CiSearch } from "react-icons/ci";
import { FaSort } from "react-icons/fa";

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
  const [shakliBuyicha, setShakliBuyicha] = useState("");
  const [sofTurkumiBuyicha, setSofTurkumiBuyicha] = useState("");

  // Ma'lumotlar yordamchi so'z bo'yicha avtomatik ravishda tartiblangan holatda chiqadi
  useEffect(() => {
    const sortedData = [...data].sort((a, b) => {
      return a.yordamchiSoz?.toLowerCase() < b.yordamchiSoz?.toLowerCase() ? -1 : a.yordamchiSoz?.toLowerCase() > b.yordamchiSoz?.toLowerCase() ? 1 : 0;
    });
    setData(sortedData);
  }, [dataReceived]);
  const rows = data[activePage - 1]
    ?.filter((item) => {
      if (search?.toLowerCase() !== "") {
        return item.yordamchiSoz?.toLowerCase().includes(search);
      } else if (shakliBuyicha !== "") {
        return item.sofvazifaDosh?.toLowerCase().includes(shakliBuyicha);
      } else if (sofTurkumiBuyicha !== "") {
        return item.sofTurkumi?.toLowerCase().includes(sofTurkumiBuyicha);
      } else {
        return item;
      }
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
      <Group style={{ width: "100%" }} justify="space-between" gap="xs" grow>
        <Select
          mb="10px"
          placeholder="Shakli buyicha salarash:"
          value={() => shakliBuyicha}
          defaultValue={shakliBuyicha}
          onChange={(_value, option) => {
            setSofTurkumiBuyicha("");
            setSearch("");
            setShakliBuyicha(option.value);
          }}
          rightSection={<FaSort />}
          data={["", "vaz.ko'm", "sof.ko'm", "vaz.yukl", "sof.yukl", "vaz.bog'l", "sof.bog'l"]}
        />

        <Select
          mb="10px"
          value={() => sofTurkumiBuyicha}
          defaultValue={sofTurkumiBuyicha}
          placeholder="Sof turkumi buyicha salarash:"
          onChange={(_value, option) => {
            setShakliBuyicha("");
            setSearch("");
            setSofTurkumiBuyicha(option.value);
          }}
          rightSection={<FaSort />}
          data={["", "ravish", "ot", "fe'l", "sifat", "badiiy", "yuklama", "modal so'z", "son", "bog'lovchi", "olmosh", "undov", "so'zlashuv"]}
        />

        <Input
          onChange={(e) => {
            setSofTurkumiBuyicha("");
            setShakliBuyicha("");
            setSearch(e.target.value);
          }}
          mb="10px"
          placeholder="Izlash..."
          leftSection={<CiSearch size={16} />}
        />
      </Group>

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
      <Pagination style={{ marginTop: "auto" }} total={search || shakliBuyicha || sofTurkumiBuyicha ? Math.floor(rows.length / 10) : data.length} value={activePage} onChange={setPage} mt="sm" />
    </div>
  );
}
