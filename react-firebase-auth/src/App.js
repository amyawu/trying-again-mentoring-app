import logo from './logo.svg';
import './App.css';
import './HomePage.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import TestingPage from './TestingPage';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
//import SignUpPage from './SignInPage';
import AuthDetails from './components/AuthDetails';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataPage from './DataPage';
import AccountPage from './AccountPage';
import SignInAndOutIcons from './components/SignInAndOutIcons';
import StartFirebase from './components/firebaseConfig';
import { getAuth } from "firebase/auth";
import { useState } from 'react';
import RegistrationCreation from './components/crud';
import MatchingPage from './MatchingPage';
import React from 'react';
 // route at the top and 
function App() {
  const db = StartFirebase();
  const [user, setUser] = useState(null);
  const [input, setInput] = React.useState("Save Edits");
  const inputHandler = e => {
    setInput(e.target.value);
  };
  function setAuthenticatedUser(data) {
    setUser(data)
  }
  
  console.log("insideApp", user&&user.uid);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={
            <>
              <HomePage />
            </>}></Route>
            <Route exact path="/Matching" element={
            <>
            <AuthDetails setUser={setAuthenticatedUser}/> 
              {user&&<MatchingPage user={user.uid} db={db} input={input} inputHandler={inputHandler}/>}
            </>}></Route>

            <Route exact path="/SignUp2.0" element={<> 
              <AuthDetails setUser={setAuthenticatedUser}/>
              {user&&<RegistrationCreation user={user.uid} db={db} input={input} inputHandler={inputHandler}/>}
            </>}></Route>
            <Route exact path="/InterestsPage" element={<> 
              <AuthDetails setUser={setAuthenticatedUser}/> 
              {user&&<ProfilePage user={user.uid} db={db} input={input} inputHandler={inputHandler}/>}
            </>}></Route>
            <Route exact path="/AccountPage" element={
            <>
                 <AuthDetails setUser={setAuthenticatedUser}/>
              {user&&<AccountPage user={user.uid} db={db} input={input} inputHandler={inputHandler}/>}
            </>}></Route>
          {/* <Route exact path="/TestingPage" element={<TestingPage />}></Route> */}
          <Route exact path="/SignIn" element={
            <> 
              <SignIn />
              
            </>}></Route>
          <Route exact path="/SignedIn" element={
            <> 
              <AuthDetails setUser={setAuthenticatedUser}/>
            </>}></Route>
            <Route exact path="/SignUp" element={
            <> 
              <SignUp />
            </>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
