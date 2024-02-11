import React, { useState } from "react";
import { Container, Title, TextInput, Textarea, SimpleGrid, Group, Button } from "@mantine/core";
import { useForm } from "@mantine/form"; // <-- 1. Tegishli paket nomi to'g'rilandi

const YOUR_CHAT_ID = "https://t.me/+1VCNKf-ZrkUyY2Ey";
const YOUR_BOT_TOKEN = "6301042909:AAEbE5V7Jt1LSLyBygBRQtIAjCwmFIp60ZE";

export default function Boglanish() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("ishlayabdi");

    const requestBody = {
      chat_id: YOUR_CHAT_ID,
      text: `Yangi xabar:\nIsm: ${name}\nTelefon: ${phone}\nMavzu:${subject}\nXabar: ${message}`,
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
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
      });
  }

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => handleSubmit())}>
      <Container size="xl" style={{ width: "500px", display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center" }}>
        <Title order={2} size="h1" style={{ fontFamily: "Greycliff CF, var(--mantine-font-family)" }} fw={900} ta="center">
          Bog'lanish
        </Title>

        <SimpleGrid style={{ width: "500px" }} cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput onChange={(e) => setName(e.target.value)} size="md" style={{ width: "240px" }} label="Ism" placeholder="Ismingiz" name="name" variant="filled" {...form.getInputProps("name")} />
          <TextInput onChange={(e) => setPhone(e.target.value)} size="md" style={{ width: "240px" }} label="Telefon raqam" placeholder="Telefon raqamingiz" name="number" variant="filled" {...form.getInputProps("number")} />
        </SimpleGrid>

        <TextInput onChange={(e) => setSubject(e.target.value)} size="md" style={{ width: "500px" }} label="Mavzu" placeholder="Savolingiz mavzusi" mt="md" name="mavzu" variant="filled" {...form.getInputProps("mavzu")} />
        <Textarea onChange={(e) => setMessage(e.target.value)} style={{ width: "500px" }} size="md" width="xl" mt="md" label="Savol" placeholder="Savolingiz" maxRows={10} minRows={5} autosize name="message" variant="filled" {...form.getInputProps("message")} />

        <Group justify="center" mt="xl">
          <Button type="submit" size="md">
            Send message
          </Button>
        </Group>
      </Container>
    </form>
  );
}
