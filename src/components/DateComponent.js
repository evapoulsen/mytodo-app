import React from "react";

class DateComp extends React.Component {
    render() {
        const date = new Date();
        return (
            <h2>Your ToDo List for {date.getDate() % 31 +"th"} of {date.toLocaleString("en-EN", {month: "long"})}, {date.getFullYear()} </h2>
        )
    }
}

export default DateComp;