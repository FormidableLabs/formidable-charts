import React from "react";

import { VictoryArea, VictoryScatter, VictoryGroup, VictoryVoronoiTooltip } from "victory";

export default (props) => ([
  <VictoryGroup {...props}>
    <VictoryArea />
    <VictoryScatter />
    <VictoryVoronoiTooltip
      size={25}
      labels={(d) => `${d.y}`}
    />
  </VictoryGroup>
]);
