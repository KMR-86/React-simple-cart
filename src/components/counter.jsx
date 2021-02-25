import React, { Component } from "react";
class Counter extends Component {
  render() {
    return (
      <div>
        <label
          className="badge badge-primary"
          style={{
            fontSize: 20,
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          {this.props.counter.type}
        </label>
        <label
          className="badge badge-primary"
          style={{
            fontSize: 20,
            marginLeft: 20,
            marginTop: 20,
          }}
        >
          {this.props.counter.value}
        </label>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={{ fontSize: 20, marginLeft: 20 }}
        >
          +
        </button>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDecrement(this.props.counter)}
          style={{ fontSize: 20, marginLeft: 20 }}
        >
          -
        </button>
      </div>
    );
  }
}

export default Counter;
