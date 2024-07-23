import './App.css'
import Card from './components/Card.jsx'
import ExpenseProvider from './context/ExpenseProvider'
import TotalExpenses from './components/TotalExpenses.jsx'
import { Suspense } from 'react'
import Languages from './components/Languages.jsx'




function App() {

  return (

    <ExpenseProvider>
      <div className="d-flex justify-content-center full-height bg-color">
      
          <div className='row'>
            <div className="container-fluid bg-color">
              <Languages/>
              <TotalExpenses />

              <Card />
            </div>
          

        </div>
        </div>
   
    </ExpenseProvider>
  )
}

export default function WrappedApp() {
  return (
 
    <Suspense fallback="...loading">
      <App />
    </Suspense>
  )
}

//export default App;
