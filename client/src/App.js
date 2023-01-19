import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignupForm from './containers/auth/signup';
import Login from './containers/auth/login';
import Home from './containers/home/home';

import AboutUs from './containers/aboutUs/aboutUs';
import Contact from './containers/contact/contact';

const App=()=> {
  return (
    <div className="App">
      <Routes>
      <Route  path="/" element={<SignupForm />} />
      <Route path="/login" element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/aboutus' element={<AboutUs />}></Route>
      </Routes>
    </div>
  );
}
export default App;
