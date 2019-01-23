import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          Age : <span />
          {this.props.age}
        </h1>
        <br />
        <button type="button" onClick={this.props.handleOnAgeUp}>
          Age Up
        </button>
        <button type="button" onClick={this.props.handleOnAgeDown}>
          Age Down
        </button>
        <hr />
        <ul>
          {this.props.history.map(el => (
            <li key={el.id} onClick={() => this.props.handleRemoveAge(el.id)}>
              {el.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    history: state.history
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleOnAgeUp: () => dispatch({ type: "AGE_UP", val: 1 }),
    handleOnAgeDown: () => dispatch({ type: "AGE_DOWN", val: 1 }),
    handleRemoveAge: id => dispatch({ type: "RMV_AGE", id })
  };
};

export default connect(
  //we should respect order "(state,dispatch) " because if we put (dispatch,state) it will make error: "React-Redux TypeError: dispatch is not a function"
  mapStateToProps,
  mapDispatchToProps
)(App);
