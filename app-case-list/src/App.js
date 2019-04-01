import React, { Component, createRef } from "react";
import logo from "./logo.svg";
import "./App.css";

const cases = [
    {
        id: 1,
        ref: "123",
        title: "Proof of Enrolment",
        version: 1,
    },
    {
        id: 2,
        ref: "456",
        title: "Proof of Enrolment",
        version: 2,
    },
];

class App extends Component {
    state = {
        apps: [],
        selectedCaseName: "No Case Displayed",
        selectedCaseId: null,
    };

    app = createRef();

    componentDidMount() {
        this.prefetchApps();
    }

    prefetchApps() {
        return cases.forEach(({ id }) => {
            fetch(`/case-details/${id}`).then(response => {
                const script = document.createElement("script");
                script.src = response.url;
                document.body.appendChild(script);
            });
        });
    }

    selectCase = (id, version) => () => {
        const { title, ref } = cases.find(c => c.id === id);

        this.setState(
            {
                selectedCaseName: `${title} ${ref}`,
            },
            () => {
                window[`case-details-v${version}`].default.render(
                    "case-details",
                );
            },
        );
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>Case List</h1>
                    <span className="currently-displaying">
                        Displaying: <span>{this.state.selectedCaseName}</span>
                    </span>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th>Reference Number</th>
                            <th>Case Name</th>
                            <th>Version</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cases.map(({ id, ref, title, version }) => (
                            <tr key={ref}>
                                <td>{ref}</td>
                                <td>{title}</td>
                                <td>{version}</td>
                                <td>
                                    <button
                                        type="button"
                                        onClick={this.selectCase(id, version)}
                                    >
                                        View Case
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div id="case-details" />
            </div>
        );
    }
}

export default App;
