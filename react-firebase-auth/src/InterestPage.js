import React, { useState  } from "react";
import "./InterestPage.css";
import ToggleSwitch from "./components/ToggleSwitch";
import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function InterestPage() {

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
                            <React.Fragment>
            <ToggleSwitch label="Want to be:" />
        </React.Fragment>
          <div className="container-fluid top ">
            <div className="container mt-5  pb-5 pt-5">
              <h3 className="form-head-contact-h3 ">
                What are you interested in? {" "}
              </h3>
      
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-check m-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="interests"
                        value="Language"
                        id="flexCheckDefault"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                          Language
                      </label>
                    </div>
                    <div className="form-check m-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="interests"
                        value="Music"
                        id="flexCheckDefault"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                          Music
                      </label>
                    </div>
                    <div className="form-check m-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="interests"
                        value="Sports"
                        id="flexCheckDefault"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                          Sports
                      </label>
                    </div>
                    <div className="form-check m-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="interests"
                        value="Coding"
                        id="flexCheckDefault"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                          Coding
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check m-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="interests"
                        value="Cooking"
                        id="flexCheckDefault"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                          Cooking
                      </label>
                    </div>
                    <div className="form-check m-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="interests"
                        value="Baking"
                        id="flexCheckDefault"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                          Baking
                      </label>
                    </div>
                    <div className="form-check m-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="interests"
                        value="Art"
                        id="flexCheckDefault"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                          Art
                      </label>
                    </div>
                    <div className="form-check m-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="interests"
                        value="Writing"
                        id="flexCheckDefault"
                        onChange={handleChange}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                      >
                          Writing
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-floating mt-3 mb-3 text-center">
                  <label htmlFor="exampleFormControlTextarea1">
                    You're interested in :{" "}
                  </label>
                  <textarea
                    className="form-control text"
                    name="response"
                    value={userinfo.response}
                    placeholder="The checkbox values will be displayed here "
                    id="floatingTextarea2"
                    style={{ height: "150px" }}
                    onChange={handleChange}
                  ></textarea>
                  
                </div>
              </form>
            </div>
          </div>
          
                        </CardContent>
                    </Card>
                </div>
        </>
        
      ); 
      
    }
      
    export default InterestPage;