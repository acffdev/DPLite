import React, { createContext, useEffect, useState } from "react";
import { read } from "../../models/expenses";

export const Expenses = createContext();

export default function ExpensesProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    read.all().then((res) => setData(res));
  }, []);

  return (
    <Expenses.Provider value={{ data, setData }}>{children}</Expenses.Provider>
  );
}
