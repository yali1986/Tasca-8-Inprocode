import React, { useState, useEffect } from 'react';
import ExpenseContext from './ExpenseContext';

const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [todayExpense, setTodayExpense] = useState(0);
  const [variation, setVariation] = useState(0);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    // Simular la obtención de datos
    const fetchedExpenses = [23, 56, 20, 36, 80, 40, 110];
    const today = fetchedExpenses[fetchedExpenses.length - 1];
    const yesterday = fetchedExpenses[fetchedExpenses.length - 2];
    const variation = ((today - yesterday) / yesterday) * 100;
   

    setExpenses(fetchedExpenses);
    setTodayExpense(today);
    setVariation(variation.toFixed(1));
    setGraphData(fetchedExpenses);
  }, []);

  return (
    <ExpenseContext.Provider value={{ expenses, todayExpense, variation, graphData }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;

