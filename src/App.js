import React, { useEffect, useContext } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Reg from './Components/Signup/Registration';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Profile from './Components/Profile/Profile';
import { AuthContext, FirebaseContext } from './Store/Firebase/FirebaseContext';

function App() {
  const { user,setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    });
  })

   
  return (
    <Router>
      
        <Route exact path="/">
          <Home />
          </Route> 
          <Route path="/signup">
          <Reg />
          </Route>
        <Route path="/login" >
        <Login />
        </Route>
        <Route path="/profile">
        <Profile />
        </Route> 
      
    </Router>
  );
}

export default App;
