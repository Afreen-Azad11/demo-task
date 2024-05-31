import { Table } from '@mantine/core'
import React from 'react'
 function TableDemo() {
   const info=[{
        name:"abcd",
        phoneNumber:82471897876,
        emailId:"abcd@gmail.com"
    },
{name:"pawan",phoneNumber:8978979687,emailId:"pawan@gmail.com"},
{name:"bhanu",phoneNumber:8978279687,emailId:"bhanu@gmail.com"},
{name:"prabha",phoneNumber:8978975687,emailId:"prabha@gmail.com"}
]
  return (
    <div>
    <Table style={{border:"10px", color:"orange",align:"Center"}}>
        
        <thead>
            <tr>
            <td>Name</td>
            <td>phoneNumber</td>
            <td>emailId</td>
            </tr>
        </thead>
        <tbody>
        <tr>

            <td>{info.name}</td>
            <td>{info.phoneNumber}</td>
            <td>{info.emailId}</td>
        </tr>
        </tbody>
    </Table>
    </div>
  )
}export default TableDemo