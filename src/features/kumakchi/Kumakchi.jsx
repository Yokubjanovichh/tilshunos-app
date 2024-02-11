import { useLoaderData } from "react-router-dom";
import { Container, Title } from "@mantine/core";
// import { getAllWords } from "../../services/apiRestaurant";
import { getAllData } from "../../services/apiRestaurant";
import TableBar from "../../ui/table/table";

export default function Kumakchi() {
  const kumakchilar = useLoaderData();
  return (
    <Container size="xl" style={{ display: "flex", flexDirection: "column", gap: "50px", justifyContent: "center", alignItems: "center" }}>
      <Title order={1}>Ko'makchilar jadvali</Title>
      <TableBar dataReceived={kumakchilar} />
    </Container>
  );
}

// export async function loader() {
//   const words = await getAllWords();
//   const newData = [];
//   let i = 0;

//   // Birinchi datani tekshirib, turkumi: yuklama bo'lganlarni yangi arrayga qo'shish
//   words.forEach((word) => {
//     if (word.turkumi === "ko'makchi") {
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
  let i = 0;

  // Birinchi datani tekshirib, turkumi: yuklama bo'lganlarni yangi arrayga qo'shish
  words.forEach((word) => {
    if (word.turkumi === "ko'makchi") {
      // Yangi dataga qo'shish
      newData.push({
        ...word,
        tartibRaqam: (i += 1),
      });
    }
  });
  return newData;
}
