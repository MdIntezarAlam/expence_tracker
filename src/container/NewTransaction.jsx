import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Box, Button, TextField, Typography } from '@mui/material'


const Container = styled(Box)`
   display:flex;
   flex-direction:column;
   &>h5, &>div, &>button{
    margin-top:33px;
   }
   
`
const NewTransaction = ({ setTransctions }) => {

    const [amount, setAmount] = useState('')
    const [text, setText] = useState('')


    const addTranscationData = () => {
        const newTransctiondata = {
            id: Math.floor(Math.random() * 1000000),
            text: text,
            amount: +amount,
        }
        // set data in to setTransctions
        // console.log(newTransctiondata)
        setTransctions(prevData => [newTransctiondata, ...prevData]);
    }

    return (
        <Container>
            <Typography variant='h5'> New Transaction:</Typography>
            <TextField label="Enter Expence" onChange={(e) => setText(e.target.value)}></TextField>
            <TextField label="Enter amount " onChange={(e) => setAmount(e.target.value)}></TextField>
            <Button variant='contained' onClick={() => addTranscationData()}>Add Transaction</Button>
        </Container>
    )
}

export default NewTransaction