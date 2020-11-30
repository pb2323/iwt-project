import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../components/Navbar";
import SidePanel from "../components/SidePanel";

export default class HTMLPage extends Component {
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
                What is HTML
              </h1>
              <ul>
                <li>HTML stands for Hyper Text Markup Language</li>
                <br />
                <li>
                  HTML is the standard markup language for creating Web pages
                </li>{" "}
                <br />
                <li>HTML describes the structure of a Web page</li> <br />
                <li>HTML consists of a series of elements</li> <br />
                <li>
                  HTML elements tell the browser how to display the content
                </li>{" "}
                <br />
              </ul>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                marginTop: "30px",
                width: "40%",
                height: "400px",
              }}
            >
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                What is a Markup Language
              </h1>
              <p style={{ padding: "10px" }}>
                A markup language is a computer language that uses tags to
                define elements within a document. It is human-readable, meaning
                markup files contain standard words, rather than typical
                programming syntax. While several markup languages exist, the
                two most popular are HTML and XML.
              </p>
              <p style={{ padding: "10px" }}>
                HTML is a markup language used for creating webpages. The
                contents of each webpage are defined by HTML tags. Basic page
                tags, such as {"<head>"}, {"<body>"}, and {"<div>"} define
                sections of the page, while tags such as {"<table>"}, {"<form>"}
                , {"<image>"}, and {"<a>"} define elements within the page. Most
                elements require a beginning and end tag, with the content
                placed between the tags. For example, a link to the course home
                page for IWT may use the following HTML code:
              </p>
              <p style={{ color: "blue", padding: "10px" }}>
                {
                  '<a href=" http://class.tempzsoft.com/login-register.php#" >  IWT Course class</a>'
                }
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                width: "40%",
                position: "absolute",
                left: "50%",
                top: "3%",
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
                Template
              </h1>
              <pre style={{ padding: "10px" }}>
                {`   <!DOCTYPE html>
    <html>
    <head>
    <title>Page Title</title>
    </head>
    <body>
    <h1>My First Heading</h1>
    <p>My first paragraph. </p>
    </body>
    </html>`}
              </pre>
              <p style={{ padding: "10px" }}>
                <b>Explanation:</b>
              </p>
              <ul>
                <li>
                  The {"<!DOCTYPE html>"} declaration defines that this document
                  is an HTML5 document
                </li>
                <br />

                <li>
                  The {"<html>"} element is the root element of an HTML page
                </li>
                <br />
                <li>
                  The {"<head>"} element contains meta information about the
                  HTML page
                </li>
                <br />
                <li>
                  The {"<title>"} element specifies a title for the HTML page
                  (which is shown in the browser's title bar or in the page's
                  tab)
                </li>
                <br />
                <li>
                  The {"<body>"} element defines the document's body, and is a
                  container for all the visible contents, such as headings,
                  paragraphs, images, hyperlinks, tables, lists, etc.
                </li>
                <br />

                <li>The {"<h1>"}element defines a large heading</li>
                <br />
                <li>The {"<p>"} element defines a paragraph</li>
                <br />
              </ul>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                marginTop: "30px",
              }}
            >
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                HTML Tags:
              </h1>
              <div>
                <table
                  style={{
                    border: "2px solid black",
                    padding: "20px",
                    textAlign: "center",
                  }}
                >
                  <tr>
                    <th>S.No</th>
                    <th>Tag</th>
                    <th>Explanation</th>
                  </tr>
                  <tr>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      1
                    </td>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      {"(<HTML>. . . </HTML>)"}
                    </td>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      The entire HTML document
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      2
                    </td>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      {"(<HEAD> . . . </HEAD>)"}
                    </td>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      The head, or prologue, of the HTML document
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      3
                    </td>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      {"(<BODY> . . . </BODY>)"}
                    </td>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      All the other content in the HTML document
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      4
                    </td>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      {"<TITLE> . . . </TITLE>"}
                    </td>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      The title of the document
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      5
                    </td>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      {"<BR>"}
                    </td>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      This tag will show a blank line.
                    </td>
                  </tr>
                </table>
              </div>
              <div
                style={{
                  display: "inline-block",
                  position: "absolute",
                  top: "99%",
                  right: "5%",
                }}
              >
                <table
                  style={{
                    border: "2px solid black",
                    padding: "20px",
                    textAlign: "center",
                    position: "relative",
                    right: "0",
                    bottom: "0",
                  }}
                >
                  <tr>
                    <th>S.No</th>
                    <th>Tag</th>
                    <th>Explanation</th>
                  </tr>
                  <tr>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      6
                    </td>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      {"<!- . . . ->"}
                    </td>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      Tag to write comments which are not visible in display
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      7
                    </td>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      {"<style>"}
                    </td>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      Defines style information for a document
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      8
                    </td>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      {"<script>"}
                    </td>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      Defines a client-side script
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      9
                    </td>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      {"<B> . . . </B>"}
                    </td>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      Makes text bold
                    </td>
                  </tr>
                  <tr>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      10
                    </td>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      {"<I> . . . </I>"}
                    </td>
                    <td style={{ border: "2px solid black", padding: "5px" }}>
                      Makes text italic
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </>
      );
  }
}
