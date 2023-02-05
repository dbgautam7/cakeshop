import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutResetDetails } from '../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import './logout.css'

const Logout = () => {
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const { firstName } = useSelector(state => state.user)
    const triggerLogout = () => {
        dispatch(logoutResetDetails())
        navigate('/')
    }
  return (
    <div className="icon">
                        <div className="user_details">                          
                            <Link to="/profile" className="first-name"><h3>{firstName}</h3></Link>
                            </div>
                            <Button type="primary" shape="rectangle" onClick={()=>triggerLogout()}>Logout</Button>
                    </div>
  )
}

export default Logout
