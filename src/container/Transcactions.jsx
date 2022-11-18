import styled from '@emotion/styled'
import { Box, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import { Tranacrtion } from '../Home/index'


const Transcaction = ({ transactions, setTransctions }) => {
    // console.log("transactions in _Transactions ", transactions)
    return (
        <Box>
            <Typography variant='h5'>Transcaction History</Typography>
            <List>
                {transactions.map((data) => (
                    <Tranacrtion data={data}  transactions={transactions} setTransctions={setTransctions} />
                ))}
            </List>

        </Box>
    )
}

export default Transcaction