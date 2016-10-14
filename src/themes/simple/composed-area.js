import React from "react";

import {
  VictoryArea,
  VictoryGroup,
  VictoryVoronoiTooltip
} from "../../victory/victory-chart";

import { VictoryTooltip } from "../../victory/victory-core";

export default (props) => ([
  <VictoryGroup {...props}>
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
        duration: 500,
        onLoad: {
          duration: 500
        }
      }}
    />
    <VictoryVoronoiTooltip
      size={15}
      labels={(d) => `${d.y}`}
      labelComponent={
        <VictoryTooltip
          style={props.theme.tooltip.labels}
          flyoutStyle={props.theme.tooltip.flyout}
        />
      }
    />
  </VictoryGroup>
]);
