import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  return (
    <>
      <h4>Your Balance</h4>
      <h1>{`N${amounts.reduce((a, b) => a + b, 0).toFixed(2)}`}</h1>
    </>
  );
}

export default Balance;
