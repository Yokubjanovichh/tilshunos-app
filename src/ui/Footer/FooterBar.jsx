import { Text, Container, ActionIcon, Group, rem } from "@mantine/core";
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from "@tabler/icons-react";
import classes from "./style.module.scss";
import { Link } from "react-router-dom";

const data = [
  {
    title: "Foydali havolalar 1",
    links: [
      { label: "Lorem ipsum dolor sit amet consectetur adipisicing", link: "#" },
      { label: "Lorem ipsum dolor sit amet consectetur adipisicing", link: "#" },
      { label: "Lorem ipsum dolor sit amet consectetur adipisicing", link: "#" },
      { label: "Lorem ipsum dolor sit amet consectetur adipisicing", link: "#" },
    ],
  },
  {
    title: "Foydali havolalar 2",
    links: [
      { label: "Lorem ipsum dolor sit amet consectetur adipisicing", link: "#" },
      { label: "Lorem ipsum dolor sit amet consectetur adipisicing", link: "#" },
      { label: "Lorem ipsum dolor sit amet consectetur adipisicing", link: "#" },
      { label: "Lorem ipsum dolor sit amet consectetur adipisicing", link: "#" },
    ],
  },
  {
    title: "Muallif maqolalari",
    links: [
      { label: "Lorem ipsum dolor sit amet consectetur adipisicing", link: "#" },
      { label: "Lorem ipsum dolor sit amet consectetur adipisicing", link: "#" },
      { label: "Lorem ipsum dolor sit amet consectetur adipisicing", link: "#" },
      { label: "Lorem ipsum dolor sit amet consectetur adipisicing", link: "#" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text key={index}>
        <Link className={classes.link} to={link.link}>
          {link.label}
        </Link>
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text size="lg" fw={500} className={classes.title}>
          {group.title}
        </Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size="xl" className={classes.inner}>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {currentYear} <Link to="https://web.telegram.org/k/#@yokub_janovich">yokujanovich</Link> All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
