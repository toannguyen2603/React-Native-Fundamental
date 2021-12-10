import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import stylesFlexBox from "../../theme/FlexBox";

const PreviewLayout = ({
  children,
  widthType,
  heightType,
  widthValues,
  heightValues,
  setWidthType,
  setHeightType,
}) => (
  <View style={{ flex: 1, padding: 50 }}>
    <View style={stylesFlexBox.row}>
      <Text style={stylesFlexBox.label}>Width</Text>
      {widthValues.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setWidthType(value)}
          style={[
            stylesFlexBox.button,
            widthType === value && stylesFlexBox.selected,
          ]}
        >
          <Text
            style={
              (stylesFlexBox.buttonLabel,
              widthType === value && stylesFlexBox.selectedLabel)
            }
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>

    <View style={stylesFlexBox.row}>
      <Text style={stylesFlexBox.label}>Height</Text>
      {heightValues.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setHeightType(value)}
          style={[
            stylesFlexBox.button,
            heightType === value && stylesFlexBox.selected,
          ]}
        >
          <Text
            style={
              (stylesFlexBox.buttonLabel,
              heightType === value && stylesFlexBox.selectedLabel)
            }
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>

    {children}
  </View>
);

export default PreviewLayout;
