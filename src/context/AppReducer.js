const appReducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      const newTransaction = state.transactions.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        transactions: newTransaction,
      };
    case "ADD":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

export default appReducer;
