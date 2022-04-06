import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Incomeexpense from "./components/IncomeExpense";
import List from "./components/List";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <h2>Expense tracker</h2>
        <div className="container">
          <Header />
          <Incomeexpense />
          <List />
          <Form />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
