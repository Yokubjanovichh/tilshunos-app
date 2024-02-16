import React, { useState } from "react";
import { Container, Title, TextInput, Textarea, SimpleGrid, Group, Button, Notification, Text } from "@mantine/core";

const YOUR_CHAT_ID = -1002114577604;
const YOUR_BOT_TOKEN = "6301042909:AAEbE5V7Jt1LSLyBygBRQtIAjCwmFIp60ZE";

export default function Boglanish() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [notification, setNotification] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setDisabled(true);
    const requestBody = {
      chat_id: YOUR_CHAT_ID,
      text: `Yangi xabar:\nIsm: ${name}
      \nTelefon: ${phone}
      \nMavzu: ${subject}
      \nXabar: ${message}`,
    };

    fetch(`https://api.telegram.org/bot${YOUR_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Xatolik yuz berdi");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setName("");
        setPhone("");
        setMessage("");
        setSubject("");
        setDisabled(false);
        setNotification(true);
        setTimeout(() => {
          setNotification(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
      });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Container size="xl" style={{ width: "500px", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center" }}>
          <Title order={2} size="h1" style={{ fontFamily: "Greycliff CF, var(--mantine-font-family)" }} fw={900} ta="center">
            Bog'lanish
          </Title>
          <Text style={{ fontStyle: "italic", color: "#ccc", fontSize: "20px" }}> Muallif bilan bog'lanish</Text>

          <SimpleGrid style={{ width: "500px" }} cols={{ base: 1, sm: 2 }} mt="xl">
            <TextInput required type="text" value={name} onChange={(e) => setName(e.target.value)} size="md" style={{ width: "240px" }} label="Ism" placeholder="Ismingiz" name="name" variant="filled" />
            <TextInput required type="number" value={phone} onChange={(e) => setPhone(e.target.value)} size="md" style={{ width: "240px" }} label="Telefon raqam" placeholder="Telefon raqamingiz" name="number" variant="filled" />
          </SimpleGrid>

          <TextInput required type="text" value={subject} onChange={(e) => setSubject(e.target.value)} size="md" style={{ width: "500px" }} label="Mavzu" placeholder="Savolingiz mavzusi" mt="md" name="mavzu" variant="filled" />
          <Textarea type="text" required value={message} onChange={(e) => setMessage(e.target.value)} style={{ width: "500px" }} size="md" width="xl" mt="md" label="Savol" placeholder="Savolingiz" maxRows={10} minRows={5} autosize name="message" variant="filled" />

          <Group justify="center" mt="xl">
            <Button disabled={disabled} type="submit" size="md">
              Xabar yuborish
            </Button>
          </Group>
        </Container>
      </form>
      {notification && <Notification style={{ display: "inline-block" }} withCloseButton={false} withBorder title="Xabaringiz muvaffaqiyatli jo‘natildi" />}
    </>
  );
}
