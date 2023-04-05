import React, { useState  } from "react";
import ToggleSwitch from "./components/ToggleSwitch";
import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {ref, set } from "firebase/database";
import StartFirebase from "./components/firebaseConfig";
import { getAuth } from "firebase/auth";
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";

const AccountPage = (user) => {
  const [authUser, setAuthUser] = useState(null);
//   var ref = db.ref(user.uid);
  /*ref.once("Customer")
  .then(function(snapshot) {
      console.log(snapshot.child("address").val());
      var address = snapshot.child("address").val(); // {first:"Ada",last:"Lovelace"}
      var dob = snapshot.child("dob").val(); // "Ada"
      console.log(address);
    var email = snapshot.child("email").val(); // "Lovelace"
    var fullName = snapshot.child("fullName").val(); // null
    var interests = snapshot.child("interests").val();
  });*/
  /*useEffect(() => {
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
      }*/
    return (
      
        <>
            <div style={{}}>
                    <Card className="accountPage"
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
                            <h4>NAME</h4>
                            {/* <h4> { fullName } </h4> */}
                            <h4>ADDRESS</h4>
                            {/* <h4> { address } </h4> */}
                            <h4>DOB</h4>
                            {/* <h4> { dob } </h4> */}
                            <h4>EMAIL</h4>
                            {/* <h4> { email } </h4> */}
                            <h4>PASSWORD</h4>
                            {/* <h4> { password } </h4> */}
                            <h4>INTERESTS</h4>
                            {/* <h4> { interests } </h4> */}

          
                        </CardContent>
                    </Card>
                </div>
        </>
        
      )      
    
      /*function SnapshotValues() {
        var ref = db.database().ref(authUser.uid);
        ref.once("Customer")
        .then(function(snapshot) {
          var address = snapshot.child("address").val(); // {first:"Ada",last:"Lovelace"}
          var dob = snapshot.child("dob").val(); // "Ada"
          var email = snapshot.child("email").val(); // "Lovelace"
          var fullName = snapshot.child("fullName").val(); // null
          var interests = snapshot.child("interests").val();
        });
      }*/
    }
      
    export default AccountPage;