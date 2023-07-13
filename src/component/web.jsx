import React, { Component } from "react";
import { Link } from "react-router-dom";

class Web extends Component {
    state = {
        contents: [
            { id: 1, subject: "React" },
            { id: 2, subject: "Redux" },
            { id: 3, subject: "Component" },
            { id: 4, subject: "ES6" },
        ],
    };
    render() {
        return (
            <React.Fragment>
                <h1>Web</h1>
                <br />
                {this.state.contents.map((content) => {
                    return (
                        <div key={content.id}>
                            <Link  to={`/web/content/${content.id}`}>
                                {content.id + ". " + content.subject}
                            </Link>
                        </div>
                    );
                })}
            </React.Fragment>
        );
    }
}

export default Web;
