import { Table } from '@mantine/core'
import React from 'react'
 function TableDemo() {
   const info={
        name:"abcd",
        phoneNumber:82471897876,
        emailId:"abcd@gmail.com"
    }

  return (
    <div className='demo'> 
    <Table style={{border:"10px", color:"black",align:"Center"}}>
        
        <thead className='demoTwo'>
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