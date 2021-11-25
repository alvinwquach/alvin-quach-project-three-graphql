import "./App.scss";
import { useState, useEffect } from "react";
import firebase from "./firebase";
import Table from "./Table";
import CategoryForm from "./CategoryForm";
import Footer from "./Footer";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpense, setFilteredExpense] = useState([]);

  // form submit logic function
  const getExpenses = (e, filteredExpense) => {
    e.preventDefault();

    console.log({ expenses });
    console.log(filteredExpense);
    if (filteredExpense === "all") {
      setFilteredExpense(expenses);
      return;
    }
    // loop over this new array (expensesFiltered) using (filter)
    const expensesFiltered = expenses.filter((singleExpense) => {
      // return only the expenses that match the selected category value

      return singleExpense.category.toLowerCase() === filteredExpense;
    });
    console.log({ expensesFiltered });
    setFilteredExpense(expensesFiltered);
    console.log({ filteredExpense });
  };

  useEffect(() => {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (response) => {
      const newState = [];

      const data = response.val();

      for (let key in data) {
        newState.push(data[key]);
      }
      setExpenses(newState);
      setFilteredExpense(newState);
      console.log(newState);
    });
  }, []);

  return (
    <div>
      <main>
        <h1>Expense Analyzer</h1>
        <CategoryForm getExpenses={getExpenses} />
        <Table expenses={filteredExpense} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
