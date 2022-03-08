import React from "react";
import ToDoItems from "./components/ToDoItem";
import Greeting from "./components/GreetingComponent";
import DateComp from "./components/DateComponent";

/* function App() {
  const date = new Date();
  var greeting;
  if (date.getHours() < 12) {
    greeting = "Good morning!";
  } else if (date.getHours() < 18 ) {
    greeting = "Good afternoon!";
  } else {
    greeting = "Good evening!";
  }

  const myStyle = {
    color: "white",
    backgroundColor: "gray",
    padding: "10px",
    fontFamily: "Sans-Serif"
  }; */
  class App extends React.Component {
    render() {
  return (
    <div>
      <Greeting />
      <DateComp />
      {/* <h2>Your ToDo List for {date.getDate() % 31 +"th"} of {date.toLocaleString("en-EN", {month: "long"})}, {date.getFullYear()} </h2> */}
        <ToDoItems />
    </div>
  )
}
  }

export default App;

