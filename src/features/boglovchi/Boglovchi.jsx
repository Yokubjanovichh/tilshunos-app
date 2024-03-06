import React, { useEffect, useState } from "react";
import { Container, Title } from "@mantine/core";
import { getAllData } from "../../services/apiRestaurant";
import TableBar from "../../ui/table/table";

export default function Boglovchi() {
  const [boglovchilar, setBoglovchilar] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const boglovchilarData = await loader();
      setBoglovchilar(boglovchilarData);
    }

    fetchData();
  }, []);

  async function loader() {
    const words = await getAllData();
    const newData = words.filter((word) => word.turkumi === "bog'lovchi");
    return newData;
  }

  return (
    <Container size="xl" style={{ display: "flex", flexDirection: "column", gap: "50px", justifyContent: "center", alignItems: "center" }}>
      <Title order={1}>Bog'lovchilar jadvali</Title>
      <TableBar dataReceived={boglovchilar} />
    </Container>
  );
}

// export async function loader() {
//   const words = await getAllWords();
//   const newData = [];
//   let i = 0;

//   // Birinchi datani tekshirib, turkumi: yuklama bo'lganlarni yangi arrayga qo'shish
//   words.forEach((word) => {
//     if (word.turkumi === "bog'lovchi") {
//       // Yangi dataga qo'shish
//       newData.push({
//         ...word,
//         tartibRaqam: (i += 1),
//       });
//     }
//   });
//   return newData;
// }
