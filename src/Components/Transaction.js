import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({ transaction }) {
  const { deleteTransactions } = useContext(GlobalContext);
  return (
    <>
      <li className={transaction.amount > 0 ? "plus" : "minus"}>
        {transaction.text}{" "}
        <span>
          {transaction.amount > 0
            ? `+${Math.abs(transaction.amount)}`
            : `-${Math.abs(transaction.amount)}`}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransactions(transaction.id)}
        >
          x
        </button>
      </li>
    </>
  );
}

export default Transaction;
