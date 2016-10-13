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

export default class VictoryBarChart extends React.Component {
  static displayName = "VictoryBarChart";

  static propTypes = {
    categories: PropTypes.oneOfType([
      PropTypes.shape({
        x: PropTypes.arrayOf(PropTypes.string),
        y: PropTypes.arrayOf(PropTypes.string)
      }),
      PropTypes.arrayOf(PropTypes.string)
    ]),
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
    labels: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    height: PropTypes.number,
    offset: PropTypes.number,
    series: PropTypes.arrayOf(
      PropTypes.shape({
        labels: PropTypes.oneOfType([
          PropTypes.func,
          PropTypes.arrayOf(PropTypes.string)
        ]),
        data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        name: PropTypes.string,
        style: PropTypes.object,
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
    stacked: PropTypes.bool,
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
      data: [
        {x: 1, y: 3},
        {x: 3, y: 6},
        {x: 5, y: 9}
      ]
    }],
    offset: 15,
    width: 450
  };

  getRenderableProps(serie, index) {
    const props = {};
    // Key = type + index
    props.key = `bar-${index}`;

    props.x = serie.x || undefined;
    props.y = serie.y || undefined;

    // Add data if available
    props.data = serie.data || undefined;

    // Get color
    const { theme } = this.props.theme;
    const colors = theme.group.colorScale;

    props.theme = theme;
    props.seriesColor = colors[index % colors.length];
    props.style = serie.style;

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
        <VictoryLabel
          x={width / 2}
          textAnchor="middle"
          verticalAnchor="start"
          style={{
            ...theme.bar.style.labels,
            fontSize: theme.bar.style.labels.fontSize + 4
          }}
          text={title}
        />

        <VictoryLabel
          x={width / 2}
          y={32}
          style={{
            ...theme.bar.style.labels,
            fontSize: theme.bar.style.labels.fontSize + 2,
            parent: {
              paddingBottom: 20
            }
          }}
          text={subtitle}
          textAnchor="middle"
          verticalAnchor="start"
        />

        {this.renderAxis("xAxis")}
        {this.renderAxis("yAxis", {dependentAxis: true})}

        {this.renderGroup()}

      </Chart>
    );
  }

  renderAxis(key, options) {
    const { axis } = this.props.theme;
    const axisProps = this.props[key];
    return axis({...options, ...axisProps});
  }

  renderGroup() {
    if (this.props.stacked === true) {
      return (
        <VictoryStack {...this.props}>
          {this.renderSeries(this.props.series)}
        </VictoryStack>
      );
    } else {
      return (
        <VictoryGroup {...this.props}>
          {this.renderSeries(this.props.series)}
        </VictoryGroup>
      );
    }
  }

  renderSeries(series) {
    // Create empty elements array
    let elements = [];

    // For each series
    series.forEach((serie, index) => {
      const renderComposition = this.props.theme.bar;
      // Get reduced prop set to pass to child
      const targetProps = this.getRenderableProps(serie, index);
      // Concat new elements onto elements array
      elements = elements.concat(renderComposition(targetProps));
    });

    return elements;
  }

  render() {
    // Render container
    return this.renderContainer();
  }
}
