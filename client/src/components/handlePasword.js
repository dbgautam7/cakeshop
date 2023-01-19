import React, { useState } from "react";
import { BsEyeSlashFill,BsEyeFill } from 'react-icons/bs';
import './handlePassword.css'
import { Field } from "formik";


const HandlePassword=()=>{

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    
    return(
        <>
                <div className='pass-wrapper'>
                <Field name="password" placeholder="Password"
                    type={passwordVisible ? "text" : "password"} id="password" />
                <button type="button" onClick={togglePasswordVisibility}>
                    {passwordVisible ? <BsEyeFill /> : <BsEyeSlashFill/>}
                </button>
                </div>
                </>
    )

}
export default HandlePassword;