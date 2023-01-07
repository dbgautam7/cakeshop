import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignupForm from './containers/auth/signup';
import Login from './containers/auth/login';

const App=()=> {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
      <Route  path="/auth/signup" element={<SignupForm />} />
      <Route path="/auth/login" element={<Login />} />
      </Routes>
  </BrowserRouter>
    </div>
  );
}
export default App;
