import React from 'react'
import StripeButton from '../../components/StripButton/StripeButton'
import cat from '../../assets/logo512.png'
import styles from './paymentpage.module.scss'

const PaymentPage = ({ currency, amount, transitionIn, setCompleteTransaction }) => {
    const getCurrencySymbol = ((() => {
        switch (currency) {
            case 'USD':
                return '$'
            case 'GBP':
                return '£'
            case 'BGN':
                return 'Лв.'
            case 'EUR':
                return '€'
            default:
                return currency
        }
    })())

    return (

            <div className={styles.paymentPage}>
                <p>Hi, you're about to pay <span> {getCurrencySymbol} {amount.toFixed(2)} </span>to Koko!</p>
                <img src={cat} alt="Cat on laptop" />
                <StripeButton currency={currency} amount={amount} setCompleteTransaction={setCompleteTransaction} />
            </div>
    )
}


export default PaymentPage