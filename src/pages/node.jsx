import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../components/Navbar";
import SidePanel from "../components/SidePanel";

export default class nodePage extends Component {
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
                NodeJS Introduction
              </h1>
              <p style={{ padding: "10px" }}>
                Node.js eliminates the waiting, and simply continues with the
                next request. Node.js runs single-threaded, non-blocking,
                asynchronously programming, which is very memory efficient.
              </p>

              <ul>
                <li>Node.js can generate dynamic page content</li>
                <br />
                <li>
                  Node.js can create, open, read, write, delete, and close files
                  on the server
                </li>
                <br />
                <li>Node.js can collect form data</li>
                <br />
                <li>Node.js can add, delete, modify data in your database</li>
                <br />
              </ul>
            </div>
            <img
              src="node.png"
              style={{ position: "absolute", top: "5%", left: "60%" }}
              alt="nodeJS"
            />
            <div
              style={{
                backgroundColor: "#eeeeee",
                marginTop: "30px",
                width: "40%",
                height: "500px",
              }}
            >
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                Create Your Own Modules
              </h1>
              <p style={{ padding: "10px" }}>
                You can create your own modules, and easily include them in your
                applications.
                <pre>{`
Create a module that returns the current date and time:
exports.myDateTime = function () {
  return Date();
};
            `}</pre>
                Use the exports keyword to make properties and methods available
                outside the module file and save the code above in a file called
                "myfirstmodule.js"
                <pre>{`
Use the module "myfirstmodule" in a Node.js file:
var http = require('http');
var dt = require('./myfirstmodule');
 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);
`}</pre>
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                width: "40%",
                position: "absolute",
                left: "50%",
                top: "40%",
                height: "80%",
              }}
            >
              <h1
                style={{
                  backgroundColor: "#4caf50",
                  textAlign: "center",
                  margin: "0",
                }}
              >
                Example
              </h1>
              <p style={{ padding: "10px" }}>
                Example to display "Hello World" in a web browser.
                <br />
                <pre>{`
var http = require('http');
 
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

                `}</pre>
                The code tells the computer to write "Hello World!" if anyone
                (e.g. a web browser) tries to access your computer on port 8080.
                <br />
                <br />
                Node.js has a built-in module called HTTP, which allows Node.js
                to transfer data over the Hyper Text Transfer Protocol (HTTP).
                <pre>
                  {`
To include the HTTP module, use the require() method:
var http = require('http');
                  `}
                </pre>
                The function passed into the <b>http.createServer()</b> method,
                will be executed when someone tries to access the computer on
                port 8080.
                <br />
                <br />
                The first argument of the <b>res.writeHead()</b> method is the
                status code, 200 means that all is OK, the second argument is an
                object containing the response headers.
                <br />
                <br />
                The argument of the <b>res.end()</b> is the data displayed on
                screen
              </p>
            </div>
          </div>
        </>
      );
  }
}
