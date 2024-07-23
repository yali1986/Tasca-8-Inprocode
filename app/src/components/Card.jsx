import BarsChart from "./BarsChart.jsx"
import { useContext } from 'react'
import ExpenseContext from '../context/ExpenseContext'
import { useTranslation } from "react-i18next"

export default function Card() {
  const { todayExpense, variation } = useContext (ExpenseContext)
  const { t } = useTranslation("translation")

  return (
   
      <div className='card-body mx-auto bg-white p-5 rounded-4 mb-5' style={{ width: "450px", height: "400px" }}>
        <h4 className='text-center'>{t("main.bills")}</h4>
        <BarsChart />
        <div className="mt-3 row">
        <div className='col'>
          <h5 className='text-secondary fs-6'>{t("main.today")}</h5>
          <p>{todayExpense} €</p>
          </div>

          <div className='col text-end'>         
          <p>+{variation} %</p>
          <h5 className='fs-6'>{t("main.yesterday")}</h5>
          </div>
        </div>
      </div>   
  )
}
