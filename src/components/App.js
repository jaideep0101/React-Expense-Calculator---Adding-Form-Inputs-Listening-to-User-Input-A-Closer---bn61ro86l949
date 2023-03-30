import React from 'react';
import '../styles/App.css';

const App = () => {
  const [expenses, setExpenses] = React.useState([]);

  const handleAddExpense = () => {
    const expenseInput = document.getElementById('expense-input');
    const expenseText = expenseInput.value.trim();
    if (expenseText !== '') {
      const [itemName, itemPrice] = expenseText.split(' - ');
      if (itemName && itemPrice) {
        const price = parseFloat(itemPrice);
        const newExpense = {
          name: itemName,
          price: price,
        };
        setExpenses(expenses => [...expenses, newExpense]);
        expenseInput.value = '';
      }
    }
  };

  return (
    <div id="main">
      <input id="expense-input" />
      <button id="expense-button" onClick={handleAddExpense}>Add Expense</button>
      <div id="expense-list">
        {expenses.map((expense, index) => (
          <div key={index}>{expense.name} - {expense.price}</div>
        ))}
      </div>
      <div id="total-expense">
        Total Expense: {expenses.reduce((total, expense) => total + expense.price, 0)}
      </div>
    </div>
  );
};

export default App;
