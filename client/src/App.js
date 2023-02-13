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
import MyMap from './containers/map/map';
import Navbar from './containers/admin/components/navbar/navbar';
import Users from './containers/admin/pages/users/users';
import Products from './containers/admin/pages/products/products';
import AdminHome from './containers/admin/pages/adminHome/adminHome';
import ProfileSettings from './containers/sharedScreens/profileSettings';
import ChangePassword from './containers/sharedScreens/changePassword';
import Settings from './containers/admin/pages/settings/settings';
import Orders from './containers/admin/pages/orders/orders';
import Analytics from './containers/admin/pages/analytics/analytics';
import Notifications from './containers/admin/pages/notifications/notifications';

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
            <Route exact path='/' element={<><Navbar /><AdminHome /></>} />
            <Route path='/orders' element={<><Navbar /><Orders /></>} />
            <Route path='/users' element={<><Navbar /><Users /></>} />
            <Route path='/products' element={<><Navbar /><Products /></>} />
            <Route path='/analytics' element={<><Navbar /><Analytics /></>} />
            <Route path='/settings' element={<><Navbar /><Settings /></>} />
            <Route path='/notifications' element={<><Navbar /><Notifications /></>} />
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
