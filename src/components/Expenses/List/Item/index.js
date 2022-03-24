import React, { useRef, useContext } from "react";
import { Expenses } from "../../../Contexts/ExpensesProvider";
import { remove } from "../../../../models/expenses";
import { Container, Title, Date, Price, Wrapper } from "./styles";
import { Alert } from "react-native";
import * as Animatable from "react-native-animatable";

export default function Item({ item }) {
  // context
  const { data, setData } = useContext(Expenses);

  // List Item Ref
  const ItemRef = useRef(null);

  // handle longpress
  function handleLongPress(id) {
    Alert.alert("DELETAR", "Deseja excluir permanentemente?", [
      { text: "Não" },
      { text: "Sim", onPress: () => handleDelete(id) },
    ]);
  }

  // handle delete
  async function handleDelete(id) {
    await remove(id);
    const duration = 1000;
    ItemRef.current.animate("bounceOut", duration);
    setTimeout(() => {
      setData(data.filter((item) => item.id !== id));
    }, duration);
  }

  //render
  return (
    <Animatable.View ref={ItemRef} animation="bounceIn">
      <Container onLongPress={handleLongPress.bind(this, item.id)}>
        <Wrapper>
          <Title>{item.title}</Title>
          <Date>{item.date}</Date>
        </Wrapper>
        <Price type={"money"} value={item.price} />
      </Container>
    </Animatable.View>
  );
}
