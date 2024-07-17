import React, { useContext } from 'react';
import BarsChart from "./BarsChart.jsx";
import ExpenseContext from '../context/ExpenseContext';

export default function Card() {
  const { todayExpense, variation } = useContext(ExpenseContext);

  return (
    <div>
      <div className='card-body mx-auto bg-white p-5' style={{ width: "450px", height: "400px" }}>
        <h4 className='text-center'>Despeses - Última setmana</h4>
        <BarsChart />
        <div className="mt-3 row">
        <div className='col'>
          <h5 className='text-secondary fs-6'>Despesa d'avui</h5>
          <p>{todayExpense} €</p>
          </div>

          <div className='col text-end'>         
          <p>+{variation} %</p>
          <h5 className='fs-6'>respecte a ahir</h5>
          </div>

        </div>
      </div>
    </div>
  );
}
