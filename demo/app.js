/*global document:false */
import React from "react";
import ReactDOM from "react-dom";
import VictoryComposedDemo from "./components/victory-composed-demo";

const content = document.getElementById("content");

const App = React.createClass({
  propTypes: {
    children: React.PropTypes.element
  },

  render() {
    return (
      <div>
        <VictoryComposedDemo />
      </div>
    );
  }
});

ReactDOM.render((
  <App />
), content);
