import React from "react";

import {
  createNativeStackNavigator
} from "@react-navigation/native-stack";


import Home from "../screns/homes/home";



const Stack = createNativeStackNavigator();



export default function AppNavigator(){


return(

<Stack.Navigator

screenOptions={{
headerShown:false
}}

>


<Stack.Screen

name="homes"

component={homes}

/>

</Stack.Navigator>


)

}