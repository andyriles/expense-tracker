import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpense() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((a, b) => a + b, 0)
    .toFixed(2);
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((a, b) => (a + b) * -1, 0)
    .toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{`+N${income}`}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{`-N${expense}`}</p>
      </div>
    </div>
  );
}

export default IncomeExpense;
