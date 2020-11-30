import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../components/Navbar";
import SidePanel from "../components/SidePanel";

export default class ajaxPage extends Component {
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
                AJAX
              </h1>
              <ul>
                <li>AJAX = Asynchronous JavaScript And XML.</li>
                <br />
                <li>AJAX is not a programming language.</li>
                <br />
                <li>
                  AJAX just uses a combination of:
                  <ol>
                    <li>
                      A browser built-in XMLHttpRequest object (to request data
                      from a web server)
                    </li>
                    <br />
                    <li>
                      JavaScript and HTML DOM (to display or use the data)
                    </li>
                    <br />
                  </ol>
                </li>
              </ul>
              <p style={{ padding: "10px" }}>
                AJAX allows web pages to be updated asynchronously by exchanging
                data with a web server behind the scenes. This means that it is
                possible to update parts of a web page, without reloading the
                whole page.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                marginTop: "30px",
                width: "40%",
                height: "370px",
              }}
            >
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                HTTP
              </h1>
              <p style={{ padding: "10px" }}>
                HTTP is a protocol which allows the fetching of resources, such
                as HTML documents.
              </p>
              <ul>
                <li>
                  HTTP/1.1 was first documented in RFC 2068 in 1997. That
                  specification was obsoleted by RFC 2616 in 1999, which was
                  likewise replaced by the RFC 7230 family of RFCs in 2014.
                </li>
                <br />
                <li>
                  HTTP/2 is a more efficient expression of HTTP's semantics "on
                  the wire", and was published in 2015
                </li>
                <br />
                <li>
                  HTTP/3 is the proposed successor to HTTP/2, which is already
                  in use on the web (enabled by default in latest macOS), using
                  UDP instead of TCP for the underlying transport protocol
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
                top: "27%",
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
                Components of a website
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
