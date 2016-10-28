/* eslint-disable */
import React from "react";

import {
  Standalone,
  AreaChart,
  BarChart,
  LineChart,
  ScatterChart,
  PieChart,
  Themes
} from "../../src";

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const types = ["line", "area", "scatter"];

const ComponentDemos = {
  composedStandalone: (props) => (
    <Standalone
      title="Standalone"
      subtitle="Composed Demo"
      theme={Themes[props.theme]}
      series={props.data.map(data => {
        const type = random(0,2);
        return {
          type: types[type],
          data: data.data
        };
      })}
    />
  ),
  lineChart: (props) => (
    <LineChart
      title="LineChart"
      theme={Themes[props.theme]}
      series={props.data}
    />
  ),
  areaChart: (props) => (
    <AreaChart
      interpolation="natural"
      stacked
      title="AreaChart"
      theme={Themes[props.theme]}
      series={props.data}
    />
  ),
  barChart: (props) => (
    <BarChart
      title="BarChart"
      theme={Themes[props.theme]}
      series={props.data}
    />
  ),
  scatterChart: (props) => (
    <ScatterChart
      title="ScatterChart"
      theme={Themes[props.theme]}
      series={props.data}
      symbol="star"
    />
  ),
  pieChart: (props) => (
    <PieChart
      title="PieChart"
      innerRadius={100}
      theme={Themes[props.theme]}
      data={props.data[0].data}
    />
  )
};

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "bright",
      component: "areaChart",
      data: this.generateNewData()
    };

    this.handleNewData = this.handleNewData.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handleComponentChange = this.handleComponentChange.bind(this);
  }
  generateNewData() {
    const seriesCount = random(2,5);
    const pointCount = random(3,6);

    let series = [];

    for(let a = 0; a < seriesCount; a++) {
      let data = [];
      for(let b = 0; b < pointCount; b++) {
        data = data.concat({ x: b + 5, y: random(1, 10)})
      }
      series = series.concat({ data: data });
    }

    return series;
  }
  handleNewData() {
    this.setState({
      data: this.generateNewData()
    });
  }
  handleThemeChange(e) {
    this.setState({
      theme: e.target.value
    });
  }
  handleComponentChange(e) {
    this.setState({
      component: e.target.value
    });
  }
  render() {
    const ComponentPreview = ComponentDemos[this.state.component];
    return (
      <div>
        <label>
        Theme:
        <select
          style={{
            display: "inline-block",
            margin: "1%"
          }}
          onChange={this.handleThemeChange}
        >
          <option value="bright" defaultValue>Bright</option>
          <option value="simple">Simple</option>
          <option value="dark">Dark</option>
          <option value="danceparty">Dance Party</option>
        </select>
        </label>
        <label>
        Component:
        <select
          style={{
            display: "inline-block",
            margin: "1%"
          }}
          onChange={this.handleComponentChange}
        >
          <option value="areaChart" defaultValue>AreaChart</option>
          <option value="barChart">BarChart</option>
          <option value="lineChart">LineChart</option>
          <option value="pieChart">PieChart</option>
          <option value="scatterChart">ScatterChart</option>
          <option value="composedStandalone">Standalone</option>
        </select>
        </label>
        <button type="button" onClick={this.handleNewData}>Generate random data</button>
        <div style={{width: "450px", display: "block", margin: "auto"}}>
          <ComponentPreview theme={this.state.theme} data={this.state.data} />
        </div>
      </div>
    );
  }
}
