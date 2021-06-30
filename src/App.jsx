import React from "react";
import Login from "./login.jsx";
import Register from "./register.jsx";
import Reset from "./reset.jsx";
import Desktop from "./desktop.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render(props) {
        return (
            <div className="App min-h-screen w-full flex bg-blue-100">
                <div className="h-full w-full">
                    <Desktop/>
                </div>
            </div>
        )
    }
}

export default App;