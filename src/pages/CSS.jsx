import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../components/Navbar";
import SidePanel from "../components/SidePanel";

export default class CSSPage extends Component {
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
            <div style={{ backgroundColor: "#eeeeee" }}>
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                What is CSS
              </h1>
              <p style={{ padding: "10px" }}>
                Cascading Style Sheets (CSS) is a style sheet language used for
                describing the presentation of a document written in a markup
                language such as HTML. CSS is a cornerstone technology of the
                World Wide Web, alongside HTML and JavaScript.
              </p>

              <p style={{ padding: "10px" }}>
                <b>
                  <u>Syntax:</u>
                </b>
                A CSS rule-set consists of a selector and a declaration block:
              </p>
              <p style={{ padding: "10px" }}>
                The selector points to the HTML element you want to style. The
                declaration block contains one or more declarations separated by
                semicolons. Each declaration includes a CSS property name and a
                value, separated by a colon. Multiple CSS declarations are
                separated with semicolons, and declaration blocks are surrounded
                by curly braces
              </p>
              <p style={{ padding: "10px" }}>
                <b>Examples</b>

                <pre>{`
 p{                                   body{                                  h1 {                             p{
    color:red;                              background-color:blue;                color:white;                    font-family:verdana;
    text-align:center;                    }                                       font-size:10px;                 margin:10px;
   }                                                                            }                               }
All p elements will center aligned    Whole body background turns           All h1 now has font size           All p tags will now have a margin
with red text color                   blue                                  10px with white text color          of 10px and font family verdana
          `}</pre>
              </p>
              <p style={{ padding: "10px" }}>
                There are 3 types of CSS:
                <ol>
                  <li>External CSS</li>
                  <li>Internal CSS</li>
                  <li>Inline CSS</li>
                </ol>
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                marginTop: "30px",
                width: "28%",
                height: "450px",
              }}
            >
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                External CSS
              </h1>
              <p style={{ padding: "10px" }}>
                <ul>
                  <li>
                    With an external style sheet, you can change the look of an
                    entire website by changing just one file.
                  </li>
                  <li>
                    Each HTML page must include a reference to the external
                    style sheet file inside the {"<link>"} element, inside the
                    head section.
                  </li>
                </ul>

                <pre>
                  {`
HTML FILE:                    CSS File:

<!DOCTYPE html>              body{
<html>                    background-color:blue;
<head>                        }
<link rel="stylesheet" 
type="text/css"
href="mystyle.css">
</head>
<body>
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
</body>
</html>
                `}
                </pre>
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                position: "absolute",
                left: "33%",
                width: "28%",
                height: "450px",
                top: "80%",
              }}
            >
              <h1
                style={{
                  backgroundColor: "#4caf50",
                  textAlign: "center",
                  margin: "0px",
                }}
              >
                Internal CSS
              </h1>
              <p style={{ padding: "10px" }}>
                <ul>
                  <li>
                    An inline style may be used to apply a unique style for a
                    single element.
                  </li>
                  <li>
                    To use inline styles, add the style attribute to the
                    relevant element. The style attribute can contain any CSS
                    property.
                  </li>
                </ul>

                <pre>
                  {`
HTML FILE:                   

<!DOCTYPE html>
<html>
<head>
    	<style>
          	body {background-color: linen;}
           	h1 {color: maroon;
           	margin-left: 40px; }
     	</style>
</head>
<body>
<h1>This is a heading</h1>
<p>This is a paragraph.</p> 
</body>
</html>

                `}
                </pre>
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                position: "absolute",
                left: "66%",
                width: "28%",
                height: "450px",
                top: "80%",
              }}
            >
              <h1
                style={{
                  backgroundColor: "#4caf50",
                  textAlign: "center",
                  margin: "0px",
                }}
              >
                Inline CSS
              </h1>
              <p style={{ padding: "10px" }}>
                <ul>
                  <li>
                    An inline style may be used to apply a unique style for a
                    single element.
                  </li>
                  <li>
                    To use inline styles, add the style attribute to the
                    relevant element. The style attribute can contain any CSS
                    property.
                  </li>
                </ul>

                <pre>
                  {`
HTML FILE:                  

<!DOCTYPE html>
<html>
<body>
<h1 style="color:blue;text-align:center;">
    This is a heading
</h1>
<p style="color:red;">
        This is a paragraph.
</p>
</body>
</html>

                `}
                </pre>
              </p>
            </div>
            {/* <div
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
            </div> */}
          </div>
        </>
      );
  }
}
