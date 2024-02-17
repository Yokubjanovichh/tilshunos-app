import { useLoaderData } from "react-router-dom";
import { Container, Title } from "@mantine/core";
// import { getAllWords } from "../../services/apiRestaurant";
import { getAllData } from "../../services/apiRestaurant";
import TableBar from "../../ui/table/table";

export default function Yuklama() {
  const yuklama = useLoaderData();
  return (
    <Container size="xl" style={{ display: "flex", flexDirection: "column", gap: "50px", justifyContent: "center", alignItems: "center" }}>
      <Title order={1}>Yuklamalar jadvali</Title>
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

export async function loader() {
  const words = getAllData();
  const newData = [];

  // Birinchi datani tekshirib, turkumi: yuklama bo'lganlarni yangi arrayga qo'shish
  words.forEach((word) => {
    if (word.turkumi === "yuklama") {
      // Yangi dataga qo'shish
      newData.push({
        ...word,
      });
    }
  });
  return newData;
}
