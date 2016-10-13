import React from "react";

import {
  VictoryStandalone,
  VictoryAreaChart,
  VictoryBarChart,
  VictoryLineChart,
  VictoryScatterChart,
  VictoryPieChart,
  Themes
} from "../../src";

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "bright"
    };

    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  handleSelectChange(e) {
    this.setState({
      theme: e.target.value
    });
  }
  render() {
    return (
      <div>
        <select
          style={{
            display: "block",
            margin: "1%"
          }}
          onChange={this.handleSelectChange}
        >
          <option value="bright" defaultValue>Bright</option>
          <option value="simple">Simple</option>
          <option value="dark">Dark</option>
          <option value="danceparty">Dance Party</option>
        </select>
        <div style={{width: "450px", display: "inline-block", margin: "1%"}}>
          <VictoryStandalone
            title="VictoryStandalone"
            subtitle="Line Demo"
            theme={Themes[this.state.theme]}
            series={[
              {
                type: "line",
                data: [{x: 0, y: 5}, {x: 1, y: 2}, {x: 2, y: 12}, {x: 3, y: 1}]
              },
              {
                type: "line",
                data: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 7}, {x: 3, y: 12}]
              },
              {
                type: "line",
                data: [{x: 0, y: 15}, {x: 1, y: 6}, {x: 2, y: 2}, {x: 3, y: 6}]
              },
              {
                type: "line",
                data: [{x: 0, y: 3}, {x: 1, y: 12}, {x: 2, y: 3}, {x: 3, y: 5}]
              },
              {
                type: "line",
                data: [{x: 0, y: 11}, {x: 1, y: 15}, {x: 2, y: 19}, {x: 3, y: 5}]
              }
            ]}
          />
        </div>
        <div style={{width: "450px", display: "inline-block", margin: "1%"}}>
          <VictoryStandalone
            title="VictoryStandalone"
            subtitle="Area Demo"
            theme={Themes[this.state.theme]}
            series={[
              {
                type: "stack",
                data: [
                  {
                    type: "area",
                    data: [{x: 0, y: 5}, {x: 1, y: 2}, {x: 2, y: 12}, {x: 3, y: 1}]
                  },
                  {
                    type: "area",
                    data: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 7}, {x: 3, y: 12}]
                  },
                  {
                    type: "area",
                    data: [{x: 0, y: 15}, {x: 1, y: 6}, {x: 2, y: 2}, {x: 3, y: 6}]
                  },
                  {
                    type: "area",
                    data: [{x: 0, y: 5}, {x: 1, y: 16}, {x: 2, y: 22}, {x: 3, y: 6}]
                  }
                ]
              }
            ]}
          />
        </div>
        <div style={{width: "450px", display: "inline-block", margin: "1%"}}>
          <VictoryStandalone
            title="VictoryStandalone"
            subtitle="Bar Demo"
            theme={Themes[this.state.theme]}
            series={[
              {
                type: "group",
                data: [
                  {
                    type: "bar",
                    data: [{x: 1, y: 5}, {x: 2, y: 2}, {x: 3, y: 12}, {x: 4, y: 1}]
                  },
                  {
                    type: "bar",
                    data: [{x: 1, y: 2}, {x: 2, y: 1}, {x: 3, y: 7}, {x: 4, y: 12}]
                  },
                  {
                    type: "bar",
                    data: [{x: 1, y: 15}, {x: 2, y: 6}, {x: 3, y: 2}, {x: 4, y: 6}]
                  },
                  {
                    type: "bar",
                    data: [{x: 1, y: 5}, {x: 2, y: 16}, {x: 3, y: 22}, {x: 4, y: 6}]
                  }
                ]
              }
            ]}
          />
        </div>
        <div style={{width: "450px", display: "inline-block", margin: "1%"}}>
          <VictoryStandalone
            title="VictoryStandalone"
            subtitle="Scatter Demo"
            theme={Themes[this.state.theme]}
            xAxis={{
              tickValues: ["test", "test2", "test3", "test4", "test5"]
            }}
            series={[
              {
                type: "scatter",
                data: [{x: 0, y: 5}, {x: 1, y: 2}, {x: 2, y: 12}, {x: 3, y: 1}]
              },
              {
                type: "scatter",
                data: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 7}, {x: 3, y: 12}]
              },
              {
                type: "scatter",
                data: [{x: 0, y: 15}, {x: 1, y: 6}, {x: 2, y: 2}, {x: 3, y: 6}]
              }
            ]}
          />
        </div>
        <div style={{width: "450px", display: "inline-block", margin: "1%"}}>
          <VictoryLineChart
            interpolation="cardinal"
            title="VictoryLineChart"
            theme={Themes[this.state.theme]}
            series={[
              {
                data: [{x: 0, y: 5}, {x: 1, y: 2}, {x: 2, y: 12}, {x: 3, y: 1}]
              },
              {
                data: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 7}, {x: 3, y: 12}]
              },
              {
                data: [{x: 0, y: 15}, {x: 1, y: 6}, {x: 2, y: 2}, {x: 3, y: 6}]
              },
              {
                data: [{x: 0, y: 3}, {x: 1, y: 12}, {x: 2, y: 3}, {x: 3, y: 5}]
              },
              {
                data: [{x: 0, y: 11}, {x: 1, y: 15}, {x: 2, y: 19}, {x: 3, y: 5}]
              }
            ]}
          />
        </div>
        <div style={{width: "450px", display: "inline-block", margin: "1%"}}>
          <VictoryAreaChart
            interpolation="natural"
            stacked
            title="VictoryAreaChart"
            theme={Themes[this.state.theme]}
            series={[
              {
                data: [{x: 0, y: 5}, {x: 1, y: 2}, {x: 2, y: 12}, {x: 3, y: 1}]
              },
              {
                data: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 7}, {x: 3, y: 12}]
              },
              {
                data: [{x: 0, y: 15}, {x: 1, y: 6}, {x: 2, y: 2}, {x: 3, y: 6}]
              },
              {
                data: [{x: 0, y: 3}, {x: 1, y: 12}, {x: 2, y: 3}, {x: 3, y: 5}]
              },
              {
                data: [{x: 0, y: 11}, {x: 1, y: 15}, {x: 2, y: 19}, {x: 3, y: 5}]
              }
            ]}
          />
        </div>
        <div style={{width: "450px", display: "inline-block", margin: "1%"}}>
          <VictoryBarChart
            horizontal
            stacked
            title="VictoryBarChart"
            theme={Themes[this.state.theme]}
            series={[
              {
                type: "bar",
                data: [{x: 1, y: 5}, {x: 2, y: 2}, {x: 3, y: 12}, {x: 4, y: 1}]
              },
              {
                type: "bar",
                data: [{x: 1, y: 2}, {x: 2, y: 1}, {x: 3, y: 7}, {x: 4, y: 12}]
              },
              {
                type: "bar",
                data: [{x: 1, y: 15}, {x: 2, y: 6}, {x: 3, y: 2}, {x: 4, y: 6}]
              },
              {
                type: "bar",
                data: [{x: 1, y: 5}, {x: 2, y: 16}, {x: 3, y: 22}, {x: 4, y: 6}]
              }
            ]}
          />
        </div>
        <div style={{width: "450px", display: "inline-block", margin: "1%"}}>
          <VictoryScatterChart
            title="VictoryScatterChart"
            theme={Themes[this.state.theme]}
            series={[
              {
                data: [{x: 0, y: 5}, {x: 1, y: 2}, {x: 2, y: 12}, {x: 3, y: 1}],
                symbol: "diamond"
              },
              {
                data: [{x: 0, y: 2}, {x: 1, y: 1}, {x: 2, y: 7}, {x: 3, y: 12}]
              },
              {
                data: [{x: 0, y: 15}, {x: 1, y: 6}, {x: 2, y: 2}, {x: 3, y: 6}]
              },
              {
                data: [{x: 0, y: 3}, {x: 1, y: 12}, {x: 2, y: 3}, {x: 3, y: 5}]
              },
              {
                data: [{x: 0, y: 11}, {x: 1, y: 15}, {x: 2, y: 19}, {x: 3, y: 5}]
              }
            ]}
            symbol="star"
          />
        </div>
        <div style={{width: "450px", display: "inline-block", margin: "1%"}}>
          <VictoryPieChart
            title="VictoryPieChart"
            innerRadius={100}
            theme={Themes[this.state.theme]}
            data={[
              {x: "A", y: 10},
              {x: "B", y: 3},
              {x: "C", y: 6}
            ]}
          />
        </div>
      </div>
    );
  }
}
