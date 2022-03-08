import React from "react";

class Greeting extends React.Component {
    render() {
        const date = new Date();
        var greeting;
        if (date.getHours() < 12) {
            greeting = "Good morning!";
        } else if (date.getHours() < 18) {
            greeting = "Good afternoon!";
        } else {
            greeting = "Good evening!";
        }

        const greetingStyle = {
            color: "white",
            backgroundColor: "gray",
            padding: "10px",
            fontFamily: "Sans-Serif"
        };
        return (
            <div style={greetingStyle}>{greeting}</div>
        )
    }
}

export default Greeting;