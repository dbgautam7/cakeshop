import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignupForm from './containers/auth/signup';
import Login from './containers/auth/login';
import Home from './containers/home/home';
import AboutUs from './containers/aboutUs/aboutUs';
import Contact from './containers/contact/contact';
import { useSelector } from 'react-redux';
import AdminDashboard from './containers/admin/adminDashboard';
import UserDashboard from './containers/user/userDashboard';
import MyNavbar from './containers/navbar/navbar';

const App=()=> {

  const {role}=useSelector(state=>state.user)
  if(role === 'user'){
    return <><MyNavbar /><UserScreens/></>
  }else if(role === 'admin'){
    return <><MyNavbar /><AdminScreens/></>
  }else{
    return <AuthScreens/>
  } 
}

const AuthScreens = () => {
  return (
    <Routes>
    <Route path="/signup" element={<SignupForm />} />
    <Route path="/" element={<Login />} />
  </Routes>
  )
}

const AdminScreens = () => {
  return (
    <Routes>
    <Route exact path="/admindashboard" element={<AdminDashboard />} />
    <Route path="/home" element={<Home />} />
    <Route path="/aboutus" element={<AboutUs />} />
    <Route path="/contact" element={<Contact />} />
    
    </Routes>
  )
}

const UserScreens = () => {
  return (
    <Routes>
    <Route exact path="/userdashboard" element={<UserDashboard />} />
    <Route path="/home" element={<Home />} />
    <Route path="/aboutus" element={<AboutUs />} />
    <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App;
