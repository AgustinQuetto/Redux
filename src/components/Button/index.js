import React from "react";
import { connect } from "react-redux";
import { manageCounter } from "../../store";

class Button extends React.Component {
    handleClick = () => {
        const { dispatch, operation, quantity } = this.props;
        dispatch(manageCounter(quantity, operation));
    };

    render() {
        const text = this.props.text || "Sumar";
        return <button onClick={() => this.handleClick()}>{text}</button>;
    }
}

export default connect()(Button);
