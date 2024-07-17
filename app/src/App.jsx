
// Servir el balance de gastos

// - El gasto de hoy

// - El % de variación entre ayer y hoy 

// - Los datos de la gráfica.

import './App.css';
import Card from './components/Card.jsx';
import ExpenseProvider from './context/ExpenseProvider';
import TotalExpenses from './components/TotalExpenses.jsx';

function App() {
  return (
    <ExpenseProvider>
      <div className="container-fluid bg-color full-height p-5">

      <div className='row'>
        <TotalExpenses />
        </div>


        <div className="d-flex justify-content-center full-height">
        

        <div className='row d-flex'>
          <Card />
          </div>
        </div>
      </div>
    </ExpenseProvider>
  );
}

export default App;
