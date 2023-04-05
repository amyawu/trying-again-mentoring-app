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

// webcodedev YT tutorial
// either as interests with an array of strings or just names, or a separate db table with customer id reference or foreign key 
const SignUp = () => {
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
        <div style={{}}>
                    <Card className="homePage"
                    style={{
                        width: 400,
                        backgroundColor: '#ff6f61',
                    }}
                    >
                        <CardContent>
                            <Typography
                            style={{ fontSize: 14 }}
                            color="textSecondary"
                            gutterBottom
                            >
                            Mentoring App
                            </Typography>
                            <Typography variant="h5" component="h2">
                            Mentoree Jamboree
                            </Typography>
                            <Typography
                            style={{
                                marginBottom: 12,
                            }}
                            color="textSecondary"
                            >
                            Adventure. Explore. Learn more.
                            </Typography>
        <div className="sign-up-container">
            <form onSubmit={signUp}>
                <h1> Create Username and Password </h1>
                <h2>Enter your email:</h2>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                ></input>
                <h2>Enter your password:</h2>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></input>
                <h2>Almost there! Just need to know who you are</h2>

                <button type="submit">Submit</button>
                <Link to="/SignUp2.0">
                <button type="submit">Sign Up</button>
                </Link>
            </form>
        </div>
        </CardContent>
                    </Card>
                </div>
    );
};
export default SignUp