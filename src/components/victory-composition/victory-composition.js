import React, { PropTypes } from "react";
import {
  VictoryAxis,
  VictoryContainer,
  VictoryGroup,
  VictoryLabel,
  VictoryStack
} from "victory";

import Themes from "../../themes";

export default class VictoryComposition extends React.Component {
  static displayName = "VictoryComposition";

  static propTypes = {
    domain: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.number),
      PropTypes.shape({
        x: PropTypes.arrayOf(PropTypes.number),
        y: PropTypes.arrayOf(PropTypes.number)
      })
    ]),
    domainPadding: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
      })
    ]),
    height: PropTypes.number,
    legend: PropTypes.bool,
    series: PropTypes.arrayOf(
      PropTypes.shape({
        accessors: PropTypes.shape({
          x: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func
          ]),
          y: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.func
          ])
        }),
        data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        name: PropTypes.string,
        style: PropTypes.object,
        type: PropTypes.string
      })
    ),
    subtitle: PropTypes.string,
    theme: PropTypes.shape({
      area: PropTypes.func,
      axis: PropTypes.func,
      bar: PropTypes.func,
      chart: PropTypes.func,
      line: PropTypes.func,
      pie: PropTypes.func,
      scatter: PropTypes.func,
      theme: PropTypes.object,
      wrapper: PropTypes.func
    }),
    title: PropTypes.string,
    tooltip: PropTypes.shape({
      labelFormat: PropTypes.func,
      style: PropTypes.object,
      options: PropTypes.object
    }),
    width: PropTypes.number,
    xAxis: PropTypes.shape({
      labels: PropTypes.arrayOf("string"),
      labelFormat: PropTypes.oneOf([
        PropTypes.func,
        PropTypes.arrayOf(PropTypes.func)
      ]),
      title: PropTypes.string
    }),
    yAxis: PropTypes.shape({
      labels: PropTypes.arrayOf("string"),
      labelFormat: PropTypes.oneOf([
        PropTypes.func,
        PropTypes.arrayOf(PropTypes.func)
      ]),
      title: PropTypes.string
    })
  };

  static defaultProps = {
    height: 300,
    legend: true,
    theme: Themes.simple,
    series: [{
      accessors: { y: (data) => Math.sin(2 * Math.PI * data.x) },
      type: "line"
    }],
    subtitle: "My Victory Chart",
    title: "Victory Chart",
    width: 450
  };

  getRenderableProps(serie, type, index) {
    const props = {};
    // Key = type + index
    props.key = `${type}-${index}`;

    // Add accessors if available
    if (serie.accessors) {
      props.x = serie.accessors.x || undefined;
      props.y = serie.accessors.y || undefined;
    }

    // Add data if available
    props.data = serie.data || undefined;

    // Get color
    const { theme } = this.props.theme;
    const colors = theme.group.colorScale;

    props.seriesColor = colors[index % colors.length];

    return props;
  }

  renderContainer() {
    // Get VictoryChart & theme from theme prop
    const { chart: Chart, theme } = this.props.theme;
    // Pull out relevant props
    const {
      height,
      width,
      domain,
      domainPadding,
      title,
      subtitle
     } = this.props;

    return (
      <Chart
        containerComponent={
          <VictoryContainer
            title={title}
            desc={subtitle}
          />
        }
        height={height}
        width={width}
        domain={domain}
        domainPadding={domainPadding}
        theme={theme}
        padding={{ top: 75, left: 50, bottom: 50, right: 50 }}
        style={theme.chart.style}
      >
        <VictoryLabel
          x={width / 2}
          textAnchor="middle"
          verticalAnchor="start"
          style={{
            ...theme.bar.style.labels,
            fontSize: 18
          }}
          text={title}
        />

        <VictoryLabel
          x={width / 2}
          y={32}
          style={{
            ...theme.bar.style.labels,
            fontSize: 12,
            parent: {
              paddingBottom: 20
            }
          }}
          text={subtitle}
          textAnchor="middle"
          verticalAnchor="start"
        />

        <VictoryAxis />
        <VictoryAxis dependentAxis />

        {this.renderSeries(this.props.series)}

      </Chart>
    );
  }

  renderSeries(series) {
    // Create empty elements array
    let elements = [];

    // For each series
    series.forEach((serie, index) => {
      // Default type to line
      const type = serie.type || "line";

      if (serie.type !== "stack" && serie.type !== "group") {
        // Get function based upon type
        const renderComposition = this.props.theme[serie.type];
        // Get reduced prop set to pass to child
        const targetProps = this.getRenderableProps(serie, type, index);
        // Concat new elements onto elements array
        elements = elements.concat(renderComposition(targetProps));
      } else if (serie.type === "stack") {
        elements = elements.concat([
          <VictoryStack key={`stack-${index}`}>
            {this.renderSeries(serie.data)}
          </VictoryStack>
        ]);
      } else if (serie.type === "group") {
        elements = elements.concat([
          <VictoryGroup offset={20} key={`group-${index}`}>
            {this.renderSeries(serie.data)}
          </VictoryGroup>
        ]);
      }
    });

    return elements;
  }

  render() {
    // Render container
    return this.renderContainer();
  }
}
