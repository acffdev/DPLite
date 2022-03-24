import React, { useState } from "react";
import { ExpensesSearch } from "../../Expenses/Search";
import { Modal } from "react-native";
import { Container, Title, Span, Icon, TouchableOpacity } from "./styles";

export default function Header() {
  const [visible, setVisible] = useState(false);

  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  return (
    <Container>
      <Title>
        <Span>Despesas</Span> Pessoais
      </Title>
      <TouchableOpacity onPress={openModal}>
        <Icon name="search-sharp" />
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={closeModal}
      >
        <ExpensesSearch close={closeModal} />
      </Modal>
    </Container>
  );
}
