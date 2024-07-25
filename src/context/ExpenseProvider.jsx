import { useState, useEffect } from 'react'
import ExpenseContext from './ExpenseContext'

const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([])
  const [todayExpense, setTodayExpense] = useState(0)
  const [variation, setVariation] = useState(0)
  const [graphData, setGraphData] = useState([])
  const [currentWeek, setCurrentWeek] = useState(0)
  const [totalExpenses, setTotalExpenses] = useState(0)

  useEffect(() => {
    // Simular la obtención de datos
    const fetchedExpenses = [23, 56, 20, 36, 80, 40, 110]
    const today = fetchedExpenses[fetchedExpenses.length - 1]
    const yesterday = fetchedExpenses[fetchedExpenses.length - 2]
    const variation = ((today - yesterday) / yesterday) * 100

    const lastWeekExpenses1 = [60, 15, 90, 88, 80, 56, 50]
    const lastWeekExpenses2 = [69, 45, 100, 105, 40, 66, 51]
    const lastWeekExpenses3 = [50, 35, 110, 18, 70, 65, 73]
    const lastWeekExpenses4 = [40, 25, 70, 45, 67, 71, 44]

    const Weeks = [fetchedExpenses, lastWeekExpenses1, lastWeekExpenses2, lastWeekExpenses3, lastWeekExpenses4]

    setExpenses(fetchedExpenses)
    setTodayExpense(today)
    setVariation(variation.toFixed(1))
    setGraphData(Weeks)
  }, [])

  useEffect(() => {
    if (graphData.length > 0) {
      const expensesForCurrentWeek = graphData[currentWeek] || []
      const total = expensesForCurrentWeek.reduce((total, expense) => total + expense, 0)
      setTotalExpenses(total)     
    }
  }, [currentWeek, graphData])

  const changeWeek = (direction) => {
    setCurrentWeek((prevWeek) => {
      if (direction === 'prev' && prevWeek < graphData.length - 1) {
        return prevWeek + 1
      } else if (direction === 'next' && prevWeek > 0) {
        return prevWeek - 1
      }
      return prevWeek
    })
  }

  return (
    <ExpenseContext.Provider value={{ expenses: graphData[currentWeek] || [], todayExpense, variation, graphData, currentWeek, changeWeek, totalExpenses }}>
      {children}
    </ExpenseContext.Provider>
  )
}

export default ExpenseProvider

