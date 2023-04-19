import './SignIn.css';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import image from "./bricks.png"
import gif from "./download.gif"
const SignIn = () => {
    const [input, setInput] = React.useState("Save Edits");
    const inputHanlder = e => {
      setInput(e.target.value);
    };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
    
    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword( auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            }).catch((error) => {
                console.log(error);
            });
    };

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
                style={{ fontSize: 14, color: '#ff073a'}}
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
        <div className="sign-in-container">
            <form onSubmit={signIn}>
                <h1 style={{
                marginBottom: 12,
                color: '#6ad0d4'
              }}> Log In to your Account </h1>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <Link to="/SignedIn">
                    <button style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }} type="submit">Log In</button>
                </Link>
            </form>
            </div>
        </CardContent>
                    </Card>
                </div>
    );
};

export default SignIn