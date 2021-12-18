import React, { useState } from "react";
import { View } from "react-native";

import PreviewLayout from "../../screens/FlexBox";
import stylesFlexBox from "../../theme/FlexBox";

const WitdhHeightBasics = () => {
  const [widthType, setWidthType] = useState("auto");
  const [heightType, setHeightType] = useState("auto");

  return (
    <PreviewLayout
      widthType={widthType}
      heightType={heightType}
      widthValues={["auto", 300, "80%"]}
      heightValues={["auto", 200, "60%"]}
      setWidthType={setWidthType}
      setHeightType={setHeightType}
    >
      <View
        style={{
          alignSelf: "flex-start",
          backgroundColor: "aliceblue",
          height: heightType,
          width: widthType,
          padding: 15,
        }}
      >
        <View style={[stylesFlexBox.box, { backgroundColor: "powderblue" }]} />
        <View style={[stylesFlexBox.box, { backgroundColor: "skyblue" }]} />
        <View style={[stylesFlexBox.box, { backgroundColor: "steelblue" }]} />
      </View>
    </PreviewLayout>
  );
};
export default WitdhHeightBasics;
