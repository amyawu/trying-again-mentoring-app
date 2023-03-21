import logo from './logo.svg';
import './App.css';
import './HomePage.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import TestingPage from './TestingPage';
import HomePage from './HomePage';
import Crud from './components/crud';
//import SignUpPage from './SignInPage';
import AuthDetails from './components/AuthDetails';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InterestPage from './InterestPage';
import DataPage from './DataPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route exact path="/DataPage" element={
            <>
              <DataPage />
            </>}></Route>
          <Route exact path="/" element={
            <>
              <HomePage />
            </>}></Route>
            <Route exact path="/SignUp2.0" element={<> 
              <AuthDetails />
            </>}></Route>
            <Route exact path="/InterestPage" element={<> 
              <InterestPage />
            </>}></Route>
          <Route exact path="/TestingPage" element={<TestingPage />}></Route>
          <Route exact path="/HomePage" element={<HomePage />}></Route>
          <Route exact path="/SignIn" element={
            <> 
              <SignIn />
            </>}></Route>
          <Route exact path="/SignedIn" element={
            <> 
              <AuthDetails />
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
