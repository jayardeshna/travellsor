import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Coin from './coin';
import './App.css';

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false

const App = () => {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  // const [immit,setImmit] = useState(false);
  // setInterval(()=>{
  //  setImmit(~immit)
  // },10000)
  useEffect(()=>{
    const apiCall = async () =>{

      const data= await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      const json=await data.json();
      setCoins(json);
      console.log('jjj')
      
      
   }
   apiCall();
  }, [])


  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoin = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <>
      <div className='coin-app'>
        <div className='coin-search'>
          <h1 className='coin-text'> Search for Currency </h1>
          <form>
            <input
              type="text"
              placeholder="Search"
              className="coin-input"
              onChange={handleChange}
            />

          </form>
        </div>
        <div className='header'>
         
          <li className='list'>coin</li>
          <li className='list'>symbol</li>
          <li className='list'>volume</li>
          <li className='list'>price</li>
          <li className='list'>percentage</li>
          <li className='list'>market cap</li>
        </div>

       
     
        
        {filteredCoin.map(coin =>{
          return(
           <Coin 
           key={coin.id}
           name={coin.name}
           image={coin.image}
           symbol={coin.symbol}
           volume={coin.total_volume}
           price={coin.current_price}
           priceChange={coin.price_change_percentage_24h}
           market_cap={coin.market_cap}
           />
          )
        })}

      </div>
    </>
  )
}

export default App