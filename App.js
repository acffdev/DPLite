import React from "react";
import ExpensesProvider from "./src/components/Contexts/ExpensesProvider";
import Layout from "./src/components/Layout";
import Home from "./src/screens/Home";

export default function App() {
  return (
    <ExpensesProvider>
      <Layout>
        <Home />
      </Layout>
    </ExpensesProvider>
  );
}
