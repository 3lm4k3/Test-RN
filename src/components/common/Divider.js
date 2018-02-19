import React from "react" 
import {
  View
} from "react-native"
import cstyles from "../common/style";

export default (props) => (
  <View style={[cstyles.divider, {backgroundColor: "#D0D1D2"},props.style]}/>
)
