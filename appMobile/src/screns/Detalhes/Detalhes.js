import React from "react";

import {
View,
Text,
Image,
TouchableOpacity,
SafeAreaView,
ScrollView
} from "react-native";

import {
ArrowLeft,
Heart,
Share2,
FileText,
Palette,
Images,
BadgeInfo
} from "lucide-react-native";

import styles from "./styles";


export default function Detalhes({navigation}){

return(

<SafeAreaView style={styles.container}>

<ScrollView showsVerticalScrollIndicator={false}>


<View style={styles.imageContainer}>


<ScrollView
horizontal
pagingEnabled
showsHorizontalScrollIndicator={false}
>

<Image
source={require("../../../components/imgs/baner.jpg")}
style={styles.carImage}
/>

<Image
source={require("../../../components/imgs/baner.jpg")}
style={styles.carImage}
/>

<Image
source={require("../../../components/imgs/baner.jpg")}
style={styles.carImage}
/>

</ScrollView>


<TouchableOpacity
style={styles.backIcon}
onPress={()=>navigation.goBack()}
>

<ArrowLeft
size={25}
color="#fff"
/>

</TouchableOpacity>



<View style={styles.topIcons}>

<Heart
size={24}
color="#fff"
/>

<Share2
size={24}
color="#fff"
/>

</View>


</View>



<View style={styles.indicadores}>

<View style={[styles.bolinha,styles.ativa]}/>

<View style={styles.bolinha}/>

<View style={styles.bolinha}/>

</View>




<View style={styles.content}>


<Text style={styles.title}>
Civic Híbrido
</Text>


<Text style={styles.price}>
A partir de

<Text style={styles.priceHighlight}>
{" "}R$ 146.900
</Text>

</Text>


<View style={styles.linha}/>



<View style={styles.options}>


<View style={styles.option}>

<FileText
size={24}
color="#d60000"
/>

<Text style={styles.optionText}>
Ficha Técnica
</Text>

</View>



<View style={styles.divisorVertical}/>



<View style={styles.option}>

<Palette
size={24}
color="#d60000"
/>

<Text style={styles.optionText}>
Cores
</Text>

</View>



<View style={styles.divisorVertical}/>



<View style={styles.option}>

<BadgeInfo
size={24}
color="#d60000"
/>

<Text style={styles.optionText}>
Itens de Série
</Text>

</View>



<View style={styles.divisorVertical}/>



<View style={styles.option}>

<Images
size={24}
color="#d60000"
/>

<Text style={styles.optionText}>
Galeria
</Text>

</View>


</View>



<View style={styles.linha}/>



<Text style={styles.aboutTitle}>
Sobre o veículo
</Text>


<Text style={styles.aboutText}>
Design marcante, performance e tecnologia avançada.
</Text>


<Text style={styles.aboutText}>
Tudo isso em perfeita harmonia.
</Text>



<TouchableOpacity
style={styles.primaryButton}
onPress={()=>navigation.navigate("Consorcio")}
>

<Text style={styles.primaryText}>
SIMULAR CONSÓRCIO
</Text>

</TouchableOpacity>



<TouchableOpacity
style={styles.secondaryButton}
>

<Text style={styles.secondaryText}>
SOLICITAR CONTATO
</Text>

</TouchableOpacity>


</View>


</ScrollView>

</SafeAreaView>

)

}