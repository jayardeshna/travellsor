import React from 'react'
import './Coin.css';

const Coin = ({name, image, symbol, price, volume, priceChange, market_cap}) => {
  return (
    <>
  
  
    <div className='coin-container'>
    
      <div className='coin-row'>
      
        <div className='coin'>
            <img src={image} alt='crypto' />
            <h1>{name}</h1>
            <p className='coin-symbol'> {symbol} </p>
        </div>
       
       
        <div className='coin-data'>
        <p className='coin-price'> ₹{price} </p>
        <p className='coin-price'> ₹{volume.toString()} </p>

       {priceChange < 0 ? (
         <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
       ): (
        <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
       )       
       }

       <p className='coin-marketcap'> 
        MKT Cap: ₹{market_cap}
        </p>



        </div>
      </div>

    </div>
    </>
  )
}

export default Coin