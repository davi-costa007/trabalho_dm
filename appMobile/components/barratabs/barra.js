import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { House, Grid2X2, Heart, MapPin, User } from "lucide-react-native";

export default function BarraTabs(){

  return(
    <View style={styles.barra}>

      <View style={styles.item}>
        <House size={22} color="#e10600"/>
        <Text style={styles.ativo}>Home</Text>
      </View>


      <View style={styles.item}>
        <Grid2X2 size={22} color="#555"/>
        <Text style={styles.texto}>Catálogo</Text>
      </View>


      <View style={styles.item}>
        <Heart size={22} color="#555"/>
        <Text style={styles.texto}>Favoritos</Text>
      </View>


      <View style={styles.item}>
        <MapPin size={22} color="#555"/>
        <Text style={styles.texto}>Lojas</Text>
      </View>


      <View style={styles.item}>
        <User size={22} color="#555"/>
        <Text style={styles.texto}>Perfil</Text>
      </View>


    </View>
  );

}


const styles = StyleSheet.create({

barra:{
  height:75,
  backgroundColor:"#fff",
  flexDirection:"row",
  justifyContent:"space-around",
  alignItems:"center",
  borderTopWidth:1,
  borderColor:"#ddd",
},

item:{
  alignItems:"center",
  justifyContent:"center"
},

texto:{
  fontSize:11,
  color:"#555"
},

ativo:{
  fontSize:11,
  color:"#e10600"
}

});