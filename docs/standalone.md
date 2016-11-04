# Standalone

`formidable-charts` also provides a vanilla JS standalone library!

You can start using it by including the lib from:

`https://unpkg.com/formidable-charts/dist/formidable-charts-standalone.js`

Next, you can create a new chart instance:

```js
var chartContainer = document.getElementById("container");

var myChart = new FormidableCharts(chartContainer, {
	title: "My Chart",
 	subtitle: "is amazing",
 	series: [{
   		type: "area",
   		data: [{x: 0, y: 1}, {x: 1, y: 2}]
  	}],
  	theme: "bright"
}
``` 

After you've created a chart, you can update it using the `setOptions` method:

```js
myChart.setOptions({
	series: [{
   		type: "area",
   		data: [{x: 10, y: 15}, {x: 20, y: 25}]
  	}]
});
```

## API

### VictoryStandalone(element, options)

The top level `VictoryStandalone` function creates a new instance of a `VictoryStandalone` chart. The first argument is the DOM element where you want the chart to mount. The second argument is an options object.

## Options

### domain

`oneOfType(shape({ x: arrayOf(number), y: arrayOf(number) }), arrayOf(number))`

The domain option describes the range of values your chart will include. This option can be given as a array of the minimum and maximum expected values for your chart, or as an object that specifies separate arrays for x and y. If this option is not provided, a domain will be calculated from data, or other available information.


Examples: `[-1, 1], {x: [0, 100], y: [0, 1]}`

---

### domainPadding

`oneOfType(shape({ x: number, y: number }), number))`

The domainPadding option specifies a number of pixels of padding to add to the beginning and end of a domain. This option is useful for explicitly spacing ticks farther from the origin to prevent crowding. This option should be given as an object with numbers specified for x and y.

Examples: `20, { x: 5, y: 10 }`

---

### height

`number`

The height option specifies the height of the svg viewBox of the chart container. This value should be given as a number of pixels.

---

### series

`arrayOf(object)`

The series option allows you to provide data series to your chart. The series option accepts an array of object, where each object represents a plot of data. At a minimum, this object must contain a `type` and a `data` key:

```js
{
	type: "area"
	data: [{x: 1, y: 1}]
}
```

Valid values for `type` are "area", "bar", "line" and "scatter". Additionally, you can stack "bar" and "area" types by nesting within a "stack" type, shown in the example below:

```js
{
	type: "stack"
	data: [{
		type: "area"
		data: [{x: 1, y: 1}]
	}, {
		type: "area"
		data: [{x: 2, y: 1}]
	}]
}
```

You can also group "bar" types, using a "group" nest:

```js
{
	type: "group"
	data: [{
		type: "bar"
		data: [{x: 1, y: 1}]
	}, {
		type: "bar"
		data: [{x: 2, y: 1}]
	}]
}
```

Any additional options provided in the data object are mapped directly to the rendered data type, and you can review what options exist for each type in the main API documention.

---

### subtitle

`string`

The subtitle for your chart. This value should be a string.

---

### theme

`object`

This option specifies which theme to use for your chart. See the themes section of the documentation for available themes and how to add them.

Example `Themes.simple`

---

### title

`string`

The title for your chart. This value should be a string.

---

### width

`number`

The width options specifies the width of the svg viewBox of the chart container. This value should be given as a number of pixels.

---

### xAxis

`object`

This option specifies a set of options to pass to the x axis. Valid options can be found in the documentation for the [VictoryAxis component](https://formidable.com/open-source/victory/docs/victory-axis#options) from the Victory library.

>Not applicable to PieChart

Example `{ name: "test" }`

---

### yAxis

`object`

This option specifies a set of options to pass to the y axis. Valid options can be found in the documentation for the [VictoryAxis component](https://formidable.com/open-source/victory/docs/victory-axis#options) from the Victory library.

>Not applicable to PieChart

Example `{ scale: "time" }`

----