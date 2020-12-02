import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../components/Navbar";
import SidePanel from "../components/SidePanel";

export default class javaPage extends Component {
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
                Introduction-JAVA
              </h1>
              <p style={{ padding: "10px" }}>
                Java is a popular programming language, created in 1995. It is
                owned by Oracle, and more than 3 billion devices run Java. It is
                used for:
              </p>
              <ul>
                <li>Mobile applications (specially Android apps)</li>
                <li>Desktop applications</li>
                <li>Web applications</li>
                <li>Web servers and application servers</li>
                <li>Games</li>
                <li>Database connection</li>
              </ul>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                marginTop: "30px",
                width: "40%",
                height: "520px",
              }}
            >
              <h1 style={{ backgroundColor: "#4caf50", textAlign: "center" }}>
                Encapsulation
              </h1>
              <p style={{ padding: "10px" }}>
                <b>
                  The meaning of Encapsulation, is to make sure that "sensitive"
                  data is hidden from users. To achieve this, you must:
                </b>
                <ul>
                  <li>declare class variables/attributes as private</li>
                  <li>
                    provide public get and set methods to access and update the
                    value of a private variable
                  </li>
                </ul>
                <pre>{`
public class Main {
  private String name; // private = restricted access

  // Getter
  public String getName() {
    return name;
  }

  // Setter
  public void setName(String newName) {
    this.name = newName;
  }
}
            `}</pre>
                The get method returns the variable value, and the set method
                sets the value.
                <br />
                <br />
                Syntax for both is that they start with either get or set,
                followed by the name of the variable, with the first letter in
                upper case:
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#eeeeee",
                width: "40%",
                height: "580px",
                position: "absolute",
                left: "50%",
                top: "55%",
              }}
            >
              <h1
                style={{
                  backgroundColor: "#4caf50",
                  textAlign: "center",
                  margin: "0",
                }}
              >
                Inheritance
              </h1>
              <p style={{ padding: "10px" }}>
                <b>
                  In Java, it is possible to inherit attributes and methods from
                  one class to another. We group the "inheritance concept" into
                  two categories:
                </b>
                <ul>
                  <li>
                    <b>subclass</b> (child) - the class that inherits from
                    another class
                  </li>
                  <li>
                    <b>superclass</b> (parent) - the class being inherited from
                  </li>
                </ul>
                <pre>{`
class Vehicle {
  protected String brand = "Ford";        // Vehicle attribute
  public void honk() {                    // Vehicle method
    System.out.println("Tuut, tuut!");
  }
}

class Car extends Vehicle {
  private String modelName = "Mustang";    // Car attribute
  public static void main(String[] args) {

    // Create a myCar object
    Car myCar = new Car();

    // Call the honk() method (from the Vehicle class) on the myCar
    object myCar.honk();

    // Display the value of the brand attribute (from the Vehicle
    class) and the value of the modelName from the Car class
    System.out.println(myCar.brand + " " + myCar.modelName);
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
                top: "3%",
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
                JAVA - OOP
              </h1>
              <p style={{ padding: "10px" }}>
                Classes and objects are the two main aspects of object-oriented
                programming. Look at the following illustration to see the
                difference between class and objects:
                <div style={{ marginLeft: "30%  " }}>
                  <table style={{ border: "2px solid black" }}>
                    <tr>
                      <th>class</th>
                      <th>objects</th>
                    </tr>
                    <tr>
                      <td
                        style={{
                          alignContent: "center",
                          border: "2px solid black",
                        }}
                        rowSpan={3}
                      >
                        Fruit
                      </td>
                      <td
                        style={{
                          alignContent: "center",
                          border: "2px solid black",
                        }}
                      >
                        Apple
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          alignContent: "center",
                          border: "2px solid black",
                        }}
                      >
                        Banana
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          alignContent: "center",
                          border: "2px solid black",
                        }}
                      >
                        Mango
                      </td>
                    </tr>
                  </table>
                </div>
              </p>
              <p style={{ padding: "10px" }}>
                So, a class is a template for objects, and an object is an
                instance of a class. When the individual objects are created,
                they inherit all the variables and methods from the class. You
                will learn much more about classes and objects in the next
                chapter.
              </p>
            </div>
            <img
              src="java.webp"
              alt="java"
              style={{ height: "300px", marginLeft: "80px" }}
            />
            {/* <div
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
            </div> */}
          </div>
        </>
      );
  }
}
