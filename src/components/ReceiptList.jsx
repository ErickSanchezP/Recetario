import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ReceiptList = () => {
  const [receipts, setReceipts] = useState([])
  const navigate = useNavigate()
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

  const openReceipt = (id) => {
    navigate(`/receipts/${id}`)
  }

  return (
    <>
      <h1>Lista</h1>
      <input
        type='text'
        placeholder='Filtrar por nombre'
        onChange={(e) => {
          const filteredReceipts = receipts.filter((receipt) =>
            receipt.strMeal.toLowerCase().includes(e.target.value.toLowerCase())
          )
          setReceipts(filteredReceipts)
        }}
      />
      <div className='grid-cards'>
        {receipts.map((receipt) => (
          <div
            className='receipt-card'
            key={receipt.idMeal}
            onClick={() => openReceipt(receipt.idMeal)}
          >
            <img className='image-view' src={receipt.strMealThumb} />
            <div className='title'>{receipt.strMeal}</div>
            <div className='link'>Ver más</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ReceiptList
