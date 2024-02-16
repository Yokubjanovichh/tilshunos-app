import { useRouteError } from "react-router-dom";
import LinkButton from "./Link";
import { Container } from "@mantine/core";

function NotFound() {
  const error = useRouteError();

  return (
    <Container size="xl">
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </Container>
  );
}

export default NotFound;
