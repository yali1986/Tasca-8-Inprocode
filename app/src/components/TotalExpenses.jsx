import { useContext, useState, useEffect } from 'react'
import ExpenseContext from '../context/ExpenseContext'
import { useTranslation } from "react-i18next"

export default function TotalExpenses() {
  const { totalExpenses, changeWeek, currentWeek, graphData } = useContext(ExpenseContext)
  const { t } = useTranslation("translation")

  return (
    <>
      <div className='card-body mx-auto mb-3' style={{ width: "450px", height: "150px" }}>
        <div className='mx-auto p-3 rounded-4' style={{ width: "450px", height: "120px", backgroundColor: "#EB755B" }}>
          <div className='row'>
            <div className='col'>
              <h6 className='text-white col'>{t("main.balance")}</h6>
              <p className='text-white fs-1'>{totalExpenses} €</p>
            </div>
            <div className='col d-flex justify-content-end align-items-center'>
              <h1
                className={`text-white me-3 ${currentWeek === graphData.length - 1 ? 'disabled' : ''}`}
                onClick={() => currentWeek < graphData.length - 1 && changeWeek('prev')}
              >
                ←
              </h1>
              <h1
                className={`text-white ${currentWeek === 0 ? 'disabled' : ''}`}
                onClick={() => currentWeek > 0 && changeWeek('next')}
              >
                →
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}