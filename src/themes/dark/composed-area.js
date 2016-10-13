import React from "react";

import { VictoryArea } from "victory-chart";

export default (props) => ([
  <VictoryArea
    {...props}
    style={{
      data: {
        fill: props.seriesColor,
        strokeWidth: 0,
        stroke: "transparent"
      }
    }}
    events={[{
      target: "data",
      eventHandlers: {
        onMouseOver: () => {
          return [
            {
              mutation: (lastProps) => {
                return {
                  style: {
                    ...lastProps.style,
                    opacity: 1
                  }
                };
              }
            }
          ];
        },
        onMouseOut: () => {
          return [
            {
              mutation: (lastProps) => {
                return {
                  style: {
                    ...lastProps.style,
                    opacity: 0.75
                  }
                };
              }
            }
          ];
        }
      }
    }]}
    animate={{
      duration: 100
    }}
  />
]);
