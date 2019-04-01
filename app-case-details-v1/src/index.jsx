import React from "react";
import ReactDOM from "react-dom";
import ClientDetails from "./ClientDetails";

const clientDetailsV1 = {
    render(elementId) {
        ReactDOM.render(<ClientDetails />, document.getElementById(elementId));
    },
};

export default clientDetailsV1;
