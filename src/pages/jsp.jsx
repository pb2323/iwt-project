import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../components/Navbar";
import SidePanel from "../components/SidePanel";

export default class jspPage extends Component {
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
                Introduction-JSP
              </h1>
              <ul>
                <li>It stands for Java Server Pages.</li>
                <br />
                <li>It is a server side technology.</li>
                <br />
                <li>It is used for creating web application.</li>
                <br />
                <li>It is used to create dynamic web content.</li>
                <br />
                <li>
                  In this JSP tags are used to insert JAVA code into HTML pages.
                </li>
                <br />
                <li>
                  It is a Web based technology helps us to create dynamic and
                  platform independent web pages.
                </li>
                <br />
                <li>
                  In this, Java code can be inserted in HTML/ XML pages or both.
                </li>
                <br />
              </ul>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                marginTop: "30px",
                width: "40%",
                height: "320px",
              }}
            >
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                Example
              </h1>
              <p style={{ padding: "10px" }}>
                Example of Hello World
                <pre>{`
demo.jsp
<html>
<head>
<meta http-equiv="Content-Type" content="text/html;
charset=ISO-8859-1">
<title>Hello World - JSP tutorial</title>
</head>
<body>
    <%= "Hello World!" %>
</body>
</html>
            `}</pre>
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                width: "40%",
                position: "absolute",
                left: "50%",
                top: "3%",
                height: "680px",
              }}
            >
              <h1
                style={{
                  backgroundColor: "#4caf50",
                  textAlign: "center",
                  margin: "0",
                }}
              >
                JSP syntax
              </h1>
              <p style={{ padding: "10px" }}>
                Syntax available in JSP are following
                <ol>
                  <li>
                    <b>Declaration Tag-</b>It is used to declare variables.
                    <pre>{`
Syntax:- 
<%!  Dec var  %>
Example:-
<%! int var=10; %>                
            `}</pre>
                  </li>
                  <li>
                    <b>Java Scriplets-</b>It allows us to add any number of JAVA
                    code, variables and expressions.
                    <pre>{`
Syntax:- 
<% java code %>              
            `}</pre>
                  </li>
                  <li>
                    <b>JSP Expression :-</b>It evaluates and convert the
                    expression to a string.
                    <pre>{`
 Syntax:- 
 <%= expression %> 
  Example:- 
 <% num1 = num1+num2 %>              
            `}</pre>
                  </li>
                  <li>
                    <b>JAVA Comments :-</b>It contains the text that is added
                    for information which has to be ignored.
                    <pre>{`
Syntax:- 
<% -- JSP Comments %>            
            `}</pre>
                  </li>
                </ol>
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                marginTop: "30px",
              }}
            >
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                Process of Execution
              </h1>
              <p style={{ padding: "10px" }}>
                Steps for Execution of JSP are following:-
              </p>
              <ul>
                <li>
                  Create html page from where request will be sent to server eg
                  try.html.
                </li>
                <li>
                  To handle to request of user next is to create .jsp file Eg.
                  new.jsp
                </li>{" "}
                <li>Create project folder structure.</li>{" "}
                <li>Create XML file eg my.xml.</li> <li>Create WAR file.</li>
                <li>Start Tomcat</li>
                <li>Run Application</li>
                <img
                  style={{
                    float: "right",
                    width: "40%",
                    height: "40%",
                    position: "absolute",
                    left: "60%",
                    top: "98%",
                  }}
                  src="jsp.jpg"
                  alt="jsp"
                />
              </ul>
            </div>
          </div>
        </>
      );
  }
}
