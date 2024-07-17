
// Servir el balance de gastos

// - El gasto de hoy

// - El % de variación entre ayer y hoy 

// - Los datos de la gráfica.

import './App.css';
import Card from './components/Card.jsx';
import ExpenseProvider from './context/ExpenseProvider';

function App() {
  return (
    <ExpenseProvider>
      <div className="container-fluid bg-color full-height">
        <div className="d-flex align-items-center justify-content-center full-height">
          <Card />
        </div>
      </div>
    </ExpenseProvider>
  );
}

export default App;
