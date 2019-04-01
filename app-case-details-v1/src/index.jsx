import React from "react";
import ReactDOM from "react-dom";
import ClientDetails from "./ClientDetails";

const clientDetailsV1 = {
    render(elementId, props) {
        ReactDOM.render(
            <ClientDetails {...props} />,
            document.getElementById(elementId),
        );
    },
};

export default clientDetailsV1;
