import React from 'react'
import styled from 'styled-components'
import Transaction from '../Transaction'

export const TransactionLayout = ({transactions}) => {
    return (
        <div>
            {
                transactions.map(
                    (transaction, index) => {
                    return (
                    <Transaction transaction={transaction}/>
                    )
                }
                )
            }
        </div>
    )
}
