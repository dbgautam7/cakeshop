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

const App=()=> {
  return (
    <div className="App">
      <Routes>
      <Route  path="/" element={<SignupForm />} />
      <Route path="/login" element={<Login />} />
      <Route path='/home' element={<><MyNavbar /><Home /></>} />
      <Route path='/contact' element={<><MyNavbar /><Contact /></>} />
      <Route path='/aboutus' element={<><MyNavbar /><AboutUs /></>} />
      <Route path='/profile' element={<><MyNavbar /><Profile /></>} />
      <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;
