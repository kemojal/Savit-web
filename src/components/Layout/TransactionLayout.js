import React from 'react'
import styled from 'styled-components'
import Transaction from '../Transaction'

const TransanctionsContainer = styled.div`
    padding: 0 120px;
`
export const TransactionLayout = ({transactions}) => {
    return (
        <TransanctionsContainer>
            {
                transactions.map(
                    (transaction, index) => {
                    return (
                    <Transaction transaction={transaction}/>
                    )
                }
                )
            }
        </TransanctionsContainer>
    )
}
