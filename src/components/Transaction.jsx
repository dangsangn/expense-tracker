import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount > 0 ? "+" : "-";

  const handleDelete = () => deleteTransaction(transaction.id);
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.context}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className="delete-btn" onClick={handleDelete}>
        x
      </button>
    </li>
  );
};

export default Transaction;
