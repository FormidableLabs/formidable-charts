import React from "react";

import VictoryComposition from "../../src";

export default class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <div style={{width: "48%", display: "inline-block", margin: "1%"}}>
          <VictoryComposition
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
              }
            ]}
          />
        </div>
        <div style={{width: "48%", display: "inline-block", margin: "1%"}}>
          <VictoryComposition
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
        <div style={{width: "48%", display: "inline-block", margin: "1%"}}>
          <VictoryComposition
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
      </div>
    );
  }
}
