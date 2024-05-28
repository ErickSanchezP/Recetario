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

  if (receipts.length) {
    return (
      <>
        <h1>Lista</h1>
        <div className='grid-cards'>
          {receipts.map((receipt) => (
            <div
              className='receipt-card'
              key={receipt.idMeal}
              onClick={() => openReceipt(receipt.idMeal)}
            >
              <img className='image-view' src={receipt.strMealThumb} />
              <div className='title'>{receipt.strMeal}</div>
              <div className='link'>Read more</div>
            </div>
          ))}
        </div>
      </>
    )
  }
}

export default ReceiptList
