// *
// * Colors
// *
const colors = [
  "#AAFF00",
  "#FFAA00",
  "#FF00AA",
  "#AA00FF",
  "#FFFB00",
  "#FA023C",
  "#CC37C2",
  "#46E4BC",
  "#00AAFF"
];

const primary = "#ff00ff";
// *
// * Typography
// *
const sansSerif = "'Courier New',Courier,'Lucida Sans Typewriter','Lucida Typewriter',monospace";
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
        stroke: "transparent",
        opacity: 0.25,
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
        background: "#000"
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
        strokeWidth: 2,
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
        fill: "#333333"
      }
    },
    flyoutProps: {
      cornerRadius: 2,
      pointerLength: 0
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
