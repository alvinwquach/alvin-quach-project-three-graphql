import "./App.scss";
import { useState } from "react";
import Table from "./Table";
import CategoryForm from "./CategoryForm";
import Footer from "./Footer";
import { useFetchExpensesQuery } from "./generated/graphql";

function ActualApp({ expenses }) {
  // filtered expenses AKA what to show
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

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

  return (
    <div>
      <main>
        <h1>Expense Analyzer</h1>
        <CategoryForm onCategorySelect={categorySelected} />
        <Table expenses={filteredExpenses} />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const queryResult = useFetchExpensesQuery({
    variables: { month: "Dry January" },
  });

  const { loading, data, error } = queryResult;

  console.log(`loading: ${loading}`);
  console.log(`data: `, data);
  console.log(`error:`, error);

  const expenses = data?.statement?.expenses || [];

  if (loading) {
    return <pre>Loading...</pre>;
  } else if (error) {
    return <pre>{error.message}</pre>;
  }

  return <ActualApp expenses={expenses} />;
}

export default App;
