import React from "react";
//import ToDoItems from "./components/ToDoItem";
import Data from "./components/data";

function App() {
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
  };
  
  return (
    <div>
      <header style={myStyle}><h1>{greeting}</h1></header>
      <h2>Your ToDo List for {date.getDate() % 31 +"th"} of {date.toLocaleString("en-EN", {month: "long"})}, {date.getFullYear()} </h2>
        <Data />
    </div>
  )
}

export default App;