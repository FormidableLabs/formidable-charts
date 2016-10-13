import React from "react";

import { VictoryLine, VictoryScatter, VictoryGroup, VictoryVoronoiTooltip } from "victory-chart";

export default (props) => ([
  <VictoryGroup {...props}>
    <VictoryLine
      {...props}
      style={{
        data: {
          stroke: props.seriesColor
        }
      }}
      animate={{
        duration: 100
      }}
    />
    <VictoryScatter
      {...props}
      style={{
        data: {
          fill: props.seriesColor,
          stroke: "#eee",
          strokeWidth: 1
        }
      }}
      animate={{
        duration: 100
      }}
    />
    <VictoryVoronoiTooltip
      size={25}
      labels={(d) => `${d.y}`}
    />
  </VictoryGroup>
]);
