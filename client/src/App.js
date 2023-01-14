import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignupForm from './containers/auth/signup';
import Login from './containers/auth/login';
import Home from './containers/home/home';

const App=()=> {
  return (
    <div className="App">
      <Routes>
      <Route  path="/auth/signup" element={<SignupForm />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}
export default App;
