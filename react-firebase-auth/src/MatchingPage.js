import React, { useState  } from "react";
import ToggleSwitch from "./components/ToggleSwitch";
import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {Database, ref, set, get, child, getDatabase } from "firebase/database";
import StartFirebase from "./components/firebaseConfig";
import { getAuth } from "firebase/auth";
import { Link } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";


const MatchingPage = ({user, db, input, inputHandler} ) => {
// have enums for the hobbies 
// query for the total number of matches <- look into this 
// if you are looking for the highest number of matches for mentors, query and select from customers where mentor is true, group by interests, and select all the interests from 1, 2, 5 find all mentors with these mentors throughout
// search for one thing/hobby/interest at once 
// user can have many interest -> have only one mentor interest mcq? <- checkbox with the interests
const auth = getAuth();

    const dbRef =ref(getDatabase());
  const [authUser, setAuthUser] = useState(null);
const [fullName, setFullName] = useState("");
const [address, setAddress] = useState("");
const [dob, setDOB] = useState("");
const [email, setEmail] = useState("");
const [interests, setInterests] = useState("");
const [mentorOption, setMentorOption] = useState("");

console.log("this is the account page current user", auth.currentUser);
  get(child(dbRef, 'Customer/'+user)).then((snapshot) =>{ // saving it under and if you update via uuId and can segment the customers. Add it as another column in customer database or a separate database models specifically on interests
    if (snapshot.exists()) { // A with similar interests with B 
        // console.log(snapshot.val()) checks out the snapshot
        setFullName(snapshot.val().fullName);
        setAddress(snapshot.val().address);
        setDOB(snapshot.val().dob);
        setEmail(snapshot.val().email);
    }
    else {
        alert("no data found!");
    }
})
get(child(dbRef, 'Interests/'+user)).then((snapshot) =>{ // saving it under and if you update via uuId and can segment the customers. Add it as another column in customer database or a separate database models specifically on interests
  if (snapshot.exists()) { // A with similar interests with B 
      // console.log(snapshot.val()) checks out the snapshot
      setInterests(snapshot.val().interests);
      setMentorOption(snapshot.val().mentorOption);
  }
  else {
      alert("no data found!");
  }
})

    return (
      
        <>
            <div style={{}}>
                    <Card className="matchingPage"
                    style={{
                        width: 400,
                        backgroundColor: '#ffffff',
                    }}
                    >
                        <CardContent>

                            <h4>NAME</h4>
                            {/* <h4> { fullName } </h4> */}
                            <h4>ADDRESS</h4>
                            {/* <h4> { address } </h4> */}
                            <h4>DOB</h4>
                            {/* <h4> { dob } </h4> */}
                            <h4>EMAIL</h4>
                            {/* <h4> { email } </h4> */}
                            <h4>INTERESTS</h4>
                            {/* <h4> { interests } </h4> */}
                            <h4>MENTOR/MENTEE</h4>
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
      
    export default MatchingPage;