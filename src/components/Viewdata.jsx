import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewdata = () => {
var [users,setData]=useState([])

useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    setData(users=response.data)
    console.log(response.data)

})
.catch((err=>console.log.log(err)))
},[]);

// axios.get("https://jsonplaceholder.typicode.com/users")
// .then((response)=>{
//     setData(users=response.data)
//     console.log(response.data)

// })
// .catch((err=>console.log.log(err)))

  return (
    <div style={{padding:"100px"}}>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                       
                    </TableRow>
                </TableHead>

               <TableBody>
                {users.map((value,index)=>{
                    return(
                        <TableRow key={index}>
                            <TableCell>{value.id}</TableCell>
                            <TableCell>{value.name}</TableCell>
                            <TableCell>{value.email}</TableCell>
                        
                        </TableRow>
                    )
                })}
               </TableBody>

            </Table>
        </TableContainer>
    </div>
  )
}

export default Viewdata