import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import SignupForm from './containers/auth/signup';
import Login from './containers/auth/login';
import Home from './user/containers/home/home';
import AboutUs from './user/containers/aboutUs/aboutUs';
import Contact from './user/containers/contact/contact';
import MyNavbar from './user/components/navbar/navbar';
import Profile from './containers/sharedScreens/profile';
import ErrorPage from './containers/errrorPage/errorPage';
import MyMap from './user/containers/map/map';
import AdminNavbar from './admin/components/navbar/adminNavbar';
import Users from './admin/pages/users/users';
import Products from './admin/pages/products/products';
import AdminHome from './admin/pages/adminHome/adminHome';
import ProfileSettings from './containers/sharedScreens/profileSettings';
import ChangePassword from './containers/sharedScreens/changePassword';
import Settings from './admin/pages/settings/settings';
import Orders from './admin/pages/orders/orders';
import Analytics from './admin/pages/analytics/analytics';
import Notifications from './admin/pages/analytics/analytics';

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
            <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
      <Route path='*' element={<ErrorPage />} />
      </Routes>
        )
      }

      const AdminScreen=()=>{
        return(
          <Routes>
            <Route exact path='/' element={<><AdminNavbar /><AdminHome /></>} />
            <Route path='/orders' element={<><AdminNavbar /><Orders /></>} />
            <Route path='/users' element={<><AdminNavbar /><Users /></>} />
            <Route path='/products' element={<><AdminNavbar /><Products /></>} />
            <Route path='/analytics' element={<><AdminNavbar /><Analytics /></>} />
            <Route path='/settings' element={<><AdminNavbar /><Settings /></>} />
            <Route path='/notifications' element={<><AdminNavbar /><Notifications /></>} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        )
      }
    

      const UserScreen=()=>{
        return(
          <Routes>
            <Route exact path='/' element={<><MyNavbar /><Home /></>} />
      <Route exact path='/contact' element={<><MyNavbar /><Contact /></>} />
      <Route exact path='/aboutus' element={<><MyNavbar /><AboutUs /></>} />
      <Route exact path='/profile' element={<><MyNavbar /><Profile /></>} />
      <Route exact path='/profileSettings' element={<><MyNavbar /><ProfileSettings /></>} />
      <Route exact path='/changePassword' element={<><MyNavbar /><ChangePassword /></>} />
      <Route exact path='/map' element={<><MyNavbar /><MyMap /></>} />
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
