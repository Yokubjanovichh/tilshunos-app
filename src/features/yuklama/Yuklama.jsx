import React, { useEffect, useState } from "react";
import { Container, Title } from "@mantine/core";
import { getAllData } from "../../services/apiRestaurant";
import TableBar from "../../ui/table/table";

export default function Yuklama() {
  const [yuklama, setYuklama] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const yuklamaData = await loader();
      setYuklama(yuklamaData);
    }

    fetchData();
  }, []);

  async function loader() {
    const words = await getAllData();
    const newData = words.filter((word) => word.turkumi === "yuklama");
    return newData;
  }

  return (
    <Container size="xl" style={{ display: "flex", flexDirection: "column", gap: "50px", justifyContent: "center", alignItems: "center" }}>
      <Title order={1}>Ko'makchilar jadvali</Title>
      <TableBar dataReceived={yuklama} />
    </Container>
  );
}
// export async function loader() {
//   const words = await getAllWords();
//   const newData = [];
//   let i = 0;

//   // Birinchi datani tekshirib, turkumi: yuklama bo'lganlarni yangi arrayga qo'shish
//   words.forEach((word) => {
//     if (word.turkumi === "yuklama") {
//       // Yangi dataga qo'shish
//       newData.push({
//         ...word,
//         tartibRaqam: (i += 1),
//       });
//     }
//   });
//   return newData;
// }
