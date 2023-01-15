import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignupForm from './containers/auth/signup';
import Login from './containers/auth/login';
import Home from './containers/home/home';
import MyNavbar from './containers/navbar/navbar';
import AboutUs from './containers/aboutUs/aboutUs';
import Contact from './containers/contact/contact';

const App=()=> {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<SignupForm />} />
      <Route path="/login" element={<Login />} />
      <Route path='/home' element={<Home />} />
      <Route  path='/navbar' element={<MyNavbar />} />
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/aboutus' element={<AboutUs />}></Route>
      </Routes>
    </div>
  );
}
export default App;
