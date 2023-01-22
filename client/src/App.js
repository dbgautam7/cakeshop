import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignupForm from './containers/auth/signup';
import Login from './containers/auth/login';
import Home from './containers/home/home';
import AboutUs from './containers/aboutUs/aboutUs';
import Contact from './containers/contact/contact';
import MyNavbar from './containers/navbar/navbar';
import Profile from './containers/profile/profile';
import ErrorPage from './containers/errrorPage/errorPage';
import { useSelector } from 'react-redux';
import AdminDashboard from './containers/admin/adminDashboard';

const App=()=> {
  // const {phoneNumber} =useSelector(state=>state.user)
  //       if(phoneNumber===9804400486){
  //         return <AdminScreen />
  //       }else if(phoneNumber!==9804400486){
  //         return <UserScreen />
  //       }
  //       else{
  //         return <AuthScreen />
  //       }
  //     }
      
  //     const AuthScreen=()=>{
  //       return(
  //         <Routes>
  //         <Route  path="/" element={<SignupForm />} />
  //     <Route path="/login" element={<Login />} />
  //     </Routes>
  //       )
  //     }

  //     const AdminScreen=()=>{
  //       return(
  //         <Routes>
  //           <Route path='/adminDashboard' element={<AdminDashboard />} />
  //         </Routes>
  //       )
  //     }
    

  //     const UserScreen=()=>{
  //       return(
  //         <Routes>
  //           <Route path='/home' element={<><MyNavbar /><Home /></>} />
  //     <Route path='/contact' element={<><MyNavbar /><Contact /></>} />
  //     <Route path='/aboutus' element={<><MyNavbar /><AboutUs /></>} />
  //     <Route path='/profile' element={<><MyNavbar /><Profile /></>} />
  //     <Route path='*' element={<ErrorPage />} />
  //         </Routes>
  //       )
  //     }

return (
  <>
  <AdminDashboard />
  </>
)

}
export default App;
