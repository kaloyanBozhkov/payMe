import React, { useState } from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'
import { Route, Redirect } from 'react-router-dom'
import styles from './app.module.scss'
import PaymentPage from '../PaymentPage/PaymentPage'
import Completed from '../Completed/Completed'

import stylesPaymentPage from '../PaymentPage/paymentpage.module.scss'

const App = () => {
    const [completeTransaction, setCompleteTransaction] = useState(null)
    const [params, setParams] = useState({ currency: 'GBP', amount: 10 })
    return (
        <div className={styles.container}>
            {completeTransaction && <Redirect to="/complete" />}
            {completeTransaction && <Route path="/complete" exact component={() => <Completed {...completeTransaction} {...params} />} />}

            <Route path="/payKoko/:currency/:amount" exact>
                {({ match }) => {
                    if (!(match && match.params.currency && match.params.amount)) return

                    const parsedAmount = parseFloat(match.params.amount)

                    if (Number.isNaN(parseFloat(parsedAmount))) return
                    
                    const formattedAmount = +parseFloat(match.params.amount).toFixed(2) 

                    if (match.params.currency !== params.currency || formattedAmount !== params.amount) {
                        setParams({ 
                            currency: match.params.currency, 
                            amount: formattedAmount
                        })
                    }
                }}
            </Route>

            <Route>
                {({ location: { pathname: pathName } }) => {

                    const onPayPage = /^(?:\/payKoko\b)(?:\/[\w]+){2}$/g.test(pathName)
                    const completedPayment = pathName === '/complete' && completeTransaction

                    //if not /payKoko/curr/amount or not complete payment, got to payKoko/curr/amount
                    if (!completedPayment && !onPayPage)
                        return <Redirect to="/payKoko/GBP/10" />

                    return  <CSSTransition
                                in={onPayPage}
                                unmountOnExit
                                classNames={{
                                    exitActive: stylesPaymentPage.exiting
                                }}
                                timeout={2000}
                            >
                                <PaymentPage {...params} setCompleteTransaction={setCompleteTransaction} />
                            </CSSTransition>
                }}
            </Route>
        </div>
    )
}

export default App