const Table = ({ expenses }) => {
  return (
    <div>
      <tbody>
        {expenses.map((expense) => {
          return (
            <tr>
              <td>{expense.date}</td>
              <td>{expense.transaction}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
            </tr>
          );
        })}
      </tbody>
    </div>
  );
};

export default Table;
