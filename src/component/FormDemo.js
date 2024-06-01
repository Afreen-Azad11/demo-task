
import {TextInput,Button, PasswordInput} from '@mantine/core'
import '@mantine/core/styles.css'
import { useState } from 'react'
function FormDemo() {
    const [name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const [phonenumber,setPhoneNumber]=useState('')
    const [address,setAddress]=useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(name,email,phonenumber,address)
       
    }
    const obj={
      name:name,
phonenumber:phonenumber,
email:email,
password:password,
address:address
    }
    console.log(obj)

  return (
    <div className='Demo'>
        
        <form className='formdemo'onSubmit={submitHandler}>
           
      <TextInput type="text"placeholder={'Enter your name'}label="NAME:"value={name}onChange={(e)=>setName(e.target.value)}></TextInput><br/>
      <TextInput type="number"placeholder={'Enter your phonenumber'}label="PHONENUMBER:"value={phonenumber}onChange={(e)=>setPhoneNumber(e.target.value)}></TextInput><br/>
      <TextInput type="address"placeholder={'Enter your address'}label="ADDRESS:"value={address}onChange={(e)=>setAddress(e.target.value)}></TextInput><br/>
      <TextInput type="email"placeholder={'Enter your email'}label="EMAIL:"value={email}onChange={(e)=>setEmail(e.target.value)}></TextInput><br/>
      <PasswordInput type="password"placeholder={'Enter the password'}label="PASSWORD:"value={password}onChange={(e)=>setPassword(e.target.value)}></PasswordInput><br/>
      <Button radius="xl"fullWidth>submit</Button></form>
    </div>
  )
}

export default FormDemo    
