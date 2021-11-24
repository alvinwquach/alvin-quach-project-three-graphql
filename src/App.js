import './App.css'
import { useState, useEffect } from 'react';
import firebase from './firebase';
import Table from './Table';

function App() {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    const dbRef = firebase.database().ref();

    dbRef.on('value', (response) => {
      const newState = [];

      const data = response.val();

      for (let key in data) {
        newState.push(data[key])
      }
      setExpenses(newState);
    })
  }, [])

  const filteredExpenses = expenses.filter(expense => expense.category === 'Shopping');

  return (
    <div>
      <Table expenses={filteredExpenses} />
    </div>
  );
}

export default App;

