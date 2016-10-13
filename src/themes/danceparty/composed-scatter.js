import React from "react";

import { VictoryScatter } from "victory-chart";

import { VictoryTooltip } from "victory-core";

export default (props) => ([
  <VictoryScatter
    {...props}
    size={props.size || 5}
    style={{
      ...props.style,
      data: {
        fill: props.seriesColor
      }
    }}
    labels={props.labels ? props.labels : ((d) => d.y)}
    labelComponent={<VictoryTooltip />}
    animate={{
      duration: 500,
      onLoad: {
        duration: 500
      }
    }}
  />
]);
