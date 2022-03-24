import React from "react";
import { Container, Text, Icon } from "./styles";

export default function NotFound() {
  return (
    <Container>
      <Icon name="money-check-alt" />
      <Text>Nenhuma despesa foi encontrada</Text>
    </Container>
  );
}
