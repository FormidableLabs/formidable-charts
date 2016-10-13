import React, { PropTypes } from "react";

import {
  VictoryLabel,
  VictoryContainer
} from "victory-core";

import Themes from "../../themes";

export default class VictoryLineChart extends React.Component {
  static displayName = "VictoryLineChart";

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
    height: PropTypes.number,
    interpolation: PropTypes.oneOf([
      "basis", "basisClosed", "basisOpen", "bundle", "cardinal", "cardinalClosed", "cardinalOpen",
      "catmullRom", "catmullRomClosed", "catmullRomOpen", "linear", "linearClosed", "monotoneX",
      "monotoneY", "natural", "radial", "step", "stepAfter", "stepBefore"
    ]),
    series: PropTypes.arrayOf(
      PropTypes.shape({
        data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
        name: PropTypes.string,
        samples: PropTypes.number,
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
      samples: 10
    }],
    width: 450
  };

  getRenderableProps(serie, index) {
    const props = {};
    // Key = type + index
    props.key = `line-${index}`;

    props.samples = serie.samples;
    props.x = serie.x || undefined;
    props.y = serie.y || undefined;

    props.categories = this.props.categories;
    props.interpolation = this.props.interpolation;
    props.style = serie.style;

    // Add data if available
    props.data = serie.data || undefined;

    // Get color
    const { theme } = this.props.theme;
    const colors = theme.group.colorScale;

    props.theme = theme;
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
      const renderComposition = this.props.theme.line;
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
