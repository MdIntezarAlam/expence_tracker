import styled from '@emotion/styled'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';



const TrnasctionDetails = styled(ListItem)`
  margin-top:10px;
`


const Tranacrtion = ({ data, setTransctions, transactions }) => {
    // console.log("data in Trnsaction==========>", data)

    const transctionColor = data.amount > 0 ? "#007500" : "#FF0000"

    const deleteItems = (id) => {
        setTransctions(transactions.filter((data=>data.id!==id)))
    }

    return (
        <TrnasctionDetails style={{ backgroundColor: `${transctionColor}`, color: "#fff" }}>
            <ListItemIcon sx={{ color: '#FFFFFF', cursor: 'pointer' }}>
                <DeleteIcon onClick={() => deleteItems(data.id)} />
            </ListItemIcon>
            <ListItemText>{data.text}</ListItemText>
            <ListItemText>{data.amount}</ListItemText>
        </TrnasctionDetails>
    )
}

export default Tranacrtion