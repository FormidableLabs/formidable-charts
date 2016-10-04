/*global document:false */
import React from "react";
import ReactDOM from "react-dom";
import VictoryCompositionDemo from "./components/victory-composition-demo";

const content = document.getElementById("content");

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },

  render() {
    return (
      <div>
        <h1>Victory Composition Demo</h1>
        <VictoryCompositionDemo />
      </div>
    );
  }
});

ReactDOM.render((
  <App />
), content);
