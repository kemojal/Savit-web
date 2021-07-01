import React from 'react'
import styled from 'styled-components'

const TransactionLayout  = styled.div`
    display: flex;
    background-color: var(--white);
    margin-top: 10px;
    justify-content: space-between;
    padding: 15px 10px;
    box-shadow: 3px 3px rgba(0,0,0,0.02);
    font-size: 16px;
    border-radius: 3px;
    .date{
        color: rgba(0,0,0,0.2)
    }
    .title{
        color: rgba(0,0,0,0.5);
        font-size: 18px;
    }
`

const Transaction = ({transaction}) => {
    return (
        <TransactionLayout key={transaction.id}>
            <div className="title">{transaction.title}</div>
            <div className="date">{transaction.createdAt}</div>
            <div className="category">{transaction.category}</div>
            <div className="amount">{transaction.amount}</div>
        </TransactionLayout>
    )
}

export default Transaction
