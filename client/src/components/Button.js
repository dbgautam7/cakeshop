import React from 'react'
import './button.css'

 const Button =() => {

  return (
    <div className='loginBtn'>
    <form>  
    <div className="container">     
        <button type="submit" className='submitbtn'>Login</button>    
        <button type="button" className="cancelbtn"> Cancel</button>   
         <h3>Forgot</h3> 
         <h3><a href="#"> password? </a> </h3>  
    </div>   
</form>   
</div>   
  )
}

export default Button