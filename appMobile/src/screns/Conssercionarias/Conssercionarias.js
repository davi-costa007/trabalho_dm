import React,{useEffect,useState} from "react";


import {
View,
Text,
TouchableOpacity,
FlatList,
SafeAreaView
} from "react-native";


import {
ArrowLeft,
MapPin,
Phone,
Clock
} from "lucide-react-native";


import styles from "./styles";




export default function Concessionarias({navigation}){


const [carregado,setCarregado] = useState(false);



useEffect(()=>{


setTimeout(()=>{

setCarregado(true)

},500)


},[]);




const lojas=[


{
id:"1",
nome:"Honda Center",
cidade:"Fortaleza - CE",
telefone:"(85) 99999-9999",
horario:"08:00 - 18:00"
},



{
id:"2",
nome:"Honda Premium",
cidade:"Sobral - CE",
telefone:"(88) 99999-9999",
horario:"08:00 - 17:00"
},



{
id:"3",
nome:"Honda Motors",
cidade:"Tianguá - CE",
telefone:"(88) 98888-8888",
horario:"08:00 - 18:00"
}


];





return(


<SafeAreaView style={styles.container}>



<View style={styles.header}>


<TouchableOpacity

onPress={()=>navigation.goBack()}

>


<ArrowLeft size={25}/>


</TouchableOpacity>



<Text style={styles.titulo}>

Concessionárias

</Text>



<View/>

</View>







{

carregado &&



<FlatList


data={lojas}


keyExtractor={(item)=>item.id}



renderItem={({item})=>(



<View style={styles.card}>



<MapPin

size={30}

color="#d60000"

/>




<View style={styles.info}>


<Text style={styles.nome}>

{item.nome}

</Text>



<Text style={styles.texto}>

{item.cidade}

</Text>




<View style={styles.linha}>


<Phone size={15}/>

<Text style={styles.texto}>

{item.telefone}

</Text>


</View>






<View style={styles.linha}>


<Clock size={15}/>


<Text style={styles.texto}>

{item.horario}

</Text>


</View>




</View>



</View>



)}


/>



}




</SafeAreaView>


)


}