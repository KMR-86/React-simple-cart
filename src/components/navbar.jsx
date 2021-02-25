import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-danger"
          onClick={() => this.props.onCreate}
          style={{ fontSize: 20, marginLeft: 20 }}
        >
          Veggie
        </button>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => this.props.onCreate}
          >
            Veggie
          </button>
        </nav>
      </div>
    );
  }
}

export default Navbar;
