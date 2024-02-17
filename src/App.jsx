import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {InputBox} from './components/index'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0); 
  const [from, setFrom] = useState('usd');

  const [convertedAmount, setConvertedAmount] = useState(0);
  const [to, setTo] = useState('inr');

  const currencyInfo = useCurrencyInfo(from);               //Using the custom-hook
  const options = Object.keys(currencyInfo);

  const convert = () =>{
    setConvertedAmount(amount*currencyInfo[to].toFixed(2))  //toFixed helps to show only 2 numbers after decimal
  }

  return (
    <>
      <h2>hello</h2>
      <form onSubmit={(e) =>{
        e.preventDefault(); 
        convert();
        }}>

        <InputBox label="From" 
        amount={amount} 
        onAmountChange={(amount) => setAmount(amount)} 
        onCurrencyChange={(currency)=> setFrom(currency)}
        selectedCurrency={from}
        currencyOptions={options}
        />

      <br /><br />
        <InputBox label="To" 
        amount={convertedAmount} 
        // onAmountChange={(amount) => setAmount(amount)}   
        selectedCurrency={to}
        onCurrencyChange={(currency)=> setTo(currency)} 
        currencyOptions={options}
        />


      <br />
      <button type='sumbit'>Convert</button>
      </form>
    </>
  )
}

export default App;
