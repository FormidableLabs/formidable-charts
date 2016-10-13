import React, { PropTypes } from "react";

import { VictoryScatter } from "victory-chart";

const ComposedScatter = (props) => (
  <VictoryScatter
    {...props}
    style={{
      ...props.style,
      data: {
        fill: props.seriesColor
      }
    }}
    animate={{
      duration: 200
    }}
  />
);

ComposedScatter.propTypes = {
  seriesColor: PropTypes.string,
  style: PropTypes.object
};

export default ComposedScatter;
