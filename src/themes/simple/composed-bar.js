import React from "react";

import { VictoryBar } from "victory";

export default (props) => ([
  <VictoryBar
    style={{
      data: {
        fill: props.seriesColor
      }
    }}
    animate={{
      duration: 200
    }}
    {...props}
  />
]);
