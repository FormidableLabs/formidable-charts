/*eslint-disable no-use-before-define, max-len*/
import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from "react-native";

/*
 * A simple list picker component - nothing to see here!
 */
export default ({
  options,
  selectedOption,
  selectedChanged,
  backgroundColor,
  accentColor
}) => (
  <View style={styles.options}>
    {options.map((option) => (
      <TouchableOpacity
        key={option}
        onPress={() => selectedChanged(option)}
        style={[styles.option, { backgroundColor: option === selectedOption ? accentColor : backgroundColor }]}
      >
        <Text style={[styles.text, { color: option === selectedOption ? backgroundColor : accentColor }]}>
          {option}
        </Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  options: {
    flex: 1,
    padding: 10
  },
  option: {
    padding: 5,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  text: {
    fontSize: 18
  }
});
