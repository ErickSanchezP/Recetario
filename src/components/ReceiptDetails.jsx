import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ReceiptDetails = () => {
  const { id } = useParams()
  const [receipt, setReceipt] = useState([])

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((response) => {
        return response.json()
      }).then((results) => {
        setReceipt(results.meals)
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  if (receipt) {
    return (
      <div className='grid-cards'>
        {receipt.map((receipt) => (
          <div
            className='receipt-card'
            key={receipt.idMeal}
          >
            <h1 className='title'>{receipt.strMeal}</h1>
            <img className='image-view' src={receipt.strMealThumb} />
            <div className='instructions'>{receipt.strInstructions}</div>
            <a className='video' href={receipt.strYoutube}>Mira un video AQUÍ </a>
          </div>
        ))}
      </div>
    )
  }
}

export default ReceiptDetails
