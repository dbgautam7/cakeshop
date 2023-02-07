import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignupForm from './containers/auth/signup';
import Login from './containers/auth/login';
import Home from './containers/home/home';
import AboutUs from './containers/aboutUs/aboutUs';
import Contact from './containers/contact/contact';
import MyNavbar from './containers/navbar/navbar';
import Profile from './containers/sharedScreens/profile';
import ErrorPage from './containers/errrorPage/errorPage';
import { useSelector } from 'react-redux';
import MyMap from './components/map';
import Navbar from './containers/admin/components/navbar/navbar';
import AdminHome from './containers/admin/pages/adminHome/adminHome';
import Users from './containers/admin/pages/users/users';
import Products from './containers/admin/pages/products/products';

const App=()=> {
  const {phoneNumber} =useSelector(state=>state.user)
        if(phoneNumber===9804400486){
          return <AdminScreen />
        }else if(phoneNumber!==""){
          return <UserScreen />
        }
        else{
          return <AuthScreen />
        }
}
      const AuthScreen=()=>{
        return(
          <Routes>
          <Route  path="/signup" element={<SignupForm />} />
      <Route path="/" element={<Login />} />
      <Route path='*' element={<ErrorPage />} />
      </Routes>
        )
      }

      const AdminScreen=()=>{
        return(
          <Routes>
            <Route path='/' element={<><Navbar /><AdminHome /></>} />
            <Route path='/users' element={<><Navbar /><Users /></>} />
            <Route path='/products' element={<><Navbar /><Products /></>} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        )
      }
    

      const UserScreen=()=>{
        return(
          <Routes>
            <Route path='/' element={<><MyNavbar /><Home /></>} />
      <Route path='/contact' element={<><MyNavbar /><Contact /></>} />
      <Route path='/aboutus' element={<><MyNavbar /><AboutUs /></>} />
      <Route path='/profile' element={<><MyNavbar /><Profile /></>} />
      <Route path='/map' element={<><MyNavbar /><MyMap /></>} />
      <Route path='*' element={<ErrorPage />} />
          </Routes>
        )
      }

// return (
//   <>
//   <AdminDashboard />
//   </>
// )
// }

export default App;
