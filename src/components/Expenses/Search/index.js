import React, { useState, useContext } from "react";
import { Expenses } from "../../Contexts/ExpensesProvider";
import { read } from "../../../models/expenses";
import {
  Overlay,
  CloseModalWrapper,
  CloseModal,
  CloseModalText,
  Container,
  Title,
  Input,
  Submit,
  SubmitText,
  Fieldset,
} from "./styles";
import { dateToSql } from "../../../helpers/dateFormat";

export const ExpensesSearch = ({ close }) => {
  const { data, setData } = useContext(Expenses);

  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  async function handleSubmit() {
    if (dateStart.length <= 0 || dateEnd.length <= 0) {
      alert("Preencha as datas corretamente.");
      return;
    }
    if (dateStart > dateEnd) {
      alert("Data inicial incompatível com a final.");
      return;
    }
    const result = await read.date(
      dateToSql(dateStart),
      dateToSql(dateEnd) + " 23:59:59"
    );
    setData(result);
    close();
  }

  return (
    <Overlay>
      <CloseModalWrapper>
        <CloseModal onPress={close}>
          <CloseModalText>X</CloseModalText>
        </CloseModal>
      </CloseModalWrapper>
      <Container>
        <Title>BUSCAR POR PERIODO</Title>
        <Fieldset>
          <Input
            type={"datetime"}
            options={{
              format: "DD/MM/YYYY",
            }}
            placeholder="De ..."
            value={dateStart}
            onChangeText={(value) => setDateStart(value)}
          />
          <Input
            type={"datetime"}
            options={{
              format: "DD/MM/YYYY",
            }}
            placeholder="Até ..."
            value={dateEnd}
            onChangeText={(value) => setDateEnd(value)}
          />
        </Fieldset>
        <Submit onPress={handleSubmit}>
          <SubmitText>Pesquisar</SubmitText>
        </Submit>
      </Container>
    </Overlay>
  );
};
