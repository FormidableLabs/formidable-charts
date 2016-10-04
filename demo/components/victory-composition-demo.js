import React from "react";

import VictoryComposition from "../../src";

export default class Wrapper extends React.Component {
  render() {
    return (
      <div style={{width: 500, margin: "auto"}}>
        <VictoryComposition
          series={[
            {
              type: "area",
              data: [{x: 0, y: 1}, {x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 4}]
            },
            {
              type: "line",
              data: [{x: 0, y: 5}, {x: 1, y: 2}, {x: 2, y: 12}, {x: 3, y: 1}]
            }
          ]}
        />
      </div>
    );
  }
}
