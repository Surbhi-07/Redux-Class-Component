import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, reset } from "./Action";

class Counter extends Component {
  state = {
    count: 0
  };

  incrementHandler = () => {
    this.props.increment();
  };

  decrementHandler = () => {
    this.props.decrement();
  };

  resetHandler = () => {
    this.props.reset();
  };

  render() {
    const buttonMargin = {
      margin: "0 4px",
      color: "white",
      background: "grey",
      padding: "5px 10px",
      outline: "none",
      cursor: "pointer"
    };

    return (
      <div>
        <h3>Counter: {this.props.count}</h3>
        <button style={buttonMargin} onClick={this.incrementHandler}>
          UP
        </button>
        <button style={buttonMargin} onClick={this.decrementHandler}>
          Down
        </button>
        <button style={buttonMargin} onClick={this.resetHandler}>
          Reset
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {

    count: state.count
  };
}

const mapDispatchToProps = {
  // connect to action creators
  increment,
  decrement,
  reset
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);