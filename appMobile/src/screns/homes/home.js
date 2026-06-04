import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { Car, Bike, Compass, Bell, Search } from "lucide-react-native";
import styles from "./styles";

export default function HomeScreen(){
return(
<View style={styles.tela}>

<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>


<View style={styles.cabecalho}>

<Text style={styles.logo}>HONDA</Text>

<View style={styles.icones}>
<Search size={24}/>
<Bell size={24}/>
</View>
</View>

<View style={styles.bannerBox}>

<Image
source={require("../../components/imgs/baner.jpg")}
style={styles.banner}
/>

<View style={styles.pontos}>
<Text style={styles.pontoAtivo}>●</Text>
<Text>●</Text>
<Text>●</Text>
</View>
</View>

<View style={styles.secao}>
<View style={styles.tituloLinha}>
  <Text style={styles.titulo}>
  Categoria
  </Text>
  <Text style={styles.ver}>
  Ver todas
  </Text>

</View>



<View style={styles.categorias}>

<View style={styles.categoria}>
<Car size={25} color="#d60000"/>
<Text>Carros</Text>
</View>

<View style={styles.categoria}>
<Bike size={25} color="#d60000"/>
<Text>Motos</Text>
</View>

<View style={styles.categoria}>
<Bike size={25} color="#d60000"/>
<Text>Urbanas</Text>
</View>

<View style={styles.categoria}>
<Compass size={25} color="#d60000"/>
<Text>Adventure</Text>
</View>

</View>

</View>




<View style={styles.secao}>

<Text style={styles.titulo}>
Destaques
</Text>


<ScrollView horizontal showsHorizontalScrollIndicator={false}>


<View style={styles.card}>

<Image
source={require("../../components/imgs/baner.jpg")}
style={styles.imgCard}
/>

<Text>Civic</Text>

<Text style={styles.preco}>
R$ 146.900
</Text>

</View>



<View style={styles.card}>

<Image
source={require("../../components/imgs/baner.jpg")}
style={styles.imgCard}
/>

<Text>CB 500F</Text>

<Text style={styles.preco}>
R$ 33.900
</Text>

</View>




<View style={styles.card}>

<Image
source={require("../../components/imgs/baner.jpg")}
style={styles.imgCard}
/>

<Text>HR-V</Text>

<Text style={styles.preco}>
R$ 151.900
</Text>

</View>


</ScrollView>

</View>





<View style={styles.secao}>


<Text style={styles.titulo}>
Oferta da Semana
</Text>


<View style={styles.oferta}>


<Image
source={require("../../components/imgs/baner.jpg")}
style={styles.imgOferta}
/>


<Text style={styles.nomeOferta}>
Honda SUV Premium
</Text>


<Text style={styles.preco}>
R$ 199.900
</Text>


</View>


</View>





<TouchableOpacity style={styles.botao}>

<Text style={styles.botaoTexto}>
SIMULAR CONSÓRCIO
</Text>

</TouchableOpacity>


<View style={{height:80}}/>


</ScrollView>

</View>
);
}




