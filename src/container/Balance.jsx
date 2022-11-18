import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React from 'react'


const BalanceTexts = styled(Typography)`
  font-size:22px;
  margin-bottom:22px;
  `
const Balance = ({ transactions }) => {
    //display the Total Amount 
    const amount = transactions.map(transaction => transaction.amount)
    // console.log("Transction_amount",trans_amount)
    //add these amount using reduce method 
    //it takes Accumulator=> accumulates the return values of the array. and current value
    const totalAmount = amount.reduce((amount, item) => (amount += item), 0).toFixed(2)

    return (
        <Box>
            <BalanceTexts>Balance: ₹{totalAmount}</BalanceTexts>
        </Box>
    )
}

export default Balance