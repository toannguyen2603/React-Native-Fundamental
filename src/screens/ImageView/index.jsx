import React from "react";
import { Image, StyleSheet, View } from "react-native";

const ImageView = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyColor}
        source={require("../../assets/Image/graphygirl.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tinyColor: {
    width: 200,
    height: 300,
  },
});

export default ImageView;
