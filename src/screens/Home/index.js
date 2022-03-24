import React from "react";
import ListExpenses from "../../components/Expenses/List";
import InsertExpenses from "../../components/Expenses/Insert";

export default function Home() {
  return (
    <>
      <ListExpenses />
      <InsertExpenses />
    </>
  );
}
