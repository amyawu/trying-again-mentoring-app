import React, { Component } from "react";
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

// firebase.database().ref('users/' + firebase.auth().currentUser.uid import database and then call it in this constructor
//  const crud set state and return
const Crud = () => {
    const db = StartFirebase(); // after component starts, it mounts db
    const [fullName, setName] = useState("");
    const [dob, setDOB] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();
    const user = auth.currentUser;
    const uuId = user.uid;
        return(
            <>
                <div style={{}}>
                    <Card class="homePage"
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
                            MentorMee
                            </Typography>
                            <Typography
                            style={{
                                marginBottom: 12,
                            }}
                            color="textSecondary"
                            >
                            Adventure. Explore. Learn more.
                            </Typography>
                                <label> Enter your full name </label>
                                <input type='text' id="namebox" value={fullName}
                                onChange={e =>{setName(e.target.value);}} />
                                <br></br>
                                <label> Enter your dob </label>
                                <input type='date' id="dobbox" value={dob}
                                onChange={e =>{setDOB(e.target.value);}} />
                                <br></br>
                                <label> Enter your address </label>
                                <input type='text' id="addressbox" value={address}
                                onChange={e =>{setAddress(e.target.value);}} />
                                <br></br>
                                <button id="addBtn" onClick={() => insertData()}> Add Data </button>
                                <button id="updateBtn" onClick={() => updateData()}> Update Data </button>
                                <button id="deleteBtn" onClick={() => deleteData()}> Delete Data </button> 
                                <button id="selectBtn" onClick={() => selectData()}> Get Data from DB </button>
                        </CardContent>
                        <Link to="/SignUp2.0">
                            <Button class="moreinfo" size="small" text-align="right">Continue</Button>
                        </Link>
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
            email: user.email,
            password: password,
            uuId: uuId
        }
    }

    function insertData() { // set as a function
        const data = getAllInputs();
        set(ref(db, 'Customer/'+data.fullName), {
            fullName: data.fullName,
            dob: data.dob,
            address: data.address,
            email: data.email,
            password: data.password,
            uuId: data.uuId
        })
        .then(()=>{alert('data was added successfully')})
        .catch((error)=>{alert("there was an error, details:"+error)});
    }

    function updateData() {
        const data = getAllInputs();
        set(ref(db, 'Customer/'+data.fullName), {
            fullName: data.fullName,
            dob: data.dob,
            address: data.address,
            email: data.email,
            password: data.password,
            uuId: data.uuId
        })
        .then(()=>{alert('data was added successfully')})
        .catch((error)=>{alert("there was an error, details:"+error)});
    }
    function deleteData() {
        const fullName = getAllInputs().fullName;

        remove(ref(db, 'Customer/'+fullName))
        .then(()=>{alert('data was deleted successfully')})
        .catch((error)=>{alert("There was an error, details: "+error)});
    }
    function selectData() {
        const dbref = ref(db);
        const fullName = getAllInputs().fullName;

        get(child(dbref, 'Customer/'+fullName)).then((snapshot) =>{
            if (snapshot.exists()) {
                this.setState({
                    fullName: snapshot.val().fullName,
                    dob: snapshot.val().dob,
                    address: snapshot.val().address,
                    email: snapshot.val().email,
                    password: snapshot.val().password,
                    uuId: snapshot.val().uuId
                })
            }
            else {
                alert("no data found!");
            }
        })
        .catch((error) => {alert("there was an error, details: "+error)});
    }
}

export default Crud