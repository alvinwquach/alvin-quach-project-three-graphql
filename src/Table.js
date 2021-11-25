const Table = ({ expenses }) => {
  // created function to format currency to have two digits after decimal
  function formatCurrency(value) {
    return value.toFixed(2);
  }
  return (
    <div className="expenseReport">
      {/*created table to map out expenses by date, transaction, amount, and category */}
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Transaction</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            return (
              <tr key={expense.id}>
                <td>{expense.date}</td>
                <td>{expense.transaction}</td>
                <td>${formatCurrency(expense.amount)}</td>
                <td>{expense.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
