import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

//create context
export const GlobalContext = createContext(initialState);

//create provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //action
  const deleteTransaction = (id) => {
    return dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const addTransaction = (transaction) => {
    return dispatch({
      type: "ADD",
      payload: transaction,
    });
  };

  const value = {
    transactions: state.transactions,
    deleteTransaction,
    addTransaction,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};
