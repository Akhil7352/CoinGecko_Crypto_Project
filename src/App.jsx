import { useState } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import { CurrencyContext } from './context/CurrencyContext.js';


function App() {

  const [currency, setCurrency] = useState('usd');  

  return (
    
    <>
     <CurrencyContext.Provider value={{currency, setCurrency}}>
        <Home />
     </CurrencyContext.Provider>
    </>
  )
}

export default App
