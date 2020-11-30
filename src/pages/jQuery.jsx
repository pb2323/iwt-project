import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../components/Navbar";
import SidePanel from "../components/SidePanel";

export default class jQueryPage extends Component {
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
                What is jQuery
              </h1>
              <ul>
                <li>
                  jQuery is a lightweight, "write less, do more", JavaScript
                  library.
                </li>
                <br />
                <li>
                  jQuery takes a lot of common tasks that require many lines of
                  JavaScript code to accomplish, and wraps them into methods
                  that you can call with a single line of code.
                </li>
                <br />
                <li>
                  jQuery also simplifies a lot of the complicated things from
                  JavaScript, like AJAX calls and DOM manipulation.
                </li>
                <br />
                <li>The jQuery library contains the following features</li>
                <br />
                <ol>
                  <li>HTML/DOM manipulation</li>
                  <br />
                  <li>CSS manipulation</li>
                  <br />
                  <li>HTML event methods</li>
                  <br />
                  <li>Effects and animations</li>
                  <br />
                  <li>AJAX</li>
                  <br />
                </ol>
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
                Syntax
              </h1>

              <p style={{ padding: "10px" }}>
                Basic syntax is:
                <b>$(selector).action()</b>
              </p>
              <ol>
                <li>A $ sign to define/access jQuery</li>
                <br />
                <li>A (selector) to "query (or find)" HTML elements</li>
                <br />
                <li>A jQuery action() to be performed on the element(s)</li>
                <br />
              </ol>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                width: "40%",
                position: "absolute",
                left: "50%",
                top: "3%",
                height: "900px",
              }}
            >
              <h1
                style={{
                  backgroundColor: "#4caf50",
                  textAlign: "center",
                  margin: "0",
                }}
              >
                jQuery Effects
              </h1>
              <ol>
                <li>
                  <b>Hide and Show</b>
                  <p>
                    With jQuery, you can hide and show HTML elements with the
                    hide() and show() methods:
                  </p>
                  <b>Syntax:</b>
                  <p>$(selector).hide(speed,callback);</p>
                  <p>{'$("#hide").click(()=>$("p").hide());'}</p>
                  <p>$(selector).show(speed,callback);</p>
                  <p>{'$("#show").click(function(){$("p").show();});'}</p>
                </li>

                <li>
                  <b>Fading</b>
                  <b>Syntax:</b>
                  <p>$(selector).fadeIn(speed,callback);</p>
                  <p>
                    {'$("button").click(function(){$("#div1").fadeIn();});'}
                  </p>
                  <p>
                    {'$("button").click(function(){$("#div3").fadeIn(3000);});'}
                  </p>
                </li>
                <li>
                  <b>Animation</b>
                  <p>{"$(selector).animate({params},speed,callback);"}</p>
                  <p>
                    {
                      '$("button").click(function(){$("div").animate({left: "250px"});});'
                    }
                  </p>
                  <p>
                    {'$("button").click(function(){$("#div3").fadeIn(3000);});'}
                  </p>
                </li>
                <li>
                  <b>css</b>
                  <p>
                    To return the value of a specified CSS property, use the
                    following syntax:
                  </p>
                  <b>Syntax:</b>
                  <p>css("propertyname");</p>
                  <p>{'$("p").css("background-color");'}</p>
                  <b>Set Multiple CSS Properties</b>
                  <p>
                    {
                      'css({"propertyname":"value","propertyname":"value",...});'
                    }
                  </p>
                  <p>
                    {
                      '$("p").css({"background-color": "yellow", "font-size": "200%"});'
                    }
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </>
      );
  }
}
