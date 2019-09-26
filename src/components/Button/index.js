import React from "react";
import { connect } from "react-redux";
import { addCounter, subtractCounter, resetCounter } from "../../store";

class Button extends React.Component {
    handleClick = () => {
        const { dispatch, operation, quantity } = this.props;
        switch (operation) {
            case "add":
                return dispatch(addCounter(quantity));
            case "subtract":
                return dispatch(subtractCounter(quantity));
            case "reset":
                return dispatch(resetCounter(quantity));
            default:
                console.log("operation unexists");
        }
    };

    render() {
        const text = this.props.text || "Sumar";
        return <button onClick={() => this.handleClick()}>{text}</button>;
    }
}

export default connect()(Button);
