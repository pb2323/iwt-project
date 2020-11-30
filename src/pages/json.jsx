import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../components/Navbar";
import SidePanel from "../components/SidePanel";

export default class JSONPage extends Component {
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
            <div
              style={{
                backgroundColor: "#eeeeee",
                width: "45%",
                height: "320px",
              }}
            >
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                JSON - Introduction
              </h1>
              <ul>
                <li>JSON: JavaScript Object Notation.</li>
                <br />
                <li>JSON is a syntax for storing and exchanging data.</li>
                <br />
                <li>JSON is text, written with JavaScript object notation.</li>
                <br />
                <li>
                  JSON is text, and we can convert any JavaScript object into
                  JSON, and send JSON to the server.
                </li>
                <br />
                <li>
                  We can also convert any JSON received from the server into
                  JavaScript objects.
                </li>
                <br />
              </ul>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                width: "45%",
                height: "330px",
              }}
            >
              <h1
                style={{
                  backgroundColor: "#4caf50",
                  textAlign: "center",
                  marginTop: "50px",
                }}
              >
                JSON.stringify()
              </h1>
              <p style={{ padding: "10px" }}>
                A common use of JSON is to exchange data to/from a web server.
                When sending data to a web server, the data has to be a string.
                Convert a JavaScript object into a string with JSON.stringify().
              </p>
              <p style={{ padding: "10px" }}>
                <b>Stringify a JavaScript Object</b>
              </p>
              <p style={{ padding: "10px" }}>
                Imagine we have this object in JavaScript:
                <br />
                {'var obj = { name: "John", age: 30, city: "New York" };'}
              </p>
              <p style={{ padding: "10px" }}>
                Use the JavaScript function JSON.stringify() to convert it into
                a string.
                <br />
                var myJSON = JSON.stringify(obj);
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                width: "40%",
                position: "absolute",
                left: "50%",
                top: "0%",
                height: "340px",
              }}
            >
              <h1
                style={{
                  backgroundColor: "#4caf50",
                  textAlign: "center",
                  margin: "0",
                }}
              >
                JSON.parse()
              </h1>
              <p style={{ padding: "10px" }}>
                A common use of JSON is to exchange data to/from a web server.
                When receiving data from a web server, the data is always a
                string. Parse the data with JSON.parse(), and the data becomes a
                JavaScript object.
              </p>
              <p style={{ padding: "10px" }}>
                <b>Example - Parsing JSON</b>
              </p>
              <p style={{ padding: "10px" }}>
                Imagine we received this text from a web server:
                <br />
                <q>{"{'name':'John', 'age':30, 'city':'New York'}"}</q>
              </p>
              <p style={{ padding: "10px" }}>
                Use the JavaScript function JSON.parse() to convert text into a
                JavaScript object:
                <br />
                var obj=JSON.parse(
                <q>{"{'name':'John', 'age':30, 'city':'New York'}"}</q>);
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                width: "40%",
                position: "absolute",
                left: "50%",
                top: "45%",
                height: "340px",
                marginTop: "30px",
              }}
            >
              <h1
                style={{
                  backgroundColor: "#4caf50",
                  textAlign: "center",
                  margin: "0",
                }}
              >
                JSON Objects
              </h1>
              <p style={{ padding: "10px" }}>
                JSON objects are written in key/value pairs. Keys must be
                strings, and values must be a valid JSON data type (string,
                number, object, array, boolean or null). Keys and values are
                separated by a colon. Each key/value pair is separated by a
                comma.
              </p>
              <p style={{ padding: "10px" }}>
                <b>Object Syntax</b>
              </p>
              <p style={{ padding: "10px" }}>
                {"{ 'name':'John', 'age':30, 'car':null }"}
              </p>
              <p style={{ padding: "10px" }}>
                You can access the object values by using dot (.) notation:
                <br />
                var myObj=
                {"{'name':'John', 'age':30, 'city':'New York'}"});
                <br />
                x=myObj.name;
              </p>
            </div>
            {/* <div
              style={{
                backgroundColor: "#eeeeee",
                marginTop: "30px",
                position: "absolute",
                left: "30%",
                width: "40%",
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
            </div> */}
          </div>
        </>
      );
  }
}
