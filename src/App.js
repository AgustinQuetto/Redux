import React from "react";
import "./App.css";
import { connect } from "react-redux";
import Button from "./components/Button";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                Contador: {this.props.counter} <br />
                <Button text="Sumar" operation="add" quantity={1} />
                <Button text="Restar" operation="subtract" quantity={1} />
                <Button text="Reiniciar" operation="reset" />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter,
        name: state.name
    };
}

export default connect(mapStateToProps)(App);
