import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { checkSign } from "../helper/checkSign";

const Incomeexpense = () => {
  const { transactions } = useContext(GlobalContext);

  const incomeTotal = transactions
    .filter((item) => item.amount > 0)
    .reduce((total, current) => total + current.amount, 0);
  const expenseTotal = transactions
    .filter((item) => item.amount < 0)
    .reduce((total, current) => total + current.amount, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          {checkSign(incomeTotal)}${Math.abs(incomeTotal).toFixed(2)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {checkSign(expenseTotal)}${Math.abs(expenseTotal).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default Incomeexpense;
