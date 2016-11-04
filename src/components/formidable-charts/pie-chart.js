import React, { PropTypes } from "react";

import {
  VictoryLabel,
  VictoryContainer
} from "../../victory/victory-core";

import Themes from "../../themes";

export default class PieChart extends React.Component {
  static displayName = "PieChart";

  static propTypes = {
    cornerRadius: PropTypes.number,
    data: PropTypes.array,
    endAngle: PropTypes.number,
    height: PropTypes.number,
    innerRadius: PropTypes.number,
    labels: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    padAngle: PropTypes.number,
    startAngle: PropTypes.number,
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
    x: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.number,
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ]),
    y: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.number,
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string)
    ])
  };

  static defaultProps = {
    data: [
      {x: "A", y: 10},
      {x: "B", y: 3},
      {x: "C", y: 6}
    ],
    height: 300,
    theme: Themes.simple,
    width: 450
  };

  getRenderableProps() {
    const { height, width, title, subtitle, theme, ...renderableProps } = this.props;
    // Add data if available
    renderableProps.key = "pie";
    renderableProps.standalone = true;
    renderableProps.padding = {
      top: this.props.subtitle || this.props.title ? 100 : 50,
      left: 75,
      bottom: 50,
      right: 75
    };

    // Get color
    const { theme: styleTheme } = this.props.theme;
    renderableProps.theme = styleTheme;

    return renderableProps;
  }

  renderContainer() {
    // Get VictoryChart & theme from theme prop
    const { theme } = this.props.theme;
    // Pull out relevant props
    const {
      height,
      width,
      title,
      subtitle
     } = this.props;

    return (
      <VictoryContainer
        height={height}
        width={width}
        title={title}
        desc={subtitle}
        style={{
          ...theme.chart.style.parent,
          paddingTop: 25
        }}
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

        {this.renderPie()}

      </VictoryContainer>
    );
  }

  renderPie() {
    // Get function based upon type
    const renderComposition = this.props.theme.pie;
    // Get reduced prop set to pass to child
    const targetProps = this.getRenderableProps();
    return renderComposition(targetProps);
  }

  render() {
    // Render container
    return this.renderContainer();
  }
}
