import './HomePage.css';
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
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
            <Typography variant="body2" component="p">
                <Button class="about"size="small" text-align ="center">ABOUT</Button>
                <Button class="faq" size="small" text-align ="center">FAQ</Button>
                <Button class="contact" size="small" text-align ="center">CONTACT</Button>
            </Typography>
          </CardContent>
          <Link to="/SignIn">
                <Button class="moreinfo" size="small" text-align="right">Sign In</Button>
            </Link>
            <Link to="/SignUp">
                <Button class="moreinfo" size="small" text-align="right">Sign Up!</Button>
            </Link>
        </Card>
      </div>
    );
  }
