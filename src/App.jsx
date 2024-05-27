import { useState, useEffect } from 'react'
import ReceiptCard from './components/ReceiptCard'
import './App.css'
function App () {
  const [receipts, setReceipts] = useState([])
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
      .then((response) => {
        return response.json()
      }).then((results) => {
        setReceipts(results.meals)
      }).catch((error) => {
        console.log(error)
      })
  }, [])
  return (
    <>
      <h1>Recetario</h1>
      <div className='grid-cards'>
        {receipts.map((receipt) => (
          <ReceiptCard key={receipt.idMeal} url={receipt.strMealThumb} title={receipt.strMeal} />
        ))}
      </div>
    </>
  )
}

export default App
