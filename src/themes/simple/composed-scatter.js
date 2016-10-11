import React, { PropTypes } from "react";

import { VictoryScatter } from "victory-chart";

const ComposedScatter = (props) => (
  <VictoryScatter
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
);

ComposedScatter.propTypes = {
  seriesColor: PropTypes.string
};

export default ComposedScatter;
