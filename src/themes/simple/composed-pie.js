import React from "react";

import { VictoryPie } from "victory-pie";

export default (props) => ([
  <VictoryPie
    animate={{
      duration: 200
    }}
    {...props}
  />
]);
