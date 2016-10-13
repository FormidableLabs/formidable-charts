import React, { PropTypes } from "react";

import {
  VictoryGroup,
  VictoryStack
} from "victory-chart";

import {
  VictoryLabel,
  VictoryContainer
} from "victory-core";

import Themes from "../../themes";

export default class VictoryStandalone extends React.Component {
  static displayName = "VictoryStandalone";

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
    labelFormat: PropTypes.func,
    series: PropTypes.arrayOf(
      PropTypes.shape({
        data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        name: PropTypes.string,
        style: PropTypes.object,
        type: PropTypes.string,
        x: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.func
        ]),
        y: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.func
        ])
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
      theme: PropTypes.object
    }),
    title: PropTypes.string,
    width: PropTypes.number,
    xAxis: PropTypes.object,
    yAxis: PropTypes.object
  };

  static defaultProps = {
    height: 300,
    theme: Themes.simple,
    series: [{
      y: (data) => Math.sin(2 * Math.PI * data.x),
      type: "line"
    }],
    width: 450
  };

  getRenderableProps(serie, type, index) {
    const { theme, ...renderableProps } = serie;
    // Key = type + index
    renderableProps.key = `${type}-${index}`;

    // Get color
    const { theme: styleTheme } = this.props.theme;
    const colors = styleTheme.group.colorScale;

    renderableProps.theme = styleTheme;
    renderableProps.seriesColor = colors[index % colors.length];

    return renderableProps;
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
        padding={{
          top: this.props.subtitle || this.props.title ? 75 : 25,
          left: 50,
          bottom: 50,
          right: 50
        }}
        style={{...theme.chart.style, parent: {
          ...theme.chart.style.parent,
          paddingTop: 25
        }}}
      >
        {this.props.title &&
          <VictoryLabel
            x={width / 2}
            textAnchor="middle"
            verticalAnchor="start"
            style={{
              ...theme.bar.style.labels,
              fontSize: 18
            }}
            text={title}
          />}

        {this.props.subtitle &&
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
          />}

        {this.renderAxis("xAxis")}
        {this.renderAxis("yAxis", {dependentAxis: true})}

        {this.renderSeries(this.props.series)}

      </Chart>
    );
  }

  renderAxis(key, options) {
    const { axis } = this.props.theme;
    const axisProps = this.props[key];
    return axis({...options, ...axisProps});
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
