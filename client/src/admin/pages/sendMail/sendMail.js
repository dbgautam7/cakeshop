import axios from 'axios'
import React, { useState } from 'react'
import MySidebar from '../../components/sidebar/sidebar'

const SendMail = () => {

  const [email,setEmail] = useState("")

const postEmail=async()=>{
 const response=await axios.post(`${process.env.REACT_APP_API_URL}/mail`,{email})
 console.log(response.data,response,"response")
}

  return (
    <div className='home' style={{display:"flex"}}>
        <div style={{width:"25%"}}>
            <MySidebar />
        </div>
        <div style={{width:"75%", marginTop:"30px"}}>

        <div>
<h2>Send a message to users</h2>
<input
type="text"
placeholder="email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<button onClick={()=>postEmail()}>
Send Message
</button>
</div>
</div>
    </div>
  )
}

export default SendMail