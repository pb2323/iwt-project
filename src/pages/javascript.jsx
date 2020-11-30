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
            <div
              style={{
                backgroundColor: "#eeeeee",
                marginTop: "30px",
                width: "40%",
                height: "410px",
              }}
            >
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                Standard Objects
              </h1>
              <p style={{ padding: "10px" }}>
                <ol>
                  <li>Array</li>
                  <b>Declaration:</b>var arr=new Array()
                  <br />
                  <br />
                  <li>Date</li>
                  <b>Declaration:</b>var Date=new Date()
                  <br />
                  <br />
                  <li>Math</li>
                  <b>Declaration:</b>var random=Math.random()
                  <br />
                  <br />
                  <li>Number</li>
                  <b>Declaration:</b>var number=new Number()
                  <br />
                  <br />
                  <li>Object</li>
                  <b>Declaration:</b>var number=new Object()
                  <br />
                  <br />
                  <li>String</li>
                  <b>Declaration:</b>var number=new String()
                  <br />
                  <br />
                </ol>
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                width: "40%",
                position: "absolute",
                left: "50%",
                top: "3%",
                height: "750px",
              }}
            >
              <h1
                style={{
                  backgroundColor: "#4caf50",
                  textAlign: "center",
                  margin: "0",
                }}
              >
                Statements and Declarations
              </h1>
              <p style={{ padding: "10px" }}>
                <ul>
                  <li>
                    let
                    <pre style={{ margin: "0", padding: "0" }}>{`
let a=10;
              `}</pre>
                    assigns 10 value to a which is changeable
                  </li>
                  <br />
                  <li>
                    const
                    <pre style={{ margin: "0", padding: "0" }}>{`
const a=10;
              `}</pre>
                    assigns 10 value to a which cannot be changed
                  </li>
                  <br />
                  <li>
                    for-in
                    <pre style={{ margin: "0", padding: "0" }}>{`
for(let a in [1,2,3])
console.log(a)
              `}</pre>
                    console logs 0 1 2
                  </li>
                  <br />
                  <li>
                    for-of
                    <pre style={{ margin: "0", padding: "0" }}>{`
for(let a of [1,2,3])
console.log(a)
              `}</pre>
                    console logs 1 2 3
                  </li>
                  <br />
                  <li>
                    if-else
                    <pre style={{ margin: "0", padding: "0" }}>{`
if(true)
{
  console.log(1);
}
else
{
  console.log(0)
}
              `}</pre>
                    console logs 1
                  </li>
                  <br />
                </ul>
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                marginTop: "30px",
              }}
            >
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                Functions
              </h1>
              <p style={{ padding: "10px" }}>
                After introduction of ES5 functions are mainly of two types
                <ol>
                  <li>Normal function</li>
                  <li>Arrow function</li>
                </ol>
                <pre>
                  {`
Normal function:                         Arrow Function:

let myFunc = {                      let myFunc = {
  showArgs(){                         showArgs: () => {
   console.log(arguments);                console.log(...arguements);
  }                                     }
 };                                   };
 myFunc.showArgs(1, 2, 3, 4);          myFunc.showArgs(1, 2, 3, 4);
                  `}
                </pre>
              </p>
            </div>
          </div>
        </>
      );
  }
}
