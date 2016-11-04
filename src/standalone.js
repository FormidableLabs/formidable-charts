import React from "react";
import ReactDOM from 'react-dom';
import { Standalone, Themes } from './index';

module.exports = class Victory {
  constructor(dom, options) {
    this.props = options || {};
    this.props.theme = this.resolveTheme(this.props);
    this.dom = dom;
    this.node = ReactDOM.render(<Standalone {...this.props} />, this.dom);
  }
  resolveTheme(props) {
    const theme = props.theme || "simple";
    return Themes[theme];
  }
  setOptions(data) {
    this.props = {...this.props, ...data};
    ReactDOM.render(<Standalone {...this.props} />, this.dom);
  }
}
