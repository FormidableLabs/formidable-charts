import React from "react";

import { VictoryPie } from "victory-chart";

export default (props) => (
  <VictoryPie
    animate={{
      duration: 200
    }}
    {...props}
  />
);
