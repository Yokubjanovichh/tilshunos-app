import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./style.module.scss";
import TeduLogo from "../../utils/images/terdu-logo.jpeg";
import { useEffect } from "react";

const links = [
  { link: "/home", label: "Bosh sahifa" },
  { link: "/kumakchi", label: "Ko'makchi" },
  { link: "/boglovchi", label: "Bog'lovchi" },
  { link: "/yuklama", label: "Yuklama" },
  { link: "/dastur-haqida", label: "Dastur haqida" },
  { link: "/biz-haqimizda", label: "Biz haqimizda" },
  { link: "/boglanish", label: "Bog'lanish" },
];

export default function Header() {
  const location = useLocation();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(location.pathname);
  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);
  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));
  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Link to="/home">
          <img width="100px" height="100px" src={TeduLogo} alt="Terdu-logo" />
        </Link>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
