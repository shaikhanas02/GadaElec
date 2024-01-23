import React, { useState } from 'react'
import axios from 'axios';
function Login() {

const [username, setUsername] = useState('') ;
const [password, setPassword] = useState('') ;
const obj = {username, password} ;

async function handleSubmit(){
 const res = await axios.post('http://localhost:3000/login', obj) ;
 console.log(res); ;
const data = res.data ;
console.log(data);

if(data){
  localStorage.setItem('token', data)
  alert('Login Successful') 
  window.location.href = '/' 
}else{ 
  alert("Invalid Username or Password") ;
}
}
  return (
    <div>
      Username :  <input type='text' value={username} onChange={e=> setUsername(e.target.value )} placeholder='Username' />
       Password : <input type='text' placeholder='Password' value={password} onChange={e=> setPassword(e.target.value)}/>
       <button type='submit' onClick={handleSubmit} className='border' >Login</button>
    </div>
    
  )
}

export default Login