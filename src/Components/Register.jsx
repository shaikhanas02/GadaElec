import React, { useState } from 'react'
import axios from 'axios'

function Register() {
const [username,setUsername] = useState('') ;
const [password, setPassword] = useState('') ;
 const obj = {username, password} ;
 async function handleSubmit(){

  try{

    const res = await axios.post('http://localhost:3000/register', obj) 
    console.log(res );
    setUsername('') ;
    setPassword('') ;
  } catch(error){
    console.error('Registration failed:' , error) ;
  }

  }
  return (
    <div>
        <h1>New Registration</h1>
       Username :  <input type='text' value={username} onChange={e=> setUsername(e.target.value )} placeholder='Username' />
       Password : <input type='text' placeholder='Password' value={password} onChange={e=> setPassword(e.target.value)}/>
       <button type='submit' onClick={handleSubmit} className='border' >Register</button>
    </div>
  )
}

export default Register ;