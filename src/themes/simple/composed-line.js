import React from "react";

import { VictoryLine, VictoryScatter, VictoryGroup, VictoryVoronoiTooltip } from "victory";

export default (props) => ([
  <VictoryGroup {...props}>
    <VictoryLine
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
