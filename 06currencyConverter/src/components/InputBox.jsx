import { useId } from "react"; // useId is a react hook for generating unique ids that can be passed to accessibility attributes.

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    countryCode = (selectCurrency.slice(0, 2) || "us").toUpperCase(),
    className = "",
}) {
   
    const amountInputId = useId() //do not call useId to generate keys on alist. keys should be generated from your data.

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor= {amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled= {amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <img className="rounded-lg px-1 py-1 h-[50px] w-[50px] outline-none" src={`https://flagsapi.com/${countryCode}/flat/64.png`}
                alt={`${selectCurrency} flag`} />
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled= {currencyDisable}
                >
                    
                        {currencyOptions.map((currency)=> (
                            <option key={currency} value={currency}> 
                            {currency}
                            </option> //remember the key in react when you do loop in react
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
