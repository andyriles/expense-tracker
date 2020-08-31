import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  const transaction = transactions.map((t) => (
    <Transaction key={t.id} transaction={t} />
  ));
  return (
    <>
      <h3>History</h3>
      <ul className="list">{[transaction]}</ul>
    </>
  );
}

export default TransactionList;
