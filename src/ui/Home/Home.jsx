import { Container, Title, MantineProvider, Table } from "@mantine/core";
import classes from "./style.module.scss";

export default function Home() {
  return (
    <Container size="xl" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <MantineProvider
        theme={{
          components: {
            Title: Title.extend({
              classNames: {
                root: classes.heading,
              },
            }),
          },
        }}
      >
        <Title order={1}>O'zbek tili yordamchi so'zlar bazasiga xush kelibsiz!</Title>
        <Title mt order={2}>
          O'zbek tili yordam so'zlar statistikasi
        </Title>
        <Title order={6}>Ushbu bazada o'zbek tilida mavjud bo'lgan 424 yordamchi so'z tasnifi berilgan</Title>
      </MantineProvider>
      <div style={{ width: "800px", border: "1px solid #ccc", borderRadius: "10px", marginTop: "50px", overflow: "hidden" }}>
        <Table horizontalSpacing="xl" verticalSpacing="lg" style={{ textAlign: "justify", fontSize: "20px" }} striped withColumnBorders>
          <Table.Tbody style={{ textAlign: "center" }}>
            <Table.Tr>
              <Table.Td>Ko'makchi</Table.Td>
              <Table.Td>232</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Bog'lovchi</Table.Td>
              <Table.Td>65</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Yuklama</Table.Td>
              <Table.Td>127</Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </div>
    </Container>
  );
}
