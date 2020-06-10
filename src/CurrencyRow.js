import React from 'react'

export default function CurrencyRow(props) {

    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props




    return (
        <div>
            <input type="number" className="input" value={amount} onChange={onChangeAmount} />
            <select vaue={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (

                    <option key={option} vaue={option}> {option} </option>
                ))}



            </select>
        </div>
    )
}
