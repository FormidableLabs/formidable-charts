// *
// * Colors
// *
const colors = [
  "#e74c3c",
  "#3498db",
  "#2ecc71",
  "#e67e22",
  "#9b59b6",
  "#1abc9c",
  "#f1c40f"
];

const primary = "#aaa";
// *
// * Typography
// *
const sansSerif =
  "'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Geneva, Verdana, sans-serif";
const letterSpacing = "normal";
const fontSize = 14;
// *
// * Layout
// *
const baseProps = {
  width: 450,
  height: 300,
  padding: 50,
  colorScale: colors
};
// *
// * Labels
// *
const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding: 10,
  fill: primary,
  stroke: "transparent"
};

const centeredLabelStyles = { textAnchor: "middle", ...baseLabelStyles };
// *
// * Strokes
// *
const strokeDasharray = "10, 5";
const strokeLinecap = "round";
const strokeLinejoin = "round";

export default {
  area: {
    style: {
      data: {
        opacity: 0.85,
        fill: primary
      },
      labels: centeredLabelStyles
    },
    ...baseProps
  },
  axis: {
    style: {
      axis: {
        fill: "transparent",
        stroke: primary,
        strokeWidth: 1,
        strokeLinecap,
        strokeLinejoin
      },
      axisLabel: {
        ...centeredLabelStyles,
        padding: 25
      },
      grid: {
        fill: "transparent",
        stroke: primary,
        opacity: 0.25,
        strokeDasharray,
        strokeLinecap,
        strokeLinejoin
      },
      ticks: {
        fill: "transparent",
        padding: 10,
        size: 1,
        stroke: "transparent"
      },
      tickLabels: baseLabelStyles
    },
    ...baseProps
  },
  bar: {
    style: {
      data: {
        opacity: 0.85,
        fill: primary,
        padding: 10,
        stroke: "transparent",
        strokeWidth: 0,
        width: 8
      },
      labels: baseLabelStyles
    },
    ...baseProps
  },
  candlestick: {
    style: {
      data: {
        opacity: 0.85,
        stroke: primary,
        strokeWidth: 1
      },
      labels: centeredLabelStyles
    },
    candleColors: {
      positive: "#ffffff",
      negative: primary
    },
    ...baseProps
  },
  chart: {
    style: {
      parent: {
        background: "#222222",
        paddingTop: 20
      }
    },
    ...baseProps
  },
  errorbar: {
    style: {
      data: {
        opacity: 0.85,
        fill: "transparent",
        stroke: primary,
        strokeWidth: 2
      },
      labels: centeredLabelStyles
    },
    ...baseProps
  },
  group: {
    colorScale: colors,
    ...baseProps
  },
  line: {
    style: {
      data: {
        opacity: 0.85,
        fill: "transparent",
        stroke: primary,
        strokeWidth: 2
      },
      labels: {
        ...baseLabelStyles,
        textAnchor: "start"
      }
    },
    ...baseProps
  },
  pie: {
    style: {
      data: {
        opacity: 0.85,
        padding: 10,
        stroke: "transparent",
        strokeWidth: 1
      },
      labels: {
        ...baseLabelStyles,
        padding: 20
      }
    },
    colorScale: colors,
    width: 400,
    height: 400,
    padding: 50
  },
  scatter: {
    style: {
      data: {
        opacity: 0.85,
        fill: primary,
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles
    },
    ...baseProps
  },
  stack: {
    colorScale: colors,
    ...baseProps
  },
  tooltip: {
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles,
      flyout: {
        stroke: primary,
        strokeWidth: 1,
        fill: "#f0f0f0"
      }
    },
    flyoutProps: {
      cornerRadius: 10,
      pointerLength: 10
    },
    ...baseProps
  },
  voronoi: {
    style: {
      data: {
        fill: "transparent",
        stroke: "transparent",
        strokeWidth: 0
      },
      labels: centeredLabelStyles
    },
    ...baseProps
  }
};
