# API Documentation

## Common Props

The following is a list of common props shared by each chart, with the exception of PieChart where noted:


### categories

`oneOfType(shape({ x: arrayOf(string), y: arrayOf(string) }), arrayOf(string))`

The categories prop specifies how categorical data for a chart should be ordered. This prop should be given as an array of string values, or an object with these arrays of values specified for x and y. If this prop is not set, categorical data will be plotted in the order it was given in the data array.

>Not applicable to PieChart

Examples: `["dogs", "cats", "mice"], { x: ["dogs","cats"], y: ["mice","birds"]}`

---

### domain

`oneOfType(shape({ x: arrayOf(number), y: arrayOf(number) }), arrayOf(number))`

The domain prop describes the range of values your chart will include. This prop can be given as a array of the minimum and maximum expected values for your chart, or as an object that specifies separate arrays for x and y. If this prop is not provided, a domain will be calculated from data, or other available information.

>Not applicable to PieChart


Examples: `[-1, 1], {x: [0, 100], y: [0, 1]}`

---

### domainPadding

`oneOfType(shape({ x: number, y: number }), number))`

The domainPadding prop specifies a number of pixels of padding to add to the beginning and end of a domain. This prop is useful for explicitly spacing ticks farther from the origin to prevent crowding. This prop should be given as an object with numbers specified for x and y.

>Not applicable to PieChart

Examples: `20, { x: 5, y: 10 }`

---

### height

`number`

The height props specifies the height of the svg viewBox of the chart container. This value should be given as a number of pixels.

---

### subtitle

`string`

The subtitle for your chart. This value should be a string.

---

### theme

`object`

This prop specifies which theme to use for your chart. See the themes section below for available themes and how to add them.

Example `Themes.simple`

---

### title

`string`

The title for your chart. This value should be a string.

---

### width

`number`

The width props specifies the width of the svg viewBox of the chart container. This value should be given as a number of pixels.

---

### xAxis

`object`

This prop specifies a set of props to pass to the x axis. Valid props can be found here: [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis#props)

>Not applicable to PieChart

Example `{ name: "test" }`

---

### yAxis

`object`

This prop specifies a set of props to pass to the y axis. Valid props can be found here: [VictoryAxis](https://formidable.com/open-source/victory/docs/victory-axis#props)

>Not applicable to PieChart

Example `{ scale: "time" }`

----

## AreaChart

---

### interpolation

`string`

The interpolation prop determines how data points should be connected when plotting a line. The following values are valid:

*"basis", "basisClosed", "basisOpen", "bundle", "cardinal", "cardinalClosed", "cardinalOpen", "catmullRom", "catmullRomClosed", "catmullRomOpen", "linear", "linearClosed", "monotoneX", "monotoneY", "natural", "radial", "step", "stepAfter", "stepBefore"*

---

### series

`arrayOf(object)`

The series prop allows you to provide data series to your chart. Each object in the series array is representative of a subset of the properties found here: [VictoryArea](https://formidable.com/open-source/victory/docs/victory-area)

The series child object shape is as follows:

```
{
  data: oneOfType(array, object),
  samples: number,
  style: object,
  x: oneOfType(string, func),
  y: oneOfType(string, func)
}
```

Example `[{ data: [{ x: 0, y: 1 }] ] }, { data: [ [2,3], [4 ,5] ] }]`

---

### stacked

`bool`

The stacked prop is a boolean value that determines whether to stack your area chart series.

----

## BarChart

---

### horizontal

`bool`

The horizontal prop is a boolean value that determines whether to display your bar chart series horizontally.

---

### labels

`func`

The labels prop defines labels that will appear above each bar in your bar chart. This prop should be given as a function of data.

Example `(datum) => datum.y`

---

### offset

`number`

The offset prop on Group controls the spacing between each series of bars in a group.

---

### series

`arrayOf(object)`

The series prop allows you to provide data series to your chart. Each object in the series array is representative of a subset of the properties found here: [Bar](https://formidable.com/open-source//docs/-bar)

The series child object shape is as follows:

```
{
  data: oneOfType(array, object),
  style: object,
  x: oneOfType(string, func),
  y: oneOfType(string, func)
}
```

Example `[{ data: [{ x: 0, y: 1 }] ] }, { data: [ [2,3], [4 ,5] ] }]`

---

### stacked

`bool`

The stacked prop is a boolean value that determines whether to stack your bar chart series.

----

## LineChart

### interpolation

`string`

The interpolation prop determines how data points should be connected when plotting a line. The following values are valid:

*"basis", "basisClosed", "basisOpen", "bundle", "cardinal", "cardinalClosed", "cardinalOpen", "catmullRom", "catmullRomClosed", "catmullRomOpen", "linear", "linearClosed", "monotoneX", "monotoneY", "natural", "radial", "step", "stepAfter", "stepBefore"*

---

### series

`arrayOf(object)`

The series prop allows you to provide data series to your chart. Each object in the series array is representative of a subset of the properties found here: [VictoryLine](https://formidable.com/open-source/victory/docs/victory-line)

The series child object shape is as follows:

```
{
  data: oneOfType(array, object),
  samples: number,
  style: object,
  x: oneOfType(string, func),
  y: oneOfType(string, func)
}
```

Example `[{ data: [{ x: 0, y: 1 }] ] }, { data: [ [2,3], [4 ,5] ] }]`

----

## ScatterChart

### labels

`func`

The labels prop defines labels that will appear above each bar in your bar chart. This prop should be given as a function of data.

Example `(datum) => datum.y`

---

### series

`arrayOf(object)`

The series prop allows you to provide data series to your chart. Each object in the series array is representative of a subset of the properties found here: [VictoryScatter](https://formidable.com/open-source/victory/docs/victory-scatter)

The series child object shape is as follows:

```
{
  bubbleProperty: string,
  data: oneOfType(array, object),
  samples: number,
  size: number,
  symbol: oneOfType(string, func),
  style: object,
  x: oneOfType(string, func),
  y: oneOfType(string, func)
}
```

Example `[{ data: [{ x: 0, y: 1 }] ] }, { data: [ [2,3], [4 ,5] ] }]`

---

### size

`oneOfType(number, func)`

The size prop determines how to scale each data point

Example `3`

---

### symbol

`oneOfType(string, func)`

The symbol prop determines which symbol should be drawn to represent data points.

Valid string values: `"circle", "diamond", "plus", "square", "star", "triangleDown", "triangleUp"`

Example `"circle"`

----

## PieChart

### cornerRadius

`number`

Set the cornerRadius for every dataComponent (Slice by default) within Pie

----

### endAngle

`number`

The overall end angle of the pie in degrees. This prop is used in conjunction with startAngle to create a pie that spans only a segment of a circle.

----

### innerRadius

`number`

When creating a donut chart, this prop determines the number of pixels between the center of the chart and the inner edge of a donut. When this prop is set to zero a regular pie chart is rendered.

----

### labels

`oneOfType(arrayOf(string), func)`

The labels prop defines labels that will appear above each bar in your bar chart. This prop should be given as a function of data or an array of strings.

Example `(datum) => datum.y`

---

### padAngle

`number`

The padAngle prop determines the amount of separation between adjacent data slices in number of degrees

---

### startAngle

`number`

The overall start angle of the pie in degrees. This prop is used in conjunction with endAngle to create a pie that spans only a segment of a circle.
