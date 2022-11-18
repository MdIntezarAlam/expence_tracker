import styled from '@emotion/styled'
import { Card, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'


const Container = styled(Box)`
    display:flex;
     &>div{
    flex:1;
    padding:10px;
 }
   `


const ExpenceCard = ({ transactions }) => {

    const amount = transactions.map(transaction => transaction.amount) //all amount

    const income = amount.filter(incomes => incomes > 0).reduce((acc, curval) => (acc += curval), 0).toFixed(2)//total incomes
    const expence = (amount.filter(expences => expences < 0).reduce((acc, curval) => (acc += curval), 0) * -1).toFixed(2)//total expence

    return (
        <Container>
            <Card>
                <CardContent>
                    <Typography>Incomes </Typography>
                    <Typography sx={{ color: 'blue' }}>₹{income}</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography>Expence </Typography>
                    <Typography sx={{ color: 'red' }}>₹{expence}</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

export default ExpenceCard