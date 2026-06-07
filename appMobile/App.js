import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BarraTabs from "./components/barratabs/barra";

import Home from "./src/screns/homes/home";
import Carros from "./src/screns/Carros/Carros";
import Motos from "./src/screns/Motos/Motos";
import Detalhes from "./src/screns/Detalhes/Detalhes";
import Consorcio from "./src/screns/consorcio.js/consorcio";
import Concessionarias from "./src/screns/Conssercionarias/Conssercionarias";
import Perfil from "./src/screns/Perfil/Perfil";

const Stack = createNativeStackNavigator();

function Tela({ children, navigation }) {
  return (
    <>
      {children}
      <BarraTabs navigation={navigation} />
    </>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="Home">
          {(props) => (
            <Tela {...props}>
              <Home {...props} />
            </Tela>
          )}
        </Stack.Screen>

        <Stack.Screen name="Carros">
          {(props) => (
            <Tela {...props}>
              <Carros {...props} />
            </Tela>
          )}
        </Stack.Screen>

        <Stack.Screen name="Motos">
          {(props) => (
            <Tela {...props}>
              <Motos {...props} />
            </Tela>
          )}
        </Stack.Screen>

        <Stack.Screen name="Consorcio">
          {(props) => (
            <Tela {...props}>
              <Consorcio {...props} />
            </Tela>
          )}
        </Stack.Screen>

        <Stack.Screen name="Concessionarias">
          {(props) => (
            <Tela {...props}>
              <Concessionarias {...props} />
            </Tela>
          )}
        </Stack.Screen>

        <Stack.Screen name="Perfil">
          {(props) => (
            <Tela {...props}>
              <Perfil {...props} />
            </Tela>
          )}
        </Stack.Screen>

        <Stack.Screen name="Detalhes" component={Detalhes} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}