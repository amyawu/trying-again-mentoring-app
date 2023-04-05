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

const ProfilePage = (user) => {
  const [interests, setInterests] = useState("");
  const uuId = user.uid;
  console.log("profilePage",user);
  const [authUser, setAuthUser] = useState(null);


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

                  <label htmlFor="exampleFormControlTextarea1">
                    Please write to confirm your interests:
                  </label>
                  <input type='text' id="interestsbox" value={interests}
                                onChange={e =>{setInterests(e.target.value);}} />
                  <button id="updateBtn" onClick={() => updateData()}> Update Data </button>
                  <Link to="/SignIn">
                <button type="submit">Go Back to Profile</button>
                </Link>
              
          
                        </CardContent>
                    </Card>
                </div>
        </>
        
      )      
      function getAllInputs() {
        return {
          interests: interests
      }
    }
    // go import in the authdetails into diff pages but don't need to copy and paste code since it's already encapsulated and can render
  
    function updateData() {
      const data = getAllInputs();
      //console.log("data", authUser.uid)
      // set(ref(db, 'Interests/'+ authUser.uid), {
      //     interests: data.interests
      // })
      // .then(()=>{alert('data was added successfully')})
      // .catch((error)=>{alert("there was an error, details:"+error)});
    
  }
    }
      
    export default ProfilePage;