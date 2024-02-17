import { useId } from "react";

const InputBox = ({label, amount, onAmountChange, currencyOptions=[], selectedCurrency='usd', onCurrencyChange}) => {
    const id =useId();
  return (
    <>
        <label htmlFor={id}>{label}</label>
        <input id={id} 
        type="number" 
        value={amount} 
        placeholder="amount" 
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}/>

        <span>Currency Type</span>

        <select value={selectedCurrency} onChange={(e)=> onCurrencyChange(e.target.value)}>
            {currencyOptions.map((currency)=>(
                <option key={currency} value={currency}>{currency}</option> 
                ))}
        </select>
    </>
  )
}

export default InputBox; 