import React from "react";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Reset from "./Reset.jsx";
import Desktop from "./Desktop.jsx";

class App extends React.PureComponent {
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