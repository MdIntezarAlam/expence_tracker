import styled from '@emotion/styled'
import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Balance, ExpenceCard, NewTransaction, Transcactions } from '../Home/index'
import { transctionData } from '../utils/constant'



const Header = styled(Typography)`
font-size:38px; 
color:orange;
text-transform:uppercase;
`

const BoxComponent = styled(Box)`
display:flex;
background-color:#fff;
width:800px;
// min-height:70vh;
padding:10px;
border-radius:10px;
margin:auto;
&>div{
    width:50%;
    height:70vh;
    padding:10px;
}

`
const MainPage = () => {

    const [transactions, setTransctions] = useState(transctionData)

    // console.log("Transctionsss in MainPage=>>>>>>>", transactions)
    return (
        <Box>
            <Header>EXPENCE TRACKER</Header>
            <BoxComponent>
                {/* Left Part */}
                <Box>
                    <Balance transactions={transactions} />
                    <ExpenceCard transactions={transactions} />
                    <NewTransaction setTransctions={setTransctions} />
                </Box>
                {/* Right Part */}
                <Box>
                    <Transcactions transactions={transactions} setTransctions={setTransctions} />
                </Box>
            </BoxComponent>
        </Box>
    )
}

export default MainPage