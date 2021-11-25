const Table = ({ expenses }) => {
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
                <td className="expenseDate">{expense.date}</td>
                <td className="expenseTransaction">{expense.transaction}</td>
                <td className="expenseAmount">
                  ${formatCurrency(expense.amount)}
                </td>
                <td className="expenseCategory">{expense.category}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
