import "./App.scss";
import { useState, useEffect } from "react";
import firebase from "./firebase";
import Table from "./Table";
import CategoryForm from "./CategoryForm";
import Footer from "./Footer";


function App() {
  // all expenses from firebase
  const [expenses, setExpenses] = useState([]);
  // filtered expenses AKA what to show
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  // form submit logic function
  const categorySelected = (e, userChoice) => {
    e.preventDefault();
    // show all expenses if user choice is all
    if (userChoice === "all") {
      setFilteredExpenses(expenses);
      return;
    }
    // filter each expense's category to output user choice
    const expensesFiltered = expenses.filter((singleExpense) => {
      // return only the expenses that match the selected category value that the user chooses
      return singleExpense.category.toLowerCase() === userChoice;
    });
    //show filtered expenses
    setFilteredExpenses(expensesFiltered);
  };

  useEffect(() => {
    const dbRef = firebase.database().ref();

    dbRef.on("value", (response) => {
      const newState = [];

      const data = response.val();

      for (let key in data) {
        newState.push(data[key]);
      }
      // show expenses on page load
      setExpenses(newState);
      // show filtered expenses
      setFilteredExpenses(newState);
    });
  }, []);

  return (
    <div>
      <title>Expense Analyzer</title>
      <main>
        <h1>Expense Analyzer</h1>
        <CategoryForm onCategorySelect={categorySelected} />
        <Table expenses={filteredExpenses} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
