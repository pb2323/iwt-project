import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../components/Navbar";
import SidePanel from "../components/SidePanel";

export default class JavascriptPage extends Component {
  render() {
    if (!localStorage.getItem("user")) return <Redirect to="/login" />;
    else
      return (
        <>
          <NavBar />
          <SidePanel />
          <div
            style={{
              position: "absolute",
              left: "25%",
              top: "100px",
              width: "75%",
              height: "80%",
            }}
          >
            <div style={{ backgroundColor: "#eeeeee", width: "40%" }}>
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                Javascript-Introduction
              </h1>
              <p style={{ padding: "10px" }}>
                The HTML DOM is an API (Programming Interface) for JavaScript:
              </p>
              <ul>
                <li>JavaScript can add/change/remove HTML elements</li>
                <br />
                <li>JavaScript can add/change/remove HTML attributes</li>
                <br />
                <li>JavaScript can add/change/remove CSS styles</li>
                <br />
                <li>JavaScript can react to HTML events</li>
                <br />
                <li>JavaScript can add/change/remove HTML events</li>
                <br />
              </ul>
            </div>
            <img
              style={{ position: "absolute", left: "50%", top: "3%" }}
              src="DOM.gif"
              alt="DOM"
            />
            <div
              style={{
                backgroundColor: "#eeeeee",
                marginTop: "30px",
                width: "40%",
                height: "410px",
              }}
            >
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                Finding HTML Elements
              </h1>
              <p style={{ padding: "10px" }}>
                When you want to access HTML elements with JavaScript, you have
                to find the elements first. There are a couple of ways to do
                this:
              </p>
              <ul>
                <li>
                  Finding HTML elements by id
                  <br />
                  <b>Example: </b>
                  <br />
                  var myElement = document.getElementById("intro");
                </li>
                <br />
                <li>
                  Finding HTML elements by tag name
                  <br />
                  <b>Example: </b>
                  <br />
                  var x = document.getElementsByTagName("p");
                </li>
                <br />
                <li>
                  Finding HTML elements by class name
                  <br />
                  <b>Example: </b>
                  <br />
                  var x = document.getElementsByClassName("intro");
                </li>
                <br />
                <li>
                  Finding HTML elements by CSS selectors
                  <br />
                  <b>Example: </b>
                  <br />
                  var x = document.querySelectorAll("p.intro");
                </li>
                <br />
              </ul>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                width: "40%",
                position: "absolute",
                left: "50%",
                top: "45%",
                height: "370px",
              }}
            >
              <h1
                style={{
                  backgroundColor: "#4caf50",
                  textAlign: "center",
                  margin: "0",
                }}
              >
                DOM EventListener
              </h1>
              <p style={{ padding: "10px" }}>
                <b>
                  <u>HTML</u>
                </b>
                : This gives functionality to the HTML code written (like the
                Nervous System) and basically helps the HTML code to be more
                than just an unintelligible text to an end user and gives it
                user-friendly access.
              </p>
              <p style={{ padding: "10px" }}>
                <b>
                  <u>Javascript</u>
                </b>
                : This gives functionality to the HTML code written (like the
                Nervous System) and basically helps the HTML code to be more
                than just an unintelligible text to an end user and gives it
                user-friendly access.
              </p>
              <p style={{ padding: "10px" }}>
                <b>
                  <u>CSS</u>
                </b>
                : This is the file where all the design elements of a website
                are defined (like the Muscular System) i.e., the fonts to be
                used, the colors, the backgrounds, the image sizes etc.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                marginTop: "30px",
              }}
            >
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                Front-end vs Backend
              </h1>
              <p style={{ padding: "10px" }}>
                In website design there are generally two types of languages:
              </p>
              <p style={{ padding: "10px" }}>
                <b>
                  <u>Front End</u>
                </b>
                : Languages like HTML, CSS, JS etc. , which help design the
                webpage which the end-user will be viewing.
              </p>
              <p style={{ padding: "10px" }}>
                <b>
                  <u>Back End</u>
                </b>
                : Languages like Java, SQL, Ruby, PHP etc. , which aid in the
                server-side programming which holds the databases that the
                end-user will be accessing through the website.
              </p>
              <p style={{ padding: "10px" }}>
                This division results in three different kinds of
                web-developers:
              </p>
              <ul>
                <li>
                  Front End Developers, who work on the front end designing
                </li>
                <li>
                  Back End Developers, who work on the server-side i.e., back
                  end designing of the databases
                </li>
                <li>Full Stack Developers who work on both these stacks.</li>
              </ul>
            </div>
          </div>
        </>
      );
  }
}
