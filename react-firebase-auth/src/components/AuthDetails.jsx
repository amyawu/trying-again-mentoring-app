import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import './AuthDetails.css';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import image from "./img/bricks.png"; 
import gif from "./img/download.gif";
// figure out how to not constantly have auithdetails everywhere and wrap user data wioth authentication in app to fix that 
// separate the navbar details from authdetails
const AuthDetails = (props) => {
    const [input, setInput] = React.useState("Save Edits");
    const inputHanlder = e => {
      setInput(e.target.value);
    };
    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
                props.setUser(user);
 // sign up (grab all details and save it to realtime database and authentication) create email password (registration) and create profile (autofill from sign up page) write to database (using uuID) znd show mentor/mentee page (seeding)
            } else {
                setAuthUser(null);
            }
        })
        return () => {
            listen();
        }
    }, [])
        const userSignOut = () => {
            signOut(auth).then(() => {
                console.log('Sign out as successful')
            }).catch(error => console.log(error))
        }
    return (
        <div style={{ backgroundImage:`url(${image})`, backgroundSize:"contain", height: window.innerHeight,
        width: window.innerWidth, display:'flex', justifyContent:'center'}}>
          <Card class="box box2"
            style={{
              width: 400,
              height: 400,
              marginTop: 200, 
              marginBottom: 200
            }}
          >
            <CardContent>
                <Typography
                style={{ fontSize: 14, color: '#ff073a' }}
                color="textSecondary"
                gutterBottom
                >
                Mentoring App
                </Typography>
                <img src={gif} alt="gif" />
                <Typography
                style={{
                    marginBottom: 12,
                    color: '#ff073a'
                  }}
                color="textSecondary"
                >
                Adventure. Explore. Learn more.
                </Typography>
<div className="sign-up-container" color="white">
            {authUser ? <><p
            style={{
                color: '#ffffff'
              }}
            >Signed In as {authUser.email}</p>
            <Link to="/AccountPage">
            <button style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }}type="submit">Account Profile</button>
            </Link>
            <Link to="/SignUp2.0">
            <button style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }}type="submit">Finish Registration</button>
            </Link>
            <Link to="/InterestsPage">
            <button style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }}type="submit">Change your Interests</button>
            </Link>
            {/* <Link to="/Matching">
            <button style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }}type="submit">Find your mentor/mentee</button>
            </Link> */}
            <button style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }}onClick={userSignOut}> Sign Out </button></>
            : <><p
            style={{
                color: '#ffffff'
              }}
            > You're not signed in. </p> 
            <Link to="/">
            <button style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }}type="submit">Go back to Home</button>
            </Link>
            <Link to="/SignIn">
            <button style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }}type="submit">Sign In</button>
            </Link></>}
            </div>
        </CardContent>
                    </Card>
                </div>
    );
    
};

export default AuthDetails