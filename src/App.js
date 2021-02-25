import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
class App extends Component {
  state = {
    counters: [],
    highestCounter: 0,
  };

  handleDelete = (counterId) => {
    console.log("delete");
    const counter = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counter });
  };
  handleCreate = (typeOfMenu) => {
    console.log("create");
    const newCounter = {
      id: this.state.highestCounter + 1,
      value: 0,
      type: typeOfMenu,
    };
    this.state.counters.push(newCounter);
    this.setState({
      counters: this.state.counters,
      highestCounter: this.state.highestCounter + 1,
    });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    if (counter.value !== 0) {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    } else {
      this.handleDelete(counter.id);
    }
  };
  render() {
    return (
      <div>
        <div className="container">
          <h1>Choose Your Burger</h1>
          <button
            className="btn btn-danger"
            onClick={() => this.handleCreate("Veggie burger")}
            style={{ fontSize: 20, marginLeft: 20 }}
          >
            Veggie
          </button>

          <button
            className="btn btn-danger"
            onClick={() => this.handleCreate("Mutton burger")}
            style={{ fontSize: 20, marginLeft: 20 }}
          >
            Mutton
          </button>

          <button
            className="btn btn-danger"
            onClick={() => this.handleCreate("Chicken burger")}
            style={{ fontSize: 20, marginLeft: 20 }}
          >
            Chicken
          </button>
        </div>

        {/* <Navbar
          onCreate={this.handleCreate}
          counters={this.state.counters}
          highestCounter={this.state.highestCounter}
        /> */}
        <div className="container">
          <Counters
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            counters={this.state.counters}
          />
        </div>
      </div>
    );
  }
}

export default App;
