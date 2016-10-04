import React from "react";

import { VictoryLine, VictoryScatter, VictoryGroup, VictoryVoronoiTooltip } from "victory";

export default (props) => ([
  <VictoryGroup {...props}>
    <VictoryLine />
    <VictoryScatter />
    <VictoryVoronoiTooltip
      size={25}
      labels={(d) => `${d.y}`}
    />
  </VictoryGroup>
]);
