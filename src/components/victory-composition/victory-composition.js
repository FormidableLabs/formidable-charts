import React, { PropTypes } from "react";
import { VictoryGroup } from "victory";
import Themes from "../../themes";

export default class VictoryComposition extends React.Component {
  static displayName = "VictoryComposition";

  static propTypes = {
    domain: PropTypes.oneOf([
      PropTypes.arrayOf(PropTypes.number),
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
    width: 450
  };

  generateLabels() {

  }

  getRenderableProps(s, index) {
    const props = {};
    // Key = type + index
    props.key = `${s.type}-${index}`;

    // Add accessors if available
    if (s.accessors) {
      props.x = s.accessors.x || undefined;
      props.y = s.accessors.y || undefined;
    }

    // Add data if available
    props.data = s.data || undefined;

    return props;
  }

  renderContainer() {
    // Get VictoryChart & theme from theme prop
    const { chart: Chart, theme } = this.props.theme;
    // Pull out relevant props
    const { height, width, domain } = this.props;

    return (
      <Chart height={height} width={width} domain={domain} theme={theme}>
        {this.renderSeries()}
      </Chart>
    );
  }

  renderSeries() {
    // Create empty elements array
    let elements = [];

    // For each series
    this.props.series.forEach((s, index) => {
      // Default type to line
      s.type = s.type || "line";
      // Get function based upon type
      const renderComposition = this.props.theme[s.type];
      // Get reduced prop set to pass to child
      const targetProps = this.getRenderableProps(s, index);
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
