import React, { Component } from "react";
import NavBar from "./navbar";
import Home from "./home";
import Linux from "./linux";
import Django from "./django";
import Web from "./web";
import WebContent from "./webContent";
import { Routes, Route } from "react-router-dom";

class App extends Component {
    state = {};
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/linux" element={<Linux />} />
                        <Route path="/django" element={<Django />} />
                        <Route path="/web" element={<Web />} />
                        <Route
                            path="/web/content/:chapter"
                            element={<WebContent />}
                        />
                    </Routes>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
