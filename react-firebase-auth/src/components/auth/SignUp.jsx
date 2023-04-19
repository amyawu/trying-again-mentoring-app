import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, firebaseConfig } from "../../firebase";
import { Link } from 'react-router-dom';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { v4 as uuidv4 } from 'uuid';
import {ref, set, get, update, remove, child } from "firebase/database";
import { getDatabase } from "firebase/database";
import image from "./bricks.png"
import gif from "./download.gif"
// webcodedev YT tutorial
// either as interests with an array of strings or just names, or a separate db table with customer id reference or foreign key 
const SignUp = () => {
    const [input, setInput] = React.useState("Save Edits");
    const inputHanlder = e => {
      setInput(e.target.value);
    };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword( auth, email, password)
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
              width: 600,
              height: 600,
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
        <div className="sign-up-container">
            <form onSubmit={signUp}>
                <h4 style={{
                color: '#6ad0d4'
              }}> Create Username and Password </h4>
                <h6 style={{
                color: '#ffffff'
              }}>Enter your email:</h6>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <h6 style={{
                color: '#ffffff'
              }}>Enter your password:</h6>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <h4 style={{
                color: '#ffffff'
              }}>Almost there! Just need to know who you are</h4>

                <button style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }}type="submit">Submit</button>
                <Link to="/SignIn">
                <button style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }}type="submit">Sign In First</button>
                </Link>
            </form>
        </div>
        </CardContent>
                    </Card>
                </div>
    );
};
export default SignUp