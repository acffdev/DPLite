import React, { useState, useRef, useContext } from "react";
import { Expenses } from "../../Contexts/ExpensesProvider";
import { create, read } from "../../../models/expenses";
import { Form, Fieldset, InputTitle, InputPrice, Submit, Text } from "./styles";

export default function InsertExpenses() {
  /* context */
  const { data, setData } = useContext(Expenses);

  // ref
  const titleRef = useRef("");

  /* inputs states */
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  // clear form
  function clearInputs() {}

  /* handle submit */
  async function handleSubmit() {
    if (title.length <= 0 || price.length <= 0) {
      alert("Preencha os campos.");
      return;
    }
    const id = await create(
      title,
      price.replace(/[^0-9,]/g, "").replace(",", ".")
    );
    const current = await read.id(id);
    setData((prev) => [...current, ...prev]);
    setTitle("");
    setPrice("");
    titleRef.current.focus();
  }

  // render
  return (
    <Form>
      <Fieldset>
        <InputTitle
          ref={titleRef}
          placeholder="Em que você gastou?"
          value={title}
          onChangeText={(value) => setTitle(value)}
        />
        <InputPrice
          type={"money"}
          placeholder="Quanto gastou?"
          keyboardType="decimal-pad"
          value={price}
          onChangeText={(value) => setPrice(value)}
        />
      </Fieldset>
      <Submit onPress={handleSubmit}>
        <Text>Cadastrar despesa</Text>
      </Submit>
    </Form>
  );
}
