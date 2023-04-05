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
import Crud from './components/crud';
//import SignUpPage from './SignInPage';
import AuthDetails from './components/AuthDetails';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DataPage from './DataPage';
import AccountPage from './AccountPage';
import SignInAndOutIcons from './components/SignInAndOutIcons';
import StartFirebase from './components/firebaseConfig';
import { getAuth } from "firebase/auth";
import { useState } from 'react';

function App() {
  const db = StartFirebase();
  const [user, setUser] = useState(null);

  function setAuthenticatedUser(data) {
    setUser(data)
  }
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={
            <>
              <HomePage />
            </>}></Route>
            <Route exact path="/SignUp2.0" element={<> 
              <Crud user={user}/>
            </>}></Route>
            <Route exact path="/InterestPage" element={<> 
              <ProfilePage user={user}/>
              <SignInAndOutIcons />
            </>}></Route>
            <Route exact path="/AccountPage" element={
            <>
              <AccountPage user={user}/>
              <SignInAndOutIcons />
            </>}></Route>
          <Route exact path="/TestingPage" element={<TestingPage />}></Route>
          <Route exact path="/HomePage" element={<HomePage />}></Route>
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
