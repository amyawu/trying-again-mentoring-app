import React, { Component } from "react";
import './index.css';
import StartFirebase from "../firebaseConfig";
import {ref, set, get, update, remove, child } from "firebase/database";
import { auth, firebaseConfig } from "../../firebase";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { Link } from 'react-router-dom';
import ToggleSwitch from '../ToggleSwitch';
import Checkbox from "../../Checkbox";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../firebase";
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from "react";
import image from "./img/bricks.png"; 
import gif from "./img/FinishReg.gif";

// firebase.database().ref('users/' + firebase.auth().currentUser.uid import database and then call it in this constructor
//  const crud set state and return
const RegistrationCreation = ( {user, db, input, inputHandler} ) => { // USER IS ACTUALLY UID

 // after component starts, it mounts db
 
const auth = getAuth();

    const [fullName, setName] = useState("");
    const [dob, setDOB] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [interests, setInterests] = useState("");
    const [mentorOption, setMentorOption] = useState("");
    const uuId = user;
    console.log("current user", auth.currentUser)
        return(
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
                        <CardContent >
                        <img style={{
                            justifyContent:'center'
                        }}src={gif} alt="gif" />
                         <Typography
                style={{ fontSize: 14, color: '#ff073a' }}
                color="textSecondary"
                gutterBottom
                >
                                <label style={{ fontSize: 20, color: '#ffffff' }}> Enter your full name </label>
                                <input  type='text' id="namebox" value={fullName}
                                onChange={e =>{setName(e.target.value);}} />
                                <br></br>
                                <label style={{ fontSize: 20, color: '#ffffff' }}> Enter your dob </label>
                                <input type='date' id="dobbox" value={dob}
                                onChange={e =>{setDOB(e.target.value);}} />
                                <br></br>
                                <label style={{ fontSize: 20, color: '#ffffff' }}> Enter your address </label>
                                <input type='text' id="addressbox" value={address}
                                onChange={e =>{setAddress(e.target.value);}} />
                                <br></br>
                                </Typography>
                                <button style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }}id="addBtn" onClick={() => insertData()}> Register </button>
                                <button style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }}id="updateBtn" onClick={() => updateData()}> Edit Profile </button>
                                <button style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }}id="deleteBtn" onClick={() => deleteData()}> Delete Account </button> 
                                <button style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }}id="selectBtn" onClick={() => selectData()}> Autofill </button>
                        </CardContent>
                    </Card>
                </div>
            </>
        )
    
    // anonymous function is () => we're calling on deleteData
    
    function getAllInputs() {
        return {
            fullName: fullName,
            dob: dob,
            address: address,
            email: auth.currentUser.email,
            password: password,
            uuId: uuId,
            interests: interests,
            mentorOption: mentorOption
        }
    }

    function insertData() { // set as a function
        const data = getAllInputs();
        console.log(user.email)
        set(ref(db, 'Customer/'+data.uuId), {
            fullName: data.fullName,
            dob: data.dob,
            address: data.address,
            email: data.email,
            password: data.password,
            uuId: data.uuId,
            interests: data.interests,
            mentorOption: data.mentorOption
        })
        .then(()=>{alert('data was added successfully')})
        .catch((error)=>{alert("there was an error, details:"+error)});
    }

    function updateData() {
        const data = getAllInputs();
        set(ref(db, 'Customer/'+data.uuId), {
            fullName: data.fullName,
            dob: data.dob,
            address: data.address,
            email: data.email,
            password: data.password,
            uuId: data.uuId,
            interests: data.interests,
            mentorOption: data.mentorOption
        })
        .then(()=>{alert('data was added successfully')})
        .catch((error)=>{alert("there was an error, details:"+error)});
    }
    function deleteData() {
        const fullName = getAllInputs().uuId; // snapshot it

        remove(ref(db, 'Customer/'+fullName))
        .then(()=>{alert('data was deleted successfully')})
        .catch((error)=>{alert("There was an error, details: "+error)});
    }
    function selectData() {
        const dbref = ref(db);
        const fullName = getAllInputs().uuId;

        get(child(dbref, 'Customer/'+fullName)).then((snapshot) =>{ // saving it under and if you update via uuId and can segment the customers. Add it as another column in customer database or a separate database models specifically on interests
            if (snapshot.exists()) { // A with similar interests with B 
                this.setState({ // after set up the table and then seed it and see if they can interact (figure out liking or just the ability to message it)
                    fullName: snapshot.val().fullName,
                    dob: snapshot.val().dob,
                    address: snapshot.val().address,
                    email: snapshot.val().email,
                    password: snapshot.val().password,
                    uuId: snapshot.val().uuId,
                    interests: snapshot.val().interests,
                    mentorOption: snapshot.val().mentorOption
                })
            }
            else {
                alert("no data found!");
            }
        })
        .catch((error) => {alert("there was an error, details: "+error)});
    }
}

export default RegistrationCreation