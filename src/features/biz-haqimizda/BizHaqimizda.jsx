import { Container, Text, Title } from "@mantine/core";
import { Link } from "react-router-dom";

export default function BizHaqimizda() {
  return (
    <Container size="xl" style={{ display: "flex", flexDirection: "column", gap: "30px", justifyContent: "center", alignItems: "center" }}>
      <Title order={1}>Biz haqimizda</Title>
      <Text size="xl" style={{ textAlign: "justify" }}>
        &nbsp;&nbsp;Ushbu{" "}
        <b>
          <Link to="https://auxwords.uz/index.html">auxwords.uz</Link>
        </b>
        deb nomlangan platforma 2024-yil …-yanvar kuni yaratildi. O’zbek tili yordamchi so’zlarining ushbu elektron bazasidan filologik tadqiqotlar olib boruvchi til mutaxassislari, oliy ta’limda tahsil oluvchi talabalar, ona tili va adabiyot fani o’qituvchilari va, qolaversa, o’zbek tili bilan qiziquvchi keng o’quvchilar ommasi ham foydalanishlari
        mumkin. Ushbu bazani tayyorlashda bir necha yillik ilmiy izlanishlar asosida yaratilgan o’quv-lingvistik lug’atlar, O’TIL (o’zbek tilining izohli lug’ati) va tadqiqot ishlariga tayanildi. Bazada keltirilgan namunalar turli janrdagi ilmiy, rasmiy va badiiy matnlardan olindi. Bu dasturiy ta’minot o’zbek tilidagi yordamchi so’zlar yuzasidan
        qilingan ilmiy izlanishlar asosida to’plangan so’zlarning elektron lug’atidir. Bazadan foydalanish tartibi …
      </Text>
      <Text size="xl" style={{ textAlign: "justify" }}>
        &nbsp;&nbsp;Ushbu platformada o’zbek tilidagi 4…. ta yordamchi so’z berilib, ularning sof va vazifadoshligi, uslubiy xoslanishi, ma’no turlari, tegi va qaysi so’z turkumidan yordamchi so’zga o’tganligi haqidagi ma’lumotlar kiritilgan. Har bir yordamchi so’z ishtirokidagi gaplar namuna sifatida keltirilgan.
      </Text>
      <Title style={{ textAlign: "center" }} order={2}>
        Dasturning huquqiy asoslari
      </Title>{" "}
      "Auxwords.uz" dasturi guvohnoma bilan tasdiqlangan.
      <Text style={{ fontStyle: "italic" }} size="xl">
        Taklif va munosabatlar uchun biz bilan bog’laning.
      </Text>
    </Container>
  );
}
