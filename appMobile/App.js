import React from "react";
import { View } from "react-native";

import HomeScreen from "./src/homes/home";
import BarraTabs from "./components/barratabs/barra";

export default function App(){

 return(
  <View style={{flex:1}}>

    <View style={{flex:1}}>
      <HomeScreen/>
    </View>

    <BarraTabs/>

  </View>
 );

}