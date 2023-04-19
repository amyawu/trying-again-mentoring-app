import './HomePage.css';
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { Link } from 'react-router-dom';
import image from "./img/bricks.png"; 
import gif from "./img/download.gif";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
// const Separator = () => <View style={styles.separator} />;

export default function HomePage(props) {
  const [input, setInput] = React.useState("Save Edits");
  const inputHandler = e => {
    setInput(e.target.value);
  };
    return (

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
            <Typography
              style={{ fontSize: 14, color: '#ff073a'}}
              color="textSecondary"
              gutterBottom
            >
              Mentoring App
            </Typography>
            <img src={gif} alt="gif" />
            <Typography
              style={{
                marginBottom: 12,
                color: '#ff073a'
              }}
              color="textSecondary"
            >
              Adventure. Explore. Learn more.
            </Typography>
            <Typography variant="body2" component="p">

                <Button  style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }}>ABOUT</Button>
                <Button style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }}>FAQ</Button>
                <Button style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }}>CONTACT</Button>

            </Typography>
          </CardContent>
          <Link to="/SignIn">
          <Button style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }}>Sign In</Button>
            </Link>
            <Link to="/SignUp">
            <Button style={{
          backgroundColor: input === "Save Edits" ? "#000000" : "#222222",
          color: "#6ad0d4"
        }}>Sign Up</Button>
            </Link>
        </Card>
      </div>
    );
  }
