import React from 'react'

// eslint-disable-next-line react/prop-types
const ReceiptCard = ({ url, title }) => {
  return (
    <div className='image-container'>
      <img src={url} alt={title} className='image-view' />
      <h2>{title}</h2>
    </div>
  )
}

export default ReceiptCard
