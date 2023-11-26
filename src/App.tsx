import { useState, useEffect } from 'react'
import './App.css'
import { User } from './models/user';
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from './pages/Home';
import { Login } from './pages/Login';

export const App = () => {
  const [userInfo, setUserInfo] = useState<User | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("login");
    } else {
      console.log(userInfo)
    }
  }, [userInfo, navigate]);

  const handleLogIn = (user: User) => {
    setUserInfo(user);
    alert("got the data. it's " + user.name);
    navigate("home")
  };

  return (
    <>
      <h1>App</h1>
      <Routes>
        <Route path="home" element={<Home />} />

        <Route
          path="login"
          element={<Login logInHandler={handleLogIn} />}
        />
      </Routes>
    </>
  )
}

export default App
