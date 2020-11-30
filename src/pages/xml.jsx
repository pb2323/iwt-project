import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../components/Navbar";
import SidePanel from "../components/SidePanel";

export default class XMLPage extends Component {
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
                XML
              </h1>
              <ul>
                <li>XML stands for eXtensible Markup Language</li>
                <br />
                <li>XML is a markup language much like HTML</li>
                <br />
                <li>XML was designed to store and transport data</li>
                <br />
                <li>XML was designed to be self-descriptive</li>
                <br />
                <li>XML is a W3C Recommendation</li>
                <br />
              </ul>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                marginTop: "30px",
                width: "40%",
                height: "300px",
              }}
            >
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                Difference Between XML and HTML
              </h1>
              <p style={{ padding: "10px" }}>
                XML and HTML were designed with different goals:
              </p>
              <ul>
                <li>
                  XML was designed to carry data - with focus on what data is
                </li>
                <br />
                <li>
                  HTML was designed to display data - with focus on how data
                  looks
                </li>
                <br />
                <li>XML tags are not predefined like HTML tags are</li>
                <br />
                <li>XML Separates Data from HTML</li>
                <br />
                <li>XML Simplifies Things</li>
              </ul>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                width: "40%",
                position: "absolute",
                left: "50%",
                top: "3%",
                height: "560px",
                margin: "0",
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
              <p style={{ padding: "10px", margin: "0" }}>
                <pre style={{ margin: "0" }}>
                  {`
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
  <book category="cooking">
	<title lang="en">Everyday Italian</title>
	<author>Giada De Laurentiis</author>
	 <year>2005</year>
	<price>30.00</price>
  </book>
  <book category="children">
	<title lang="en">Harry Potter</title>
	<author>J K. Rowling</author>
	 <year>2005</year>
	<price>29.99</price>
  </book>
  <book category="web">
	<title lang="en">XQuery Kick Start</title>
	<author>James McGovern</author>
	 <author>Per Bothner</author>
	<author>Kurt Cagle</author>
	 <author>James Linn</author>
	<author>Vaidyanathan Nagarajan</author>
	<year>2003</year>
	 <price>49.99</price>
  </book>
  <book category="web" cover="paperback">
	<title lang="en">Learning XML</title>
	 <author>Erik T. Ray</author>
	<year>2003</year>
	 <price>39.95</price>
  </book>
</bookstore>                  
                  `}
                </pre>
              </p>
            </div>
            <div
              style={{
                width: "40%",
                position: "absolute",
                left: "50%",
                top: "85%",

                margin: "10px",
              }}
            >
              <img src={"xml.png"} className="img-responsive" alt="img" />
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                marginTop: "30px",
                width: "40%",
                height: "300px",
              }}
            >
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                XML TREE
              </h1>
              <ul>
                <li>XML documents are formed as element trees.</li>
                <br />
                <li>
                  An XML tree starts at a root element and branches from the
                  root to child elements.
                </li>
                <br />
                <li>All elements can have sub elements (child elements):</li>
                <br />
                <li>XML uses a much self-describing syntax.</li>
                <br />
                <li>XML Tags are Case Sensitive</li>
              </ul>
            </div>
          </div>
        </>
      );
  }
}
