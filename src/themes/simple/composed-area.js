import React from "react";

import { VictoryArea } from "victory";

export default (props) => ([
  <VictoryArea
    {...props}
    style={{
      data: {
        fill: props.seriesColor
      }
    }}
    events={[{
      target: "data",
      eventHandlers: {
        onMouseOver: () => {
          return [
            {
              mutation: (props) => {
                return {
                  style: {
                    ...props.style,
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
              mutation: (props) => {
                return {
                  style: {
                    ...props.style,
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
