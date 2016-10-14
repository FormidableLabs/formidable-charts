import React from "react";

import { VictoryPie } from "../../victory/victory-pie";

export default (props) => ([
  <VictoryPie
    animate={{
      duration: 500,
      onLoad: {
        duration: 500
      }
    }}
    {...props}
  />
]);
