const Table = ({ expenses }) => {
  return (
    <div>
      {/*created table to map out expenses by date, transaction, amount, and category */}
      <table>
        <tbody>
          {expenses.map((expense) => {
            return (
              <tr>
                <td className="expenseDate">{expense.date}</td>
                <td className="expenseTransaction">{expense.transaction}</td>
                <td className="expenseAmount">${expense.amount}</td>
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
