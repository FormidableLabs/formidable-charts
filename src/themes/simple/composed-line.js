import React from "react";

import {
  VictoryLine,
  VictoryScatter,
  VictoryGroup,
  VictoryVoronoiTooltip
} from "victory-chart";

import { VictoryTooltip } from "victory-core";

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
        duration: 100,
        onLoad: {
          duration: 500
        }
      }}
    />
    <VictoryScatter
      {...props}
      size={5}
      style={{
        data: {
          fill: props.seriesColor,
          stroke: "#eee",
          strokeWidth: 1
        }
      }}
      animate={{
        duration: 500,
        onLoad: {
          duration: 500
        }
      }}
    />
    <VictoryVoronoiTooltip
      size={15}
      labels={(d) => `${d.y}`}
      labelComponent={
        <VictoryTooltip
          style={props.theme.tooltip.labels}
          flyoutStyle={props.theme.tooltip.flyout}
        />
      }
    />
  </VictoryGroup>
]);
