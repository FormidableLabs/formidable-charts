import React from "react";

import { VictoryScatter } from "victory";

export default (props) => (
  <VictoryScatter
    animate={{
      duration: 200
    }}
    {...props}
  />
);
