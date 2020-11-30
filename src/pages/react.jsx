import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../components/Navbar";
import SidePanel from "../components/SidePanel";

export default class reactPage extends Component {
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
                Introduction
              </h1>
              <ul>
                <li>React is a JavaScript library created by Facebook.</li>
                <br />
                <li>React is a tool for building UI components.</li>
                <br />
                <li>React creates a VIRTUAL DOM in memory.</li>
                <br />
                <li>
                  Instead of manipulating the browser's DOM directly, React
                  creates a virtual DOM in memory, where it does all the
                  necessary manipulating, before making the changes in the
                  browser DOM.
                </li>
                <br />
                <li>
                  React only changes what needs to be changed! It finds out what
                  changes have been made, and changes only what needs to be
                  changed.
                </li>
                <br />
              </ul>
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
                React Events
              </h1>
              <p style={{ padding: "10px" }}>
                Just like HTML, React can perform actions based on user events.
                React has the same events as HTML: click, change, mouseover etc.
              </p>
              <p style={{ padding: "10px" }}>
                <b>Adding Events</b>
                <br />
                <br />
                React events are written in camelCase syntax: onClick instead of
                onclick.
                <br />
                <br />
                React event handlers are written inside curly braces:
                <br />
                {' onClick={shoot}  instead of onClick="shoot()".'}
                <br />
                <br />
                <b>React:</b>
                <br />
                <br />
                {"<button onClick={shoot}>Take the Shot!</button>"}
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                width: "40%",
                position: "absolute",
                left: "50%",
                top: "3%",
                height: "700px",
              }}
            >
              <h1
                style={{
                  backgroundColor: "#4caf50",
                  textAlign: "center",
                  margin: "0",
                }}
              >
                React Lifecycle
              </h1>
              <p style={{ padding: "10px" }}>
                Each component in React has a lifecycle which you can monitor
                and manipulate during its three main phases. The three phases
                are: <b>Mounting</b>, <b>Updating</b>, <b>and Unmounting</b>.
              </p>
              <p style={{ padding: "10px" }}>
                <b>Mounting</b>
                <br />
                Mounting means putting elements into the DOM. React has four
                built-in methods that gets called, in this order, when mounting
                a component:
                <ol>
                  <li>constructor()</li>
                  <li>componentDidMount()</li>
                  <li>render()</li>
                  <br />
                </ol>
                The <b>render</b>() method is required and will always be
                called, the others are optional and will be called if you define
                them.
                <br />
                <br />
                The <b>constructor</b>() method is called before anything else,
                when the component is initiated, and it is the natural place to
                set up the initial state and other initial values.
                <br />
                <br />
                <b>Example:</b>
              </p>
              <pre>
                {`
    class Header extends React.Component {
      constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
      }
      render() {
        return (
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        );
      }
    }

    ReactDOM.render(<Header />, document.getElementById('root'));

                `}
              </pre>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                marginTop: "30px",
                width: "90%",
              }}
            >
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                Styling React Using CSS
              </h1>
              <p style={{ padding: "10px" }}>
                There are many ways to style React with CSS, this tutorial will
                take a closer look at inline styling, and CSS stylesheet.
              </p>
              <p style={{ padding: "10px" }}>
                <b>Inline Styling</b>
                <br />
                To style an element with the inline style attribute, the value
                must be a JavaScript object:
              </p>
              <p style={{ padding: "10px" }}>
                <b>Example:</b>
                <pre>{`
class MyHeader extends React.Component {
  render() {
    return (
      <div>
      <h1 style={{color: "red"}}>Hello Style!</h1>
      <p>Add a little style!</p>
      </div>
    );
  }
}

`}</pre>
              </p>
            </div>
          </div>
        </>
      );
  }
}
