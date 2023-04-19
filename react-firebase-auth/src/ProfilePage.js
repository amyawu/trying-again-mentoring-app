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
import image from "./img/bricks.png"; 
import gif from "./img/Change.gif";

const ProfilePage = ({user, db, input, inputHandler} ) => {
  
const auth = getAuth();

  const [interests, setInterests] = useState("");
  const [mentorOption, setMentorOption] = useState("");
  const uuId = user;
  console.log("profilePage",auth.currentUser);


    const [userinfo, setUserInfo] = useState({
      interests: [],
      response: [],
    });
    
    const handleChange = (e) => {
      // Destructuring
      const { value, checked } = e.target;
      const { interests } = userinfo;
        
      console.log(`${value} is ${checked}`);
      if (checked) {
        setUserInfo({
          interests: [...interests, value],
          response: [...interests, value],
        });
      }
    
      // Case 2  : The user unchecks the box
      else {
        setUserInfo({
          interests: interests.filter((e) => e !== value),
          response: interests.filter((e) => e !== value),
        });
      }

      
    };
      
    return (
      
        <>
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
                        <img style={{
                            justifyContent:'center'
                        }}src={gif} alt="gif" />
                        <Typography
                style={{ fontSize: 14, color: '#ff073a' }}
                color="textSecondary"
                gutterBottom
                >
                            <h4 style={{color: '#ffffff' }} htmlFor="exampleFormControlTextarea1">
                  I want to be a:
                  </h4>
                  <input type='text' id="mentoroptionbox" value={mentorOption}
                                onChange={e =>{setMentorOption(e.target.value);}} />
                  <button style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }}id="updateBtn" onClick={() => updateData()}> Confirm if you're a mentor or mentee </button>

                  <h4 style={{color: '#ffffff' }} htmlFor="exampleFormControlTextarea1">
                    for the following interest(s):
                  </h4>
                  <input type='text' id="interestsbox" value={interests}
                                onChange={e =>{setInterests(e.target.value);}} />
                  
                  <button style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }}id="updateBtn" onClick={() => updateData()}> Confirm your interests </button>
                  </Typography>
              
          
                        </CardContent>
                        <Link to="/SignIn">
                <button style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }}type="submit">Go Back to Profile</button>
                </Link>
                    </Card>
                    
                </div>
        </>
        
      )      
      function getAllInputs() {
        return {
          interests: interests,
          mentorOption: mentorOption
      }
    }
    // go import in the authdetails into diff pages but don't need to copy and paste code since it's already encapsulated and can render
  
    function updateData() {
      const data = getAllInputs();
      //console.log("data", authUser.uid)
      set(ref(db, 'Interests/'+ user), {
          interests: data.interests,
          mentorOption: data.mentorOption
      })
      .then(()=>{alert('data was added successfully')})
      .catch((error)=>{alert("there was an error, details:"+error)});
    
  }
    }
      
    export default ProfilePage;