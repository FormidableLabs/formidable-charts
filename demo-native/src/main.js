/*eslint-disable no-use-before-define, max-len, react/prop-types*/
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Platform,
  Dimensions,
  StatusBar,
  TouchableOpacity
} from "react-native";

import {
  VictoryStandalone,
  VictoryAreaChart,
  VictoryBarChart,
  VictoryLineChart,
  VictoryScatterChart,
  VictoryPieChart,
  Themes
} from "victory-composed";

import Picker from "./picker";

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const componentWidth = Dimensions.get("window").width;
const types = ["line", "area", "scatter"];

const components = [
  "area",
  "bar",
  "line",
  //"pie",
  "scatter",
  "composed"
];

const themes = {
  "bright": {
    backgroundColor: "#eee",
    accentColor: "#666",
    statusBarColor: "default"
  },
  "simple": {
    backgroundColor: "white",
    accentColor: "black",
    statusBarColor: "default"
  },
  "dark": {
    backgroundColor: "black",
    accentColor: "#9b59b6",
    statusBarColor: "light-content"
  },
  "danceparty": {
    backgroundColor: "black",
    accentColor: "#abe537",
    statusBarColor: "light-content"
  }
};

const ComponentDemos = {
  composed: (props) => (
    <VictoryStandalone
      width={componentWidth}
      title="VictoryStandalone"
      subtitle="Composed Demo"
      theme={Themes[props.theme]}
      series={props.data.map((data) => {
        const type = random(0, 2);
        return {
          type: types[type],
          data: data.data
        };
      })}
    />
  ),
  line: (props) => (
    <VictoryLineChart
      width={componentWidth}
      title="VictoryLineChart"
      theme={Themes[props.theme]}
      series={props.data}
    />
  ),
  area: (props) => (
    <VictoryAreaChart
      width={componentWidth}
      interpolation="natural"
      stacked
      title="VictoryAreaChart"
      theme={Themes[props.theme]}
      series={props.data}
    />
  ),
  bar: (props) => (
    <VictoryBarChart
      width={componentWidth}
      title="VictoryBarChart"
      theme={Themes[props.theme]}
      series={props.data}
    />
  ),
  scatter: (props) => (
    <VictoryScatterChart
      width={componentWidth}
      title="VictoryScatterChart"
      theme={Themes[props.theme]}
      series={props.data}
      symbol="star"
    />
  ),
  pie: (props) => (
    <VictoryPieChart
      width={componentWidth}
      title="VictoryPieChart"
      innerRadius={100}
      theme={Themes[props.theme]}
      data={props.data[0].data}
    />
  )
};

export default class Wrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "bright",
      background: themes.bright.backgroundColor,
      component: "area",
      data: this.generateNewData()
    };

    this.handleNewData = this.handleNewData.bind(this);
    this.handleThemeChange = this.handleThemeChange.bind(this);
    this.handleComponentChange = this.handleComponentChange.bind(this);
  }
  generateNewData() {
    const seriesCount = random(2, 5);
    const pointCount = random(3, 6);

    let series = [];

    for (let a = 0; a < seriesCount; a++) {
      let data = [];
      for (let b = 0; b < pointCount; b++) {
        data = data.concat({ x: b + 5, y: random(1, 10)});
      }
      series = series.concat({ data });
    }

    return series;
  }
  handleNewData() {
    this.setState({
      data: this.generateNewData()
    });
  }
  handleThemeChange(theme) {
    this.setState({ theme });
    if (Platform.OS === "ios") {
      StatusBar.setBarStyle(themes[theme].statusBarColor);
    }
  }
  handleComponentChange(component) {
    this.setState({ component });
  }
  render() {
    const ComponentPreview = ComponentDemos[this.state.component];
    const { backgroundColor, accentColor } = themes[this.state.theme];
    return (
      <ScrollView style={[styles.container, { backgroundColor }]}>
        <ComponentPreview theme={this.state.theme} data={this.state.data} />
        <View style={styles.controls}>
          <View style={styles.options}>
            <Picker
              options={Object.keys(themes)}
              selectedOption={this.state.theme}
              selectedChanged={this.handleThemeChange}
              backgroundColor={backgroundColor}
              accentColor={accentColor}
            />
            <Picker
              options={components}
              selectedOption={this.state.component}
              selectedChanged={this.handleComponentChange}
              backgroundColor={backgroundColor}
              accentColor={accentColor}
            />
          </View>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: accentColor }]}
            onPress={this.handleNewData}
          >
            <Text style={[ styles.buttonText, { color: backgroundColor }]}>
              Generate random data
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40
  },
  controls: {
    padding: 10
  },
  options: {
    flex: 1,
    flexDirection: "row"
  },
  button: {
    margin: 10,
    padding: 10,
    alignItems: "center"
  },
  buttonText: {
    fontSize: 18
  }
});
