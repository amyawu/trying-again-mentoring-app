import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { Link } from 'react-router-dom';
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const AuthDetails = () => {
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
        <div>
            {authUser ? <><p>Signed In as {authUser.email}</p>
            <Link to="/InterestPage">
            <button type="submit">Change your Interests</button>
            </Link>
            <button onClick={userSignOut}> Sign Out </button></>
            : <><p> You're not signed in. </p> 
            <Link to="/">
            <button type="submit">Go back to Home</button>
            </Link>
            <Link to="/SignIn">
            <button type="submit">Sign In</button>
            </Link></>}
        </div>
    );
};

export default AuthDetails