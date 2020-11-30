import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../components/Navbar";
import SidePanel from "../components/SidePanel";

export default class htmlDOMPage extends Component {
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
                DOM-Introduction
              </h1>
              <p style={{ padding: "10px" }}>
                The HTML DOM is an API (Programming Interface) for JavaScript:
              </p>
              <ul>
                <li>The HTML elements as objects</li>
                <br />
                <li>The properties of all HTML elements</li>
                <br />
                <li>The methods to access all HTML elements</li>
                <br />
                <li>The events for all HTML elements</li>
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
                position: "absolute",
                top: "50%",
              }}
            >
              <h1
                style={{
                  backgroundColor: "#4caf50",
                  textAlign: "center",
                  margin: "0",
                }}
              >
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
                top: "55%",
                height: "400px",
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
                <b>Syntax</b>
                <br /> element.addEventListener(event, function, useCapture);
                <br />
                <br />
                The first parameter is the type of the event (like "click" or
                "mousedown" or any other HTML DOM Event.)
                <br />
                <br />
                The second parameter is the function we want to call when the
                event occurs.
                <br />
                <br />
                The third parameter is a boolean value specifying whether to use
                event bubbling or event capturing. This parameter is optional.
                <br />
                <br />
                <b>Examples:</b>
                <br />
                <br />
                {
                  'element.addEventListener("click", function(){ alert("Hello World!"); });'
                }
                <br />
                {'element.addEventListener("mouseover", myFunction);'}
                <br />
                {'element.addEventListener("mouseout", myThirdFunction);'}
              </p>
            </div>
          </div>
        </>
      );
  }
}
