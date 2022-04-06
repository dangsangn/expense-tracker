import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { checkSign } from "../helper/checkSign";

const Header = () => {
  const { transactions } = useContext(GlobalContext);

  const totals = transactions.reduce((total, current) => {
    return current.amount + total;
  }, 0);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">
        {checkSign(totals)}${Math.abs(totals).toFixed(2)}
      </h1>
    </>
  );
};

export default Header;
