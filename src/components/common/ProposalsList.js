import React from "react"
import {
  View,
  Text,
  ScrollView
} from 'react-native'
import LinearGradient from "react-native-linear-gradient"
import NestedScrollView from 'react-native-nested-scroll-view'

import Proposal from "./Proposal"

export default () => (
  <NestedScrollView style={{maxHeight: 400, flexGrow: 1}} bounces alwaysBounceVertical showsVerticalScrollIndicator={false} >
    <Proposal/>
    <Proposal/>
    <Hidden/>
    <Proposal/>
    <Proposal/>
  </NestedScrollView>
)

const Hidden = () => (
  <LinearGradient colors={["#5871B5", "#935CAE"]} start={{x: 0.0, y: 0.90}} end={{x: 0.90, y: 1.0}}
  style={{
    paddingVertical: 35,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center"
  }} >
    <Text style={{ fontWeight: "bold", color: "#fff", fontSize: 16}} >Hidden</Text>
  </LinearGradient>
)