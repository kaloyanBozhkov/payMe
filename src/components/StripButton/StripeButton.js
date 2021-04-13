import React from 'react'

import StripeCheckout from 'react-stripe-checkout'

import pat from '../../assets/pat.png'

import styles from './stripebutton.module.scss'

const StripeButton = ({ currency, amount, setCompleteTransaction = f => f }) => {
    const publishableKey = process.env.REACT_APP_PUB_KEY
    //strope wants to see the amounts in cents
    const priceForStripe = 100 * amount

    //send token with card info to backend to create customer & payment
    const completePayment = (token) => fetch(process.env.REACT_APP_API_URL + '/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', mode: 'no-cors' },
        body: JSON.stringify({
            amount: priceForStripe,
            currency,
            token
        }),
     
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.status === 'success') {
                setCompleteTransaction(true)
            } else {
                console.log('There was a problem during your attempt at paying Koko :(', data)
                alert('There was a problem during your attempt at paying Koko :(')
            }
        }).catch((error) => {
            console.log('There was a problem during your attempt at paying Koko :(', error)
            alert('There was a problem during your attempt at paying Koko :(')
        })

    return (
        <StripeCheckout
            name="Some green love" // the pop-in header title
            description={`cuz he loves me & I luv him double`}
            image={pat}
            label="Pay your broski"
            amount={priceForStripe}
            currency={currency}
            token={completePayment}
            stripeKey={publishableKey}
            ComponentClass="div"
        >
            <button className={styles.stripeButton}>Pay with green love</button>
        </StripeCheckout>
    )

}

export default StripeButton
