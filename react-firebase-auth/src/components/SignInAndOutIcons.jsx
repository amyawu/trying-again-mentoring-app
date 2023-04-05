import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const SignInAndOutIcons = () => {
    const [authUser, setAuthUser] = useState(null);
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
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
        <div style={{}}>
                    <Card className ="homePage"
                    style={{
                        width: 400,
                        backgroundColor: '#ff6f61',
                    }}
                    >
                        
<div className="sign-up-container">
            {authUser ? <><p>Signed In as {authUser.email}</p>
            <Link to="/">
            <button onClick={userSignOut}> Sign Out </button>
            </Link>
            </>
            : <><p> You're not signed in. </p> 
            <Link to="/">
            <button type="submit">Go back to Home</button>
            </Link>
            <Link to="/SignIn">
            <button type="submit">Sign In</button>
            </Link></>}
            </div>
            </Card>
                </div>
    );
};

export default SignInAndOutIcons
