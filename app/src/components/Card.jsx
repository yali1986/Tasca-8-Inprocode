import BarsChart from "./BarsChart.jsx"


export default function Card() {
  return (
    <div>
      
        <div className='card-body mx-auto bg-white p-5' style={{ width: "450px", height: "250px" }}>
        <h4>Despeses -Última setmana</h4>
          <BarsChart/>
        </div>
      </div>
  )
}
