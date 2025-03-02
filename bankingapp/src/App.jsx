// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import './App.css';
import {AuthProvider} from '../src/AuthContext.jsx'
import User from './pages/User.jsx'

function App() {
  return (
    <>
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User/>} />
      </Routes>
    </Router>
    </AuthProvider>
  
    </>
  );
}

export default App;
