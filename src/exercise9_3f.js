import React from "react"

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

class App3 extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "Julia Childs",
            isLoggedIn: true
        }
    }
    render() {
        var greeting;
        var loggedin;
        if (this.state.isLoggedIn === true) {
            greeting = "Welcome";
            loggedin = "in";
        } else {
            greeting = "Good Bye";
            loggedin = "out";
        }
        return (
            <div>
                <h1>{greeting} {this.state.name}, your are currently logged {loggedin}.</h1>
            </div>
        )
    }
}

export default App3;