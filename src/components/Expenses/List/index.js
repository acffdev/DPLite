import React, { useContext } from "react";
import { Expenses } from "../../../components/Contexts/ExpensesProvider";
import { Container, List, Total, Text } from "./styles";
import Item from "./Item";
import NotFound from "./NotFound";

export default function ListExpenses() {
  // context
  const { data } = useContext(Expenses);

  // sem registros
  if (data.length <= 0) return <NotFound />;

  // render item
  const renderItem = ({ item }) => <Item item={item} />;

  //
  const total = data.reduce((prev, item) => prev + item.price, 0);

  //render
  return (
    <Container>
      <List
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
      <Total>
        <Text type={"money"} value={total} />
      </Total>
    </Container>
  );
}
