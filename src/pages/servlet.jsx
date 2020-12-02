import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../components/Navbar";
import SidePanel from "../components/SidePanel";

export default class servletPage extends Component {
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
            <div style={{ backgroundColor: "#eeeeee", width: "100%" }}>
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                Introduction
              </h1>
              <p style={{ padding: "10px" }}>
                Servlets provide a component-based, platform-independent method
                for building Webbased applications, without the performance
                limitations of CGI programs. Servlets have access to the entire
                family of Java APIs, including the JDBC API to access enterprise
                databases. This tutorial will teach you how to use Java Servlets
                to develop your web based applications in simple and easy steps.
              </p>
              <b>
                Advantages in comparison with the Common Gateway Interface
                (CGI).
              </b>
              <ul>
                <li>Performance is significantly better.</li>
                <li>
                  Servlets are platform-independent because they are written in
                  Java.
                </li>
                <li>
                  Servlets execute within the address space of a Web server. It
                  is not necessary to create a separate process to handle each
                  client request.
                </li>
                <li>
                  Java security manager on the server enforces a set of
                  restrictions to protect the resources on a server machine. So
                  servlets are trusted.
                </li>
              </ul>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                marginTop: "30px",
                width: "45%",
                height: "650px",
              }}
            >
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                Example
              </h1>
              <p style={{ padding: "10px" }}>
                Servlets are Java classes which service HTTP requests and
                implement the javax.servlet.Servlet interface. Web application
                developers typically write servlets that extend
                javax.servlet.http.HttpServlet, an abstract class that
                implements the Servlet interface and is specially designed to
                handle HTTP requests.
                <pre>{`
// Import required java libraries
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

// Extend HttpServlet class
public class HelloWorld extends HttpServlet {
 
   private String message;

   public void init() throws ServletException {
      // Do required initialization
      message = "Hello World";
   }

   public void doGet(HttpServletRequest request, HttpServletResponse response)
      throws ServletException, IOException {
      
      // Set response content type
      response.setContentType("text/html");

      // Actual logic goes here.
      PrintWriter out = response.getWriter();
      out.println("<h1>" + message + "</h1>");
   }

   public void destroy() {
      // do nothing.
   }
}            
            `}</pre>
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                width: "40%",
                position: "absolute",
                left: "50%",
                top: "39%",
                height: "500px",
              }}
            >
              <h1
                style={{
                  backgroundColor: "#4caf50",
                  textAlign: "center",
                  margin: "0",
                }}
              >
                Servlet Deployment
              </h1>
              <p style={{ padding: "10px" }}>
                By default, a servlet application is located at the path{" "}
                {"<Tomcat-installationdirectory>"}/webapps/ROOT and the class
                file would reside in {"<Tomcat-installationdirectory>"}
                /webapps/ROOT/WEB-INF/classes.
                <br />
                <br />
                For now, let us copy HelloWorld.class into{" "}
                {"<Tomcat-installationdirectory>"}/webapps/ROOT/WEB-INF/classes
                and create following entries in web.xml file located in{" "}
                {"<Tomcat-installation-directory>"}/webapps/ROOT/WEB-INF/
                {"</Tomcat-installation-directory>"}
                <pre>{`
<servlet>
<servlet-name>HelloWorld</servlet-name>
<servlet-class>HelloWorld</servlet-class>
</servlet>

<servlet-mapping>
<servlet-name>HelloWorld</servlet-name>
<url-pattern>/HelloWorld</url-pattern>
</servlet-mapping>       
              `}</pre>
                You are almost done, now let us start tomcat server using{" "}
                {"<Tomcat-installationdirectory>"}\bin\startup.bat (on Windows)
                or {"<Tomcat-installationdirectory>"}/bin/startup.sh (on
                Linux/Solaris etc.) and finally type
                http://localhost:8080/HelloWorld in the browser's address box.
                If everything goes fine, you would get the following result
                <br />
                <br />
                <img
                  src="servlet-example.jpg"
                  style={{ alignItems: "center" }}
                  alt="servlet"
                />
              </p>
            </div>
          </div>
        </>
      );
  }
}
