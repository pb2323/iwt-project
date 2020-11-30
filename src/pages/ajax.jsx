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
            <div style={{ backgroundColor: "#eeeeee", width: "49%" }}>
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
                marginTop: "0px",
                padding: "0px",
                width: "40%",
                position: "absolute",
                top: "3%",
                left: "55%",
              }}
            >
              <h1
                style={{
                  backgroundColor: "#4caf50",
                  textAlign: "center",
                  margin: "0",
                }}
              >
                Methods
              </h1>
              <table
                style={{
                  border: "2px solid black",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <tr>
                  <th>S.No</th>
                  <th>Method</th>
                  <th>Description</th>
                </tr>
                <tr>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    1
                  </td>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    new XMLHttpRequest()
                  </td>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    Creates a new XMLHttpRequest object
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    2
                  </td>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    getAllResponseHeaders()
                  </td>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    Returns header information
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    3
                  </td>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    getResponseHeader()
                  </td>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    Returns specific header information
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    4
                  </td>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    open(method,url,async,user,psw)
                  </td>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    Specifies the request
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    5
                  </td>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    send(string)
                  </td>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    Sends the request to the server. Used for POST requests
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    6
                  </td>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    setRequestHeader()
                  </td>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    Adds a label/value pair to the header to be sent
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    7
                  </td>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    onreadystatechange
                  </td>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    Defines a function to be called when the readyState property
                    changes
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    8
                  </td>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    readyState
                  </td>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    Holds the status of the XMLHttpRequest.
                    <ol>
                      <li>request not initialized</li>
                      <li>server connection established</li>
                      <li>request received</li>
                      <li> processing request</li>
                      <li>request finished and response is ready</li>
                    </ol>
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    9
                  </td>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    responseText
                  </td>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    Returns the response data as a string
                  </td>
                </tr>
                <tr>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    10
                  </td>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    status
                  </td>
                  <td style={{ border: "2px solid black", padding: "5px" }}>
                    Returns the status-number of a request
                    <ol>
                      <li>OK</li>
                      <li>Forbidden</li>
                      <li>Not Found</li>
                    </ol>
                  </td>
                </tr>
              </table>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                width: "49%",
                height: "85%",
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
              <pre style={{ padding: "10px" }}>
                {`
HTML File:                            Function loadDoc()


<!DOCTYPE html>                       function loadDoc() {
<html>                                var xhttp = new XMLHttpRequest();
<body>                                xhttp.onreadystatechange = function() {
                                
<div id="demo">                       if (this.readyState == 4 && this.status == 200)
<h2>Let AJAX change this text</h2>    {document.getElementById("demo").innerHTML  
<button type="button"                 this.responseText;
onclick="loadDoc()">                  }
Change Content                        };
</button>                             xhttp.open("GET", "ajax_info.txt", true);
</div>                                xhttp.send();}
</body>

</html>`}
              </pre>
              <p style={{ padding: "10px" }}>
                <b>"ajax_info.txt" looks like this:</b>
                <pre style={{ padding: "10px", margin: "0" }}>
                  {`
<h1>AJAX</h1>
<p>AJAX is not a programming language.</p>
<p>AJAX is a technique for accessing web servers from a web page.</p>
<p>AJAX stands for Asynchronous JavaScript And XML.</p>
`}
                </pre>
              </p>
              <ul>
                <li>
                  The HTML page contains a {"<div>"} section and a {"<button>"}.
                </li>
                <br />

                <li>
                  The {"<div>"} section is used to display information from a
                  server.
                </li>
                <br />
                <li>The {"<button>"} calls a function (if it is clicked).</li>
                <br />
                <li>
                  The function requests data from a web server and displays it:
                </li>
                <br />
              </ul>
            </div>
          </div>
        </>
      );
  }
}
