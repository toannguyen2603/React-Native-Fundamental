import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView, TouchableHighlight } from "react-native";

const ButtonBasics = () => {
  const onPressAlert = () => {
    alert("You tapped the button!");
  };

  const HandleOnPress = () => {
    console.log("Tapped me!");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", marginTop: 50 }}>
        <View style={styles.button}>
          <Button
            onPress={onPressAlert}
            title="Click Me"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <TouchableOpacity
          underlayColor="white"
          onPress={HandleOnPress}
          style={styles.button}
        >
          <Text style={styles.text}> TouchableOpacity </Text>
        </TouchableOpacity>

        <TouchableHighlight
          underlayColor="white"
          style={styles.button}
          onPress={HandleOnPress}
        >
          <Text style={styles.text}> TouchableHightline </Text>
        </TouchableHighlight>

        <TouchableWithoutFeedback onPress={HandleOnPress}>
          <View style={styles.button}>
            <Text style={styles.text}> TouchableWithoutFeedback </Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableOpacity
          underlayColor="white"
          onLongPress={HandleOnPress}
          style={styles.button}
        >
          <Text style={styles.text}> Touchable with Long Press </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    padding: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 5,
    maxWidth: "40%",
    backgroundColor: "coral",
  },
});

export default ButtonBasics;
