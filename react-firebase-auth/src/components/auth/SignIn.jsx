import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const SignIn = () => {
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
        <div className="sign-in-container">
            <form onSubmit={signIn}>
                <h1> Log In to your Account </h1>
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
                    <button type="submit">Log In</button>
                </Link>
            </form>
            </div>
        </CardContent>
                    </Card>
                </div>
    );
};

export default SignIn