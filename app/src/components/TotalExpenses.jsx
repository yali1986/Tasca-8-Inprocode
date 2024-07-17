import { useContext } from 'react';
import ExpenseContext from '../context/ExpenseContext';

export default function TotalExpenses() {
  const { expenses } = useContext(ExpenseContext);

  // Calcular la suma de todos los gastos
  const totalExpenses = expenses.reduce((total, expense) => total + expense, 0);

  return (
    <div className='card-body mb-5 mx-auto p-4' style={{ backgroundColor: "#EB755B" }}>
      <div className='row'>
        <div className='col'>
          <h6 className='text-white col'>Balanç total</h6>
          <p className='text-white fs-1'>{totalExpenses} €</p>
        </div>
        <div className='col d-flex justify-content-end'>
          <h1 className='text-white me-3'>←</h1>
          <h1 className='text-white'>→</h1>
        </div>
      </div>
    </div>
  );
}

