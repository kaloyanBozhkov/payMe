import React from 'react'
import styles from './completed.module.scss'

import ThankYou from '../../components/ThankYou/ThankYou'

const Completed = ({ currency, amount }) => {
    return (
        <div className={styles.container}>
            <ThankYou />
            <h1>You paid me {amount} {currency}. Thank you broski!!! 😍😍💗💗</h1>
        </div>
    )
}

export default Completed